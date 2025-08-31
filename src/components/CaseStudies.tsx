import React from 'react';
import { ArrowRight, TrendingUp, Users, Clock, Award } from 'lucide-react';
import { caseStudies } from './data/portfolio';

const Showcase: React.FC = () => {
  const getMetricIcon = (label: string) => {
    if (label.toLowerCase().includes('time') || label.toLowerCase().includes('speed')) return <Clock size={16} />;
    if (label.toLowerCase().includes('team') || label.toLowerCase().includes('satisfaction')) return <Users size={16} />;
    if (label.toLowerCase().includes('uptime') || label.toLowerCase().includes('reliability')) return <Award size={16} />;
    return <TrendingUp size={16} />;
  };

  return (
    <section className="min-h-screen py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Case <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">Studies</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-8"></div>
          <p className="text-lg max-w-3xl mx-auto text-gray-300">
            Deep dives into my most impactful projects, showcasing the challenges, solutions, and measurable results.
          </p>
        </div>

        {/* Case Studies */}
        <div className="space-y-16">
          {caseStudies.map((study, index) => (
            <div
              key={study.id}
              className={`group transition-all duration-500 ${
                index % 2 === 0 ? '' : 'lg:flex-row-reverse'
              }`}
            >
              <div className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 0 ? '' : 'lg:grid-flow-col-dense'
              }`}>
                {/* Content */}
                <div className={`space-y-6 ${index % 2 === 0 ? '' : 'lg:col-start-2'}`}>
                  <div>
                    <h3 className="text-3xl font-bold mb-2 text-white">
                      {study.title}
                    </h3>
                    <p className="text-lg font-medium mb-4 text-purple-400">
                      {study.subtitle}
                    </p>
                    <p className="text-lg leading-relaxed text-gray-300">
                      {study.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-white">
                      Technologies Used:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {study.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-sm font-medium rounded-full bg-purple-900/30 text-purple-300 border border-purple-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-4">
                    {study.metrics.map((metric, metricIndex) => (
                      <div
                        key={metricIndex}
                        className="p-4 rounded-lg bg-gray-900 border border-gray-700 transition-all duration-300 hover:scale-105"
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-purple-400">
                            {getMetricIcon(metric.label)}
                          </span>
                          <span className="text-sm font-medium text-gray-400">
                            {metric.label}
                          </span>
                        </div>
                        <div className="text-2xl font-bold text-white">
                          {metric.value}
                        </div>
                      </div>
                    ))}
                  </div>

                  <button className="group/btn inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                    Read Full Case Study
                    <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform duration-200" />
                  </button>
                </div>

                {/* Image */}
                <div className={`relative ${index % 2 === 0 ? '' : 'lg:col-start-1'}`}>
                  <div className="relative overflow-hidden rounded-xl">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-64 lg:h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                    
                    {/* Floating Metrics */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="p-4 rounded-lg backdrop-blur-sm bg-black/70">
                        <div className="grid grid-cols-2 gap-4">
                          {study.metrics.slice(0, 2).map((metric, metricIndex) => (
                            <div key={metricIndex} className="text-center">
                              <div className="text-lg font-bold text-white">
                                {metric.value}
                              </div>
                              <div className="text-xs text-gray-300">
                                {metric.label}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full opacity-20 bg-purple-500 blur-xl"></div>
                  <div className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full opacity-20 bg-pink-500 blur-xl"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <div className="p-8 rounded-xl bg-gray-900 border border-gray-700">
            <h3 className="text-2xl font-bold mb-4 text-white">
              Ready to Start Your Next Project?
            </h3>
            <p className="text-lg mb-6 text-gray-300">
              Let's discuss how I can help you achieve similar results with your infrastructure and DevOps challenges.
            </p>
            <a
              href="mailto:djelassioussema@gmail.com"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Get In Touch
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
