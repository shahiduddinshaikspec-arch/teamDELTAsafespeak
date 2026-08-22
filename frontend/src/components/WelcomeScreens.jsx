import React from 'react';
import AccordionGallery from './AccordionGallery';

const WelcomeScreens = () => {
  const items = [
    { image: '/robot.svg', label: 'Welcome to delta!', bgColor: '#ffffff' },
    { image: '/green lady.svg', label: 'Personalize Mental Health', bgColor: 'var(--color-accent-green)' },
    { image: '/orange person.svg', label: 'Intelligent Mood Tracking', bgColor: 'var(--color-accent-orange)' },
    { image: '/gray lady.svg', label: 'AI Therapy Chatbot', bgColor: '#e5e5e5' },
    { image: '/yellow lady.svg', label: 'Mindful Resources', bgColor: 'var(--color-accent-yellow)' },
    { image: '/heart and hands.svg', label: 'Supportive Community', bgColor: 'var(--color-accent-purple)' }
  ];

  return (
    <section style={{ 
      padding: 'var(--spacing-section) 0', 
      backgroundColor: 'var(--color-secondary)',
      overflow: 'hidden'
    }}>
      <div className="container" style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '3rem', fontWeight: 900, color: 'var(--color-text-main)', letterSpacing: '-0.03em' }}>Welcome Screen</h2>
        <p style={{ fontSize: '1.2rem', color: 'var(--color-text-muted)', fontWeight: 600 }}>Explore our onboarding flow.</p>
      </div>
      
      <div className="container">
        <AccordionGallery 
          items={items} 
          defaultIndex={0} 
          expandRatio={0.65} 
          trigger="hover" 
          accentColor="#000000" 
          overlayColor="transparent" 
          textColor="#1a1a1a" 
          grayscale={false}
          showLabels={true}
          duration={0.6}
          ease="power3.out"
          parallax={0.2}
          tilt={8}
          stagger={0.06}
          height={480}
          gap={16}
          radius={40}
          orientation="horizontal" 
        />
      </div>
    </section>
  );
};

export default WelcomeScreens;
