"use client";

import React, { useState, useEffect } from 'react';

const sections = [
  { id: 'hero', name: 'Hero', label: 'Home' },
  { id: 'problems', name: 'Problems', label: 'Problems' },
  { id: 'solutions', name: 'Solutions', label: 'Solutions' },
  { id: 'how-it-works', name: 'How It Works', label: 'Process' },
  { id: 'audience', name: 'Audience', label: 'Who' },
  { id: 'final-cta', name: 'Final CTA', label: 'Contact' },
];

export function NavigationSlab() {
  const [currentSection, setCurrentSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Find which section is most visible in the viewport
      let maxVisibility = 0;
      let activeSection = 'hero';
      
      sections.forEach(section => {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top + scrollY;
          const elementBottom = elementTop + rect.height;
          
          // Calculate how much of the section is visible
          const visibleTop = Math.max(scrollY, elementTop);
          const visibleBottom = Math.min(scrollY + windowHeight, elementBottom);
          const visibleHeight = Math.max(0, visibleBottom - visibleTop);
          const visibility = visibleHeight / windowHeight;
          
          if (visibility > maxVisibility) {
            maxVisibility = visibility;
            activeSection = section.id;
          }
        }
      });
      
      setCurrentSection(activeSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed left-0 top-0 h-screen z-50 bg-mebee-yellow hidden lg:block">
      <div className="h-full flex flex-col justify-center py-8 px-3 space-y-2">
        {sections.map((section, index) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className={`
              block w-full text-left px-3 py-3 text-sm font-medium transition-all duration-200
              ${currentSection === section.id 
                ? 'bg-mebee-dark-navy text-white' 
                : 'text-mebee-dark-navy hover:bg-mebee-dark-navy/10'
              }
            `}
          >
            <div className="text-xs opacity-60 uppercase tracking-wide">
              {String(index + 1).padStart(2, '0')}
            </div>
            <div className="font-semibold">
              {section.label}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}