import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { UserPlus, Star, ShieldCheck, ArrowRight } from 'lucide-react';

const mockPeers = [
  {
    id: 1,
    name: "Anonymous Alligator",
    score: 120,
    isBeginnerFriendly: true,
    avatar: "🐊",
    status: "Online Now",
    badges: ["Great Listener", "Empathetic"]
  },
  {
    id: 2,
    name: "Quick Cheetah",
    score: 85,
    isBeginnerFriendly: false,
    avatar: "🐆",
    status: "Online Now",
    badges: ["Supportive", "Fast Replier"]
  }
];

export default function MatchPage() {
  const [analyzing, setAnalyzing] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnalyzing(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  const handleMatch = (peer) => {
    // Navigate to chat (in a real app, pass peer info via state or context)
    navigate('/chat');
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'var(--color-background)',
      padding: '2rem'
    }}>
      {analyzing ? (
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}
        >
          <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: 'var(--color-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
              style={{ position: 'absolute', width: '100%', height: '100%', borderRadius: '50%', border: '4px solid transparent', borderTopColor: 'var(--color-primary)', borderRightColor: 'var(--color-primary)' }}
            />
            <span style={{ fontSize: '2rem' }}>✨</span>
          </div>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-text-main)' }}>Analyzing your mood...</h2>
          <p style={{ color: 'var(--color-text-muted)', fontWeight: 500 }}>Finding the best peer for you right now.</p>
        </motion.div>
      ) : (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ width: '100%', maxWidth: '600px', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
        >
          <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
            <h1 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--color-text-main)', marginBottom: '0.5rem' }}>Your Best Matches</h1>
            <p style={{ color: 'var(--color-text-muted)', fontWeight: 500 }}>Based on your psychometric survey, these peers are ready to listen.</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {mockPeers.map((peer, idx) => (
              <motion.div 
                key={peer.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.15 }}
                style={{
                  backgroundColor: 'white',
                  borderRadius: '20px',
                  padding: '1.5rem',
                  border: peer.isBeginnerFriendly ? '2px solid var(--color-primary)' : '1px solid var(--color-border)',
                  boxShadow: 'var(--shadow-md)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.5rem',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {peer.isBeginnerFriendly && (
                  <div style={{ position: 'absolute', top: 0, right: 0, backgroundColor: 'var(--color-primary)', color: 'white', fontSize: '0.75rem', fontWeight: 800, padding: '0.25rem 1rem', borderBottomLeftRadius: '12px' }}>
                    RECOMMENDED FOR BEGINNERS
                  </div>
                )}
                
                <div style={{ width: '60px', height: '60px', borderRadius: '16px', backgroundColor: 'var(--color-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', flexShrink: 0 }}>
                  {peer.avatar}
                </div>
                
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.25rem' }}>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--color-text-main)', margin: 0 }}>{peer.name}</h3>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', backgroundColor: 'var(--color-secondary)', padding: '0.2rem 0.5rem', borderRadius: '8px' }}>
                      <ShieldCheck size={14} color="var(--color-primary)" />
                      <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--color-primary)' }}>{peer.score} CS</span>
                    </div>
                  </div>
                  
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--color-accent-green)' }}></div>
                    <span style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', fontWeight: 600 }}>{peer.status}</span>
                  </div>

                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    {peer.badges.map((badge, bIdx) => (
                      <span key={bIdx} style={{ fontSize: '0.7rem', fontWeight: 700, backgroundColor: 'rgba(0,0,0,0.04)', color: 'var(--color-text-muted)', padding: '0.25rem 0.5rem', borderRadius: '6px', textTransform: 'uppercase' }}>
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>

                <button 
                  onClick={() => handleMatch(peer)}
                  className="btn btn-primary"
                  style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1.25rem', borderRadius: '12px' }}
                >
                  Connect <ArrowRight size={16} />
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
}
