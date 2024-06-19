// src/components/VoiceAnalyzer.jsx
import React, { useState } from 'react';
import { analyzeVoice } from '../humeservice';

const VoiceAnalyzer = () => {
  const [audioFile, setAudioFile] = useState(null);
  const [analysisResult, setAnalysisResult] = useState(null);

  const handleFileChange = (event) => {
    setAudioFile(event.target.files[0]);
  };

  const handleAnalyze = async () => {
    if (audioFile) {
      try {
        const result = await analyzeVoice(audioFile);
        setAnalysisResult(result);
      } catch (error) {
        console.error('Error analyzing voice:', error);
      }
    }
  };

  return (
    <div>
      <h1>Voice Analyzer</h1>
      <input type="file" accept="audio/*" onChange={handleFileChange} />
      <button onClick={handleAnalyze}>Analyze Voice</button>
      {analysisResult && (
        <div>
          <h2>Analysis Result</h2>
          <pre>{JSON.stringify(analysisResult, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default VoiceAnalyzer;
