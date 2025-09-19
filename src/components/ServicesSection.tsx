import { 
  Baby, 
  Heart, 
  GraduationCap, 
  Users, 
  Heart as Rings, 
  Gift, 
  Sparkles 
} from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const ServicesSection = () => {
  const services = [
    { icon: Baby, title: 'Infantil', description: 'Festas mágicas para os pequenos' },
    { icon: Heart, title: 'Ação Social', description: 'Eventos solidários e beneficentes' },
    { icon: GraduationCap, title: 'Colação de Grau', description: 'Celebre sua conquista acadêmica' },
    { icon: Users, title: 'Confraternização', description: 'Eventos corporativos e encontros' },
    { icon: Rings, title: 'Casamentos', description: 'O dia mais especial da sua vida' },
    { icon: Gift, title: 'Aniversários', description: 'Comemore mais um ano de vida' },
    { icon: Sparkles, title: '15 Anos', description: 'A festa dos sonhos da sua princesa' },
  ];

  return (
    <section id="servicos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-6">
            Nossos <span className="text-gold">Serviços</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-gold mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-inter">
            Oferecemos os melhores serviços para tornar seu evento inesquecível
          </p>
        </div>

        {/* Services Carousel */}
        <div className="relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[Autoplay({ delay: 3000 })]}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {services.map((service, index) => (
                <CarouselItem key={service.title} className="pl-2 md:pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <div 
                    className="group text-center p-6 rounded-lg hover:shadow-card transition-all duration-300 hover:-translate-y-2 h-full"
                    style={{animationDelay: `${index * 0.1}s`}}
                  >
                    {/* Icon Container */}
                    <div className="mb-6 relative">
                      <div className="w-20 h-20 mx-auto bg-gradient-gold rounded-full flex items-center justify-center shadow-gold group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                        <service.icon className="text-gold-foreground" size={32} />
                      </div>
                      
                      {/* Hover Effect Ring */}
                      <div className="absolute inset-0 w-20 h-20 mx-auto border-2 border-gold rounded-full opacity-0 group-hover:opacity-50 scale-125 group-hover:scale-150 transition-all duration-300"></div>
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-playfair font-semibold text-foreground mb-3 group-hover:text-gold transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground font-inter text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0 -translate-x-12" />
            <CarouselNext className="right-0 translate-x-12" />
          </Carousel>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground font-inter mb-6">
            Qual evento você gostaria de realizar?
          </p>
          <button 
            onClick={() => window.open('https://wa.me/5565996720567', '_blank')}
            className="inline-flex items-center gap-2 text-gold hover:text-gold-muted transition-colors font-inter font-medium text-lg group"
          >
            Fale conosco no WhatsApp
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;