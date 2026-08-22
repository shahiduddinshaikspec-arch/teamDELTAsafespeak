import React, { useState } from 'react';

const ChatBubble = ({ text, isOwn, translationLabel, avatar }) => (
  <div style={{
    display: 'flex',
    gap: '1rem',
    flexDirection: isOwn ? 'row-reverse' : 'row',
    alignItems: 'flex-end',
    marginBottom: '1.5rem',
    width: '100%'
  }}>
    {!isOwn && (
      <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--color-primary-light)', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem' }}>
        {avatar}
      </div>
    )}
    
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: isOwn ? 'flex-end' : 'flex-start', maxWidth: '75%' }}>
      {translationLabel && !isOwn && (
        <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-text-muted)', marginBottom: '0.4rem', marginLeft: '0.5rem' }}>
          {translationLabel}
        </span>
      )}
      <div style={{
        backgroundColor: isOwn ? 'var(--color-primary)' : 'var(--color-bg-card)',
        color: isOwn ? 'var(--color-bg-page)' : 'var(--color-text-main)',
        padding: '1rem 1.25rem',
        borderRadius: 'var(--radius-lg)',
        borderBottomRightRadius: isOwn ? '4px' : 'var(--radius-lg)',
        borderBottomLeftRadius: !isOwn ? '4px' : 'var(--radius-lg)',
        boxShadow: 'var(--shadow-sm)',
        fontWeight: 600,
        fontSize: '1.05rem',
        border: isOwn ? 'none' : '2px solid rgba(0,0,0,0.02)'
      }}>
        {text}
      </div>
    </div>
  </div>
);

const ChatApp = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: "I hate my school teacher. I hate that stupid b****, I don't want to go to school anymore!", isOwn: true },
    { id: 2, text: "Teachers have a difficult job, but it sounds like you are feeling really overwhelmed. Want to talk about what happened?", isOwn: false, translationLabel: "Translated from Hindi ✨", avatar: "🤖" },
    { id: 3, text: "Thanks doc I just did a breathing session. I feel a bit better.", isOwn: true },
  ]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', maxHeight: 'calc(100vh - 4rem)' }}>
      {/* Chat Header */}
      <div className="card" style={{ 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        marginBottom: '1rem',
        backgroundColor: 'var(--color-bg-card)',
        padding: '1rem 1.5rem'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
           <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: 'var(--color-accent-green)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--shadow-sm)' }}>
             <span style={{ fontSize: '1.5rem' }}>🤖</span>
           </div>
           <div>
             <div style={{ fontWeight: '800', fontSize: '1.2rem' }}>Anonymous Peer AI</div>
             <div style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', fontWeight: 700 }}>SafeSpace Enabled • Translating</div>
           </div>
        </div>
        <button className="btn" style={{ backgroundColor: 'transparent', border: '2px solid rgba(0,0,0,0.05)', color: 'var(--color-text-main)' }}>End Chat</button>
      </div>

      {/* Chat Messages */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '1rem 0', display: 'flex', flexDirection: 'column' }}>
        {messages.map((msg) => (
          <ChatBubble 
            key={msg.id}
            text={msg.text}
            isOwn={msg.isOwn}
            translationLabel={msg.translationLabel}
            avatar={msg.avatar}
          />
        ))}
      </div>

      {/* Chat Input */}
      <div style={{ marginTop: '1rem', display: 'flex', gap: '0.75rem' }}>
        <input 
          type="text" 
          placeholder="Type a message..." 
          style={{
            flex: 1,
            padding: '1rem 1.5rem',
            borderRadius: 'var(--radius-pill)',
            border: '2px solid rgba(0,0,0,0.05)',
            outline: 'none',
            fontFamily: 'inherit',
            fontWeight: 600,
            color: 'var(--color-text-main)',
            backgroundColor: 'var(--color-bg-card)'
          }}
        />
        <button className="btn btn-primary" style={{ padding: '0.5rem 2rem' }}>Send</button>
      </div>
    </div>
  );
};

export default ChatApp;
