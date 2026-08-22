import React, { useState, useEffect } from 'react';
import { Heart, MessageCircle, Share2, AlertCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';

const PostCard = ({ id, content, time, category, likes, comments, bgColor, onLike }) => (
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
      <button 
        onClick={() => onLike(id, likes)}
        style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-primary)', fontWeight: 700, transition: 'transform 0.1s ease' }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
      >
        <Heart size={20} /> {likes} Send Hug
      </button>
      <button style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text-muted)', fontWeight: 600 }}>
        <MessageCircle size={20} /> {comments} Relate
      </button>
    </div>
  </div>
);

const dummyPosts = [
  { id: 'd1', content: "Just wanted to say that if you're struggling with final exams right now, you aren't alone. Take a deep breath, you've got this.", time: "2h ago", category: "Support", likes_count: 24, comments_count: 5, bg: "var(--color-secondary)" },
  { id: 'd2', content: "I finally managed to get out of bed before noon today. It feels like a small win, but I'll take it.", time: "5h ago", category: "Milestones", likes_count: 112, comments_count: 18, bg: "var(--color-bg-card)" },
  { id: 'd3', content: "Does anyone else feel like their anxiety is worse in the evenings? Any tips for winding down?", time: "1d ago", category: "Advice", likes_count: 45, comments_count: 22, bg: "var(--color-secondary)" }
];

const Community = () => {
  const [posts, setPosts] = useState(dummyPosts);
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);
  const [dbError, setDbError] = useState(null);

  const fetchPosts = async () => {
    try {
      const { data, error } = await supabase
        .from('posts')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(20);

      if (error) {
        if (error.code !== '42P01') setDbError(`Failed to fetch posts: ${error.message}`);
        return;
      }
      if (data && data.length > 0) {
        setPosts(data.map(p => ({
          ...p,
          time: new Date(p.created_at).toLocaleTimeString(undefined, { hour: 'numeric', minute: '2-digit' }),
          bg: 'var(--color-bg-card)'
        })));
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handlePost = async () => {
    if (!content.trim()) return;
    setLoading(true);
    setDbError(null);
    try {
      const { data: { user }, error: authError } = await supabase.auth.getUser();
      if (authError || !user) {
        setDbError('Authentication required to post.');
        setLoading(false);
        return;
      }

      const { error } = await supabase.from('posts').insert([
        { user_id: user.id, content: content.trim(), category: 'General' }
      ]);

      if (error) {
        if (error.code === '42P01') {
          setDbError('Database tables missing. Please run the provided SQL schema in Supabase.');
        } else {
          setDbError(`Failed to post: ${error.message}`);
        }
      } else {
        setContent('');
        fetchPosts();
      }
    } catch (err) {
      setDbError(`Unexpected error: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleLike = async (id, currentLikes) => {
    if (id.startsWith('d')) return; // ignore dummy posts

    setPosts(prev => prev.map(p => p.id === id ? { ...p, likes_count: currentLikes + 1 } : p));
    await supabase.from('posts').update({ likes_count: currentLikes + 1 }).eq('id', id);
  };

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
        boxShadow: 'var(--shadow-sm)',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem'
      }}>
        {dbError && (
          <div style={{ padding: '0.5rem', borderRadius: '8px', backgroundColor: '#fee2e2', color: '#991b1b', fontSize: '0.85rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <AlertCircle size={14} /> {dbError}
          </div>
        )}
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'var(--color-accent-green)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem', flexShrink: 0 }}>
            🌿
          </div>
          <input 
            type="text" 
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Share what's on your mind anonymously..." 
            style={{
              flex: 1, padding: '1rem', border: 'none', backgroundColor: 'var(--color-secondary)',
              borderRadius: 'var(--radius-pill)', outline: 'none', fontFamily: 'inherit',
              fontWeight: 600, fontSize: '1rem', color: 'var(--color-text-main)'
            }}
            onKeyDown={(e) => e.key === 'Enter' && handlePost()}
          />
          <button 
            className="btn btn-primary" 
            onClick={handlePost} 
            disabled={loading || !content.trim()}
            style={{ padding: '0.75rem 1.5rem', borderRadius: 'var(--radius-pill)', opacity: (loading || !content.trim()) ? 0.6 : 1 }}
          >
            {loading ? '...' : 'Post'}
          </button>
        </div>
      </div>

      {/* Feed */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {posts.map((post, i) => (
          <PostCard 
            key={post.id}
            id={post.id}
            content={post.content}
            time={post.time}
            category={post.category}
            likes={post.likes_count}
            comments={post.comments_count}
            bgColor={post.bg || (i % 2 === 0 ? 'var(--color-secondary)' : 'var(--color-bg-card)')}
            onLike={handleLike}
          />
        ))}
      </div>
      
    </div>
  );
};

export default Community;
