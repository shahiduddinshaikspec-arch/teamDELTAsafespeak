import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import SurveyPage from './pages/SurveyPage';
import MatchPage from './pages/MatchPage';
import ChatApp from './pages/ChatApp';
import './styles/design-system.css';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }, [theme]);

  return (
    <div className={`app-root ${theme === 'dark' ? 'dark-theme' : ''}`}>
      <Routes>
        <Route path="/" element={<LandingPage theme={theme} toggleTheme={toggleTheme} />} />
        <Route path="/login" element={<LoginPage theme={theme} />} />
        <Route path="/survey" element={<SurveyPage />} />
        <Route path="/match" element={<MatchPage />} />
        <Route path="/chat" element={<ChatApp />} />
      </Routes>
    </div>
  );
}

export default App;
