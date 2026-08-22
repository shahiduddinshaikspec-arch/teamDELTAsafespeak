import React from 'react';

const Hero = () => {
  return (
    <section className="hero-section" style={{ padding: 'var(--spacing-section) 0', backgroundColor: 'var(--color-bg-page)' }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        
        <div style={{ 
          backgroundColor: 'var(--color-accent-purple)', 
          padding: '0.5rem 1rem', 
          borderRadius: 'var(--radius-pill)', 
          color: 'var(--color-primary)', 
          fontWeight: 800,
          marginBottom: 'var(--spacing-lg)',
          fontSize: '0.9rem',
          letterSpacing: '0.05em',
          textTransform: 'uppercase'
        }}>
          SafeSpeak v1.0
        </div>

        <h1 style={{ fontSize: '4rem', marginBottom: 'var(--spacing-md)', maxWidth: '800px', lineHeight: 1.1 }}>
          Speak freely.<br/>
          <span style={{ color: 'var(--color-primary-light)' }}>Stay anonymous.</span>
        </h1>
        
        <p style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)', fontWeight: 600, maxWidth: '600px', marginBottom: 'var(--spacing-xl)' }}>
          A secure space to talk about stress, anxiety, or addiction without judgment. Chat in your comfortable language; we'll translate it safely.
        </p>
        
        <div style={{ display: 'flex', gap: 'var(--spacing-md)' }}>
          <button className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.125rem' }}>Start Chatting</button>
          <button className="btn" style={{ backgroundColor: 'var(--color-accent-orange)', color: 'var(--color-primary)', border: 'none' }}>Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
