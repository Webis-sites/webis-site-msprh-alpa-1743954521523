'use client';

import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

interface NavItem {
  id: string;
  label: string;
}

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  
  const navItems: NavItem[] = [
    { id: 'services', label: 'שירותים' },
    { id: 'about', label: 'אודות' },
    { id: 'team', label: 'צוות' },
    { id: 'gallery', label: 'גלריה' },
    { id: 'testimonials', label: 'המלצות' },
    { id: 'faq', label: 'שאלות נפוצות' },
    { id: 'contact', label: 'צור קשר' },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.id);
      
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md" dir="rtl">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center">
              <span className="text-white font-bold text-xl">מ"א</span>
            </div>
            <h1 className="text-2xl font-bold mr-3 text-secondary font-barber">
              מספרה אלפא
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-6 space-x-reverse">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`py-2 px-3 text-lg font-medium transition-colors duration-300 hover:text-primary ${
                      activeSection === item.id
                        ? 'text-primary border-b-2 border-primary'
                        : 'text-gray-700'
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={toggleMenu}
            aria-label={isOpen ? 'סגור תפריט' : 'פתח תפריט'}
          >
            {isOpen ? (
              <FaTimes className="h-6 w-6 text-primary" />
            ) : (
              <FaBars className="h-6 w-6 text-primary" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-gray-200 overflow-hidden"
          >
            <nav className="container mx-auto px-4 py-3">
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className={`block w-full text-right py-2 px-3 text-lg font-medium transition-colors duration-300 hover:bg-gray-100 rounded-md ${
                        activeSection === item.id
                          ? 'text-primary bg-gray-50'
                          : 'text-gray-700'
                      }`}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;