import React from 'react';

const PrivacySection = () => {
  return (
    <section style={{ padding: 'var(--spacing-section) 0', backgroundColor: 'var(--color-primary)', color: 'white' }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        <h2 style={{ fontSize: '3rem', marginBottom: 'var(--spacing-lg)', color: 'white' }}>Our Promise to You</h2>
        <div style={{ maxWidth: '800px', fontSize: '1.25rem', lineHeight: '1.8', opacity: 0.9, fontWeight: 600 }}>
          <p style={{ marginBottom: 'var(--spacing-md)' }}>
            We understand that talking about mental health requires immense trust. That is why <strong style={{color: 'var(--color-accent-yellow)'}}>SafeSpeak does not ask for your name, email, or phone number</strong> to start chatting.
          </p>
          <p>
            You are assigned a random, temporary avatar. We do not store your chat history permanently, and our AI models process translations and safety checks on the fly. Your safe space remains yours.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PrivacySection;
