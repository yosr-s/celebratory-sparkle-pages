
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-festival-blue py-12 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-10">
            <div>
              <h3 className="font-display text-2xl text-festival-gold mb-4">Arabian Festival</h3>
              <p className="text-white/70 mb-4">
                A magical celebration bringing together the rich traditions 
                of Arabian culture with modern festivities.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-white hover:text-festival-gold transition-colors" aria-label="Facebook">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8l-8 8m0-8l8 8m-18-2h20M4 16h16" />
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-festival-gold transition-colors" aria-label="Instagram">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-festival-gold transition-colors" aria-label="Twitter">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="font-display text-xl text-festival-gold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#about" className="text-white/70 hover:text-festival-gold transition-colors">About</a>
                </li>
                <li>
                  <a href="#location" className="text-white/70 hover:text-festival-gold transition-colors">Location</a>
                </li>
                <li>
                  <a href="#wishes" className="text-white/70 hover:text-festival-gold transition-colors">Share Wishes</a>
                </li>
                <li>
                  <a href="#upload" className="text-white/70 hover:text-festival-gold transition-colors">Upload Photos</a>
                </li>
                <li>
                  <a href="#gallery" className="text-white/70 hover:text-festival-gold transition-colors">Gallery</a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-display text-xl text-festival-gold mb-4">Contact</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-festival-gold flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-white/70">info@arabianfestival.com</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-festival-gold flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-white/70">+48 123 456 789</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-festival-gold flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-white/70">Wieża Bismarcka, Łagiewniki, Dolnośląskie</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-6 border-t border-white/10 text-center text-white/50 text-sm">
            <p>&copy; {currentYear} Arabian Festival. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
