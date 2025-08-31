import React from 'react';
import { Target, Globe, Code, Zap, Database, Users } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Target,
      title: 'Client-First Approach',
      description: 'Building trust through transparent communication and collaboration.',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Globe,
      title: 'Global Flexibility',
      description: 'Available across time zones for seamless worldwide collaboration.',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Code,
      title: 'Modern Tech Stack',
      description: 'Technologies and tools I use to build innovative solutions',
      gradient: 'from-green-500 to-blue-500',
      showTechStack: true
    },
    {
      icon: Zap,
      title: 'AI-Powered Solutions',
      description: 'Specializing in intelligent automation and LLM integrations.',
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Database,
      title: 'Ready to Collaborate',
      description: "Let's create something amazing together",
      gradient: 'from-purple-500 to-blue-500'
    }
  ];

  const techStack = [
    { name: 'Next.js', color: 'bg-gray-800' },
    { name: 'React', color: 'bg-blue-600' },
    { name: 'TypeScript', color: 'bg-blue-700' },
    { name: 'JavaScript', color: 'bg-yellow-500' },
    { name: 'Python', color: 'bg-yellow-600' },
    { name: 'FastAPI', color: 'bg-green-600' },
    { name: 'Node.js', color: 'bg-green-700' },
    { name: 'Framer', color: 'bg-purple-600' }
  ];

  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-500 transform hover:scale-105 ${
                service.showTechStack ? 'lg:col-span-1' : ''
              }`}
            >
              {/* Gradient border effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                <div className={`w-12 h-12 bg-gradient-to-r ${service.gradient} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-300 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed mb-4">
                  {service.description}
                </p>

                {service.showTechStack && (
                  <div className="grid grid-cols-4 gap-2 mt-4">
                    {techStack.map((tech, techIndex) => (
                      <div
                        key={techIndex}
                        className={`${tech.color} w-10 h-10 rounded-lg flex items-center justify-center transform hover:scale-110 transition-transform duration-200`}
                        title={tech.name}
                      >
                        <span className="text-white text-xs font-bold">
                          {tech.name.slice(0, 2)}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;