import React, { useState } from 'react';
import { LogOut, User, FileText, CheckSquare, AlertCircle, Calendar, MapPin, Clock, Wrench } from 'lucide-react';
import { exampleSessions, technicianAppointments } from '../data/mockData';
import './TechnicianDashboard.css';

const TechnicianDashboard = ({ user, onLogout }) => {
  const [selectedSession, setSelectedSession] = useState(null);
  const [notes, setNotes] = useState('');
  const [activeTab, setActiveTab] = useState('sessions');

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
        <div className="nav-tabs">
          <button 
            className={`nav-tab ${activeTab === 'sessions' ? 'active' : ''}`}
            onClick={() => setActiveTab('sessions')}
          >
            <FileText size={18} />
            Oturumlar
          </button>
          <button 
            className={`nav-tab ${activeTab === 'appointments' ? 'active' : ''}`}
            onClick={() => setActiveTab('appointments')}
          >
            <Calendar size={18} />
            Randevular
          </button>
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
      {activeTab === 'sessions' ? (
        <>
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
        </>
      ) : (
        <div className="appointments-view">
          <div className="appointments-header">
            <h2>Günlük Randevu Çizelgesi</h2>
            <div className="today-info">
              <Calendar size={20} />
              <span>{new Date().toLocaleDateString('tr-TR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </div>
          </div>

          <div className="appointments-list">
            {technicianAppointments.map(apt => (
              <div key={apt.id} className={`appointment-card priority-${apt.priority}`}>
                <div className="appointment-header">
                  <div className="appointment-time">
                    <Clock size={24} />
                    <span className="time-slot">{apt.timeSlot}</span>
                  </div>
                  <span className={`priority-badge ${apt.priority}`}>
                    {apt.priority === 'high' ? 'Yüksek Öncelik' : 
                     apt.priority === 'medium' ? 'Orta Öncelik' : 'Düşük Öncelik'}
                  </span>
                </div>

                <div className="appointment-body">
                  <div className="customer-info">
                    <h3>{apt.customerName}</h3>
                    <span className="appointment-number">#{apt.appointmentNumber}</span>
                  </div>

                  <div className="appliance-info">
                    <Wrench size={18} />
                    <div>
                      <strong>{apt.appliance}</strong>
                      <p>{apt.issue}</p>
                    </div>
                  </div>

                  <div className="location-info">
                    <MapPin size={18} />
                    <div>
                      <strong>{apt.address}</strong>
                      <p>{apt.fullAddress}</p>
                    </div>
                  </div>

                  <div className="contact-info">
                    <strong>İletişim:</strong> {apt.phone}
                  </div>

                  {apt.notes && (
                    <div className="technician-notes-preview">
                      <strong>📝 Not:</strong>
                      <p>{apt.notes}</p>
                    </div>
                  )}

                  {apt.requiredParts && apt.requiredParts.length > 0 && (
                    <div className="required-parts">
                      <strong>🔧 Gerekli Parçalar:</strong>
                      <div className="parts-list">
                        {apt.requiredParts.map((part, idx) => (
                          <span key={idx} className="part-tag">{part}</span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="appointment-actions">
                  <button 
                    className="action-btn view-session"
                    onClick={() => {
                      const session = exampleSessions.find(s => s.id === apt.sessionId);
                      if (session) {
                        setSelectedSession(session);
                        setActiveTab('sessions');
                      }
                    }}
                  >
                    <FileText size={16} />
                    Müşteri Oturumunu Görüntüle
                  </button>
                  <button className="action-btn complete">
                    <CheckSquare size={16} />
                    Tamamlandı Olarak İşaretle
                  </button>
                </div>
              </div>
            ))}
          </div>

          {technicianAppointments.length === 0 && (
            <div className="no-appointments">
              <Calendar size={64} />
              <h3>Bugün için randevu yok</h3>
              <p>Güncel randevular bu sayfada görünecektir.</p>
            </div>
          )}
        </div>
      )}
      </main>
    </div>
  );
};

export default TechnicianDashboard;

