import React from 'react';
import { Wrench, Users, Shield } from 'lucide-react';
import './Login.css';

const Login = ({ onLogin }) => {
  return (
    <div className="login-container">
      <div className="login-content">
        <div className="login-header">
          <div className="logo">
            <Wrench size={48} />
          </div>
          <h1>V-FIX</h1>
          <p className="tagline">Akıllı Ev Aletleri Tamir Asistanı</p>
          <p className="subtitle">Görsel-Dil Modeli Tabanlı Destek Sistemi</p>
        </div>

        <div className="login-options">
          <button className="login-btn customer" onClick={() => onLogin('customer')}>
            <Users size={32} />
            <div>
              <h3>Müşteri Girişi</h3>
              <p>Cihaz sorunlarınız için anında yardım alın</p>
            </div>
          </button>

          <button className="login-btn technician" onClick={() => onLogin('technician')}>
            <Wrench size={32} />
            <div>
              <h3>Teknisyen Girişi</h3>
              <p>Müşteri oturumlarını inceleyin ve yönetin</p>
            </div>
          </button>

          <button className="login-btn admin" onClick={() => onLogin('admin')}>
            <Shield size={32} />
            <div>
              <h3>Yönetici Girişi</h3>
              <p>Sistem istatistiklerini ve raporları görüntüleyin</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;

