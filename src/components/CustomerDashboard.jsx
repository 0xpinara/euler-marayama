import React, { useState } from 'react';
import { LogOut, MessageCircle, History, User, Plus } from 'lucide-react';
import ChatInterface from './ChatInterface';
import SessionHistory from './SessionHistory';
import { exampleSessions } from '../data/mockData';
import './CustomerDashboard.css';

const CustomerDashboard = ({ user, onLogout }) => {
  const [activeTab, setActiveTab] = useState('chat');
  const [sessions, setSessions] = useState(exampleSessions);
  const [activeSession, setActiveSession] = useState(null);

  const handleStartNewSession = () => {
    setActiveSession(null);
    setActiveTab('chat');
  };

  const handleViewSession = (session) => {
    setActiveSession(session);
    setActiveTab('chat');
  };

  return (
    <div className="dashboard">
      <nav className="dashboard-nav">
        <div className="nav-brand">
          <h2>V-FIX</h2>
          <span className="user-badge">Müşteri</span>
        </div>
        <div className="nav-links">
          <button 
            className={`nav-link ${activeTab === 'chat' ? 'active' : ''}`}
            onClick={() => setActiveTab('chat')}
          >
            <MessageCircle size={20} />
            <span>Sohbet</span>
          </button>
          <button 
            className={`nav-link ${activeTab === 'history' ? 'active' : ''}`}
            onClick={() => setActiveTab('history')}
          >
            <History size={20} />
            <span>Geçmiş</span>
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

      <main className="dashboard-content">
        {activeTab === 'chat' ? (
          <div className="chat-container">
            <div className="content-header">
              <h1>{activeSession ? `Oturum: ${activeSession.id}` : 'Yeni Sohbet'}</h1>
              {activeSession && (
                <button className="new-session-btn" onClick={handleStartNewSession}>
                  <Plus size={20} />
                  Yeni Oturum
                </button>
              )}
            </div>
            <ChatInterface session={activeSession} />
          </div>
        ) : (
          <div className="history-container">
            <div className="content-header">
              <h1>Oturum Geçmişi</h1>
              <button className="new-session-btn" onClick={handleStartNewSession}>
                <Plus size={20} />
                Yeni Oturum Başlat
              </button>
            </div>
            <SessionHistory 
              sessions={sessions} 
              onViewSession={handleViewSession}
            />
          </div>
        )}
      </main>
    </div>
  );
};

export default CustomerDashboard;

