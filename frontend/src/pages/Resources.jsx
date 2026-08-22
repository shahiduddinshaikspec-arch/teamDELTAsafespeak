import React from 'react';
import { PlayCircle, Headphones, BookOpen, Wind } from 'lucide-react';

const ResourceCard = ({ title, type, duration, icon: Icon, bgColor, textColor = 'var(--color-primary)' }) => (
  <div style={{ 
    backgroundColor: bgColor || 'var(--color-bg-card)', 
    padding: '2rem', 
    borderRadius: '32px', 
    display: 'flex', 
    flexDirection: 'column', 
    gap: '1rem',
    boxShadow: bgColor === 'var(--color-bg-card)' ? 'var(--shadow-sm)' : 'none',
    border: bgColor === 'var(--color-bg-card)' ? '2px solid rgba(0,0,0,0.02)' : 'none',
    cursor: 'pointer',
    position: 'relative',
    overflow: 'hidden',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
  }} className="hover-lift">
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
      <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--shadow-sm)' }}>
        <Icon size={24} color={textColor} />
      </div>
      <button style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.2)' }}>
        <PlayCircle size={28} color={textColor} />
      </button>
    </div>
    
    <div style={{ marginTop: '1rem' }}>
      <span style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em', color: textColor, opacity: 0.7 }}>{type}</span>
      <h3 style={{ fontSize: '1.4rem', color: textColor, fontWeight: 800, marginTop: '0.25rem', lineHeight: 1.2 }}>{title}</h3>
      <div style={{ fontSize: '0.9rem', color: textColor, opacity: 0.8, fontWeight: 600, marginTop: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <ClockIcon /> {duration}
      </div>
    </div>
  </div>
);

const ClockIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12 6 12 12 16 14"></polyline>
  </svg>
);

const Resources = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', width: '100%', maxWidth: '1000px', margin: '0 auto' }}>
      
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
        <h2 style={{ fontSize: '2.5rem', letterSpacing: '-0.03em', color: 'var(--color-primary)', marginBottom: '0.5rem' }}>Mindful Oasis</h2>
        <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)', fontWeight: 600 }}>Curated exercises to help you find your center.</p>
      </div>

      {/* Categories */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '1rem' }}>
        <button className="btn btn-primary" style={{ padding: '0.5rem 1.5rem', borderRadius: 'var(--radius-pill)' }}>All</button>
        <button className="btn" style={{ padding: '0.5rem 1.5rem', borderRadius: 'var(--radius-pill)', backgroundColor: 'var(--color-bg-card)', border: '2px solid rgba(0,0,0,0.05)', color: 'var(--color-text-main)', fontWeight: 600 }}>Meditation</button>
        <button className="btn" style={{ padding: '0.5rem 1.5rem', borderRadius: 'var(--radius-pill)', backgroundColor: 'var(--color-bg-card)', border: '2px solid rgba(0,0,0,0.05)', color: 'var(--color-text-main)', fontWeight: 600 }}>Breathing</button>
        <button className="btn" style={{ padding: '0.5rem 1.5rem', borderRadius: 'var(--radius-pill)', backgroundColor: 'var(--color-bg-card)', border: '2px solid rgba(0,0,0,0.05)', color: 'var(--color-text-main)', fontWeight: 600 }}>Reading</button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
        <ResourceCard 
          title="Deep Sleep Visualization" 
          type="Audio Guided" 
          duration="15 min" 
          icon={Headphones}
          bgColor="var(--color-accent-purple)" 
        />
        <ResourceCard 
          title="Morning Grounding Breath" 
          type="Breathing" 
          duration="5 min" 
          icon={Wind}
          bgColor="var(--color-accent-green)" 
        />
        <ResourceCard 
          title="Navigating Academic Stress" 
          type="Article" 
          duration="8 min read" 
          icon={BookOpen}
          bgColor="var(--color-accent-yellow)" 
        />
      </div>
      
      <div style={{ 
        marginTop: '2rem', 
        backgroundColor: 'var(--color-secondary)', 
        borderRadius: '32px', 
        padding: '3rem', 
        display: 'flex', 
        justifyContent: 'space-between',
        alignItems: 'center',
        border: '2px solid rgba(0,0,0,0.03)'
      }}>
        <div>
          <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--color-primary)', marginBottom: '0.5rem' }}>Need a personalized plan?</h3>
          <p style={{ color: 'var(--color-primary)', opacity: 0.8, fontWeight: 600 }}>Our AI can curate a daily sequence just for your needs.</p>
        </div>
        <button className="btn btn-primary" onClick={() => window.location.href='/login'} style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>Generate Plan</button>
      </div>
    </div>
  );
};

export default Resources;
