import React, { useEffect, useState } from 'react';
import { Download, Zap, Linkedin, Mail, Github } from 'lucide-react';

const HeroSection = () => {
  const texts = [
    "Hi, I'm Oussema",
    'Hola, soy Oussema',
    'Hallo, ich bin Oussema',
    'Hei, jeg er Oussema',
    'Hej, jag är Oussema',
    'مرحبًا، أنا أسامة',
    'こんにちは、オスマです'
  ];

  const [displayText, setDisplayText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showScrollIcon, setShowScrollIcon] = useState(true);

  // Typing effect
  useEffect(() => {
    const currentText = texts[textIndex];
    const typingSpeed = isDeleting ? 80 : 150;

    const handleTyping = () => {
      if (!isDeleting && charIndex < currentText.length) {
        setDisplayText(currentText.slice(0, charIndex + 1));
        setCharIndex(prev => prev + 1);
      } else if (isDeleting && charIndex > 0) {
        setDisplayText(currentText.slice(0, charIndex - 1));
        setCharIndex(prev => prev - 1);
      } else if (!isDeleting && charIndex === currentText.length) {
        setTimeout(() => setIsDeleting(true), 2500);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setTextIndex(prev => (prev + 1) % texts.length);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, textIndex]);

  // Scroll detection
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY === 0) {
        setShowScrollIcon(true);
      } else if (window.scrollY > lastScrollY) {
        setShowScrollIcon(false);
      } else {
        setShowScrollIcon(true);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative px-6">
      <div className="text-center max-w-4xl mx-auto">
        {/* Animated greeting */}
        <h1 className="text-4xl md:text-6xl font-bold mb-6 whitespace-nowrap">
          <span className="bg-gradient-to-r from-white via-purple-400 to-blue-500 bg-clip-text text-transparent transition-all duration-500">
            {displayText}
          </span>
          <span className="animate-pulse text-purple-400">|</span>
        </h1>

        {/* Title */}
        <h2 className="text-xl md:text-3xl text-gray-300 mb-6 font-bold">
          Cloud & DevOps Engineer
        </h2>

        {/* Description */}
        <p className="text-gray-400 text-base md:text-lg mb-12 max-w-3xl mx-auto leading-relaxed">
        Architecting cloud-native infrastructure, automating deployment pipelines, and building reliable platforms that scale from zero to millions of users.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
        <a 
  href="/OUSSEMA_JELASSI_DevOps_Enginee.pdf" 
  download 
  target="_blank" 
  rel="noopener noreferrer"
>
  <button className="group bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center space-x-2">
    <Download className="w-5 h-5 group-hover:animate-bounce" />
    <span>Download CV</span>
  </button>
</a>
          <a 
  href="https://calendly.com/djelassioussema/30min" 
  target="_blank" 
  rel="noopener noreferrer"
>
  <button className="group border border-gray-600 hover:border-purple-500 text-white px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 hover:bg-purple-500/10">
    <Zap className="w-5 h-5 group-hover:animate-pulse" />
    <span>Let's Build Together</span>
  </button>
</a>
        </div>

        {/* Social Icons */}
        <div className="flex items-center justify-center space-x-6 mt-10 mb-16">
          <a
            href="https://linkedin.com/in/oussema-jelassi/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full transition-transform duration-200 hover:scale-110 bg-gray-800 hover:bg-purple-600"
          >
            <Linkedin size={24} className="text-white" />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full transition-transform duration-200 hover:scale-110 bg-gray-800 hover:bg-purple-600"
          >
            <Github size={24} className="text-white" />
          </a>
          <a
            href="mailto:djelassioussema@gmail.com"
            className="p-3 rounded-full transition-transform duration-200 hover:scale-110 bg-gray-800 hover:bg-purple-600"
          >
            <Mail size={24} className="text-white" />
          </a>
        </div>
      </div>

      {/* Scroll Icon at bottom */}
      {showScrollIcon && (
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-2">
          <span className="text-gray-400 text-sm animate-bounce">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex items-start justify-center p-1">
            <div className="w-1 h-2 bg-gray-400 rounded-full animate-bounce mt-3"></div>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
