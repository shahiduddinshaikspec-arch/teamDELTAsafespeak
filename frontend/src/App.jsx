import React, { useState, useEffect } from 'react';
import LandingPage from './pages/LandingPage';
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
      <LandingPage theme={theme} toggleTheme={toggleTheme} />
    </div>
  );
}

export default App;
