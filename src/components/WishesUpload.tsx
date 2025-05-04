
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { 
  Pagination, 
  PaginationContent, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious 
} from '@/components/ui/pagination';
import { Image, Video } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const WishesUpload = () => {
  const [name, setName] = useState('');
  const [wish, setWish] = useState('');
  const [mediaFile, setMediaFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [mediaType, setMediaType] = useState<'photo' | 'video'>('photo');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  
  // Sample wishes data (this would come from Supabase in a real implementation)
  const sampleWishes = [
    {
      id: 1,
      name: 'Ahmed Khalid',
      wish: 'Wishing everyone at the Arabian Night festival an amazing time! May this celebration bring joy and create memories that last a lifetime.',
      mediaType: 'photo',
      mediaUrl: null,
      avatar: 'AK',
      avatarColor: 'bg-festival-blue',
      timestamp: '2 hours ago'
    },
    {
      id: 2,
      name: 'Layla Samir',
      wish: 'This event is always magical! Looking forward to dancing under the stars again and experiencing the amazing hospitality. See you all there!',
      mediaType: null,
      mediaUrl: null,
      avatar: 'LS',
      avatarColor: 'bg-festival-orange',
      timestamp: '5 hours ago'
    },
    {
      id: 3,
      name: 'Mohammed Hassan',
      wish: 'Cannot wait for the delicious food and amazing performances! The Arabian Night festival gets better every year.',
      mediaType: 'video',
      mediaUrl: null,
      avatar: 'MH',
      avatarColor: 'bg-festival-gold',
      timestamp: '1 day ago'
    },
    {
      id: 4,
      name: 'Fatima Zahra',
      wish: 'Looking forward to the traditional dances and music. The atmosphere is always electric!',
      mediaType: 'photo',
      mediaUrl: null,
      avatar: 'FZ',
      avatarColor: 'bg-festival-navy',
      timestamp: '1 day ago'
    },
    {
      id: 5,
      name: 'Omar Farooq',
      wish: 'I attended last year and it was incredible. The hospitality, food, and entertainment were all outstanding!',
      mediaType: null,
      mediaUrl: null,
      avatar: 'OF',
      avatarColor: 'bg-emerald-600',
      timestamp: '2 days ago'
    },
    {
      id: 6,
      name: 'Aisha Malik',
      wish: 'The Arabian Night festival is a highlight of my year. The atmosphere is magical and I always leave with wonderful memories.',
      mediaType: 'photo',
      mediaUrl: null,
      avatar: 'AM',
      avatarColor: 'bg-purple-600',
      timestamp: '2 days ago'
    }
  ];
  
  // Calculate pagination
  const totalPages = Math.ceil(sampleWishes.length / itemsPerPage);
  const currentWishes = sampleWishes.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  
  const handleMediaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const fileType = file.type;
      
      if (mediaType === 'photo' && fileType.includes('image/')) {
        setMediaFile(file);
      } else if (mediaType === 'video' && fileType.includes('video/')) {
        setMediaFile(file);
      } else {
        toast.error(`Please upload a valid ${mediaType} file.`);
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
    
    if (!wish.trim() && !mediaFile) {
      toast.error('Please enter a wish or upload a photo/video.');
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
      setMediaFile(null);
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
              Leave a special message or upload a photo or video to share your thoughts and well-wishes for this celebration.
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
                  <Label className="text-festival-blue">Upload Media (Optional)</Label>
                  <Tabs 
                    defaultValue="photo" 
                    className="w-full" 
                    onValueChange={(value) => setMediaType(value as 'photo' | 'video')}
                  >
                    <TabsList className="grid w-full grid-cols-2 mb-2">
                      <TabsTrigger value="photo" className="flex items-center gap-1">
                        <Image className="h-4 w-4" />
                        Photo
                      </TabsTrigger>
                      <TabsTrigger value="video" className="flex items-center gap-1">
                        <Video className="h-4 w-4" />
                        Video
                      </TabsTrigger>
                    </TabsList>
                    <TabsContent value="photo">
                      <Input
                        id="photo"
                        type="file"
                        accept="image/*"
                        onChange={handleMediaChange}
                        className="border-festival-gold/30 focus:border-festival-gold focus:ring-festival-gold"
                      />
                      <p className="text-xs text-gray-500 mt-1">Max size: 10MB</p>
                    </TabsContent>
                    <TabsContent value="video">
                      <Input
                        id="video"
                        type="file"
                        accept="video/*"
                        onChange={handleMediaChange}
                        className="border-festival-gold/30 focus:border-festival-gold focus:ring-festival-gold"
                      />
                      <p className="text-xs text-gray-500 mt-1">Max size: 50MB, Max duration: 30 seconds</p>
                    </TabsContent>
                  </Tabs>
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
          
          {/* Display wishes with pagination */}
          <div className="mt-16 space-y-6">
            <h3 className="font-display text-2xl text-center text-festival-blue mb-8">
              Recent Wishes
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {currentWishes.map((item) => (
                <div key={item.id} className="bg-white p-6 rounded-lg shadow-sm border border-festival-gold/20">
                  <div className="flex items-center mb-3">
                    <div className={`w-10 h-10 rounded-full ${item.avatarColor} text-white flex items-center justify-center font-medium`}>
                      {item.avatar}
                    </div>
                    <div className="ml-3">
                      <h4 className="font-medium text-festival-blue">{item.name}</h4>
                      <p className="text-xs text-gray-500">{item.timestamp}</p>
                    </div>
                    {item.mediaType && (
                      <div className="ml-auto">
                        {item.mediaType === 'photo' ? (
                          <Image size={18} className="text-festival-blue" />
                        ) : (
                          <Video size={18} className="text-festival-blue" />
                        )}
                      </div>
                    )}
                  </div>
                  <p className="text-gray-700">{item.wish}</p>
                </div>
              ))}
            </div>
            
            {/* Pagination controls */}
            <Pagination className="mt-10">
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious 
                    href="#" 
                    onClick={(e) => {
                      e.preventDefault();
                      if (currentPage > 1) setCurrentPage(currentPage - 1);
                    }} 
                    className={currentPage <= 1 ? "pointer-events-none opacity-50" : ""}
                  />
                </PaginationItem>
                
                {Array.from({ length: totalPages }).map((_, index) => (
                  <PaginationItem key={index}>
                    <PaginationLink 
                      href="#" 
                      onClick={(e) => {
                        e.preventDefault();
                        setCurrentPage(index + 1);
                      }}
                      isActive={currentPage === index + 1}
                    >
                      {index + 1}
                    </PaginationLink>
                  </PaginationItem>
                ))}
                
                <PaginationItem>
                  <PaginationNext 
                    href="#" 
                    onClick={(e) => {
                      e.preventDefault();
                      if (currentPage < totalPages) setCurrentPage(currentPage + 1);
                    }}
                    className={currentPage >= totalPages ? "pointer-events-none opacity-50" : ""}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </motion.div>
      </div>
      
      <div className="section-divider mt-20"></div>
    </section>
  );
};

export default WishesUpload;
