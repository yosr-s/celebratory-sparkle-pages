
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

// Sample gallery items
const galleryItems = [
  {
    id: 1,
    type: 'image',
    url: 'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb', 
    thumbnail: 'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?auto=format&fit=crop&w=400&h=300',
    alt: 'Arabian night with stars',
    caption: 'Magical Arabian night with a starry sky'
  },
  {
    id: 2,
    type: 'image',
    url: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07',
    thumbnail: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=400&h=300',
    alt: 'Desert flowers',
    caption: 'Beautiful desert flowers in bloom'
  },
  {
    id: 3,
    type: 'image',
    url: 'https://images.unsplash.com/photo-1500673922987-e212871fec22',
    thumbnail: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=400&h=300',
    alt: 'Festival lights',
    caption: 'Festival lights creating magical atmosphere'
  },
  {
    id: 4,
    type: 'image',
    url: 'https://images.unsplash.com/photo-1466442929976-97f336a657be',
    thumbnail: 'https://images.unsplash.com/photo-1466442929976-97f336a657be?auto=format&fit=crop&w=400&h=300',
    alt: 'Arabian architecture',
    caption: 'Beautiful Arabian architectural details'
  },
  {
    id: 5,
    type: 'video',
    url: 'https://player.vimeo.com/external/459389137.sd.mp4?s=868872ed39d243fe8443471f324bfa5e66c27852&profile_id=139&oauth2_token_id=57447761',
    thumbnail: 'https://images.unsplash.com/photo-1455721303142-0cca2fbfaacd?auto=format&fit=crop&w=400&h=300',
    alt: 'Desert dancers',
    caption: 'Traditional dancers performing at sunset'
  },
  {
    id: 6,
    type: 'image',
    url: '/lovable-uploads/970260ef-93c8-4c9e-b8bf-556e7318b76a.png',
    thumbnail: '/lovable-uploads/970260ef-93c8-4c9e-b8bf-556e7318b76a.png',
    alt: 'Arabian Night Festival',
    caption: 'Official Festival Invitation'
  },
];

const Gallery = () => {
  const [selectedItem, setSelectedItem] = useState<typeof galleryItems[0] | null>(null);
  const [filters, setFilters] = useState<{
    images: boolean;
    videos: boolean;
  }>({
    images: true,
    videos: true,
  });
  
  const filteredItems = galleryItems.filter(item => 
    (item.type === 'image' && filters.images) || 
    (item.type === 'video' && filters.videos)
  );
  
  const toggleFilter = (filterType: 'images' | 'videos') => {
    setFilters(prev => ({
      ...prev,
      [filterType]: !prev[filterType]
    }));
  };

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl text-festival-blue mb-6">
              Festival <span className="text-festival-gold">Gallery</span>
            </h2>
            
            <p className="text-gray-700 text-lg mb-8 max-w-3xl mx-auto">
              Browse through moments captured at our Arabian Nights celebrations.
              Relive the magic and find yourself in these memories.
            </p>
            
            <div className="flex justify-center gap-4 mb-8">
              <Button 
                onClick={() => toggleFilter('images')}
                variant={filters.images ? 'default' : 'outline'}
                className={filters.images ? 
                  'bg-festival-gold hover:bg-festival-gold/80 text-festival-blue' : 
                  'border-festival-gold text-festival-blue hover:bg-festival-gold/10'
                }
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Photos
              </Button>
              
              <Button 
                onClick={() => toggleFilter('videos')}
                variant={filters.videos ? 'default' : 'outline'}
                className={filters.videos ? 
                  'bg-festival-gold hover:bg-festival-gold/80 text-festival-blue' : 
                  'border-festival-gold text-festival-blue hover:bg-festival-gold/10'
                }
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                Videos
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <motion.div 
                key={item.id}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="aspect-square relative overflow-hidden rounded-lg shadow-md cursor-pointer group"
                onClick={() => setSelectedItem(item)}
              >
                <img 
                  src={item.thumbnail} 
                  alt={item.alt} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {item.type === 'video' && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 bg-white rounded-full bg-opacity-75 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-festival-gold" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                )}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-sm">{item.caption}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          {filteredItems.length === 0 && (
            <div className="text-center p-12 bg-gray-100 rounded-lg">
              <p className="text-gray-600">No items match the current filters.</p>
              <Button 
                onClick={() => setFilters({ images: true, videos: true })}
                variant="link"
                className="text-festival-gold mt-2"
              >
                Reset filters
              </Button>
            </div>
          )}
        </motion.div>
        
        {/* Media viewer dialog */}
        <Dialog open={!!selectedItem} onOpenChange={(open) => !open && setSelectedItem(null)}>
          <DialogContent className="sm:max-w-4xl bg-black bg-opacity-90 border-none">
            <div className="p-1 sm:p-4">
              {selectedItem?.type === 'image' ? (
                <img 
                  src={selectedItem.url} 
                  alt={selectedItem.alt} 
                  className="w-full h-auto max-h-[70vh] object-contain"
                />
              ) : selectedItem?.type === 'video' ? (
                <video 
                  src={selectedItem.url} 
                  controls
                  autoPlay
                  className="w-full h-auto max-h-[70vh] object-contain"
                />
              ) : null}
              
              {selectedItem?.caption && (
                <p className="mt-4 text-white text-center">{selectedItem.caption}</p>
              )}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Gallery;
