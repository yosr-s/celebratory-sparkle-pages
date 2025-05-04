
import React, { useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Location from '@/components/Location';
import WishesUpload from '@/components/WishesUpload';
import PhotoUpload from '@/components/PhotoUpload';
import Gallery from '@/components/Gallery';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Update the page title
    document.title = "Arabian Night & Arabian Day Festival";
  }, []);

  return (
    <AnimatePresence>
      <div className="relative overflow-x-hidden">
        <Navigation />
        <Hero />
        <About />
        <Location />
        <WishesUpload />
        <PhotoUpload />
        <Gallery />
        <Footer />
      </div>
    </AnimatePresence>
  );
};

export default Index;
