import React from 'react';

// 1. Welcome Bot (High Fidelity)
export const WelcomeBot = ({ size = 250 }) => (
  <svg width={size} height={size} viewBox="0 0 250 250" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Base Green Blob (Body) */}
    <path d="M60 210C30 210 20 150 30 110C40 70 80 30 125 30C170 30 210 70 220 110C230 150 220 210 190 210C150 210 100 220 60 210Z" fill="#a4d485" />
    
    {/* White Face Plate */}
    <rect x="75" y="70" width="100" height="90" rx="45" fill="white" />
    <path d="M75 115C75 90.1472 95.1472 70 120 70V160C95.1472 160 75 139.853 75 115Z" fill="#f8fdf5" /> {/* Subtle highlight */}
    
    {/* Eyes */}
    <circle cx="105" cy="105" r="7" fill="#333333" />
    <circle cx="145" cy="105" r="7" fill="#333333" />
    <circle cx="108" cy="103" r="2" fill="white" /> {/* Eye glint */}
    <circle cx="148" cy="103" r="2" fill="white" />
    
    {/* Friendly Smile */}
    <path d="M110 130C110 130 118 142 125 142C132 142 140 130 140 130" stroke="#333333" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round"/>
    
    {/* Left Floating Badge (Graph) */}
    <g transform="translate(10, 80)">
      <circle cx="25" cy="25" r="22" fill="white" />
      <circle cx="25" cy="25" r="22" fill="none" stroke="#f0f0f0" strokeWidth="2" />
      <path d="M15 32V18" stroke="#ff9f43" strokeWidth="4" strokeLinecap="round"/>
      <path d="M25 32V24" stroke="#ff9f43" strokeWidth="4" strokeLinecap="round"/>
      <path d="M35 32V14" stroke="#ff9f43" strokeWidth="4" strokeLinecap="round"/>
    </g>

    {/* Right Floating Badge (Lightbulb) */}
    <g transform="translate(190, 60)">
      <circle cx="20" cy="20" r="20" fill="white" />
      <path d="M20 10C15.5817 10 12 13.5817 12 18C12 21.0102 13.7118 23.6335 16 25.0456V27C16 27.5523 16.4477 28 17 28H23C23.5523 28 24 27.5523 24 27V25.0456C26.2882 23.6335 28 21.0102 28 18C28 13.5817 24.4183 10 20 10Z" fill="#ff9f43"/>
      <path d="M17 31H23" stroke="#ff9f43" strokeWidth="2" strokeLinecap="round"/>
    </g>

    {/* Bottom Floating Badge (Slider/Toggle) */}
    <g transform="translate(130, 180)">
      <rect x="0" y="0" width="60" height="30" rx="15" fill="white" />
      <rect x="5" y="5" width="50" height="20" rx="10" fill="#a4d485" opacity="0.3" />
      <circle cx="15" cy="15" r="10" fill="#a4d485" />
      <line x1="32" y1="11" x2="48" y2="11" stroke="#ccc" strokeWidth="2" strokeLinecap="round"/>
      <line x1="32" y1="19" x2="40" y2="19" stroke="#ccc" strokeWidth="2" strokeLinecap="round"/>
    </g>
  </svg>
);

