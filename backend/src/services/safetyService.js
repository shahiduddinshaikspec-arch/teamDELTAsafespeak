// safetyService.js
// Simple keyword/phrase-matching system for crisis and profanity detection

const CRISIS_KEYWORDS = [
    'suicide', 'kill myself', 'hurt myself', 'end it all', 'want to die', 
    'no reason to live', 'self harm'
];

const PROFANITY_KEYWORDS = [
    'fuck', 'shit', 'bitch', 'asshole', 'cunt', 'dick' // Add more as needed for a real app
];

/**
 * Analyzes a message for crisis indicators or profanity/bullying.
 * @param {string} message 
 * @returns {object} { isCrisis: boolean, hasProfanity: boolean }
 */
const analyzeMessage = (message) => {
    if (!message) return { isCrisis: false, hasProfanity: false };

    const lowerMessage = message.toLowerCase();

    const isCrisis = CRISIS_KEYWORDS.some(keyword => lowerMessage.includes(keyword));
    const hasProfanity = PROFANITY_KEYWORDS.some(keyword => lowerMessage.includes(keyword));

    return { isCrisis, hasProfanity };
};

module.exports = {
    analyzeMessage
};
