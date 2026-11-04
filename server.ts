import express from 'express';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use(express.json());

// API proxy endpoint for Maps and Search Grounding via Gemini 3.5 Flash
app.post('/api/maps-grounding', async (req, res) => {
  try {
    const { prompt, mode = 'maps' } = req.body;
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return res.status(503).json({
        error: 'GEMINI_API_KEY is not configured in environment secrets.',
        text: 'Mt. Ararat Shinners School is located in Kapsoya Estate, Eldoret, Kenya, directly next to Silas Police Station. From Eldoret Town Centre (Uganda Road), take the Kapsoya Estate road heading east. Silas Police Station is the primary landmark on your left, with the school directly adjacent.'
      });
    }

    if (!prompt || typeof prompt !== 'string') {
      return res.status(400).json({ error: 'Prompt is required.' });
    }

    const ai = new GoogleGenAI({ apiKey });

    // Choose tool: googleMaps or googleSearch (note: cannot be combined in same request)
    const tools = mode === 'search' ? [{ googleSearch: {} }] : [{ googleMaps: {} }];

    const response = await ai.models.generateContent({
      model: 'gemini-3.5-flash',
      contents: prompt,
      config: {
        systemInstruction: `You are the official location and directions guide for Mt. Ararat Shinners School in Kapsoya Estate, Eldoret, Kenya.
The school is located directly next to Silas Police Station in Kapsoya Estate (coordinates: 0.5230° N, 35.2910° E).
School Motto: "Excellence Is a Habit Not an Act, Shine Every Day".
Use real-time Google Maps and Search grounding to provide accurate, concise, practical transit, driving directions, travel times, and landmark recognition for visitors coming from anywhere in or around Eldoret (e.g. Eldoret CBD, Annex, Pioneer, West Indies, Elgon View, or Eldoret Airport).
Keep your response warm, concise, and structured with bullet points.`,
        tools,
      },
    });

    const text = response.text || '';
    const groundingMetadata = response.candidates?.[0]?.groundingMetadata || null;

    return res.json({
      text,
      groundingMetadata,
    });
  } catch (error: any) {
    console.error('Error generating grounded content:', error);
    return res.status(500).json({
      error: error.message || 'Failed to generate grounded content.',
      text: 'Mt. Ararat Shinners School is located in Kapsoya Estate, Eldoret, Kenya, directly adjacent to Silas Police Station. Accessible via the Kapsoya access road from Eldoret CBD in approximately 10–15 minutes.'
    });
  }
});

async function startServer() {
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });
  } else {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
