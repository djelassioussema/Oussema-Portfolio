import React from 'react';
import { ExternalLink, Sparkles, Palette, Calendar, Lightbulb, Activity, TrendingUp } from 'lucide-react';

const ProjectsPageSection = () => {
  const projects = [
    {
      id: 1,
      title: 'Stylique Technologies Intelligent Recommendations',
      description: 'An advanced AI-powered recommendation engine built with modern ML algorithms...',
      icon: Sparkles,
      iconBg: 'bg-gradient-to-br from-pink-500 to-purple-600',
      cardBg: 'bg-gradient-to-br from-purple-900/20 to-pink-900/20',
      tags: ['Smart AI', 'Recommendations'],
      techStack: [
        { name: 'Python', color: 'bg-yellow-500' },
        { name: 'TensorFlow', color: 'bg-orange-500' },
        { name: 'FastAPI', color: 'bg-green-500' },
        { name: 'React', color: 'bg-blue-500' }
      ],
      additionalTags: ['+2 more']
    },
    {
      id: 2,
      title: 'Dressify',
      description: 'A fashion-forward outfit recommendation platform leveraging AI to personalize style f...',
      icon: Palette,
      iconBg: 'bg-gradient-to-br from-green-500 to-emerald-600',
      cardBg: 'bg-gradient-to-br from-green-900/20 to-emerald-900/20',
      tags: ['AI Fashion', 'Recommendations'],
      techStack: [
        { name: 'NextJS', color: 'bg-gray-800' },
        { name: 'TailwindCSS', color: 'bg-cyan-500' },
        { name: 'TypeScript', color: 'bg-blue-600' }
      ],
      additionalTags: ['AI']
    },
    {
      id: 3,
      title: 'Evently+',
      description: 'An advanced event management platform using NextJs , offering seamless event...',
      icon: Calendar,
      iconBg: 'bg-gradient-to-br from-blue-500 to-cyan-600',
      cardBg: 'bg-gradient-to-br from-blue-900/20 to-cyan-900/20',
      tags: ['Events', 'Organize'],
      techStack: [
        { name: 'NextJS', color: 'bg-gray-800' },
        { name: 'TailwindCSS', color: 'bg-cyan-500' },
        { name: 'TypeScript', color: 'bg-blue-600' }
      ],
      additionalTags: [
        { name: 'Stripe', color: 'bg-purple-600' },
        '+1 more'
      ]
    },
    {
      id: 4,
      title: 'Creative Solutions Hub',
      description: 'A comprehensive platform for creative professionals...',
      icon: Lightbulb,
      iconBg: 'bg-gradient-to-br from-orange-500 to-yellow-600',
      cardBg: 'bg-gradient-to-br from-orange-900/20 to-yellow-900/20',
      tags: ['Creative', 'Motion'],
      techStack: [],
      additionalTags: []
    },
    {
      id: 5,
      title: 'HealthTech Digital',
      description: 'Digital health solutions platform...',
      icon: Activity,
      iconBg: 'bg-gradient-to-br from-emerald-500 to-teal-600',
      cardBg: 'bg-gradient-to-br from-emerald-900/20 to-teal-900/20',
      tags: ['Health', 'Digital'],
      techStack: [],
      additionalTags: []
    },
    {
      id: 6,
      title: 'Finance Analytics Pro',
      description: 'Advanced financial analytics and reporting platform...',
      icon: TrendingUp,
      iconBg: 'bg-gradient-to-br from-purple-500 to-indigo-600',
      cardBg: 'bg-gradient-to-br from-purple-900/20 to-indigo-900/20',
      tags: ['Finance', 'Analytics'],
      techStack: [],
      additionalTags: []
    }
  ];

  return (
    <section className="min-h-screen py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            A small selection of <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">Recent Projects</span>
          </h2>
          <p className="text-gray-400 text-xl max-w-4xl mx-auto">
            Explore detailed case studies of projects that showcase technical expertise and real-world impact
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`group relative ${project.cardBg} backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-500 transform hover:scale-105 overflow-hidden`}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                  backgroundImage: `
                    radial-gradient(circle at 20% 50%, rgba(168, 85, 247, 0.3) 0%, transparent 50%),
                    radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
                    radial-gradient(circle at 40% 80%, rgba(16, 185, 129, 0.3) 0%, transparent 50%)
                  `
                }}></div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className={`w-16 h-16 ${project.iconBg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <project.icon className="w-8 h-8 text-white" />
                </div>

                {/* Tags */}
                <div className="flex space-x-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-800/50 text-gray-300 text-sm rounded-full border border-gray-700/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                {project.techStack.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech, index) => (
                      <span
                        key={index}
                        className={`px-2 py-1 ${tech.color} text-white text-xs rounded-md font-medium`}
                      >
                        {tech.name}
                      </span>
                    ))}
                    {project.additionalTags.map((tag, index) => (
                      <span
                        key={`additional-${index}`}
                        className={typeof tag === 'object' 
                          ? `px-2 py-1 ${tag.color} text-white text-xs rounded-md font-medium`
                          : "px-2 py-1 bg-gray-600 text-white text-xs rounded-md font-medium"
                        }
                      >
                        {typeof tag === 'object' ? tag.name : tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* View Details Button */}
                <button className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors group/btn">
                  <span className="text-sm font-medium">View Details</span>
                  <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPageSection;