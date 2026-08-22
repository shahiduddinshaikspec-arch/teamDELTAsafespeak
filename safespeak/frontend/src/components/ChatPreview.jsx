import React from 'react';

const ChatBubble = ({ text, isOwn, translationLabel }) => (
  <div style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: isOwn ? 'flex-end' : 'flex-start',
    marginBottom: '1rem',
    width: '100%'
  }}>
    {translationLabel && !isOwn && (
      <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-text-muted)', marginBottom: '0.4rem', marginLeft: '0.5rem' }}>
        {translationLabel}
      </span>
    )}
    <div style={{
      backgroundColor: isOwn ? 'var(--color-primary)' : 'white',
      color: isOwn ? 'white' : 'var(--color-primary)',
      padding: '1rem 1.25rem',
      borderRadius: 'var(--radius-xl)',
      borderBottomRightRadius: isOwn ? '4px' : 'var(--radius-xl)',
      borderBottomLeftRadius: !isOwn ? '4px' : 'var(--radius-xl)',
      maxWidth: '85%',
      boxShadow: 'var(--shadow-sm)',
      fontWeight: 600,
      fontSize: '1.05rem',
      border: isOwn ? 'none' : '2px solid rgba(90,64,51,0.05)'
    }}>
      {text}
    </div>
  </div>
);

const ChatPreview = () => {
  return (
    <section style={{ padding: 'var(--spacing-section) 0', backgroundColor: 'var(--color-bg-page)' }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h2 className="section-title">Experience SafeSpeak</h2>
        <p className="section-subtitle">See how seamless translation breaks down language barriers in real-time.</p>
        
        <div style={{
          width: '100%',
          maxWidth: '500px',
          backgroundColor: 'var(--color-secondary)',
          borderRadius: 'var(--radius-xl)',
          boxShadow: 'var(--shadow-lg)',
          overflow: 'hidden',
          border: '4px solid white'
        }}>
          {/* Chat Header */}
          <div style={{
            padding: '1.5rem',
            backgroundColor: 'var(--color-accent-yellow)',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            borderBottom: '4px solid white'
          }}>
            <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--shadow-sm)' }}>
               <span style={{ fontSize: '1.5rem' }}>😊</span>
            </div>
            <div>
              <div style={{ fontWeight: '800', color: 'var(--color-primary)', fontSize: '1.2rem' }}>Anonymous Peer</div>
              <div style={{ fontSize: '0.9rem', color: 'var(--color-primary)', opacity: 0.8, fontWeight: 700 }}>Speaks Hindi • Matching Issue</div>
            </div>
          </div>

          {/* Chat Body */}
          <div style={{ padding: '1.5rem', minHeight: '350px', display: 'flex', flexDirection: 'column' }}>
            <ChatBubble 
              text="Hi, I've been feeling really overwhelmed with my exams lately. It's hard to sleep." 
              isOwn={true} 
            />
            <ChatBubble 
              text="Mujhe bhi aisa hi lag raha tha pichle mahine. Tum akele nahi ho." 
              isOwn={false}
              translationLabel="Hindi 🇮🇳"
            />
            <ChatBubble 
              text="I was feeling exactly the same way last month. You are not alone." 
              isOwn={false}
              translationLabel="Translated to English ✨"
            />
          </div>

          {/* Chat Input */}
          <div style={{ padding: '1.5rem', display: 'flex', gap: '0.75rem', backgroundColor: 'white' }}>
            <input 
              type="text" 
              placeholder="Type a message..." 
              style={{
                flex: 1,
                padding: '1rem 1.5rem',
                borderRadius: 'var(--radius-pill)',
                border: '2px solid var(--color-secondary)',
                outline: 'none',
                fontFamily: 'inherit',
                fontWeight: 600,
                color: 'var(--color-primary)',
                backgroundColor: 'var(--color-secondary)'
              }}
              disabled
            />
            <button className="btn btn-primary" style={{ padding: '0.5rem 1.5rem', borderRadius: 'var(--radius-pill)' }}>Send</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatPreview;
