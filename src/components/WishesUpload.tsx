
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

const WishesUpload = () => {
  const [name, setName] = useState('');
  const [wish, setWish] = useState('');
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleVideoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      // Check if it's a video (you can add more video types if needed)
      if (file.type.includes('video/')) {
        setVideoFile(file);
      } else {
        toast.error('Please upload a valid video file.');
      }
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!name.trim()) {
      toast.error('Please enter your name.');
      return;
    }
    
    if (!wish.trim() && !videoFile) {
      toast.error('Please enter a wish or upload a video.');
      return;
    }
    
    // Show submitting state
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast.success('Your wish has been submitted successfully!');
      
      // Reset form
      setName('');
      setWish('');
      setVideoFile(null);
      setIsSubmitting(false);
    }, 1500);
  };
  
  return (
    <section id="wishes" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl text-festival-blue mb-6">
              Share Your <span className="text-festival-gold">Wishes</span>
            </h2>
            
            <p className="text-gray-700 text-lg mb-8 max-w-3xl mx-auto">
              Leave a special message or upload a short video to share your thoughts and well-wishes for this celebration.
            </p>
          </div>
          
          <div className="bg-festival-sand bg-opacity-30 p-8 rounded-lg shadow-md">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-festival-blue">Your Name</Label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    className="border-festival-gold/30 focus:border-festival-gold focus:ring-festival-gold"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="video" className="text-festival-blue">Upload Video (Optional)</Label>
                  <Input
                    id="video"
                    type="file"
                    accept="video/*"
                    onChange={handleVideoChange}
                    className="border-festival-gold/30 focus:border-festival-gold focus:ring-festival-gold"
                  />
                  <p className="text-xs text-gray-500">Max size: 50MB, Max duration: 30 seconds</p>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="wish" className="text-festival-blue">Your Message</Label>
                <Textarea
                  id="wish"
                  value={wish}
                  onChange={(e) => setWish(e.target.value)}
                  placeholder="Type your wishes or message here..."
                  className="min-h-[120px] border-festival-gold/30 focus:border-festival-gold focus:ring-festival-gold"
                />
              </div>
              
              <div className="flex justify-center pt-4">
                <Button 
                  type="submit" 
                  disabled={isSubmitting} 
                  className="bg-festival-gold hover:bg-festival-gold/80 text-festival-blue font-medium px-8 py-2 rounded-md"
                >
                  {isSubmitting ? 'Submitting...' : 'Share Your Wish'}
                </Button>
              </div>
            </form>
          </div>
          
          {/* Display some sample wishes */}
          <div className="mt-16 space-y-6">
            <h3 className="font-display text-2xl text-center text-festival-blue mb-8">
              Recent Wishes
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-festival-gold/20">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 rounded-full bg-festival-blue text-white flex items-center justify-center font-medium">
                    AK
                  </div>
                  <div className="ml-3">
                    <h4 className="font-medium text-festival-blue">Ahmed Khalid</h4>
                    <p className="text-xs text-gray-500">2 hours ago</p>
                  </div>
                </div>
                <p className="text-gray-700">
                  Wishing everyone at the Arabian Night festival an amazing time! May this celebration bring joy and create memories that last a lifetime.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-festival-gold/20">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 rounded-full bg-festival-orange text-white flex items-center justify-center font-medium">
                    LS
                  </div>
                  <div className="ml-3">
                    <h4 className="font-medium text-festival-blue">Layla Samir</h4>
                    <p className="text-xs text-gray-500">5 hours ago</p>
                  </div>
                </div>
                <p className="text-gray-700">
                  This event is always magical! Looking forward to dancing under the stars again and experiencing the amazing hospitality. See you all there!
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      
      <div className="section-divider mt-20"></div>
    </section>
  );
};

export default WishesUpload;
