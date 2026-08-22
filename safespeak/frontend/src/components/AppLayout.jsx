import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Home, MessageSquare, Settings, LogOut, Moon, Sun } from 'lucide-react';

const AppLayout = ({ theme, toggleTheme }) => {
  const location = useLocation();

  const NavItem = ({ to, icon: Icon, label }) => {
    const isActive = location.pathname === to;
    return (
      <Link to={to} style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
        padding: '1rem',
        borderRadius: 'var(--radius-lg)',
        backgroundColor: isActive ? 'var(--color-primary)' : 'transparent',
        color: isActive ? 'var(--color-bg-page)' : 'var(--color-text-main)',
        fontWeight: isActive ? 800 : 600,
        transition: 'all 0.2s',
        textDecoration: 'none'
      }}>
        <Icon size={20} />
        {label}
      </Link>
    );
  };

  return (
    <div className={`app-layout ${theme === 'dark' ? 'dark-theme' : ''}`}>
      {/* Sidebar */}
      <aside style={{
        width: '280px',
        backgroundColor: 'var(--color-bg-card)',
        borderRight: '2px solid rgba(0,0,0,0.05)',
        padding: '2rem 1.5rem',
        display: 'flex',
        flexDirection: 'column'
      }}>
        <div style={{ fontSize: '1.75rem', fontWeight: '800', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '3rem' }}>
          <span style={{ fontSize: '2rem' }}>🌿</span> SafeSpeak
        </div>

        <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', flex: 1 }}>
          <NavItem to="/dashboard" icon={Home} label="Dashboard" />
          <NavItem to="/chat" icon={MessageSquare} label="Conversations" />
          <NavItem to="/settings" icon={Settings} label="Settings" />
        </nav>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <button onClick={toggleTheme} style={{
            display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '1rem', 
            borderRadius: 'var(--radius-lg)', backgroundColor: 'transparent', 
            color: 'var(--color-text-main)', fontWeight: 600, border: '2px solid rgba(0,0,0,0.05)', cursor: 'pointer'
          }}>
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
          </button>

          <Link to="/" style={{
             display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '1rem', 
             borderRadius: 'var(--radius-lg)', backgroundColor: 'rgba(231, 76, 60, 0.1)', 
             color: 'var(--color-danger)', fontWeight: 600, textDecoration: 'none'
          }}>
            <LogOut size={20} />
            Sign Out
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="app-content">
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '2rem 0' }}>
           <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AppLayout;
