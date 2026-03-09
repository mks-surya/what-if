import React from 'react';

const Bot = () => {
  return (
    <div className="flex justify-center mb-12">
      <svg width="140" height="140" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg" className="animate-pulse">
        {/* Head */}
        <rect x="20" y="15" width="100" height="80" rx="8" fill="#1f2937" stroke="#a78bfa" strokeWidth="2" />
        
        {/* Eyes - glowing */}
        <circle cx="45" cy="40" r="8" fill="#0ea5e9" />
        <circle cx="95" cy="40" r="8" fill="#0ea5e9" />
        <circle cx="46" cy="40" r="4" fill="#000000" />
        <circle cx="96" cy="40" r="4" fill="#000000" />
        
        {/* Eye glow effect */}
        <circle cx="45" cy="40" r="8" fill="none" stroke="#0ea5e9" strokeWidth="1" opacity="0.5" />
        <circle cx="95" cy="40" r="8" fill="none" stroke="#0ea5e9" strokeWidth="1" opacity="0.5" />
        
        {/* Mouth - thinking */}
        <path d="M 50 65 Q 70 70 90 65" stroke="#60a5fa" strokeWidth="2" fill="none" strokeLinecap="round" />
        
        {/* Display screen effect */}
        <rect x="35" y="50" width="70" height="20" rx="4" fill="#0f172a" stroke="#06b6d4" strokeWidth="1.5" />
        <line x1="40" y1="55" x2="100" y2="55" stroke="#06b6d4" strokeWidth="1" opacity="0.5" />
        <line x1="40" y1="60" x2="100" y2="60" stroke="#06b6d4" strokeWidth="1" opacity="0.5" />
        
        {/* Body */}
        <rect x="30" y="100" width="80" height="30" rx="4" fill="#1f2937" stroke="#a78bfa" strokeWidth="2" />
        
        {/* Arms */}
        <rect x="10" y="110" width="20" height="8" rx="4" fill="#374151" stroke="#a78bfa" strokeWidth="1.5" />
        <rect x="110" y="110" width="20" height="8" rx="4" fill="#374151" stroke="#a78bfa" strokeWidth="1.5" />
        
        {/* Glow effect around bot */}
        <circle cx="70" cy="70" r="65" fill="none" stroke="#a78bfa" strokeWidth="0.5" opacity="0.2" />
      </svg>
    </div>
  );
};

export default Bot;