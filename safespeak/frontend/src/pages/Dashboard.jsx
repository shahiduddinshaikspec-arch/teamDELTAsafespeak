import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { Activity, Smile, Frown, MessageCircle } from 'lucide-react';

const data = [
  { name: 'Mon', score: 60 },
  { name: 'Tue', score: 85 },
  { name: 'Wed', score: 40 },
  { name: 'Thu', score: 70 },
  { name: 'Fri', score: 90 },
  { name: 'Sat', score: 65 },
  { name: 'Sun', score: 80 },
];

const StatCard = ({ title, value, subtitle, bgColor, textColor = 'var(--color-primary)' }) => (
  <div className="card" style={{ backgroundColor: bgColor || 'var(--color-bg-card)', border: bgColor ? 'none' : undefined }}>
    <h3 style={{ fontSize: '1rem', color: textColor, opacity: 0.8, marginBottom: '0.5rem' }}>{title}</h3>
    <div style={{ fontSize: '2.5rem', fontWeight: 800, color: textColor, marginBottom: '0.25rem' }}>{value}</div>
    {subtitle && <div style={{ fontSize: '0.9rem', color: textColor, opacity: 0.7, fontWeight: 600 }}>{subtitle}</div>}
  </div>
);

const Dashboard = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-xl)' }}>
      <header>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Hi, Anonymous_7!</h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--color-text-muted)', fontWeight: 600 }}>Here's your wellness overview this week.</p>
      </header>

      <div className="grid-stats">
        <StatCard 
          title="SafeSpeak Score" 
          value="80" 
          subtitle="Mentally healthy" 
          bgColor="var(--color-accent-green)" 
        />
        <StatCard 
          title="Total Conversations" 
          value="1,571" 
          subtitle="32 left this month" 
          bgColor="var(--color-primary)"
          textColor="white"
        />
        <StatCard 
          title="Mindful Hours" 
          value="2.5h" 
          subtitle="Out of 8h goal" 
          bgColor="var(--color-accent-yellow)" 
        />
      </div>

      <div className="grid-stats" style={{ gridTemplateColumns: '2fr 1fr' }}>
        {/* Chart Card */}
        <div className="card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1.25rem' }}>Mood History</h3>
            <span style={{ padding: '0.25rem 0.75rem', backgroundColor: 'rgba(90,64,51,0.05)', borderRadius: 'var(--radius-pill)', fontSize: '0.8rem', fontWeight: 700 }}>Weekly</span>
          </div>
          <div style={{ height: '250px', width: '100%' }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: 'var(--color-text-muted)', fontWeight: 600}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: 'var(--color-text-muted)'}} />
                <Tooltip 
                  cursor={{fill: 'rgba(90,64,51,0.05)'}}
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: 'var(--shadow-md)' }}
                />
                <Bar dataKey="score" radius={[4, 4, 4, 4]}>
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.score > 70 ? 'var(--color-accent-green)' : entry.score > 50 ? 'var(--color-accent-yellow)' : 'var(--color-accent-orange)'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Action Card */}
        <div className="card" style={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center', backgroundColor: 'var(--color-accent-purple)', border: 'none' }}>
           <div style={{ width: '80px', height: '80px', backgroundColor: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', boxShadow: 'var(--shadow-sm)' }}>
             <MessageCircle size={40} color="var(--color-primary)" />
           </div>
           <h3 style={{ fontSize: '1.5rem', color: 'var(--color-primary)', marginBottom: '0.5rem' }}>Talk to Peer</h3>
           <p style={{ color: 'var(--color-primary)', opacity: 0.8, fontWeight: 600, marginBottom: '1.5rem' }}>Get matched anonymously</p>
           <button className="btn btn-primary" style={{ width: '100%' }}>Start Conversation</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
