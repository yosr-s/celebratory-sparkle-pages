
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix the marker icon issue in Leaflet with React
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const Location = () => {
  // Location coordinates for Wieża Bismarcka, Łagiewniki
  const position: [number, number] = [51.0970, 16.9645]; // This is a placeholder, use the actual coordinates
  const [mapLoaded, setMapLoaded] = useState(false);

  return (
    <section id="location" className="py-20 bg-festival-blue text-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl text-festival-gold mb-6">
              Join Us Here
            </h2>
            
            <p className="text-lg mb-8 max-w-3xl mx-auto">
              Our magical event takes place at the historic Wieża Bismarcka in Łagiewniki, Dolnośląskie.
              A scenic location that transforms into our Arabian paradise.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="fancy-border h-[400px] md:h-[500px] overflow-hidden rounded-lg">
              {typeof window !== 'undefined' && (
                <MapContainer 
                  center={position} 
                  zoom={14} 
                  style={{ height: '100%', width: '100%' }}
                  whenReady={() => setMapLoaded(true)}
                >
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  />
                  <Marker position={position}>
                    <Popup>
                      Arabian Night & Arabian Day Festival <br/> Wieża Bismarcka, Łagiewniki
                    </Popup>
                  </Marker>
                </MapContainer>
              )}
            </div>

            <div>
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
                <h3 className="font-display text-2xl text-festival-gold mb-4">Event Details</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-festival-gold rounded-full text-festival-blue mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-1">Dates</h4>
                      <p>Friday, May 16 - Sunday, May 18</p>
                      <p className="text-sm text-festival-gold">5:00 PM - 8:00 PM GMT+2</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-festival-gold rounded-full text-festival-blue mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-1">Location</h4>
                      <p>Wieża Bismarcka</p>
                      <p className="text-sm">Łagiewniki, Dolnośląskie</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-festival-gold rounded-full text-festival-blue mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-1">Weather</h4>
                      <p>Expected temperature: 46°F to 62°F</p>
                      <p className="text-sm">Prepare for cooler evenings</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      
      <div className="section-divider mt-20"></div>
    </section>
  );
};

export default Location;
