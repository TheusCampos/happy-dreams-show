import aboutBgMobile from '@/assets/about-bg-mobile.jpg';
import aboutBgDesktop from '@/assets/about-bg-desktop.jpg';

const AboutSection = () => {
  return (
    <section id="sobre" className="relative py-20 overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0 z-0">
        {/* Mobile Background */}
        <div 
          className="block md:hidden absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${aboutBgMobile})` }}
        ></div>
        
        {/* Desktop Background */}
        <div 
          className="hidden md:block absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${aboutBgDesktop})` }}
        ></div>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-background/80"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Header */}
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-6">
              Sobre o <span className="text-gold">Happy Dreams</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-gold mx-auto mb-8"></div>
          </div>

          {/* About Content */}
          <div className="space-y-8">
            <p className="text-lg md:text-xl text-muted-foreground font-inter leading-relaxed">
              O Happy Dreams Espaço Buffet é o lugar ideal para celebrar seus momentos mais especiais. 
              Com um ambiente aconchegante e sofisticado, oferecemos a estrutura completa para tornar 
              seu evento inesquecível.
            </p>
            
            <p className="text-base md:text-lg text-muted-foreground font-inter leading-relaxed">
              Nossa missão é transformar sonhos em realidade, proporcionando experiências únicas 
              em um espaço que combina elegância, conforto e funcionalidade. Cada detalhe é pensado 
              para que você e seus convidados vivam momentos verdadeiramente especiais.
            </p>

            <div className="flex flex-wrap justify-center gap-6 mt-12">
              <div className="text-center">
                <div className="text-3xl font-playfair font-bold text-gold mb-2">5+</div>
                <div className="text-sm text-muted-foreground font-inter">Anos de Experiência</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-playfair font-bold text-gold mb-2">200+</div>
                <div className="text-sm text-muted-foreground font-inter">Eventos Realizados</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-playfair font-bold text-gold mb-2">100%</div>
                <div className="text-sm text-muted-foreground font-inter">Satisfação dos Clientes</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;