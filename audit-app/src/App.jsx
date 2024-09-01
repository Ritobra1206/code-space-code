// App.js
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import LoginPage from '@/pages/auth/LoginPage';
import RegisterPage from '@/pages/auth/RegisterPage';
import DashPage from '@/pages/dashboard/DashPage';
import { useState } from 'react';
import "./App.css"

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={isAuthenticated ? <DashPage /> : <RegisterPage onRegisterSuccess={handleLogin} />} />
        <Route path="/login" element={<LoginPage onLoginSuccess={handleLogin} />} />
        <Route path="/dashboard" element={isAuthenticated ? <DashPage /> : <RegisterPage onRegisterSuccess={handleLogin} />} />
      </Routes>
    </Router>
  );
}

export default App;
