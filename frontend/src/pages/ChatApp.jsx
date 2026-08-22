import React, { useState, useEffect, useRef } from 'react';
import { Send, Image as ImageIcon, Smile, MoreVertical, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';
import DecryptedText from '../components/DecryptedText';

const ChatBubble = ({ text, isOwn, translationLabel, avatar }) => (
  <motion.div 
    initial={{ scale: 0.9, opacity: 0, y: 15 }}
    animate={{ scale: 1, opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
    style={{
      display: 'flex',
      gap: '1rem',
      flexDirection: isOwn ? 'row-reverse' : 'row',
      alignItems: 'flex-end',
      marginBottom: '1.5rem',
      width: '100%'
    }}
  >
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
        lineHeight: 1.5,
        fontWeight: 600,
        fontSize: '0.95rem'
      }}>
        {!isOwn ? (
          <DecryptedText 
            text={text}
            animateOn="view"
            sequential={true}
            speed={25}
            revealDirection="start"
          />
        ) : (
          text
        )}
      </div>
    </div>
  </motion.div>
);

const TypingIndicator = () => (
  <div style={{
    display: 'flex',
    gap: '1rem',
    alignItems: 'flex-end',
    marginBottom: '1.5rem',
    width: '100%',
    animation: 'fadeIn 0.3s ease'
  }}>
    <div style={{ 
      width: '40px', height: '40px', borderRadius: '50%', 
      backgroundColor: 'var(--color-secondary)', flexShrink: 0, display: 'flex', 
      alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem',
      boxShadow: 'var(--shadow-sm)'
    }}>
      🤖
    </div>
    
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
      <div style={{
        backgroundColor: 'white',
        padding: '1rem 1.25rem',
        borderRadius: '24px',
        borderBottomLeftRadius: '4px',
        boxShadow: 'var(--shadow-sm)',
        border: '1px solid rgba(0,0,0,0.05)',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem'
      }}>
        <Loader2 className="animate-spin" size={18} color="var(--color-text-muted)" />
        <span style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', fontWeight: 600 }}>Peer is typing...</span>
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
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // Use environment variable for the API key in Vercel (Create a .env.local file locally for testing!)
  const GROQ_API_KEY = import.meta.env.VITE_GROQ_API_KEY;

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim() || isTyping) return;
    
    const userMessage = input.trim();
    setInput('');
    
    // Add user message to UI immediately
    const newUserMessage = { id: Date.now(), text: userMessage, isOwn: true };
    setMessages(prev => [...prev, newUserMessage]);
    
    setIsTyping(true);

    try {
      // Prepare conversation history for the API
      const conversationHistory = messages.map(msg => ({
        role: msg.isOwn ? "user" : "assistant",
        content: msg.text
      }));
      
      // Append the new user message
      conversationHistory.push({ role: "user", content: userMessage });

      // Call Groq API
      const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${GROQ_API_KEY}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: "qwen/qwen3.6-27b",
          max_tokens: 2048,
          messages: [
            {
              role: "system",
              content: "You are an empathetic, supportive, and anonymous peer in a mental health safe space. You listen without judgment and validate feelings. IMPORTANT LANGUAGE RULE: You MUST reply in the EXACT SAME LANGUAGE and script as the user. If the user types in English, reply in English. If the user types in Hinglish (Hindi written in English letters), you MUST reply in Hinglish. Keep your responses very concise (1-3 sentences max) and conversational. Do not give medical advice."
            },
            ...conversationHistory
          ],
          temperature: 0.7,
        })
      });

      const data = await response.json();

      if (response.ok) {
        let aiText = data.choices[0]?.message?.content || "I'm here for you.";
        
        // Qwen models sometimes return a <think> block, so we strip it out
        if (aiText.includes('<think>')) {
          if (aiText.includes('</think>')) {
            aiText = aiText.split('</think>')[1].trim();
          } else {
            aiText = "I'm here and listening, but I had trouble processing that. Can we take it one step at a time?";
          }
        }

        // Add AI response to UI
        setMessages(prev => [...prev, {
          id: Date.now() + 1,
          text: aiText,
          isOwn: false,
          translationLabel: "Anonymous Peer ✨",
          avatar: "🤖"
        }]);
      } else {
        console.error("API Error Response:", data);
        setMessages(prev => [...prev, {
          id: Date.now() + 1,
          text: "I'm sorry, I'm having trouble connecting right now, but please know I'm still listening. (API Error: " + (data.error?.message || "Unknown error") + ")",
          isOwn: false,
          translationLabel: "Connection Error",
          avatar: "⚠️"
        }]);
      }

    } catch (error) {
      console.error("Error communicating with AI Peer:", error);
      // Fallback message in case of error
      setMessages(prev => [...prev, {
        id: Date.now() + 1,
        text: "I'm sorry, I'm having trouble connecting right now, but please know I'm still listening.",
        isOwn: false,
        translationLabel: "Connection Error",
        avatar: "⚠️"
      }]);
    } finally {
      setIsTyping(false);
    }
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
                Active Now • AI SafeSpace
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
        {isTyping && <TypingIndicator />}
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
            disabled={isTyping}
            placeholder={isTyping ? "Peer is typing..." : "Type a message..."} 
            style={{
              flex: 1, padding: '0.75rem 0.5rem', border: 'none', outline: 'none',
              fontFamily: 'inherit', fontWeight: 600, color: 'var(--color-text-main)',
              backgroundColor: 'transparent', fontSize: '1rem',
              opacity: isTyping ? 0.5 : 1
            }}
          />
          
          <button type="button" style={{ background: 'none', border: 'none', color: 'var(--color-text-muted)', padding: '0.5rem', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
            <Smile size={22} />
          </button>

          <button type="submit" disabled={isTyping || !input.trim()} style={{ 
            backgroundColor: (input.trim() && !isTyping) ? 'var(--color-primary)' : 'rgba(90,64,51,0.2)', 
            color: 'white', border: 'none', borderRadius: '50%', width: '40px', height: '40px',
            display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: (input.trim() && !isTyping) ? 'pointer' : 'default',
            transition: 'all 0.2s ease', transform: (input.trim() && !isTyping) ? 'scale(1)' : 'scale(0.95)'
          }}>
            <Send size={18} style={{ marginLeft: '2px' }} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatApp;