// 2. Meditation Person (High Fidelity)
export const MeditationPerson = ({ size = 250 }) => (
  <svg width={size} height={size} viewBox="0 0 250 250" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Abstract background waves/leaves */}
    <path d="M20 130C30 90 70 80 125 110C180 140 220 110 230 150" stroke="#d5ecd1" strokeWidth="20" strokeLinecap="round"/>
    <path d="M50 80C70 50 110 50 150 70" stroke="#d5ecd1" strokeWidth="15" strokeLinecap="round"/>
    
    {/* Body / Green Shirt */}
    <path d="M50 250C50 180 75 140 125 140C175 140 200 180 200 250" fill="#9dbf8a" />
    <path d="M100 140C100 160 150 160 150 140" fill="#a0c28e" /> {/* Collar shadow */}

    {/* Big Curly Hair (Multiple overlapping circles) */}
    <circle cx="125" cy="85" r="65" fill="#3a3734" />
    <circle cx="75" cy="110" r="35" fill="#3a3734" />
    <circle cx="175" cy="110" r="35" fill="#3a3734" />
    <circle cx="90" cy="55" r="30" fill="#3a3734" />
    <circle cx="160" cy="55" r="30" fill="#3a3734" />
    
    {/* Curl details (small squiggles outside hair) */}
    <path d="M45 125C35 125 35 115 45 115C55 115 55 105 45 105" stroke="#3a3734" strokeWidth="3" fill="none" strokeLinecap="round"/>
    <path d="M205 125C215 125 215 115 205 115C195 115 195 105 205 105" stroke="#3a3734" strokeWidth="3" fill="none" strokeLinecap="round"/>

    {/* Face */}
    <rect x="100" y="70" width="50" height="60" rx="25" fill="#e8cfa6" />
    
    {/* Closed Eyes */}
    <path d="M108 95C112 100 117 100 120 95" stroke="#4a3e35" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M130 95C133 100 138 100 142 95" stroke="#4a3e35" strokeWidth="2.5" strokeLinecap="round"/>
    
    {/* Serene Smile */}
    <path d="M118 112C122 115 128 115 132 112" stroke="#4a3e35" strokeWidth="2.5" strokeLinecap="round"/>

    {/* Praying Hands (Overlapping paths) */}
    <path d="M125 150L100 200L115 200L135 160" fill="#e8cfa6" />
    <path d="M125 150L150 200L135 200L115 160" fill="#dbbe91" /> {/* Shadowed hand */}
    <path d="M125 150V200" stroke="#c4a57b" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

// 3. Mood Person (High Fidelity)
export const MoodPerson = ({ size = 250 }) => (
  <svg width={size} height={size} viewBox="0 0 250 250" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Abstract Background Elements */}
    <circle cx="125" cy="125" r="100" fill="#ffe0c2" opacity="0.4" />

    {/* Body / Orange Shirt */}
    <path d="M40 250C40 180 70 140 125 140C180 140 210 180 210 250" fill="#f4a261" />
    <path d="M110 140L125 180L140 140" fill="white" /> {/* White undershirt/collar */}
    
    {/* Face & Neck */}
    <rect x="110" y="110" width="30" height="40" fill="#ffb870" />
    <rect x="95" y="55" width="60" height="70" rx="30" fill="#ffb870" />
    
    {/* Spiky / Messy Hair */}
    <path d="M85 75L80 50L100 55L110 30L125 45L145 25L155 50L170 55L160 80C160 80 140 60 125 60C110 60 85 75 85 75Z" fill="#3a3734" />
    <path d="M95 65L105 85L115 65" fill="#3a3734" /> {/* Hair falling on face */}

    {/* Sad Face Details */}
    <path d="M108 85C112 82 117 82 120 85" stroke="#4a3e35" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M130 85C133 82 138 82 142 85" stroke="#4a3e35" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M115 105C120 100 130 100 135 105" stroke="#4a3e35" strokeWidth="2.5" strokeLinecap="round"/>
    
    {/* Blue Tear */}
    <path d="M110 93C110 95 108 97 108 97C108 97 106 95 106 93C106 91 108 90 108 90C108 90 110 91 110 93Z" fill="#64b5f6" />
    
    {/* Left Mood Bubble (Sad - Orange) */}
    <g transform="translate(30, 110)">
      <circle cx="35" cy="35" r="30" fill="#f4a261" stroke="white" strokeWidth="4" />
      <path d="M25 28C27 25 31 25 33 28" stroke="white" strokeWidth="3" strokeLinecap="round"/>
      <path d="M37 28C39 25 43 25 45 28" stroke="white" strokeWidth="3" strokeLinecap="round"/>
      <path d="M28 45C32 40 38 40 42 45" stroke="white" strokeWidth="3" strokeLinecap="round"/>
    </g>

    {/* Right Mood Bubble (Neutral - Purple) */}
    <g transform="translate(160, 60)">
      <circle cx="35" cy="35" r="30" fill="#b19cd9" stroke="white" strokeWidth="4" />
      <line x1="25" y1="28" x2="33" y2="28" stroke="white" strokeWidth="3" strokeLinecap="round"/>
      <line x1="37" y1="28" x2="45" y2="28" stroke="white" strokeWidth="3" strokeLinecap="round"/>
      <line x1="28" y1="45" x2="42" y2="45" stroke="white" strokeWidth="3" strokeLinecap="round"/>
    </g>
  </svg>
);

