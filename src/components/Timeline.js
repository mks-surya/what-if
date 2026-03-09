import React from 'react';

const Timeline = ({ events }) => {
  return (
    <div className="w-full max-w-6xl mx-auto mt-8">
      <h2 className="text-3xl font-bold text-center mb-12 text-white">Alternate Timeline</h2>
      <div className="relative px-4">
        {/* Horizontal line */}
        <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-cyan-500 to-pink-500 transform -translate-y-1/2"></div>
        
        {/* Timeline nodes */}
        <div className="flex justify-between items-stretch overflow-x-auto pb-8">
          {events.map((event, index) => (
            <div
              key={index}
              className="flex-1 min-w-max px-4 animate-timeline"
              style={{
                animationDelay: `${index * 0.2}s`,
              }}
            >
              <div className="relative">
                {/* Node dot */}
                <div className="flex justify-center mb-6">
                  <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full border-4 border-slate-900 shadow-lg shadow-cyan-500/50 relative z-10 transform hover:scale-125 transition duration-300"></div>
                </div>
                
                {/* Card */}
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-purple-400/30 rounded-lg p-4 min-h-40 hover:border-cyan-400 transition duration-300 shadow-lg">
                  <div className="text-center">
                    <p className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-3">
                      {event.year}
                    </p>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {event.event}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;