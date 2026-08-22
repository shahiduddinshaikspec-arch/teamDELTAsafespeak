import React from 'react';
import { ArrowRight } from 'lucide-react';

const FrameCard = ({ step, title, bgColor, icon: Icon, isFirst }) => {
  return (
    <div style={{
      minWidth: '300px',
      height: '480px',
      backgroundColor: bgColor,
      borderRadius: '40px',
      position: 'relative',
      overflow: 'hidden',
      boxShadow: '0 24px 48px -12px rgba(0, 0, 0, 0.18)',
      display: 'flex',
      flexDirection: 'column',
      border: '8px solid #ffffff',
      scrollSnapAlign: 'center',
      flexShrink: 0,
      transition: 'transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
    }}
    onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
    onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
    >
      {/* Top Content Area */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '1.5rem', position: 'relative' }}>
        
        {/* Step Pill */}
        {!isFirst && (
          <div style={{
            backgroundColor: 'rgba(255,255,255,0.8)',
            padding: '0.4rem 1.2rem',
            borderRadius: '20px',
            fontSize: '0.8rem',
            fontWeight: 800,
            color: 'rgba(0,0,0,0.8)',
            marginBottom: '0.5rem',
            boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
            textTransform: 'uppercase',
            letterSpacing: '0.05em'
          }}>
            {step}
          </div>
        )}

        {isFirst && (
          <div style={{ marginTop: '0.5rem', marginBottom: '0.5rem', textAlign: 'center' }}>
             <h2 style={{ fontSize: '1.4rem', fontWeight: 900, marginBottom: '0.2rem', padding: '0 1rem', color: '#1a1a1a', letterSpacing: '-0.02em', lineHeight: 1.2 }}>Welcome to the ultimate delta!</h2>
             <p style={{ fontSize: '0.85rem', color: '#4a4a4a', padding: '0 1.5rem', fontWeight: 600 }}>Your mindful mental health AI companion 🌿</p>
          </div>
        )}

        {/* Abstracted Illustration Area */}
        <div style={{ 
          flex: 1, 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          width: '100%',
          position: 'relative',
          paddingBottom: '0.5rem'
        }}>
           {/* Decorative background glow */}
           <div style={{
             position: 'absolute',
             width: '180px',
             height: '180px',
             backgroundColor: 'rgba(255,255,255,0.3)',
             borderRadius: '50%',
             filter: 'blur(15px)',
             zIndex: 0
           }} />
           <div style={{ zIndex: 1, transform: 'scale(0.9)', transition: 'transform 0.3s ease' }} className="illustration-wrapper">
             <img src={Icon} alt={title} style={{ width: 220, height: 220, objectFit: 'contain' }} />
           </div>
        </div>
      </div>

      {/* Bottom Sheet */}
      <div style={{
        backgroundColor: '#ffffff',
        height: '180px',
        borderTopLeftRadius: '32px',
        borderTopRightRadius: '32px',
        padding: '1.5rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        position: 'relative',
        zIndex: 10,
        boxShadow: '0 -10px 25px rgba(0,0,0,0.04)'
      }}>
        <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#1a1a1a', marginBottom: 'auto', lineHeight: 1.25, letterSpacing: '-0.02em', padding: '0 0.5rem' }}>
          {title}
        </h3>
        
        {isFirst ? (
          <button style={{
            backgroundColor: '#2d2d2d',
            color: 'white',
            border: 'none',
            padding: '1rem 1.5rem',
            borderRadius: '30px',
            fontWeight: 800,
            fontSize: '1rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            cursor: 'pointer',
            width: '90%',
            justifyContent: 'center',
            boxShadow: '0 8px 20px rgba(45, 45, 45, 0.25)',
            transition: 'background-color 0.2s ease, transform 0.2s ease'
          }}
          onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#1a1a1a'; e.currentTarget.style.transform = 'scale(1.02)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#2d2d2d'; e.currentTarget.style.transform = 'scale(1)'; }}
          >
            Get Started <ArrowRight size={18} strokeWidth={3} />
          </button>
        ) : (
          <button style={{
            backgroundColor: '#2d2d2d',
            color: 'white',
            border: 'none',
            width: '56px',
            height: '56px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 10px 24px rgba(45, 45, 45, 0.3)',
            transition: 'background-color 0.2s ease, transform 0.2s ease'
          }}
          onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#1a1a1a'; e.currentTarget.style.transform = 'scale(1.05)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#2d2d2d'; e.currentTarget.style.transform = 'scale(1)'; }}
          >
            <ArrowRight size={24} strokeWidth={2.5} />
          </button>
        )}
      </div>
    </div>
  );
};

const WelcomeScreens = () => {
  const screens = [
    { id: 1, step: 'Start', title: 'Welcome to the ultimate delta!', bgColor: '#ffffff', icon: '/robot.svg', isFirst: true },
    { id: 2, step: 'Step One', title: 'Personalize Your Mental Health State With AI', bgColor: 'var(--color-accent-green)', icon: '/green lady.svg' },
    { id: 3, step: 'Step Two', title: 'Intelligent Mood Tracking & AI Emotion Insights', bgColor: 'var(--color-accent-orange)', icon: '/orange person.svg' },
    { id: 4, step: 'Step Three', title: 'AI Mental Journaling & AI Therapy Chatbot', bgColor: '#e5e5e5', icon: '/gray lady.svg' },
    { id: 5, step: 'Step Four', title: 'Mindful Resources That Makes You Happy', bgColor: 'var(--color-accent-yellow)', icon: '/yellow lady.svg' },
    { id: 6, step: 'Step Five', title: 'Loving & Supportive Community', bgColor: 'var(--color-accent-purple)', icon: '/heart and hands.svg' }
  ];

  return (
    <section style={{ 
      padding: 'var(--spacing-section) 0', 
      backgroundColor: 'var(--color-secondary)',
      overflow: 'hidden'
    }}>
      <div className="container" style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '3rem', fontWeight: 900, color: 'var(--color-text-main)', letterSpacing: '-0.03em' }}>Welcome Screen</h2>
        <p style={{ fontSize: '1.2rem', color: 'var(--color-text-muted)', fontWeight: 600 }}>Scroll horizontally to view the onboarding flow.</p>
      </div>
      
      {/* The Horizontal Scrolling Container (Based on Figma Flex settings) */}
      <div style={{
        display: 'flex',
        gap: '4rem', // Approximating the 128px gap from Figma
        padding: '2rem var(--spacing-xl)',
        overflowX: 'auto',
        scrollSnapType: 'x mandatory',
        /* Hide scrollbar for cleaner look */
        msOverflowStyle: 'none',
        scrollbarWidth: 'none',
        WebkitOverflowScrolling: 'touch',
      }}>
        {screens.map((screen) => (
          <FrameCard 
            key={screen.id}
            step={screen.step}
            title={screen.title}
            bgColor={screen.bgColor}
            icon={screen.icon}
            isFirst={screen.isFirst}
          />
        ))}
      </div>
    </section>
  );
};

export default WelcomeScreens;
