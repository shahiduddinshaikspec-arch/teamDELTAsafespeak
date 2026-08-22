import React, { useState, useEffect, useRef } from 'react';
import { Send, Image as ImageIcon, Smile, MoreVertical } from 'lucide-react';

const ChatBubble = ({ text, isOwn, translationLabel, avatar }) => (
  <div style={{
    display: 'flex',
    gap: '1rem',
    flexDirection: isOwn ? 'row-reverse' : 'row',
    alignItems: 'flex-end',
    marginBottom: '1.5rem',
    width: '100%',
    animation: 'fadeIn 0.3s ease'
  }}>
    {!isOwn && (
      <div style={{ 
        width: '40px', height: '40px', borderRadius: '50%', 
        backgroundColor: 'var(--color-secondary)', flexShrink: 0, display: 'flex', 
        alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem',
        boxShadow: 'var(--shadow-sm)'
      }}>
        {avatar}
      </div>
    )}
    
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: isOwn ? 'flex-end' : 'flex-start', maxWidth: '75%' }}>
      {translationLabel && !isOwn && (
        <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--color-accent-purple)', marginBottom: '0.4rem', marginLeft: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          {translationLabel}
        </span>
      )}
      <div style={{
        backgroundColor: isOwn ? 'var(--color-primary)' : 'white',
        color: isOwn ? 'white' : 'var(--color-text-main)',
        padding: '1rem 1.25rem',
        borderRadius: '24px',
        borderBottomRightRadius: isOwn ? '4px' : '24px',
        borderBottomLeftRadius: !isOwn ? '4px' : '24px',
        boxShadow: 'var(--shadow-sm)',
        fontWeight: 600,
        fontSize: '1.05rem',
        border: isOwn ? 'none' : '1px solid rgba(0,0,0,0.05)',
        lineHeight: 1.5
      }}>
        {text}
      </div>
    </div>
  </div>
);

const ChatApp = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: "I just feel completely overwhelmed by everything right now. School, family, everything is too much.", isOwn: true },
    { id: 2, text: "I hear you, and it is completely normal to feel that way. When everything piles up, it can feel like you're carrying the weight of the world.", isOwn: false, translationLabel: "Anonymous Peer ✨", avatar: "🤖" },
    { id: 3, text: "Yeah, exactly. I just wish I could pause time for a bit to catch my breath.", isOwn: true },
    { id: 4, text: "That's a very valid feeling. While we can't pause time, maybe we can practice a quick 2-minute grounding exercise together right now. Would you be open to that?", isOwn: false, translationLabel: "Anonymous Peer ✨", avatar: "🤖" },
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    setMessages([...messages, { id: Date.now(), text: input, isOwn: true }]);
    setInput('');
  };

  return (
    <div style={{ 
      display: 'flex', flexDirection: 'column', height: '100%', 
      backgroundColor: 'var(--color-secondary)', borderRadius: 'inherit'
    }}>
      {/* Chat Header */}
      <div style={{ 
        display: 'flex', justifyContent: 'space-between', alignItems: 'center', 
        padding: '1.5rem', backgroundColor: 'white', borderBottom: '1px solid rgba(0,0,0,0.05)',
        borderTopLeftRadius: 'inherit', borderTopRightRadius: 'inherit', zIndex: 10
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
           <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'var(--color-accent-purple)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--shadow-sm)' }}>
             <span style={{ fontSize: '1.4rem' }}>🤖</span>
           </div>
           <div>
             <div style={{ fontWeight: '800', fontSize: '1.2rem', color: 'var(--color-primary)' }}>Anonymous Peer</div>
             <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--color-text-muted)', fontWeight: 700 }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--color-accent-green)' }}></div>
                Active Now • SafeSpace Enabled
             </div>
           </div>
        </div>
        <button className="btn" style={{ backgroundColor: 'transparent', padding: '0.5rem', color: 'var(--color-text-muted)' }}>
          <MoreVertical size={24} />
        </button>
      </div>

      {/* Chat Messages */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '2rem 1.5rem', display: 'flex', flexDirection: 'column' }}>
        {messages.map((msg) => (
          <ChatBubble key={msg.id} {...msg} />
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Chat Input */}
      <div style={{ padding: '1.5rem', backgroundColor: 'white', borderTop: '1px solid rgba(0,0,0,0.05)', borderBottomLeftRadius: 'inherit', borderBottomRightRadius: 'inherit' }}>
        <form onSubmit={handleSend} style={{ 
          display: 'flex', gap: '0.75rem', backgroundColor: 'var(--color-secondary)',
          padding: '0.5rem', borderRadius: '32px', alignItems: 'center',
          border: '2px solid rgba(0,0,0,0.02)'
        }}>
          <button type="button" style={{ background: 'none', border: 'none', color: 'var(--color-text-muted)', padding: '0.5rem', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
            <ImageIcon size={22} />
          </button>
          
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message..." 
            style={{
              flex: 1, padding: '0.75rem 0.5rem', border: 'none', outline: 'none',
              fontFamily: 'inherit', fontWeight: 600, color: 'var(--color-text-main)',
              backgroundColor: 'transparent', fontSize: '1rem'
            }}
          />
          
          <button type="button" style={{ background: 'none', border: 'none', color: 'var(--color-text-muted)', padding: '0.5rem', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
            <Smile size={22} />
          </button>

          <button type="submit" style={{ 
            backgroundColor: input.trim() ? 'var(--color-primary)' : 'rgba(90,64,51,0.2)', 
            color: 'white', border: 'none', borderRadius: '50%', width: '40px', height: '40px',
            display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: input.trim() ? 'pointer' : 'default',
            transition: 'all 0.2s ease', transform: input.trim() ? 'scale(1)' : 'scale(0.95)'
          }}>
            <Send size={18} style={{ marginLeft: '2px' }} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatApp;
