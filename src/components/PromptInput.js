import React, { useState } from 'react';

const PromptInput = ({ onGenerate }) => {
  const [prompt, setPrompt] = useState('');

  const handleGenerate = () => {
    if (prompt.trim()) {
      onGenerate(prompt);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleGenerate();
    }
  };

  return (
    <div className="w-full max-w-lg mx-auto mb-12">
      <input
        type="text"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="What if dinosaurs never went extinct?"
        className="w-full px-6 py-3 bg-slate-800 border border-purple-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent mb-4 text-white placeholder-gray-400 transition duration-300"
      />
      <button
        onClick={handleGenerate}
        className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white font-bold py-3 px-6 rounded-xl transition duration-300 shadow-lg shadow-purple-500/50 hover:shadow-cyan-500/50 uppercase tracking-wide"
      >
        Generate Timeline
      </button>
    </div>
  );
};

export default PromptInput;