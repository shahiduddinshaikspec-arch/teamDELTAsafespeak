const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', message: 'SafeSpeak API is running' });
});

// Import services (to be wired up later)
const { analyzeMessage } = require('./services/safetyService');
const { translateMessage } = require('./services/translationService');

// Placeholder Chat Endpoint for future implementation
app.post('/api/chat', async (req, res) => {
    try {
        const { message, targetLanguage } = req.body;
        
        // 1. Safety Check
        const safetyResult = analyzeMessage(message);
        if (safetyResult.isCrisis) {
            // Handle crisis (e.g., auto-reply with helplines)
            return res.status(200).json({ 
                success: true, 
                warning: true, 
                message: 'We noticed you might be going through a tough time. Please reach out to a helpline: 988 (Lifeline)',
                originalMessage: message
            });
        }
        
        if (safetyResult.hasProfanity) {
             return res.status(400).json({ 
                success: false, 
                error: 'Message violates community guidelines.' 
            });
        }

        // 2. Translation
        const translatedMessage = await translateMessage(message, targetLanguage);

        res.status(200).json({
            success: true,
            translatedMessage
        });

    } catch (error) {
        console.error('Chat endpoint error:', error);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
