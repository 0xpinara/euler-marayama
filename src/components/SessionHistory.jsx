import React, { useState } from 'react';
import { Clock, CheckCircle, AlertTriangle, Star, ChevronRight } from 'lucide-react';
import './SessionHistory.css';

const SessionHistory = ({ sessions, onViewSession }) => {
  const [filter, setFilter] = useState('all');

  const filteredSessions = sessions.filter(session => {
    if (filter === 'all') return true;
    return session.status === filter;
  });

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('tr-TR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'resolved':
        return <CheckCircle size={20} className="status-icon resolved" />;
      case 'escalated':
        return <AlertTriangle size={20} className="status-icon escalated" />;
      default:
        return <Clock size={20} className="status-icon active" />;
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'resolved':
        return 'Çözüldü';
      case 'escalated':
        return 'Teknisyene Yönlendirildi';
      default:
        return 'Devam Ediyor';
    }
  };

  return (
    <div className="session-history">
      <div className="history-filters">
        <button 
          className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
          onClick={() => setFilter('all')}
        >
          Tümü ({sessions.length})
        </button>
        <button 
          className={`filter-btn ${filter === 'resolved' ? 'active' : ''}`}
          onClick={() => setFilter('resolved')}
        >
          Çözüldü ({sessions.filter(s => s.status === 'resolved').length})
        </button>
        <button 
          className={`filter-btn ${filter === 'escalated' ? 'active' : ''}`}
          onClick={() => setFilter('escalated')}
        >
          Yönlendirildi ({sessions.filter(s => s.status === 'escalated').length})
        </button>
      </div>

      <div className="sessions-list">
        {filteredSessions.map(session => (
          <div key={session.id} className="session-card" onClick={() => onViewSession(session)}>
            <div className="session-header">
              <div className="session-title">
                <h3>{session.appliance}</h3>
                <span className="session-id">{session.id}</span>
              </div>
              <div className="session-status">
                {getStatusIcon(session.status)}
                <span>{getStatusText(session.status)}</span>
              </div>
            </div>

            <div className="session-details">
              <div className="detail-item">
                <Clock size={16} />
                <span>{formatDate(session.createdAt)}</span>
              </div>
              {session.rating && (
                <div className="detail-item">
                  <Star size={16} />
                  <span>{session.rating}/5</span>
                </div>
              )}
            </div>

            {session.metrics && (
              <div className="session-metrics">
                <div className="metric">
                  <span className="metric-label">Çözüm Süresi</span>
                  <span className="metric-value">{session.metrics.timeToResolution || session.metrics.timeToEscalation} dk</span>
                </div>
                <div className="metric">
                  <span className="metric-label">Analiz Edilen Fotoğraf</span>
                  <span className="metric-value">{session.metrics.photosAnalyzed}</span>
                </div>
                <div className="metric">
                  <span className="metric-label">Sağlanan Adım</span>
                  <span className="metric-value">{session.metrics.stepsProvided}</span>
                </div>
              </div>
            )}

            <div className="session-preview">
              <p>{session.messages[1]?.text || 'Oturum başlatıldı...'}</p>
            </div>

            <button className="view-session-btn">
              <span>Detayları Görüntüle</span>
              <ChevronRight size={18} />
            </button>
          </div>
        ))}
      </div>

      {filteredSessions.length === 0 && (
        <div className="empty-state">
          <p>Bu kategoride oturum bulunamadı.</p>
        </div>
      )}
    </div>
  );
};

export default SessionHistory;

