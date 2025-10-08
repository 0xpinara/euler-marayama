import React, { useState, useRef, useEffect } from 'react';
import { Send, Image, Camera, AlertTriangle, CheckCircle, Shield, Calendar, Clock } from 'lucide-react';
import './ChatInterface.css';

const ChatInterface = ({ session }) => {
  const [messages, setMessages] = useState(session?.messages || []);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const messagesEndRef = useRef(null);
  const fileInputRef = useRef(null);

  useEffect(() => {
    if (session) {
      setMessages(session.messages);
    } else {
      // Start new session with welcome message
      setMessages([{
        id: 1,
        sender: 'assistant',
        text: 'Merhaba! V-FIX akıllı tamir asistanına hoş geldiniz. Size nasıl yardımcı olabilirim? Hangi cihazınızla ilgili bir sorun yaşıyorsunuz?',
        timestamp: new Date().toISOString()
      }]);
    }
  }, [session]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = () => {
    if (!inputText.trim() || session) return; // Disable sending in demo mode for existing sessions

    const newMessage = {
      id: messages.length + 1,
      sender: 'user',
      text: inputText,
      timestamp: new Date().toISOString()
    };

    setMessages([...messages, newMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = {
        id: messages.length + 2,
        sender: 'assistant',
        text: 'Bu bir demo versiyonudur. AI entegrasyonu henüz tamamlanmamıştır. Lütfen sol taraftaki örnek oturumları inceleyin.',
        timestamp: new Date().toISOString()
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleImageUpload = (e) => {
    if (session) return; // Disable in demo mode for existing sessions

    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const newMessage = {
          id: messages.length + 1,
          sender: 'user',
          image: reader.result,
          timestamp: new Date().toISOString()
        };
        setMessages([...messages, newMessage]);
      };
      reader.readAsDataURL(file);
    }
  };

  const renderMessage = (message) => {
    const isUser = message.sender === 'user';

    return (
      <div key={message.id} className={`message ${isUser ? 'user-message' : 'assistant-message'}`}>
        <div className="message-content">
          {message.image && (
            <div className="message-image">
              <img src={message.image} alt="Uploaded" />
            </div>
          )}
          {message.text && (
            <div className="message-text">
              {message.text.split('\n').map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
          )}
          {message.detectedComponents && (
            <div className="detected-components">
              <strong>🔍 Tespit Edilen Bileşenler:</strong>
              <div className="component-tags">
                {message.detectedComponents.map((comp, i) => (
                  <span key={i} className="component-tag">{comp}</span>
                ))}
              </div>
            </div>
          )}
          {message.warrantyCompliant && (
            <div className="warranty-badge">
              <Shield size={16} />
              <span>Garanti Uyumlu</span>
            </div>
          )}
          {message.safetyWarning && (
            <div className="safety-warning">
              <AlertTriangle size={16} />
              <span>Güvenlik Uyarısı</span>
            </div>
          )}
          {message.highRisk && (
            <div className="high-risk-badge">
              <AlertTriangle size={16} />
              <span>Yüksek Risk - Teknisyen Gerekli</span>
            </div>
          )}
          {message.showAppointmentPicker && message.availableSlots && (
            <div className="appointment-picker">
              <div className="appointment-slots">
                {message.availableSlots.map((slot, index) => (
                  <button
                    key={index}
                    className={`appointment-slot ${selectedSlot?.label === slot.label ? 'selected' : ''}`}
                    onClick={() => setSelectedSlot(slot)}
                    disabled={message.appointmentSelected}
                  >
                    <div className="slot-icon">
                      <Calendar size={18} />
                    </div>
                    <div className="slot-info">
                      <div className="slot-label">{slot.label}</div>
                      <div className="slot-time">
                        <Clock size={14} />
                        {slot.time}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
              {selectedSlot && !message.appointmentSelected && (
                <button className="confirm-appointment-btn">
                  <Calendar size={16} />
                  Randevuyu Onayla
                </button>
              )}
            </div>
          )}
          {message.appointmentConfirmed && message.appointmentDetails && (
            <div className="appointment-confirmation">
              <div className="confirmation-icon">✅</div>
              <h4>Randevunuz Onaylandı!</h4>
              <div className="confirmation-details">
                <div className="detail-row">
                  <Calendar size={16} />
                  <span>{message.appointmentDetails.date}</span>
                </div>
                <div className="detail-row">
                  <Clock size={16} />
                  <span>{message.appointmentDetails.time}</span>
                </div>
              </div>
              <div className="appointment-number">
                #{message.appointmentDetails.appointmentNumber}
              </div>
            </div>
          )}
          <span className="message-time">
            {new Date(message.timestamp).toLocaleTimeString('tr-TR', { 
              hour: '2-digit', 
              minute: '2-digit' 
            })}
          </span>
        </div>
      </div>
    );
  };

  return (
    <div className="chat-interface">
      {session && (
        <div className="session-info">
          <div className="session-meta">
            <span><strong>Cihaz:</strong> {session.appliance}</span>
            <span><strong>Durum:</strong> 
              <span className={`status-badge ${session.status}`}>
                {session.status === 'resolved' ? '✓ Çözüldü' : 
                 session.status === 'escalated' ? '⚠ Teknisyene Yönlendirildi' : 'Devam Ediyor'}
              </span>
            </span>
            {session.rating && (
              <span><strong>Değerlendirme:</strong> {'⭐'.repeat(session.rating)}</span>
            )}
          </div>
        </div>
      )}

      <div className="messages-container">
        {messages.map(renderMessage)}
        {isTyping && (
          <div className="message assistant-message">
            <div className="message-content">
              <div className="typing-indicator">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="input-container">
        <input
          type="file"
          ref={fileInputRef}
          accept="image/*"
          onChange={handleImageUpload}
          style={{ display: 'none' }}
        />
        <button 
          className="attach-btn"
          onClick={() => fileInputRef.current?.click()}
          disabled={!!session}
          title="Fotoğraf Ekle"
        >
          <Camera size={20} />
        </button>
        <input
          type="text"
          className="message-input"
          placeholder={session ? "Demo oturumu - yeni mesaj gönderilemez" : "Mesajınızı yazın..."}
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
          disabled={!!session}
        />
        <button 
          className="send-btn"
          onClick={handleSendMessage}
          disabled={!inputText.trim() || !!session}
        >
          <Send size={20} />
        </button>
      </div>
    </div>
  );
};

export default ChatInterface;

