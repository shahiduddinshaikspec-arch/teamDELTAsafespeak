import React, { useState } from 'react';
import { Calendar, PenTool, Hash, Sparkles, Clock, MoreHorizontal, Edit3 } from 'lucide-react';

const JournalApp = () => {
  const [entry, setEntry] = useState('');
  
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', width: '100%', maxWidth: '1000px', margin: '0 auto' }}>
      
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h2 style={{ fontSize: '2.5rem', letterSpacing: '-0.03em', color: 'var(--color-primary)', marginBottom: '0.25rem' }}>Mental Space</h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)', fontWeight: 600 }}>Your private journal for AI-powered reflection.</p>
        </div>
        <button className="btn btn-primary" onClick={() => window.location.href='/login'} style={{ padding: '0.75rem 1.5rem', display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
          <Edit3 size={18} /> New Entry
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '2rem' }}>
        
        {/* Left Column: History & Calendar */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {/* AI Insights Card */}
          <div style={{ 
            backgroundColor: 'var(--color-accent-purple)', 
            padding: '1.5rem', 
            borderRadius: '24px', 
            boxShadow: 'var(--shadow-sm)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <Sparkles size={20} color="var(--color-primary)" />
              <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--color-primary)' }}>AI Theme Analysis</h3>
            </div>
            <p style={{ fontSize: '0.9rem', color: 'var(--color-primary)', opacity: 0.8, fontWeight: 600, marginBottom: '1rem', lineHeight: 1.5 }}>
              This week, your journal entries suggest you are feeling slightly <strong>overwhelmed</strong> but highly <strong>determined</strong>.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              <span style={{ padding: '0.3rem 0.8rem', backgroundColor: 'white', borderRadius: '12px', fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-primary)' }}>#stress</span>
              <span style={{ padding: '0.3rem 0.8rem', backgroundColor: 'white', borderRadius: '12px', fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-primary)' }}>#growth</span>
            </div>
          </div>

          {/* Past Entries List */}
          <div style={{ 
            backgroundColor: 'var(--color-bg-card)', 
            padding: '1.5rem', 
            borderRadius: '24px', 
            border: '2px solid rgba(0,0,0,0.02)'
          }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--color-primary)', marginBottom: '1rem' }}>Recent Entries</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              
              <div style={{ cursor: 'pointer', padding: '1rem', backgroundColor: 'var(--color-secondary)', borderRadius: '16px', borderLeft: '4px solid var(--color-accent-green)' }}>
                <h4 style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--color-primary)', marginBottom: '0.25rem' }}>A quiet morning</h4>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', color: 'var(--color-text-muted)', fontWeight: 600 }}>
                  <Calendar size={14} /> Yesterday
                </div>
              </div>

              <div style={{ cursor: 'pointer', padding: '1rem', backgroundColor: 'var(--color-secondary)', borderRadius: '16px', borderLeft: '4px solid var(--color-accent-orange)', opacity: 0.7 }}>
                <h4 style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--color-primary)', marginBottom: '0.25rem' }}>Anxiety before the test</h4>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', color: 'var(--color-text-muted)', fontWeight: 600 }}>
                  <Calendar size={14} /> Wed, Oct 24
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Right Column: Editor */}
        <div style={{ 
          backgroundColor: 'var(--color-bg-card)', 
          borderRadius: '32px', 
          border: '2px solid rgba(0,0,0,0.02)',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: 'var(--shadow-sm)'
        }}>
          {/* Editor Header */}
          <div style={{ 
            padding: '1.5rem 2rem', 
            borderBottom: '2px solid rgba(0,0,0,0.02)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text-muted)', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                <Calendar size={14} /> Today <span style={{ opacity: 0.5 }}>•</span> <Clock size={14} /> 10:42 AM
              </div>
              <input 
                type="text" 
                placeholder="Title your thoughts..."
                defaultValue="Processing today's events"
                style={{ 
                  fontSize: '1.8rem', fontWeight: 800, color: 'var(--color-primary)', 
                  border: 'none', background: 'transparent', outline: 'none', width: '100%',
                  fontFamily: 'inherit', letterSpacing: '-0.02em'
                }} 
              />
            </div>
            <button className="btn" style={{ backgroundColor: 'var(--color-secondary)', padding: '0.5rem', color: 'var(--color-text-muted)' }}>
              <MoreHorizontal size={24} />
            </button>
          </div>

          {/* Editor Body */}
          <div style={{ flex: 1, padding: '2rem' }}>
            <textarea
              placeholder="Start typing... How did today make you feel?"
              value={entry}
              onChange={(e) => setEntry(e.target.value)}
              style={{
                width: '100%',
                height: '100%',
                minHeight: '300px',
                border: 'none',
                background: 'transparent',
                outline: 'none',
                resize: 'none',
                fontFamily: 'inherit',
                fontSize: '1.1rem',
                lineHeight: 1.8,
                color: 'var(--color-text-main)',
                fontWeight: 500
              }}
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default JournalApp;
