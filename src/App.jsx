import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import CustomerDashboard from './components/CustomerDashboard';
import TechnicianDashboard from './components/TechnicianDashboard';
import AdminDashboard from './components/AdminDashboard';
import { users } from './data/mockData';

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  const handleLogin = (role) => {
    setCurrentUser(users[role]);
  };

  const handleLogout = () => {
    setCurrentUser(null);
  };

  return (
    <Router>
      <Routes>
        <Route 
          path="/" 
          element={
            currentUser ? (
              currentUser.role === 'customer' ? (
                <Navigate to="/customer" replace />
              ) : currentUser.role === 'technician' ? (
                <Navigate to="/technician" replace />
              ) : (
                <Navigate to="/admin" replace />
              )
            ) : (
              <Login onLogin={handleLogin} />
            )
          } 
        />
        <Route 
          path="/customer" 
          element={
            currentUser?.role === 'customer' ? (
              <CustomerDashboard user={currentUser} onLogout={handleLogout} />
            ) : (
              <Navigate to="/" replace />
            )
          } 
        />
        <Route 
          path="/technician" 
          element={
            currentUser?.role === 'technician' ? (
              <TechnicianDashboard user={currentUser} onLogout={handleLogout} />
            ) : (
              <Navigate to="/" replace />
            )
          } 
        />
        <Route 
          path="/admin" 
          element={
            currentUser?.role === 'admin' ? (
              <AdminDashboard user={currentUser} onLogout={handleLogout} />
            ) : (
              <Navigate to="/" replace />
            )
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;

