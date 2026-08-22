import React, { useState, useEffect } from 'react';

const SplashScreen = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const loadingSequence = [
    '/Splash Screen.svg',
    '/Loading Screen Progress.svg',
    '/Loading Screen Quote.svg',
    '/Loading Screen Interactive.svg'
  ];

  useEffect(() => {
    // Cycle through the 4 images every 1.2 seconds
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev < loadingSequence.length - 1 ? prev + 1 : prev));
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100vw',
      height: '100vh',
      backgroundColor: 'var(--color-bg-page)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      
      <div style={{ textAlign: 'center', marginBottom: '3rem', position: 'absolute', top: '10%' }}>
         <h2 style={{ fontSize: '1.2rem', textTransform: 'uppercase', letterSpacing: '0.3em', color: 'var(--color-text-muted)', fontWeight: 800 }}>App Initialization Sequence</h2>
      </div>

      {/* The Animated SVG Sequence */}
      <div style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        {loadingSequence.map((src, index) => (
          <img 
            key={index}
            src={src}
            alt={`Loading Step ${index + 1}`}
            style={{ 
              position: 'absolute',
              width: 'auto', 
              height: '80vh', 
              maxWidth: '90vw',
              objectFit: 'contain',
              dropShadow: '0 30px 60px rgba(0,0,0,0.15)',
              opacity: currentStep === index ? 1 : 0,
              transform: currentStep === index ? 'scale(1)' : 'scale(0.95)',
              transition: 'opacity 0.6s ease-in-out, transform 0.6s ease-in-out'
            }}
          />
        ))}
      </div>

    </section>
  );
};

export default SplashScreen;
