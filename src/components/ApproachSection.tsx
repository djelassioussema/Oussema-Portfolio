import React, { useState } from 'react';

const ApproachSection = () => {
  const [hoveredPhase, setHoveredPhase] = useState<number | null>(null);

  const phases = [
    {
      number: 1,
      title: 'Discovery & Planning',
      description: 'Understanding your vision, requirements, and technical constraints to create a comprehensive roadmap for success.'
    },
    {
      number: 2,
      title: 'Development & Progress Update',
      description: "Once we agree on the plan, I'll put on my Noise Cancelling Headphones and dive into coding. From initial sketches to polished code, I keep you updated every step of the way."
    },
    {
      number: 3,
      title: 'Testing & Deployment',
      description: 'Rigorous testing, optimization, and seamless deployment to ensure your solution performs flawlessly in production.'
    }
  ];

  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">Approach</span>
          </h2>
        </div>

        {/* Interactive Phases */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {phases.map((phase, index) => (
            <div 
              key={index} 
              className="relative h-96"
              onMouseEnter={() => setHoveredPhase(phase.number)}
              onMouseLeave={() => setHoveredPhase(null)}
            >
              {/* Phase Panel */}
              <div className={`relative h-full bg-gray-900/50 backdrop-blur-sm border rounded-3xl p-8 transition-all duration-500 cursor-pointer overflow-hidden ${
                hoveredPhase === phase.number
                  ? 'border-purple-500/50 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 transform scale-105' 
                  : 'border-gray-800 hover:border-gray-700'
              }`}>
                
                {/* Phase Number Badge */}

                {/* Content */}
                <div className="pt-12 h-full flex flex-col justify-center">
                  {/* Default state - just title */}
                  <div className={`transition-all duration-300 ${
                    hoveredPhase === phase.number ? 'opacity-0 transform -translate-y-4' : 'opacity-100'
                  }`}>
                    <h3 className="text-2xl font-semibold text-white text-center">
                      {phase.title}
                    </h3>
                  </div>

                  {/* Hover state - title and description */}
                  <div className={`absolute inset-8 pt-12 flex flex-col justify-center transition-all duration-300 ${
                    hoveredPhase === phase.number ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'
                  }`}>
                    <h3 className="text-xl font-semibold text-white mb-4 text-center">
                      {phase.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-center">
                      {phase.description}
                    </p>
                  </div>
                </div>

                {/* Hover glow effect */}
                {hoveredPhase === phase.number && (
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 rounded-2xl pointer-events-none"></div>
                )}

                {/* Connecting dots pattern */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {[1, 2, 3].map((dot) => (
                    <div
                      key={dot}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        hoveredPhase === phase.number
                          ? 'bg-purple-500'
                          : dot === phase.number
                          ? 'bg-purple-400'
                          : 'bg-gray-600'
                      }`}
                    ></div>
                  ))}
                </div>
              </div>

              {/* Connecting line (except for last item) */}
              {index < phases.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-purple-500/50 to-transparent transform -translate-y-1/2 z-10"></div>
              )}
            </div>
          ))}
        </div>

        {/* Grid background pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(168, 85, 247, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(168, 85, 247, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;