import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const questions = [
  {
    id: 1,
    text: "How would you describe your mood right now?",
    options: ["Overwhelmed", "Anxious", "Lonely", "Just need to vent"]
  },
  {
    id: 2,
    text: "What kind of support are you looking for today?",
    options: ["Someone to listen", "Practical advice", "Shared experiences", "Distraction"]
  },
  {
    id: 3,
    text: "How quickly do you want to start talking?",
    options: ["Right now, it's urgent", "Whenever someone is free", "I'm just browsing"]
  }
];

export default function SurveyPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();

  const handleSelect = (option) => {
    // In a real app, save the option to state/Supabase here
    if (currentStep < questions.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      // Survey complete, analyze and match
      navigate('/match');
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
        maxWidth: '500px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        border: '1px solid var(--color-border)',
        overflow: 'hidden'
      }}>
        <div style={{ width: '100%', height: '6px', backgroundColor: 'var(--color-secondary)', borderRadius: '10px', marginBottom: '2rem' }}>
          <motion.div 
            initial={{ width: '0%' }}
            animate={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
            transition={{ duration: 0.3 }}
            style={{ height: '100%', backgroundColor: 'var(--color-primary)', borderRadius: '10px' }}
          />
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
          >
            <span style={{ color: 'var(--color-accent-purple)', fontWeight: 800, fontSize: '0.875rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Question {currentStep + 1} of {questions.length}
            </span>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-text-main)', marginBottom: '2rem', textAlign: 'center' }}>
              {questions[currentStep].text}
            </h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%' }}>
              {questions[currentStep].options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelect(option)}
                  style={{
                    padding: '1.25rem',
                    borderRadius: '16px',
                    border: '2px solid var(--color-border)',
                    backgroundColor: 'white',
                    color: 'var(--color-text-main)',
                    fontSize: '1rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    textAlign: 'left',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.borderColor = 'var(--color-primary)';
                    e.currentTarget.style.backgroundColor = 'var(--color-secondary)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.borderColor = 'var(--color-border)';
                    e.currentTarget.style.backgroundColor = 'white';
                  }}
                >
                  {option}
                </button>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
