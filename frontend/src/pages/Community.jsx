import React from 'react';
import { Heart, MessageCircle, Share2, AlertCircle } from 'lucide-react';

const PostCard = ({ content, time, category, likes, comments, bgColor }) => (
  <div style={{ 
    backgroundColor: bgColor || 'var(--color-bg-card)', 
    padding: '2rem', 
    borderRadius: '24px', 
    display: 'flex', 
    flexDirection: 'column', 
    gap: '1rem',
    boxShadow: bgColor === 'var(--color-bg-card)' ? 'var(--shadow-sm)' : 'none',
    border: bgColor === 'var(--color-bg-card)' ? '2px solid rgba(0,0,0,0.02)' : 'none',
  }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--color-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem' }}>
          👻
        </div>
        <div>
          <div style={{ fontWeight: 800, color: 'var(--color-primary)' }}>Anonymous Peer</div>
          <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', fontWeight: 600 }}>{time}</div>
        </div>
      </div>
      <span style={{ padding: '0.25rem 0.75rem', backgroundColor: 'rgba(255,255,255,0.5)', borderRadius: '12px', fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-primary)', border: '1px solid rgba(0,0,0,0.05)' }}>
        {category}
      </span>
    </div>
    
    <p style={{ fontSize: '1.1rem', color: 'var(--color-text-main)', lineHeight: 1.6, fontWeight: 500 }}>
      {content}
    </p>
    
    <div style={{ display: 'flex', gap: '1.5rem', marginTop: '0.5rem', borderTop: '1px solid rgba(0,0,0,0.05)', paddingTop: '1rem' }}>
      <button style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-primary)', fontWeight: 700 }}>
        <Heart size={20} /> {likes} Send Hug
      </button>
      <button style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text-muted)', fontWeight: 600 }}>
        <MessageCircle size={20} /> {comments} Relate
      </button>
    </div>
  </div>
);

const Community = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', width: '100%', maxWidth: '800px', margin: '0 auto' }}>
      
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'var(--color-accent-orange)', padding: '2rem', borderRadius: '32px' }}>
        <div>
          <h2 style={{ fontSize: '2.5rem', letterSpacing: '-0.03em', color: 'var(--color-primary)', marginBottom: '0.25rem' }}>The Circle</h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--color-primary)', opacity: 0.8, fontWeight: 600 }}>A safe, moderated space to share and support.</p>
        </div>
        <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--shadow-sm)' }}>
          <Heart size={40} color="var(--color-primary)" />
        </div>
      </div>

      {/* Create Post */}
      <div style={{ 
        backgroundColor: 'var(--color-bg-card)', 
        padding: '1.5rem', 
        borderRadius: '24px', 
        border: '2px solid rgba(0,0,0,0.02)',
        boxShadow: 'var(--shadow-sm)'
      }}>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'var(--color-accent-green)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem' }}>
            🌿
          </div>
          <input 
            type="text" 
            placeholder="Share what's on your mind anonymously..." 
            style={{
              flex: 1, padding: '1rem', border: 'none', backgroundColor: 'var(--color-secondary)',
              borderRadius: 'var(--radius-pill)', outline: 'none', fontFamily: 'inherit',
              fontWeight: 600, fontSize: '1rem', color: 'var(--color-text-main)'
            }}
          />
          <button className="btn btn-primary" onClick={() => window.location.href='/login'} style={{ padding: '0.75rem 1.5rem', borderRadius: 'var(--radius-pill)' }}>Post</button>
        </div>
      </div>

      {/* Feed */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <PostCard 
          content="Just wanted to say that if you're struggling with final exams right now, you aren't alone. Take a deep breath, you've got this."
          time="2h ago"
          category="Support"
          likes={24}
          comments={5}
          bgColor="var(--color-secondary)"
        />
        <PostCard 
          content="I finally managed to get out of bed before noon today. It feels like a small win, but I'll take it."
          time="5h ago"
          category="Milestones"
          likes={112}
          comments={18}
          bgColor="var(--color-bg-card)"
        />
        <PostCard 
          content="Does anyone else feel like their anxiety is worse in the evenings? Any tips for winding down?"
          time="1d ago"
          category="Advice"
          likes={45}
          comments={22}
          bgColor="var(--color-secondary)"
        />
      </div>
      
    </div>
  );
};

export default Community;
