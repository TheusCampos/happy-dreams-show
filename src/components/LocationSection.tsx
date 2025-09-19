import { MapPin, Navigation } from 'lucide-react';
import { Button } from '@/components/ui/button';

const LocationSection = () => {
  const address = "Rua 9, nº 224 – Jardim Beira Rio (Coophamil), Cuiabá – MT";
  const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=Rua+9,+224+Jardim+Beira+Rio+Cuiabá+MT";

  return (
    <section id="localizacao" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-6">
            Nossa <span className="text-gold">Localização</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-gold mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-inter">
            Fácil acesso e localização privilegiada em Cuiabá
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Address Info */}
          <div className="space-y-8">
            <div className="bg-card p-8 rounded-lg shadow-card">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-gold rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-gold-foreground" size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-playfair font-bold text-foreground mb-3">
                    Endereço
                  </h3>
                  <p className="text-lg text-muted-foreground font-inter leading-relaxed">
                    {address}
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <Button 
                  variant="gold" 
                  size="lg" 
                  className="w-full"
                  onClick={() => window.open(googleMapsUrl, '_blank')}
                >
                  <Navigation className="mr-2" size={20} />
                  Ver no Google Maps
                </Button>
                
                <Button 
                  variant="outline-gold" 
                  size="lg" 
                  className="w-full"
                  onClick={() => window.open('https://wa.me/5565996720567', '_blank')}
                >
                  Solicitar localização via WhatsApp
                </Button>
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-card p-6 rounded-lg shadow-card">
              <h4 className="font-playfair font-semibold text-foreground mb-4 text-lg">
                Informações importantes:
              </h4>
              <ul className="space-y-2 text-muted-foreground font-inter">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-gold rounded-full mr-3"></span>
                  Estacionamento próprio gratuito
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-gold rounded-full mr-3"></span>
                  Fácil acesso para cadeirantes
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-gold rounded-full mr-3"></span>
                  Localização central em Cuiabá
                </li>
              </ul>
            </div>
          </div>

          {/* Map Container */}
          <div className="bg-card rounded-lg shadow-card overflow-hidden">
            <div className="aspect-video">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3840.1234567890123!2d-56.0987654!3d-15.6012345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDM2JzA0LjQiUyA1NsKwMDUnNTUuNiJX!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Happy Dreams Buffet"
                className="filter grayscale hover:grayscale-0 transition-all duration-300"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;