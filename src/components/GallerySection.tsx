import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import venueInterior from '@/assets/venue-interior.jpg';

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Sample images - in a real scenario, these would come from your actual gallery
  const galleryImages = [
    { src: venueInterior, alt: 'Interior do espaço Happy Dreams' },
    { src: venueInterior, alt: 'Salão principal' },
    { src: venueInterior, alt: 'Área da piscina' },
    { src: venueInterior, alt: 'Quiosque com churrasqueira' },
    { src: venueInterior, alt: 'Mesa de buffet' },
    { src: venueInterior, alt: 'Área externa' },
    { src: venueInterior, alt: 'Decoração para eventos' },
    { src: venueInterior, alt: 'Espaço de cerimônia' },
  ];

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    if (direction === 'prev') {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1);
    } else {
      setSelectedImage(selectedImage === galleryImages.length - 1 ? 0 : selectedImage + 1);
    }
  };

  return (
    <section id="galeria" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-6">
            Galeria de <span className="text-gold">Fotos</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-gold mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-inter">
            Conheça nosso espaço através das imagens
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-lg aspect-square"
              onClick={() => openLightbox(index)}
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                  <p className="font-inter font-medium">Ver imagem</p>
                </div>
              </div>
              <div className="absolute inset-0 ring-0 group-hover:ring-2 ring-gold transition-all duration-300 rounded-lg"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground font-inter mb-6">
            Gostou do que viu? Agende uma visita!
          </p>
          <button 
            onClick={() => window.open('https://wa.me/5565996720567', '_blank')}
            className="inline-flex items-center gap-2 text-gold hover:text-gold-muted transition-colors font-inter font-medium text-lg group"
          >
            Agendar visita no WhatsApp
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            {/* Close Button */}
            <button 
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white hover:text-gold transition-colors z-10"
            >
              <X size={32} />
            </button>

            {/* Navigation Buttons */}
            <button 
              onClick={() => navigateImage('prev')}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gold transition-colors z-10"
            >
              <ChevronLeft size={32} />
            </button>
            
            <button 
              onClick={() => navigateImage('next')}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gold transition-colors z-10"
            >
              <ChevronRight size={32} />
            </button>

            {/* Image */}
            <img 
              src={galleryImages[selectedImage].src} 
              alt={galleryImages[selectedImage].alt}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            />

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-center">
              <p className="font-inter">
                {selectedImage + 1} de {galleryImages.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;