import React from 'react';

const ProductsSection = () => {
  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Products I've helped <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">launch</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-3xl mx-auto mb-16">
          Trusted by innovative companies to bring their visions to life
        </p>
        
        {/* This would typically contain product logos or cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-50">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <div
              key={item}
              className="h-16 bg-gray-800/30 rounded-lg flex items-center justify-center border border-gray-700/30"
            >
              <div className="w-12 h-8 bg-gradient-to-r from-purple-500/30 to-blue-500/30 rounded"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;