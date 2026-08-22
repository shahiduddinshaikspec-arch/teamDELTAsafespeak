import React from 'react';
import { Moon, Sun } from 'lucide-react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Dashboard from './Dashboard';
import ChatApp from './ChatApp';
import JournalApp from './JournalApp';
import Resources from './Resources';
import Community from './Community';
import PrivacySection from '../components/PrivacySection';
import WelcomeScreens from '../components/WelcomeScreens';

const LandingPage = ({ theme, toggleTheme }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: 'var(--color-bg-page)', color: 'var(--color-text-main)' }}>
      {/* Mega Header with Theme Toggle */}
      <header style={{ 
        padding: '1.5rem 2rem', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        backgroundColor: 'var(--color-bg-page)',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        boxShadow: 'var(--shadow-sm)'
      }}>
        <div style={{ fontSize: '1.75rem', fontWeight: '800', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem', letterSpacing: '-0.05em' }}>
          <span style={{ fontSize: '2rem' }}>🌿</span> SafeSpeak
        </div>
        
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <button onClick={toggleTheme} className="btn" style={{
            display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', 
            borderRadius: 'var(--radius-pill)', backgroundColor: 'transparent', 
            color: 'var(--color-text-main)', fontWeight: 600, border: '2px solid rgba(0,0,0,0.05)'
          }}>
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            {theme === 'dark' ? 'Light' : 'Dark'}
          </button>
          <a href="#demo" className="btn btn-primary" style={{ padding: '0.75rem 2rem', textDecoration: 'none' }}>See It In Action</a>
        </div>
      </header>

      <main style={{ flex: 1 }}>
        <Hero />
        
        <WelcomeScreens />
        
        <div style={{ padding: 'var(--spacing-section) 0', backgroundColor: 'var(--color-secondary)' }}>
           <div className="container" style={{ textAlign: 'center', marginBottom: 'var(--spacing-xl)' }}>
              <h2 className="section-title">The Holistic Design Principle</h2>
              <p className="section-subtitle">Our design revolves around circles, symbolizing wholeness in mental health. Every component is tailored to put you at the center of your wellness journey.</p>
           </div>
           <Features />
        </div>

        {/* The Mega Demo Section */}
        <section id="demo" style={{ padding: 'var(--spacing-section) 0', backgroundColor: 'var(--color-bg-page)' }}>
          <div className="container">
            <h2 className="section-title">Experience the Platform</h2>
            <p className="section-subtitle">A seamless blend of tech-driven mindfulness and empathetic community support, right at your fingertips.</p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem', marginTop: '3rem' }}>
              
              {/* Dashboard Showcase */}
              <div style={{ 
                backgroundColor: 'var(--color-bg-card)', 
                padding: '3rem', 
                borderRadius: 'var(--radius-xl)', 
                boxShadow: 'var(--shadow-lg)',
                border: '4px solid rgba(0,0,0,0.02)'
              }}>
                <div style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                   <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--color-accent-green)', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>1</div>
                   <h3 style={{ fontSize: '1.8rem', color: 'var(--color-primary)' }}>Your Wellness Dashboard</h3>
                </div>
                <Dashboard />
              </div>

              {/* Chat Interface Showcase */}
              <div style={{ 
                backgroundColor: 'var(--color-bg-card)', 
                padding: '3rem', 
                borderRadius: 'var(--radius-xl)', 
                boxShadow: 'var(--shadow-lg)',
                border: '4px solid rgba(0,0,0,0.02)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}>
                <div style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1rem', alignSelf: 'flex-start' }}>
                   <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--color-accent-purple)', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>2</div>
                   <h3 style={{ fontSize: '1.8rem', color: 'var(--color-primary)' }}>Mindful AI & Peer Chat</h3>
                </div>
                
                <div style={{ width: '100%', maxWidth: '600px', height: '600px', borderRadius: 'var(--radius-xl)', overflow: 'hidden', border: '4px solid var(--color-secondary)' }}>
                  <ChatApp />
                </div>
              </div>

              {/* Journal Interface Showcase */}
              <div style={{ 
                backgroundColor: 'var(--color-bg-card)', 
                padding: '3rem', 
                borderRadius: 'var(--radius-xl)', 
                boxShadow: 'var(--shadow-lg)',
                border: '4px solid rgba(0,0,0,0.02)',
                marginTop: '2rem'
              }}>
                <div style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                   <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--color-accent-yellow)', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>3</div>
                   <h3 style={{ fontSize: '1.8rem', color: 'var(--color-primary)' }}>AI Mental Space</h3>
                </div>
                <JournalApp />
              </div>

              {/* Resources Showcase */}
              <div style={{ 
                backgroundColor: 'var(--color-bg-card)', 
                padding: '3rem', 
                borderRadius: 'var(--radius-xl)', 
                boxShadow: 'var(--shadow-lg)',
                border: '4px solid rgba(0,0,0,0.02)',
                marginTop: '2rem'
              }}>
                <div style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                   <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--color-accent-orange)', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>4</div>
                   <h3 style={{ fontSize: '1.8rem', color: 'var(--color-primary)' }}>Mindful Resources</h3>
                </div>
                <Resources />
              </div>

              {/* Community Showcase */}
              <div style={{ 
                backgroundColor: 'var(--color-bg-card)', 
                padding: '3rem', 
                borderRadius: 'var(--radius-xl)', 
                boxShadow: 'var(--shadow-lg)',
                border: '4px solid rgba(0,0,0,0.02)',
                marginTop: '2rem'
              }}>
                <div style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                   <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--color-accent-green)', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>5</div>
                   <h3 style={{ fontSize: '1.8rem', color: 'var(--color-primary)' }}>The Support Circle</h3>
                </div>
                <Community />
              </div>
            </div>
          </div>
        </section>

        <PrivacySection />
      </main>

      <footer style={{ padding: '3rem 2rem', textAlign: 'center', backgroundColor: 'var(--color-secondary)', color: 'var(--color-text-muted)', borderTop: '2px solid rgba(0,0,0,0.05)' }}>
        <p style={{ fontWeight: 700 }}>&copy; {new Date().getFullYear()} SafeSpeak. Anonymity. Empathy. Translation.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
