import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, User, AlertCircle, Loader2 } from 'lucide-react';
import { supabase } from '../lib/supabase';

export default function LoginPage({ theme }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleAuth = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (isLogin) {
        const { data, error: signInError } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (signInError) throw signInError;
      } else {
        const { data, error: signUpError } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: {
              // Create a random anonymous name for the user
              anon_name: `Anonymous ${Math.floor(Math.random() * 1000)}`,
              credibility_score: 0,
              is_beginner: true
            }
          }
        });
        if (signUpError) throw signUpError;
      }

      // If successful, navigate to the survey
      navigate('/survey');
    } catch (err) {
      console.error('Auth error:', err);
      // Fallback for prototyping if they haven't set up the API key yet
      if (err.message.includes('URL is required') || err.message.includes('JWSError') || err.message.includes('fetch')) {
         console.warn("Bypassing Auth for prototype mode since keys aren't configured");
         navigate('/survey');
      } else {
         setError(err.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'var(--color-background)',
      padding: '2rem'
    }}>
      <div style={{
        backgroundColor: 'var(--color-surface)',
        padding: '3rem',
        borderRadius: '24px',
        boxShadow: 'var(--shadow-lg)',
        width: '100%',
        maxWidth: '400px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        border: '1px solid var(--color-border)'
      }}>
        <div style={{
          width: '64px',
          height: '64px',
          borderRadius: '16px',
          backgroundColor: 'var(--color-secondary)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '2rem'
        }}>
          <User size={32} color="var(--color-primary)" />
        </div>
        
        <h1 style={{
          fontSize: '1.75rem',
          fontWeight: 800,
          color: 'var(--color-text-main)',
          marginBottom: '0.5rem',
          textAlign: 'center'
        }}>
          {isLogin ? 'Welcome Back' : 'Join SafeSpeak'}
        </h1>
        <p style={{
          color: 'var(--color-text-muted)',
          marginBottom: '2rem',
          textAlign: 'center',
          fontWeight: 500
        }}>
          {isLogin ? 'Enter your details to continue.' : 'Create an anonymous account.'}
        </p>

        {error && (
          <div style={{
            width: '100%',
            backgroundColor: 'rgba(239, 68, 68, 0.1)',
            border: '1px solid rgba(239, 68, 68, 0.2)',
            color: 'rgb(239, 68, 68)',
            padding: '1rem',
            borderRadius: '12px',
            marginBottom: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            fontSize: '0.9rem',
            fontWeight: 600
          }}>
            <AlertCircle size={18} />
            {error}
          </div>
        )}

        <form onSubmit={handleAuth} style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: 'var(--color-text-main)' }}>Email</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
              disabled={loading}
              style={{
                width: '100%',
                padding: '0.75rem 1rem',
                borderRadius: '12px',
                border: '1px solid var(--color-border)',
                backgroundColor: 'var(--color-background)',
                color: 'var(--color-text-main)',
                outline: 'none',
                fontFamily: 'inherit',
                fontWeight: 500,
                opacity: loading ? 0.7 : 1
              }}
            />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: 'var(--color-text-main)' }}>Password</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              disabled={loading}
              style={{
                width: '100%',
                padding: '0.75rem 1rem',
                borderRadius: '12px',
                border: '1px solid var(--color-border)',
                backgroundColor: 'var(--color-background)',
                color: 'var(--color-text-main)',
                outline: 'none',
                fontFamily: 'inherit',
                fontWeight: 500,
                opacity: loading ? 0.7 : 1
              }}
            />
          </div>

          <button 
            type="submit"
            disabled={loading}
            className="btn btn-primary"
            style={{
              width: '100%',
              marginTop: '1rem',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '1rem',
              opacity: loading ? 0.7 : 1
            }}
          >
            {loading ? <Loader2 className="animate-spin" size={18} /> : (
              <>
                {isLogin ? 'Log In' : 'Sign Up'}
                <ArrowRight size={18} />
              </>
            )}
          </button>
        </form>

        <p style={{ marginTop: '2rem', fontWeight: 600, color: 'var(--color-text-muted)' }}>
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <button 
            type="button"
            onClick={() => { setIsLogin(!isLogin); setError(''); }}
            disabled={loading}
            style={{ 
              background: 'none', 
              border: 'none', 
              color: 'var(--color-primary)', 
              fontWeight: 800, 
              cursor: loading ? 'default' : 'pointer',
              padding: 0,
              opacity: loading ? 0.7 : 1
            }}
          >
            {isLogin ? 'Sign Up' : 'Log In'}
          </button>
        </p>
      </div>
    </div>
  );
}
