import React from 'react';
import { Sun, Moon, Cloud, Menu, X } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage }) => {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'case-studies', label: 'Case Studies' },
    { id: 'contact', label: 'Contact' }

  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-black/95 backdrop-blur-sm border-b border-gray-800/50">
      <nav className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Cloud className="h-8 w-8 text-purple-500" />
          <span className="text-white font-semibold text-lg">Oussema Jelassi</span>
        </div>

        {/* Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                className={`${
                  currentPage === item.id
                    ? 'flex items-center space-x-2 bg-gray-800/50 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-700/50'
                    : 'text-gray-300 hover:text-white transition-colors'
                }`}
              >
                {currentPage === item.id && (
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                )}
                <span className="text-white">{item.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center space-x-4">
          <button className="p-2 text-gray-300 hover:text-white transition-colors">
            <Sun className="w-5 h-5" />
          </button>
          <button className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105">
            Get in Touch
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;