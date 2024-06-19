// src/humeService.js
import { createHumeClient } from '@humeai/voice';

const client = createHumeClient({
  apiKey: import.meta.env.VITE_HUME_API_KEY
});

export const analyzeVoice = async (audioFile) => {
  const request = {
    input: audioFile,
    tasks: ['emotion'],
  };

  try {
    const response = await client.post('analyze', request);
    return response.data;
  } catch (error) {
    console.error('Error analyzing voice:', error);
    throw error;
  }
};
