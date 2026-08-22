import React, { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Heart, Activity, Wind, Moon, Sun, ArrowRight, Zap } from 'lucide-react';

const data = [
  { name: 'Mon', score: 65, avg: 50 },
  { name: 'Tue', score: 85, avg: 55 },
  { name: 'Wed', score: 40, avg: 60 },
  { name: 'Thu', score: 75, avg: 65 },
  { name: 'Fri', score: 90, avg: 70 },
  { name: 'Sat', score: 70, avg: 72 },
  { name: 'Sun', score: 85, avg: 75 },
];

const StatCard = ({ title, value, subtitle, icon: Icon, bgColor, textColor = 'var(--color-primary)' }) => (
  <div style={{ 
    backgroundColor: bgColor || 'var(--color-bg-card)', 
    padding: '1.5rem', 
    borderRadius: '24px', 
    display: 'flex', 
    flexDirection: 'column', 
    gap: '0.5rem',
    boxShadow: bgColor === 'var(--color-bg-card)' ? 'var(--shadow-sm)' : 'none',
    border: bgColor === 'var(--color-bg-card)' ? '2px solid rgba(0,0,0,0.02)' : 'none',
    position: 'relative',
    overflow: 'hidden'
  }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <h3 style={{ fontSize: '0.95rem', color: textColor, opacity: 0.8, fontWeight: 700 }}>{title}</h3>
      {Icon && <Icon size={20} color={textColor} style={{ opacity: 0.5 }} />}
    </div>
    <div style={{ fontSize: '2.5rem', fontWeight: 800, color: textColor, letterSpacing: '-0.03em', marginTop: '0.5rem' }}>{value}</div>
    {subtitle && <div style={{ fontSize: '0.9rem', color: textColor, opacity: 0.7, fontWeight: 600 }}>{subtitle}</div>}
  </div>
);

const MoodSelector = () => {
  const [selected, setSelected] = useState(3);
  const moods = ['😢', '😕', '😐', '🙂', '😁'];
  
  return (
    <div style={{ 
      backgroundColor: 'var(--color-secondary)', 
      padding: '2rem', 
      borderRadius: '32px', 
      textAlign: 'center',
      border: '2px solid rgba(0,0,0,0.03)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }}>
      <h3 style={{ fontSize: '1.2rem', marginBottom: '1.5rem', color: 'var(--color-primary)', fontWeight: 800 }}>How are you feeling right now?</h3>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
        {moods.map((emoji, idx) => (
          <button 
            key={idx}
            onClick={() => setSelected(idx)}
            style={{
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              border: selected === idx ? '4px solid var(--color-primary)' : '4px solid transparent',
              backgroundColor: selected === idx ? 'white' : 'rgba(255,255,255,0.5)',
              fontSize: '1.8rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              transform: selected === idx ? 'scale(1.1)' : 'scale(1)',
              boxShadow: selected === idx ? 'var(--shadow-md)' : 'none'
            }}
          >
            {emoji}
          </button>
        ))}
      </div>
      <button className="btn btn-primary" onClick={() => window.location.href='/login'} style={{ marginTop: '2rem', padding: '0.75rem 2rem', width: '100%', alignSelf: 'center' }}>
        Log Mood
      </button>
    </div>
  );
};

const Dashboard = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', width: '100%', maxWidth: '1000px', margin: '0 auto' }}>
      {/* Header Profile Section */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 style={{ fontSize: '2.5rem', letterSpacing: '-0.03em', color: 'var(--color-primary)', marginBottom: '0.25rem' }}>Hi, Anonymous_7 ✨</h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)', fontWeight: 600 }}>Your holistic wellness overview for this week.</p>
        </div>
        <div style={{ width: '56px', height: '56px', borderRadius: '50%', backgroundColor: 'var(--color-accent-green)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', boxShadow: 'var(--shadow-sm)' }}>
          🌿
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
        <StatCard 
          title="SafeSpeak Score" 
          value="82" 
          subtitle="Top 15% this week" 
          icon={Activity}
          bgColor="var(--color-accent-green)" 
        />
        <StatCard 
          title="Mindful Minutes" 
          value="145" 
          subtitle="Out of 300m goal" 
          icon={Wind}
          bgColor="var(--color-accent-orange)" 
        />
        <StatCard 
          title="Sleep Quality" 
          value="7h 12m" 
          subtitle="Optimal rest achieved" 
          icon={Moon}
          bgColor="var(--color-accent-purple)" 
        />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1.5rem' }}>
        {/* Chart Section */}
        <div style={{ 
          backgroundColor: 'var(--color-bg-card)', 
          padding: '2rem', 
          borderRadius: '32px', 
          boxShadow: 'var(--shadow-sm)',
          border: '2px solid rgba(0,0,0,0.02)'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--color-primary)' }}>Emotional Baseline</h3>
            <div style={{ display: 'flex', gap: '1rem', fontSize: '0.85rem', fontWeight: 700 }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: 'var(--color-text-muted)' }}>
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: 'var(--color-primary)' }}></span> Actual
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: 'var(--color-text-muted)' }}>
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: 'rgba(90,64,51,0.2)' }}></span> Baseline
              </span>
            </div>
          </div>
          
          <div style={{ height: '260px', width: '100%' }}>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--color-primary)" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="var(--color-primary)" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: 'var(--color-text-muted)', fontWeight: 600, fontSize: 12}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: 'var(--color-text-muted)', fontSize: 12}} />
                <Tooltip 
                  contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: 'var(--shadow-lg)', fontWeight: 700, padding: '1rem' }}
                  cursor={{stroke: 'var(--color-text-muted)', strokeWidth: 1, strokeDasharray: '4 4'}}
                />
                <Area type="monotone" dataKey="avg" stroke="var(--color-text-muted)" strokeWidth={2} strokeDasharray="4 4" fill="none" />
                <Area type="monotone" dataKey="score" stroke="var(--color-primary)" strokeWidth={4} fillOpacity={1} fill="url(#colorScore)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Mood Selector Section */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <MoodSelector />
          
          {/* Quick Action */}
          <div style={{ 
            backgroundColor: 'var(--color-accent-yellow)', 
            padding: '1.5rem', 
            borderRadius: '24px', 
            display: 'flex', 
            justifyContent: 'space-between',
            alignItems: 'center',
            cursor: 'pointer',
            transition: 'transform 0.2s ease',
            boxShadow: 'var(--shadow-sm)'
          }}>
            <div>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--color-primary)', marginBottom: '0.2rem' }}>Morning Check-in</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--color-primary)', opacity: 0.8, fontWeight: 600 }}>2 mins remaining</p>
            </div>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--shadow-sm)' }}>
              <ArrowRight size={20} color="var(--color-primary)" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
