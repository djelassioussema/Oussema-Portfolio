import React from 'react';
import { Calendar, MapPin, Award, ChevronRight } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      id: 1,
      title: 'AI & Cloud Solutions Architect',
      company: 'Nexium',
      status: 'Present',
      location: 'Remote',
      period: '2023 - Present',
      description: 'Leading AI-driven product development and cloud architecture for next-generation SaaS platforms.',
      achievements: [
        'Architected scalable AI-powered SaaS products using Next.js and Supabase',
        'Led AI pipeline integrations including LLMs, embeddings, and cloud deployments',
        'Drove innovation across 10+ client solutions with measurable business impact'
      ],
      statusColor: 'bg-blue-500',
      active: true
    },
    {
      id: 2,
      title: 'MEAN Stack Developer',
      company: '10Pearls',
      status: 'Previous Role',
      location: 'Karachi, Pakistan',
      period: '2021 - 2023',
      description: 'Full-stack development focusing on responsive UI components and optimized RESTful APIs.',
      achievements: [
        'Built 10+ responsive UI components improving user interaction by 40%',
        'Developed 5+ RESTful APIs optimizing data flow by 30%',
        'Delivered client-focused solutions with 100% on-time delivery rate'
      ],
      statusColor: 'bg-orange-500',
      active: false
    }
  ];

  return (
    <section className="min-h-screen py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            My <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">Journey</span>
          </h2>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto">
            A timeline of growth, innovation, and impact in the world of technology
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="relative">
              {/* Timeline line */}
              {index < experiences.length - 1 && (
                <div className="absolute left-8 top-24 w-0.5 h-32 bg-gradient-to-b from-purple-500/50 to-transparent"></div>
              )}

              {/* Experience Card */}
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-start space-x-6">
                    {/* Timeline dot */}
                    <div className="relative">
                      <div className={`w-16 h-16 ${exp.statusColor} rounded-full flex items-center justify-center`}>
                        <Calendar className="w-8 h-8 text-white" />
                      </div>
                      {exp.active && (
                        <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-gray-900 flex items-center justify-center">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center space-x-4 mb-2">
                        <h2 className="text-2xl font-bold text-white">{exp.title}</h2>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          exp.active 
                            ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30' 
                            : 'bg-orange-500/20 text-orange-300 border border-orange-500/30'
                        }`}>
                          {exp.status}
                        </span>
                      </div>
                      
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="flex items-center space-x-2 text-purple-400">
                          <MapPin className="w-4 h-4" />
                          <span className="font-medium">{exp.company}</span>
                        </div>
                        <div className="text-gray-400">
                          {exp.period}
                        </div>
                      </div>

                      <p className="text-gray-300 mb-6 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Key Achievements */}
                      <div className="mb-6">
                        <div className="flex items-center space-x-2 mb-4">
                          <Award className="w-5 h-5 text-purple-400" />
                          <h3 className="text-lg font-semibold text-white">Key Achievements</h3>
                        </div>
                        <ul className="space-y-3">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="flex items-start space-x-3">
                              <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-gray-300">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Status indicator */}
                  <div className="flex flex-col items-center space-y-2">
                    <div className={`w-20 h-20 ${exp.statusColor} rounded-full flex items-center justify-center relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                      <span className="text-white font-bold text-sm relative z-10">
                        {exp.active ? 'Present' : 'Previous Role'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;