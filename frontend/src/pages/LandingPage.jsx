import React, { useState, useEffect } from 'react';
import { Moon, Sun, ArrowRight, ShieldCheck } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';

export default function LandingPage({ theme, toggleTheme }) {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const isMatched = searchParams.get('matched') === 'true';

  const mockPeers = [
    {
      id: 1,
      name: "Anonymous Alligator",
      avatar: "🐊",
      credibilityScore: 120,
      bio: "Felt overwhelmed recently too. Ready to listen.",
      tags: ["Listener", "Empathy"]
    },
    {
      id: 2,
      name: "Quick Cheetah",
      avatar: "🐆",
      credibilityScore: 85,
      bio: "Here to offer practical advice and a different perspective.",
      tags: ["Advice", "Action-oriented"]
    }
  ];

  return (
    <div className="landing-container">
      {/* Top Navbar */}
      <nav style={{ padding: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{ backgroundColor: 'var(--color-primary)', width: '32px', height: '32px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
            <span style={{ fontWeight: 'bold' }}>S</span>
          </div>
          <span style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--color-primary)' }}>SafeSpeak</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button 
            onClick={toggleTheme}
            style={{ 
              background: 'none', border: 'none', cursor: 'pointer', 
              color: 'var(--color-text-main)', padding: '0.5rem',
              display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          <Link to="/login" className="btn btn-secondary" style={{ padding: '0.5rem 1rem', textDecoration: 'none' }}>Log in</Link>
        </div>
      </nav>

      {/* Main Content */}
      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 1.5rem' }}>
        
        {isMatched && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ marginBottom: '4rem' }}
          >
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <h2 style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--color-primary)', marginBottom: '0.5rem' }}>
                Your Matches
              </h2>
              <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)', fontWeight: 600 }}>
                We found some peers who understand exactly what you're going through.
              </p>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', maxWidth: '800px', margin: '0 auto' }}>
              {mockPeers.map(peer => (
                <div key={peer.id} style={{
                  backgroundColor: 'white', padding: '1.5rem', borderRadius: '24px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.05)', border: '1px solid rgba(0,0,0,0.05)',
                  display: 'flex', flexDirection: 'column', gap: '1rem'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: 'var(--color-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.8rem' }}>
                      {peer.avatar}
                    </div>
                    <div>
                      <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--color-text-main)' }}>{peer.name}</h3>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.25rem' }}>
                         <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', backgroundColor: 'var(--color-secondary)', padding: '0.2rem 0.5rem', borderRadius: '8px' }}>
                            <ShieldCheck size={14} color="var(--color-primary)" />
                            <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--color-primary)' }}>{peer.credibilityScore} CS</span>
                         </div>
                      </div>
                    </div>
                  </div>
                  <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', lineHeight: 1.5, fontWeight: 500 }}>
                    "{peer.bio}"
                  </p>
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    {peer.tags.map(tag => (
                      <span key={tag} style={{ backgroundColor: 'var(--color-background)', padding: '0.25rem 0.75rem', borderRadius: '12px', fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-text-main)' }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button 
                    onClick={() => navigate('/chat')}
                    className="btn btn-primary" style={{ width: '100%', marginTop: 'auto', padding: '0.75rem', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}
                  >
                    Connect <ArrowRight size={18} />
                  </button>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Hero Section */}
        <Hero />
      </main>

      <footer style={{ padding: '3rem 2rem', textAlign: 'center', backgroundColor: 'var(--color-secondary)', color: 'var(--color-text-muted)', borderTop: '2px solid rgba(0,0,0,0.05)' }}>
        <p style={{ fontWeight: 700 }}>&copy; {new Date().getFullYear()} SafeSpeak. Anonymity. Empathy. Support.</p>
      </footer>
    </div>
  );
};
