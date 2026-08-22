import React from 'react';

const AuthShowcase = () => {
  const authScreens = [
    '/Sign In & Sign Up.svg',
    '/Sign In & Sign Up (1).svg',
    '/Sign In & Sign Up (2).svg',
    '/Sign In & Sign Up (3).svg'
  ];

  return (
    <section style={{ 
      padding: 'var(--spacing-section) 0', 
      backgroundColor: 'var(--color-bg-page)',
      borderTop: '2px solid rgba(0,0,0,0.05)'
    }}>
      <div className="container" style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h2 style={{ fontSize: '3rem', fontWeight: 900, color: 'var(--color-text-main)', letterSpacing: '-0.03em' }}>Secure Authentication</h2>
        <p style={{ fontSize: '1.2rem', color: 'var(--color-text-muted)', fontWeight: 600 }}>A seamless, welcoming entry into the platform.</p>
      </div>
      
      {/* Desktop Grid Layout for Auth Screens */}
      <div className="container" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '3rem',
        justifyItems: 'center'
      }}>
        {authScreens.map((src, index) => (
          <img 
            key={index}
            src={src} 
            alt={`Auth Screen ${index + 1}`}
            style={{
              width: '100%',
              maxWidth: '380px',
              height: 'auto',
              dropShadow: '0 20px 40px rgba(0,0,0,0.1)',
              borderRadius: '32px',
              transition: 'transform 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          />
        ))}
      </div>
    </section>
  );
};

export default AuthShowcase;
