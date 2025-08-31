import React from 'react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      text: "Ali's expertise and innovative thinking were exactly what our team needed. His technical skills and ability to solve complex problems made a significant impact. He's a fantastic partner to collaborate with.",
      author: "David Wilson",
      position: "Head of Development at Quantum Leap Ventures",
      avatar: "DW"
    },
    {
      text: "Working with Ali was transformative for our AI initiatives. His deep understanding of machine learning and system architecture helped us scale our platform efficiently.",
      author: "Sarah Chen",
      position: "CTO at InnovateTech Solutions",
      avatar: "SC"
    },
    {
      text: "Ali's commitment to our project's success was outstanding. His ability to translate complex technical concepts into actionable solutions is remarkable.",
      author: "Michael Rodriguez",
      position: "Product Director at FutureBuild Inc",
      avatar: "MR"
    }
  ];

  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">clients say</span> about working with me
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Real feedback from founders and teams I've had the privilege to collaborate with
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-500 transform hover:scale-105"
            >
              <div className="mb-6">
                <p className="text-gray-300 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">
                    {testimonial.avatar}
                  </span>
                </div>
                <div>
                  <h4 className="text-white font-semibold">
                    {testimonial.author}
                  </h4>
                  <p className="text-gray-400 text-sm">
                    {testimonial.position}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;