// 4. Journal Person (High Fidelity)
export const JournalPerson = ({ size = 250 }) => (
  <svg width={size} height={size} viewBox="0 0 250 250" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Body / Grey Shirt */}
    <path d="M60 250C60 190 90 150 160 150C190 150 220 180 230 250" fill="#cccccc" />
    
    {/* Profile Face (Facing Left) */}
    <path d="M160 70C160 40 130 40 115 40C100 40 85 55 85 70C85 75 80 85 75 90L85 100L85 115C85 130 115 135 130 135C150 135 160 100 160 70Z" fill="#e5e5e5" />
    
    {/* Hair Wavy Profile */}
    <path d="M140 40C160 40 180 60 170 85C190 90 180 120 160 135C175 150 150 175 130 160C120 175 90 160 95 135" fill="#3a3734" />
    <path d="M130 35C110 30 85 45 85 65" stroke="#3a3734" strokeWidth="10" strokeLinecap="round"/>
    
    {/* Profile Eye & Smile */}
    <path d="M100 80C100 80 103 82 108 80" stroke="#4a3e35" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M90 110C95 115 102 110 102 110" stroke="#4a3e35" strokeWidth="2" strokeLinecap="round"/>

    {/* The Journal / Book */}
    <g transform="translate(30, 110) rotate(-15)">
      <path d="M0 10 L60 0 L120 10 L110 90 L50 80 L-10 90 Z" fill="#ffffff" stroke="#a0a0a0" strokeWidth="3" strokeLinejoin="round"/>
      <path d="M60 0V80" stroke="#a0a0a0" strokeWidth="3"/>
      {/* Book Lines */}
      <line x1="10" y1="20" x2="50" y2="15" stroke="#e0e0e0" strokeWidth="3" strokeLinecap="round"/>
      <line x1="5" y1="35" x2="45" y2="30" stroke="#e0e0e0" strokeWidth="3" strokeLinecap="round"/>
      <line x1="0" y1="50" x2="40" y2="45" stroke="#e0e0e0" strokeWidth="3" strokeLinecap="round"/>
      <line x1="70" y1="15" x2="110" y2="20" stroke="#e0e0e0" strokeWidth="3" strokeLinecap="round"/>
      <line x1="65" y1="30" x2="105" y2="35" stroke="#e0e0e0" strokeWidth="3" strokeLinecap="round"/>
    </g>

    {/* Hand Writing */}
    <path d="M140 180C120 160 90 140 70 145C60 148 55 155 60 165" stroke="#e5e5e5" strokeWidth="18" strokeLinecap="round" strokeLinejoin="round"/>
    
    {/* Pen */}
    <path d="M55 160L40 180" stroke="#333333" strokeWidth="5" strokeLinecap="round"/>
    
    {/* Sparkles (Vector paths instead of raw polygons) */}
    <path d="M40 30Q45 45 60 50Q45 55 40 70Q35 55 20 50Q35 45 40 30Z" fill="#e5e5e5" />
    <path d="M90 10Q93 20 100 23Q93 26 90 35Q87 26 80 23Q87 20 90 10Z" fill="#e5e5e5" />
  </svg>
);

