import React, { useState } from 'react';
import Bot from './components/Bot';
import PromptInput from './components/PromptInput';
import Timeline from './components/Timeline';

function App() {
  const [timeline, setTimeline] = useState([]);

  const generateTimeline = (prompt) => {
    // Mock timeline generation with year and event structure
    const events = [
      { year: 2025, event: 'The scenario begins: ' + prompt },
      { year: 2050, event: 'Major societal shifts and technological advancement' },
      { year: 2100, event: 'New civilization structures emerge globally' },
      { year: 2200, event: 'The world is forever transformed' }
    ];
    setTimeline(events);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex flex-col items-center justify-center p-4 overflow-x-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10">
        <h1 className="text-5xl font-black text-white mb-2 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">What If?</h1>
        <p className="text-gray-400 text-center mb-12 text-sm tracking-widest">Alternate Timeline Generator</p>
        <Bot />
        <PromptInput onGenerate={generateTimeline} />
        {timeline.length > 0 && <Timeline events={timeline} />}
      </div>
    </div>
  );
}

export default App;
