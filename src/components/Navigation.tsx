
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "bg-festival-navy bg-opacity-90 shadow-md py-2" : "bg-transparent py-4"
    )}>
      <div className="container mx-auto flex justify-between items-center px-4">
        <a href="#" className="text-festival-gold font-display text-xl font-bold">
          Arabian Festival
        </a>
        
        <div className="hidden md:flex gap-8">
          <a href="#about" className="text-white hover:text-festival-gold transition-colors">About</a>
          <a href="#location" className="text-white hover:text-festival-gold transition-colors">Location</a>
          <a href="#wishes" className="text-white hover:text-festival-gold transition-colors">Wishes</a>
          <a href="#gallery" className="text-white hover:text-festival-gold transition-colors">Gallery</a>
        </div>
        
        <div className="md:hidden">
          <button className="text-white hover:text-festival-gold">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