// 5. Happy Person (High Fidelity)
export const HappyPerson = ({ size = 250 }) => (
  <svg width={size} height={size} viewBox="0 0 250 250" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Body / Yellow-Orange Shirt */}
    <path d="M50 250C50 170 80 140 125 140C170 140 200 170 200 250" fill="#ffd166" />
    
    {/* Outstretched Arms */}
    <path d="M90 150C60 130 30 100 20 70" stroke="#f4a261" strokeWidth="35" strokeLinecap="round"/>
    <path d="M160 150C190 130 220 100 230 70" stroke="#f4a261" strokeWidth="35" strokeLinecap="round"/>
    
    {/* Neck */}
    <rect x="110" y="100" width="30" height="50" fill="#f4a261" />

    {/* Face (Tilted Up) */}
    <circle cx="125" cy="80" r="35" fill="#f4a261" />
    
    {/* Blowing Hair */}
    <path d="M125 45C160 35 200 50 230 80C210 95 180 70 150 85C140 90 110 120 100 110" fill="#3a3734" />
    <path d="M125 45C85 45 90 95 90 95C90 95 105 110 125 115Z" fill="#3a3734" />
    
    {/* Joyful Face */}
    <path d="M105 75C108 72 112 72 115 75" stroke="#4a3e35" strokeWidth="3" strokeLinecap="round"/>
    <path d="M135 75C138 72 142 72 145 75" stroke="#4a3e35" strokeWidth="3" strokeLinecap="round"/>
    <path d="M115 90C115 98 135 98 135 90" stroke="#4a3e35" strokeWidth="3" strokeLinecap="round" fill="#ef476f"/>
    <path d="M120 90C120 95 130 95 130 90" fill="white" /> {/* Teeth */}
  </svg>
);

// 6. Community Hands (High Fidelity)
export const CommunityHands = ({ size = 250 }) => (
  <svg width={size} height={size} viewBox="0 0 250 250" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Big Purple Heart */}
    <path d="M125 190C125 190 50 120 50 70C50 30 95 20 125 60C155 20 200 30 200 70C200 120 125 190 125 190Z" fill="#cbb2fe" />
    <path d="M125 190C125 190 50 120 50 70C50 30 95 20 125 60" fill="#bfa1f6" /> {/* Heart Shading */}

    {/* Hand 1: Bottom Left (Dark Brown) */}
    <path d="M-10 220L40 140C40 140 55 125 70 135C85 145 70 170 70 170L30 240" fill="#5c3a21" />
    <circle cx="68" cy="140" r="8" fill="#5c3a21" />
    <circle cx="78" cy="150" r="8" fill="#5c3a21" />
    <path d="M25 170L50 155" stroke="#e0a96d" strokeWidth="5" strokeLinecap="round"/> {/* Gold Bracelet */}

    {/* Hand 2: Top Right (Tan) */}
    <path d="M260 170L190 110C190 110 175 100 160 110C145 120 165 140 165 140L230 210" fill="#d2a679" />
    <circle cx="162" cy="113" r="8" fill="#d2a679" />
    <circle cx="155" cy="125" r="8" fill="#d2a679" />
    <path d="M190 110L170 90" stroke="#d2a679" strokeWidth="12" strokeLinecap="round"/> {/* Thumb */}
    <path d="M210 150L230 165" stroke="white" strokeWidth="4" strokeLinecap="round" strokeDasharray="3 6"/> {/* Beaded Bracelet */}

    {/* Hand 3: Bottom Middle (Medium Brown) */}
    <path d="M90 260L100 190C100 190 100 175 115 175C130 175 130 195 130 195L140 260" fill="#a06840" />
    <circle cx="108" cy="178" r="8" fill="#a06840" />
    <circle cx="122" cy="178" r="8" fill="#a06840" />
    <circle cx="134" cy="188" r="8" fill="#a06840" />

    {/* Hand 4: Top Left (Black Skin Tone) */}
    <path d="M-10 60L50 70C50 70 70 70 75 85C80 100 60 110 60 110L10 130" fill="#2b1d14" />
    <circle cx="68" cy="78" r="8" fill="#2b1d14" />
    <circle cx="65" cy="92" r="8" fill="#2b1d14" />
    <path d="M20 90L30 115" stroke="white" strokeWidth="3" strokeLinecap="round"/> {/* Silver band */}

    {/* Hand 5: Top Middle (Light Skin Tone) */}
    <path d="M125 -10L125 50C125 50 120 65 105 70C90 75 80 55 80 55L70 -10" fill="#ffcdb2" />
    <circle cx="112" cy="62" r="8" fill="#ffcdb2" />
    <circle cx="95" cy="65" r="8" fill="#ffcdb2" />
  </svg>
);
