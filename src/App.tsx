import React, { useState } from 'react';
import Header from './components/Header';
import GeometricBackground from './components/GeometricBackground';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import CodeShowcase from './components/CodeShowcase';
import TestimonialsSection from './components/TestimonialsSection';
import ProductsSection from './components/ProductsSection';
import ApproachSection from './components/ApproachSection';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsPageSection from './components/ProjectsPageSection';
import Showcase from './components/CaseStudies';
import Contact from './components/Contact';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'about':
        return <AboutSection />;
      case 'experience':
        return <ExperienceSection />;
      case 'projects':
        return <ProjectsPageSection />;
      case 'case-studies':
        return <Showcase />;
      case 'contact':
        return <Contact />;
    
      default:
        return (
          <>
            <HeroSection />
            <ServicesSection />
            <CodeShowcase darkMode={true} />
            <TestimonialsSection />
            <ProductsSection />
            <ApproachSection />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Background elements */}
      <GeometricBackground />

      {/* Header */}
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />

      {/* Main content */}
      <main className={currentPage === 'home' ? '' : 'pt-10'}>
        {renderCurrentPage()}
      </main>
    </div>
  );
}

export default App;
