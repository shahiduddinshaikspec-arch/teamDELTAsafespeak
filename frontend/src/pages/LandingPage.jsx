import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import ChatPreview from '../components/ChatPreview';
import PrivacySection from '../components/PrivacySection';

const LandingPage = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: 'var(--color-bg-page)' }}>
      <header style={{ 
        padding: '1.5rem 2rem', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        backgroundColor: 'var(--color-bg-page)',
        position: 'sticky',
        top: 0,
        zIndex: 10
      }}>
        <div style={{ fontSize: '1.75rem', fontWeight: '800', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem', letterSpacing: '-0.05em' }}>
          <span style={{ fontSize: '2rem' }}>🌿</span> SafeSpeak
        </div>
        <button className="btn btn-primary" style={{ padding: '0.75rem 2rem' }}>Join Now</button>
      </header>

      <main style={{ flex: 1 }}>
        <Hero />
        <Features />
        <ChatPreview />
        <PrivacySection />
      </main>

      <footer style={{ padding: '3rem 2rem', textAlign: 'center', backgroundColor: 'var(--color-secondary)', color: 'var(--color-text-muted)', borderTop: '2px solid rgba(90, 64, 51, 0.05)' }}>
        <p style={{ fontWeight: 700 }}>&copy; {new Date().getFullYear()} SafeSpeak. Anonymity. Empathy. Translation.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
