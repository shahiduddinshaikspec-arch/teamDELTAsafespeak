import React from 'react';
import { Shield, MessageSquare, Globe2, HeartHandshake } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description, bgColor }) => (
  <div style={{
    backgroundColor: bgColor,
    padding: 'var(--spacing-xl)',
    borderRadius: 'var(--radius-xl)',
    textAlign: 'center',
    flex: '1 1 250px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border: '2px solid rgba(90, 64, 51, 0.05)'
  }}>
    <div style={{ 
      backgroundColor: 'white', 
      padding: '1rem', 
      borderRadius: '50%', 
      marginBottom: 'var(--spacing-lg)',
      color: 'var(--color-primary)',
      boxShadow: 'var(--shadow-sm)'
    }}>
      <Icon size={32} />
    </div>
    <h3 style={{ marginBottom: 'var(--spacing-sm)', fontSize: '1.4rem' }}>{title}</h3>
    <p style={{ color: 'var(--color-primary)', opacity: 0.85, fontSize: '1rem', fontWeight: 600 }}>{description}</p>
  </div>
);

const Features = () => {
  return (
    <section style={{ padding: 'var(--spacing-section) 0', backgroundColor: 'var(--color-bg-page)' }}>
      <div className="container">
        <h2 className="section-title">Built for Safety and Comfort</h2>
        <p className="section-subtitle">We removed the barriers so you can focus on getting the support you need.</p>
        
        <div style={{ display: 'flex', gap: 'var(--spacing-lg)', flexWrap: 'wrap', justifyContent: 'center' }}>
          <FeatureCard 
            icon={Shield} 
            title="100% Anonymous" 
            description="No names, no profile pictures. Your identity is completely hidden."
            bgColor="var(--color-accent-green)"
          />
          <FeatureCard 
            icon={Globe2} 
            title="Seamless Translation" 
            description="Type in Hindi, read in English. Accurate health term translation."
            bgColor="var(--color-accent-yellow)"
          />
          <FeatureCard 
            icon={HeartHandshake} 
            title="Crisis Support" 
            description="If we detect signs of emergency, we automatically provide resources."
            bgColor="var(--color-accent-purple)"
          />
          <FeatureCard 
            icon={MessageSquare} 
            title="Safe Community" 
            description="Automated filters keep the space safe by blocking bullying."
            bgColor="var(--color-accent-orange)"
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
