import React, { useState } from 'react';
import { LogOut, User, FileText, CheckSquare, AlertCircle } from 'lucide-react';
import { exampleSessions } from '../data/mockData';
import './TechnicianDashboard.css';

const TechnicianDashboard = ({ user, onLogout }) => {
  const [selectedSession, setSelectedSession] = useState(null);
  const [notes, setNotes] = useState('');

  const pendingSessions = exampleSessions.filter(s => s.status === 'escalated');
  const completedSessions = exampleSessions.filter(s => s.status === 'resolved');

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('tr-TR', {
      day: 'numeric',
      month: 'long',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const handleSaveAnnotation = () => {
    alert('Teknisyen notları kaydedildi! (Demo modunda gerçek kayıt yapılmaz)');
  };

  return (
    <div className="dashboard">
      <nav className="dashboard-nav">
        <div className="nav-brand">
          <h2>V-FIX</h2>
          <span className="user-badge technician">Teknisyen</span>
        </div>
        <div className="nav-user">
          <div className="user-info">
            <User size={20} />
            <span>{user.name}</span>
          </div>
          <button className="logout-btn" onClick={onLogout}>
            <LogOut size={20} />
          </button>
        </div>
      </nav>

      <main className="dashboard-content technician-layout">
        <div className="sessions-sidebar">
          <div className="sidebar-section">
            <h3>
              <AlertCircle size={18} />
              Bekleyen Oturumlar ({pendingSessions.length})
            </h3>
            <div className="session-list">
              {pendingSessions.map(session => (
                <div 
                  key={session.id}
                  className={`session-item ${selectedSession?.id === session.id ? 'active' : ''}`}
                  onClick={() => setSelectedSession(session)}
                >
                  <div className="session-item-header">
                    <strong>{session.appliance}</strong>
                    <span className="session-item-id">{session.id}</span>
                  </div>
                  <div className="session-item-meta">
                    <span>{session.userName}</span>
                    <span>{formatDate(session.createdAt)}</span>
                  </div>
                  {session.metrics?.riskLevel === 'high' && (
                    <span className="risk-badge">Yüksek Risk</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="sidebar-section">
            <h3>
              <CheckSquare size={18} />
              Tamamlanan Oturumlar ({completedSessions.length})
            </h3>
            <div className="session-list">
              {completedSessions.map(session => (
                <div 
                  key={session.id}
                  className={`session-item ${selectedSession?.id === session.id ? 'active' : ''}`}
                  onClick={() => setSelectedSession(session)}
                >
                  <div className="session-item-header">
                    <strong>{session.appliance}</strong>
                    <span className="session-item-id">{session.id}</span>
                  </div>
                  <div className="session-item-meta">
                    <span>{session.userName}</span>
                    <span>{formatDate(session.createdAt)}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="session-details-panel">
          {selectedSession ? (
            <>
              <div className="panel-header">
                <div>
                  <h2>{selectedSession.appliance} - {selectedSession.id}</h2>
                  <p className="panel-subtitle">
                    Müşteri: {selectedSession.userName} | {formatDate(selectedSession.createdAt)}
                  </p>
                </div>
                <span className={`status-badge-large ${selectedSession.status}`}>
                  {selectedSession.status === 'resolved' ? 'Çözüldü' : 'Teknisyen Gerekli'}
                </span>
              </div>

              <div className="panel-content">
                <div className="info-section">
                  <h3>Oturum Özeti</h3>
                  <div className="info-grid">
                    <div className="info-item">
                      <label>Durum</label>
                      <span>{selectedSession.outcome === 'self-resolved' ? 'Müşteri Kendi Çözdü' : 'Teknisyen Gerekli'}</span>
                    </div>
                    <div className="info-item">
                      <label>Süre</label>
                      <span>{selectedSession.metrics.timeToResolution || selectedSession.metrics.timeToEscalation} dakika</span>
                    </div>
                    <div className="info-item">
                      <label>Fotoğraf Sayısı</label>
                      <span>{selectedSession.metrics.photosAnalyzed}</span>
                    </div>
                    <div className="info-item">
                      <label>Sağlanan Adım</label>
                      <span>{selectedSession.metrics.stepsProvided}</span>
                    </div>
                  </div>
                </div>

                <div className="conversation-section">
                  <h3>Müşteri Konuşması</h3>
                  <div className="conversation-viewer">
                    {selectedSession.messages.map(msg => (
                      <div key={msg.id} className={`msg ${msg.sender}`}>
                        <div className="msg-header">
                          <strong>{msg.sender === 'user' ? selectedSession.userName : 'V-FIX Asistan'}</strong>
                          <span>{new Date(msg.timestamp).toLocaleTimeString('tr-TR')}</span>
                        </div>
                        {msg.image && (
                          <div className="msg-image">
                            <img src={msg.image} alt="Müşteri fotoğrafı" />
                          </div>
                        )}
                        {msg.text && <p>{msg.text}</p>}
                        {msg.detectedComponents && (
                          <div className="detected-info">
                            <strong>🔍 Tespit Edilen:</strong> {msg.detectedComponents.join(', ')}
                          </div>
                        )}
                        {msg.highRisk && (
                          <div className="risk-indicator">
                            ⚠️ Yüksek risk tespit edildi - Teknisyen ataması yapıldı
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="annotation-section">
                  <h3>
                    <FileText size={18} />
                    Teknisyen Notları ve Değerlendirme
                  </h3>
                  <textarea
                    className="annotation-textarea"
                    placeholder="AI'nın değerlendirmesini gözden geçirin, düzeltmeler veya ek notlar ekleyin..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                  />
                  <div className="annotation-actions">
                    <button className="btn-secondary" onClick={() => setNotes('')}>
                      Temizle
                    </button>
                    <button className="btn-primary" onClick={handleSaveAnnotation}>
                      Notları Kaydet
                    </button>
                  </div>
                  <div className="annotation-note">
                    💡 Notlarınız modelin gelecekteki performansını iyileştirmek için kullanılacaktır.
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="empty-panel">
              <FileText size={64} />
              <h3>Oturum Seçilmedi</h3>
              <p>Detayları görüntülemek için soldan bir oturum seçin</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default TechnicianDashboard;

