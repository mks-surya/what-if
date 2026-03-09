import React from 'react';

const Timeline = ({ events }) => {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-center mb-6">Alternate Timeline</h2>
      <div className="relative">
        {events.map((event, index) => (
          <div key={index} className="flex items-center mb-6">
            <div className="flex-shrink-0 w-4 h-4 bg-blue-500 rounded-full"></div>
            <div className="ml-4">
              <p className="text-gray-800">{event}</p>
            </div>
            {index < events.length - 1 && (
              <div className="absolute left-2 top-4 w-0.5 h-6 bg-gray-300"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;