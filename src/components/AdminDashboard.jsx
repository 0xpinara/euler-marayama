import React from 'react';
import { LogOut, User, TrendingUp, Users, CheckCircle, AlertTriangle, Clock, DollarSign, BarChart3 } from 'lucide-react';
import { dashboardStats, exampleSessions } from '../data/mockData';
import './AdminDashboard.css';

const AdminDashboard = ({ user, onLogout }) => {
  const successRate = ((dashboardStats.resolvedByAI / dashboardStats.totalSessions) * 100).toFixed(1);

  return (
    <div className="dashboard">
      <nav className="dashboard-nav">
        <div className="nav-brand">
          <h2>V-FIX</h2>
          <span className="user-badge admin">Yönetici</span>
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

      <main className="dashboard-content admin-layout">
        <div className="admin-header">
          <div>
            <h1>Sistem İstatistikleri</h1>
            <p className="admin-subtitle">V-FIX Performans Göstergeleri ve Analitik</p>
          </div>
        </div>

        <div className="stats-grid">
          <div className="stat-card blue">
            <div className="stat-icon">
              <Users size={32} />
            </div>
            <div className="stat-content">
              <h3>Toplam Oturum</h3>
              <div className="stat-value">{dashboardStats.totalSessions}</div>
              <p className="stat-change positive">+23% bu ay</p>
            </div>
          </div>

          <div className="stat-card green">
            <div className="stat-icon">
              <CheckCircle size={32} />
            </div>
            <div className="stat-content">
              <h3>AI ile Çözüldü</h3>
              <div className="stat-value">{dashboardStats.resolvedByAI}</div>
              <p className="stat-change">{successRate}% başarı oranı</p>
            </div>
          </div>

          <div className="stat-card orange">
            <div className="stat-icon">
              <AlertTriangle size={32} />
            </div>
            <div className="stat-content">
              <h3>Teknisyen Gerekli</h3>
              <div className="stat-value">{dashboardStats.escalatedToTechnician}</div>
              <p className="stat-change">%{((dashboardStats.escalatedToTechnician / dashboardStats.totalSessions) * 100).toFixed(1)} yönlendirme</p>
            </div>
          </div>

          <div className="stat-card purple">
            <div className="stat-icon">
              <Clock size={32} />
            </div>
            <div className="stat-content">
              <h3>Ort. Çözüm Süresi</h3>
              <div className="stat-value">{dashboardStats.averageResolutionTime} dk</div>
              <p className="stat-change positive">-8% bu ay</p>
            </div>
          </div>

          <div className="stat-card pink">
            <div className="stat-icon">
              <TrendingUp size={32} />
            </div>
            <div className="stat-content">
              <h3>Müşteri Memnuniyeti</h3>
              <div className="stat-value">{dashboardStats.customerSatisfaction}/5</div>
              <p className="stat-change positive">+0.3 bu ay</p>
            </div>
          </div>

          <div className="stat-card teal">
            <div className="stat-icon">
              <DollarSign size={32} />
            </div>
            <div className="stat-content">
              <h3>Maliyet Tasarrufu</h3>
              <div className="stat-value">₺{dashboardStats.costSavings.toLocaleString()}</div>
              <p className="stat-change positive">Bu ay</p>
            </div>
          </div>
        </div>

        <div className="charts-grid">
          <div className="chart-card">
            <div className="chart-header">
              <h3>
                <BarChart3 size={20} />
                En Sık Karşılaşılan Sorunlar
              </h3>
            </div>
            <div className="chart-content">
              {dashboardStats.topIssues.map((issue, index) => (
                <div key={index} className="issue-bar">
                  <div className="issue-info">
                    <span className="issue-name">{issue.issue}</span>
                    <span className="issue-count">{issue.count}</span>
                  </div>
                  <div className="progress-bar">
                    <div 
                      className="progress-fill" 
                      style={{ width: `${(issue.count / 34) * 100}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="chart-card">
            <div className="chart-header">
              <h3>
                <Clock size={20} />
                Son Oturumlar
              </h3>
            </div>
            <div className="recent-sessions">
              {exampleSessions.map(session => (
                <div key={session.id} className="recent-session-item">
                  <div className="session-main">
                    <div className="session-title-group">
                      <strong>{session.appliance}</strong>
                      <span className="session-user">{session.userName}</span>
                    </div>
                    <span className={`mini-badge ${session.status}`}>
                      {session.status === 'resolved' ? '✓' : '⚠'}
                    </span>
                  </div>
                  <div className="session-meta-row">
                    <span className="session-time">
                      {new Date(session.createdAt).toLocaleDateString('tr-TR', { 
                        month: 'short', 
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </span>
                    <span className="session-duration">
                      {session.metrics.timeToResolution || session.metrics.timeToEscalation} dk
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="insights-section">
          <h3>💡 Önemli İçgörüler</h3>
          <div className="insights-grid">
            <div className="insight-card">
              <h4>Yüksek Başarı Oranı</h4>
              <p>
                AI asistan, oturumların <strong>%{successRate}</strong>'ini başarıyla çözerek 
                teknisyen çağrılarını önemli ölçüde azaltıyor.
              </p>
            </div>
            <div className="insight-card">
              <h4>Hızlı Çözüm</h4>
              <p>
                Ortalama <strong>{dashboardStats.averageResolutionTime} dakika</strong> içinde 
                sorunlar çözülerek müşteri memnuniyeti artıyor.
              </p>
            </div>
            <div className="insight-card">
              <h4>Filtre Tıkanıklığı Lideri</h4>
              <p>
                En sık sorun <strong>filtre tıkanıklığı</strong>. Bu konuda eğitim materyali 
                hazırlanması önerilebilir.
              </p>
            </div>
            <div className="insight-card">
              <h4>Güvenlik Odaklı</h4>
              <p>
                Sistem, yüksek riskli durumları başarıyla tespit ederek müşteri güvenliğini 
                koruyorken gereksiz servisi de önlüyor.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;

