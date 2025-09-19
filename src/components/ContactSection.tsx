import { Phone, MessageCircle, Clock, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ContactSection = () => {
  const whatsappNumber = "5565996720567";
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;
  const phoneNumber = "(65) 99672-0567";

  return (
    <section id="contato" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground-dark mb-6">
            Agende já sua festa no <span className="text-gold">Happy Dreams Buffet!</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-gold mx-auto mb-6"></div>
          <p className="text-xl text-foreground-dark/90 max-w-3xl mx-auto font-inter leading-relaxed">
            Entre em contato conosco e vamos tornar seu evento inesquecível
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Card */}
          <div className="lg:col-span-2 bg-card-dark/50 backdrop-blur-sm p-8 rounded-lg border border-gold/20">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mr-4">
                <Phone className="text-gold-foreground" size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-playfair font-bold text-foreground-dark mb-1">
                  Thiago Martinez
                </h3>
                <p className="text-gold font-inter font-medium">
                  Especialista em eventos
                </p>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center text-foreground-dark/90">
                <Phone className="text-gold mr-3" size={20} />
                <span className="font-inter text-lg">{phoneNumber}</span>
              </div>
              
              <div className="flex items-center text-foreground-dark/90">
                <MessageCircle className="text-gold mr-3" size={20} />
                <span className="font-inter">Atendimento via WhatsApp</span>
              </div>
              
              <div className="flex items-center text-foreground-dark/90">
                <Clock className="text-gold mr-3" size={20} />
                <span className="font-inter">Horário de atendimento: 8h às 20h</span>
              </div>
            </div>

            <div className="space-y-4">
              <Button 
                variant="hero" 
                size="xl" 
                className="w-full"
                onClick={() => window.open(whatsappUrl, '_blank')}
              >
                <MessageCircle className="mr-3" size={24} />
                Falar no WhatsApp
              </Button>
              
              <Button 
                variant="outline-gold" 
                size="lg" 
                className="w-full"
                onClick={() => window.location.href = `tel:${whatsappNumber}`}
              >
                <Phone className="mr-2" size={20} />
                Ligar agora
              </Button>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="bg-card-dark/30 backdrop-blur-sm p-6 rounded-lg border border-gold/20">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="text-gold-foreground" size={28} />
              </div>
              <h3 className="text-xl font-playfair font-bold text-foreground-dark mb-2">
                Por que escolher o Happy Dreams?
              </h3>
            </div>

            <ul className="space-y-4 text-foreground-dark/90 font-inter">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-gold rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Espaço completo e climatizado</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-gold rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Estrutura para até 200 pessoas</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-gold rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Piscina com cascata</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-gold rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Estacionamento próprio</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-gold rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Acessibilidade garantida</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-gold rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Atendimento personalizado</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <p className="text-lg text-foreground-dark/80 font-inter mb-6">
            Não perca tempo! Entre em contato agora e garante a data do seu evento.
          </p>
          <div className="inline-flex items-center space-x-2 text-gold">
            <MessageCircle size={20} />
            <span className="font-inter font-medium">Resposta rápida garantida!</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;