import React from 'react';

const GeometricBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Animated geometric shapes */}
      <div className="absolute top-20 left-10 w-20 h-20 border border-blue-500/30 rotate-45 animate-pulse"></div>
      <div className="absolute top-40 right-20 w-16 h-16 border border-purple-500/30 rotate-12 animate-bounce"></div>
      <div className="absolute bottom-40 left-20 w-24 h-24 border border-cyan-500/30 rotate-45 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-18 h-18 border border-purple-500/30 rotate-12 animate-bounce"></div>
      
      {/* Circular elements */}
      <div className="absolute top-32 right-1/4 w-32 h-32 rounded-full border border-purple-500/20 animate-spin-slow"></div>
      <div className="absolute bottom-32 right-20 w-24 h-24 rounded-full border border-blue-500/20 animate-spin-slow"></div>
      
      {/* Complex geometric shapes */}
      <div className="absolute top-1/2 left-10 transform -translate-y-1/2">
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 border border-cyan-500/30 rotate-45"></div>
          <div className="absolute inset-2 border border-blue-500/30 rotate-12"></div>
        </div>
      </div>
      
      <div className="absolute top-1/3 right-10">
        <div className="relative w-20 h-20">
          <div className="absolute inset-0 border border-purple-500/30 rotate-45"></div>
          <div className="absolute inset-3 border border-pink-500/30 rotate-12"></div>
        </div>
      </div>

      {/* Connecting lines */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgb(168, 85, 247)" stopOpacity="0.3" />
            <stop offset="100%" stopColor="rgb(59, 130, 246)" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        <path
          d="M100,200 Q300,100 500,300 T900,200"
          stroke="url(#lineGradient)"
          strokeWidth="1"
          fill="none"
          className="animate-pulse"
        />
        <path
          d="M200,400 Q400,300 600,500 T1000,400"
          stroke="url(#lineGradient)"
          strokeWidth="1"
          fill="none"
          className="animate-pulse"
          style={{ animationDelay: '1s' }}
        />
      </svg>
    </div>
  );
};

export default GeometricBackground;