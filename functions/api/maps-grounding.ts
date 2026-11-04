import { GoogleGenAI } from '@google/genai';

interface Env {
  GEMINI_API_KEY?: string;
}

const FALLBACK_TEXT =
  'Mt. Ararat Shinners School is located in Kapsoya Estate, Eldoret, Kenya, directly next to Silas Police Station. From Eldoret Town Centre (Uganda Road), take the Kapsoya Estate road heading east. Silas Police Station is the primary landmark on your left, with the school directly adjacent.';

const SYSTEM_INSTRUCTION = `You are the official location and directions guide for Mt. Ararat Shinners School in Kapsoya Estate, Eldoret, Kenya.
The school is located directly next to Silas Police Station in Kapsoya Estate (coordinates: 0.5230° N, 35.2910° E).
School Motto: "Excellence Is a Habit Not an Act, Shine Every Day".
Use real-time Google Maps and Search grounding to provide accurate, concise, practical transit, driving directions, travel times, and landmark recognition for visitors coming from anywhere in or around Eldoret (e.g. Eldoret CBD, Annex, Pioneer, West Indies, Elgon View, or Eldoret Airport).
Keep your response warm, concise, and structured with bullet points.`;

// Ported from server.ts (Express) to a Cloudflare Pages Function.
// Route: POST /api/maps-grounding — kept wire-compatible with GroundedMapNavigator.tsx.
export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  let body: { prompt?: unknown; mode?: unknown };

  try {
    body = await request.json();
  } catch {
    return Response.json({ error: 'Invalid JSON body.', text: FALLBACK_TEXT }, { status: 400 });
  }

  const apiKey = env.GEMINI_API_KEY;

  if (!apiKey) {
    return Response.json(
      { error: 'GEMINI_API_KEY is not configured in environment secrets.', text: FALLBACK_TEXT },
      { status: 503 },
    );
  }

  const { prompt, mode = 'maps' } = body;

  if (!prompt || typeof prompt !== 'string') {
    return Response.json({ error: 'Prompt is required.' }, { status: 400 });
  }

  try {
    const ai = new GoogleGenAI({ apiKey });

    // googleMaps and googleSearch cannot be combined in the same request.
    const tools = mode === 'search' ? [{ googleSearch: {} }] : [{ googleMaps: {} }];

    const response = await ai.models.generateContent({
      model: 'gemini-3.5-flash',
      contents: prompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        tools,
      },
    });

    const text = response.text || '';
    const groundingMetadata = response.candidates?.[0]?.groundingMetadata || null;

    return Response.json({ text, groundingMetadata });
  } catch (error: any) {
    console.error('Error generating grounded content:', error);
    return Response.json(
      { error: error?.message || 'Failed to generate grounded content.', text: FALLBACK_TEXT },
      { status: 500 },
    );
  }
};
