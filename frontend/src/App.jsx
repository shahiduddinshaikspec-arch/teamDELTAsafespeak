import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import SurveyPage from './pages/SurveyPage';
import ChatApp from './pages/ChatApp';
import './styles/design-system.css';

function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
}

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
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LoginPage theme={theme} />} />
        <Route path="/login" element={<LoginPage theme={theme} />} />
        <Route path="/home" element={<LandingPage theme={theme} toggleTheme={toggleTheme} />} />
        <Route path="/survey" element={<SurveyPage />} />
        <Route path="/chat" element={<ChatApp />} />
      </Routes>
    </div>
  );
}

export default App;
