import React, { useState } from 'react';
import Bot from './components/Bot';
import PromptInput from './components/PromptInput';
import Timeline from './components/Timeline';

function App() {
  const [timeline, setTimeline] = useState([]);

  const generateTimeline = (prompt) => {
    // Mock timeline generation based on prompt
    const events = [
      `${prompt} - Year 2025: Initial changes begin.`,
      `Year 2030: Major societal shifts occur.`,
      `Year 2040: Technology adapts to new reality.`,
      `Year 2050: The world is forever altered.`
    ];
    setTimeline(events);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">What If?</h1>
      <Bot />
      <PromptInput onGenerate={generateTimeline} />
      {timeline.length > 0 && <Timeline events={timeline} />}
    </div>
  );
}

export default App;
