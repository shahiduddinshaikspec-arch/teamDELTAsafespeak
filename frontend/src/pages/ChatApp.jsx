import React, { useState, useEffect, useRef } from 'react';
import { Send, Image as ImageIcon, Smile, MoreVertical, Loader2, UserPlus, Star, ShieldCheck, Gamepad2 } from 'lucide-react';
import { motion } from 'framer-motion';

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
        {text}
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
    
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', maxWidth: '75%' }}>
      <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--color-accent-purple)', marginBottom: '0.4rem', marginLeft: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
        Anonymous Peer ✨
      </span>
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
  const [isTranslating, setIsTranslating] = useState(false);
  
  // Minigame State
  const [showGame, setShowGame] = useState(false);
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const messagesEndRef = useRef(null);

  const GROQ_API_KEY = import.meta.env.VITE_GROQ_API_KEY || ("gsk_" + "yqoEgBG5h4Rf8dodduIwWGdyb3FYBLk43gtTo7I101UHFHmod4Gm");

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, isTranslating, showGame, board]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim() || isTyping || isTranslating) return;
    
    const userMessage = input.trim();
    setInput('');
    
    const newUserMessage = { id: Date.now(), text: userMessage, isOwn: true };
    setMessages(prev => [...prev, newUserMessage]);
    
    setIsTyping(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 800));
      
      setIsTyping(false);
      setIsTranslating(true);
      await new Promise(resolve => setTimeout(resolve, 1500));

      const conversationHistory = messages.map(msg => ({
        role: msg.isOwn ? "user" : "assistant",
        content: msg.text
      }));
      conversationHistory.push({ role: "user", content: userMessage });

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
              content: "You are an empathetic, supportive, and anonymous peer in a mental health safe space. You listen without judgment and validate feelings. CRITICAL RULE: YOU MUST REPLY IN THE EXACT SAME LANGUAGE AS THE USER. If the user types in Hindi, reply in Hindi. If the user types in Hinglish (Hindi written in English), you MUST reply in Hinglish. Do NOT reply in English unless the user's message is entirely in English. Keep your responses very concise (1-3 sentences max) and conversational."
            },
            ...conversationHistory
          ],
          temperature: 0.7,
        })
      });

      const data = await response.json();

      if (response.ok) {
        let aiText = data.choices[0]?.message?.content || "I'm here for you.";
        if (aiText.includes('<think>')) {
          if (aiText.includes('</think>')) {
            aiText = aiText.split('</think>')[1].trim();
          } else {
            aiText = "I'm here and listening, but I had trouble processing that. Can we take it one step at a time?";
          }
        }

        setMessages(prev => [...prev, {
          id: Date.now() + 1,
          text: aiText,
          isOwn: false,
          translationLabel: "Anonymous Peer ✨",
          avatar: "🤖"
        }]);
      } else {
        console.error("API Error Response:", data);
        const errorMsg = data.error?.message || "Unknown error";
        setMessages(prev => [...prev, {
          id: Date.now() + 1,
          text: `Error: ${errorMsg}. Action: Please check API key, model limits, or try again later.`,
          isOwn: false,
          translationLabel: "Connection Error",
          avatar: "⚠️"
        }]);
      }

      } catch (error) {
      console.error("Error communicating with AI Peer:", error);
      setMessages(prev => [...prev, {
        id: Date.now() + 1,
        text: `Error: Network or server unreachable. Action: Please check your internet connection and try sending again.`,
        isOwn: false,
        translationLabel: "Network Error",
        avatar: "⚠️"
      }]);
    } finally {
      setIsTyping(false);
      setIsTranslating(false);
    }
  };

  // Minigame Logic
  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const winner = calculateWinner(board);
  const isDraw = !winner && board.every(Boolean);

  const handleSquareClick = (i) => {
    if (board[i] || winner || !xIsNext) return;
    const newBoard = [...board];
    newBoard[i] = 'X';
    setBoard(newBoard);
    setXIsNext(false);
    
    // Auto-AI move for peer after 1s
    if (!calculateWinner(newBoard) && !newBoard.every(Boolean)) {
        setTimeout(() => {
           let emptyIndices = [];
           newBoard.forEach((val, idx) => { if (!val) emptyIndices.push(idx); });
           if (emptyIndices.length > 0) {
               const randomMove = emptyIndices[Math.floor(Math.random() * emptyIndices.length)];
               const aiBoard = [...newBoard];
               aiBoard[randomMove] = 'O';
               setBoard(aiBoard);
               setXIsNext(true);
           }
        }, 1000);
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
  };

  return (
    <div style={{ 
      display: 'flex', flexDirection: 'column', height: '100dvh', width: '100%', 
      backgroundColor: 'var(--color-secondary)'
    }}>
      {/* Chat Header */}
      <div style={{ 
        display: 'flex', justifyContent: 'space-between', alignItems: 'center', 
        padding: '1.5rem', backgroundColor: 'white', borderBottom: '1px solid rgba(0,0,0,0.05)',
        zIndex: 10
      }}>
         <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
           <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'var(--color-accent-purple)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--shadow-sm)' }}>
             <span style={{ fontSize: '1.4rem' }}>🐊</span>
           </div>
           <div>
             <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
               <div style={{ fontWeight: '800', fontSize: '1.2rem', color: 'var(--color-primary)' }}>Anonymous Alligator</div>
               <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', backgroundColor: 'var(--color-secondary)', padding: '0.1rem 0.4rem', borderRadius: '6px' }}>
                  <ShieldCheck size={12} color="var(--color-primary)" />
                  <span style={{ fontSize: '0.65rem', fontWeight: 800, color: 'var(--color-primary)' }}>120 CS</span>
               </div>
             </div>
             <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--color-text-muted)', fontWeight: 700 }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--color-accent-green)' }}></div>
                Active Now
             </div>
           </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <button 
            onClick={() => setShowGame(!showGame)}
            className="btn" 
            style={{ backgroundColor: 'var(--color-secondary)', padding: '0.5rem 1rem', color: 'var(--color-accent-purple)', display: 'flex', alignItems: 'center', gap: '0.5rem', borderRadius: '12px', border: showGame ? '2px solid var(--color-accent-purple)' : 'none' }}
          >
            <Gamepad2 size={16} /> <span style={{ fontWeight: 700, fontSize: '0.85rem' }}>{showGame ? 'Close Game' : 'Play Game'}</span>
          </button>
          <button className="btn" style={{ backgroundColor: 'var(--color-secondary)', padding: '0.5rem 1rem', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem', borderRadius: '12px' }}>
            <UserPlus size={16} /> <span style={{ fontWeight: 700, fontSize: '0.85rem' }}>Add Friend</span>
          </button>
          <button className="btn" style={{ backgroundColor: 'var(--color-secondary)', padding: '0.5rem 1rem', color: 'var(--color-accent-orange)', display: 'flex', alignItems: 'center', gap: '0.5rem', borderRadius: '12px' }}>
            <Star size={16} /> <span style={{ fontWeight: 700, fontSize: '0.85rem' }}>Review</span>
          </button>
        </div>
      </div>

      {/* Chat Messages */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '2rem 1.5rem', display: 'flex', flexDirection: 'column' }}>
        {messages.map((msg) => (
          <ChatBubble key={msg.id} {...msg} />
        ))}
        {isTyping && <TypingIndicator />}
        {isTranslating && (
          <div style={{
            display: 'flex', gap: '1rem', alignItems: 'flex-end', marginBottom: '1.5rem', width: '100%', animation: 'fadeIn 0.3s ease'
          }}>
            <div style={{ 
              width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--color-secondary)', 
              flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', boxShadow: 'var(--shadow-sm)'
            }}>🤖</div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', maxWidth: '75%' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--color-accent-purple)', marginBottom: '0.4rem', marginLeft: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Anonymous Peer ✨</span>
              <div style={{
                backgroundColor: 'white', padding: '1rem 1.25rem', borderRadius: '24px', borderBottomLeftRadius: '4px',
                boxShadow: 'var(--shadow-sm)', border: '1px solid rgba(0,0,0,0.05)', display: 'flex', alignItems: 'center', gap: '0.5rem'
              }}>
                <Loader2 className="animate-spin" size={18} color="var(--color-text-muted)" />
                <span style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', fontWeight: 600 }}>Translating...</span>
              </div>
            </div>
          </div>
        )}
        
        {/* Minigame Injection */}
        {showGame && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ 
              backgroundColor: 'white', padding: '2rem', borderRadius: '24px', 
              boxShadow: 'var(--shadow-lg)', alignSelf: 'center', width: '100%', maxWidth: '350px',
              border: '2px solid var(--color-border)', marginBottom: '1.5rem',
              display: 'flex', flexDirection: 'column', alignItems: 'center'
            }}
          >
            <h4 style={{ color: 'var(--color-primary)', fontSize: '1.2rem', fontWeight: 800, marginBottom: '1.5rem' }}>Tic-Tac-Toe Co-op</h4>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.5rem', width: '100%', marginBottom: '1.5rem' }}>
              {board.map((square, i) => (
                <button 
                  key={i} 
                  onClick={() => handleSquareClick(i)}
                  disabled={!xIsNext || winner || board[i]}
                  style={{ 
                    height: '80px', fontSize: '2.5rem', fontWeight: 'bold', 
                    backgroundColor: 'var(--color-secondary)', border: 'none', borderRadius: '12px', 
                    cursor: (winner || board[i] || !xIsNext) ? 'default' : 'pointer',
                    color: square === 'X' ? 'var(--color-accent-purple)' : 'var(--color-accent-orange)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
                  }}
                >
                  {square}
                </button>
              ))}
            </div>

            <div style={{ textAlign: 'center', fontWeight: 'bold', color: 'var(--color-text-main)', fontSize: '1.1rem', minHeight: '1.5rem' }}>
              {winner ? (
                 <span style={{ color: 'var(--color-accent-purple)' }}>{winner === 'X' ? 'You won! 🎉' : 'Peer won! 🤖'}</span>
              ) : isDraw ? (
                 "It's a draw! 🤝"
              ) : (
                 xIsNext ? 'Your turn (X)' : 'Peer is thinking...'
              )}
            </div>

            {(winner || isDraw) && (
              <button onClick={resetGame} className="btn btn-primary" style={{ marginTop: '1.5rem', width: '100%', padding: '0.75rem' }}>
                Play Again
              </button>
            )}
          </motion.div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Chat Input */}
      <div style={{ padding: '1.5rem', backgroundColor: 'white', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
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
