import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import happyDreamsLogo from '@/assets/happy-dreams-logo.png';

const HeroSection = () => {
  const scrollToServices = () => {
    const element = document.querySelector('#servicos');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="inicio" 
      className="relative min-h-screen bg-gradient-hero flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: 'url("/src/assets/venue-interior.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay'
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-background-dark/70"></div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,215,0,0.3),transparent_70%)]"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Logo */}
        <div className="mb-8 animate-fade-in">
          <img 
            src={happyDreamsLogo} 
            alt="Happy Dreams Buffet" 
            className="mx-auto h-32 md:h-40 w-auto filter brightness-0 invert"
          />
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-satisfy font-bold text-foreground-dark mb-6">
          <span className="block animate-[fadeInLeft_1s_ease-out] opacity-0 [animation-fill-mode:forwards]">Happy Dreams</span>
          <span className="text-gold block animate-[fadeInRight_1s_ease-out_0.3s] opacity-0 [animation-fill-mode:forwards]">Espaço Buffet</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-foreground-dark/90 mb-12 max-w-3xl mx-auto font-inter leading-relaxed animate-fade-in-up">
          Celebre momentos únicos com sua família e amigos em um lugar{' '}
          <span className="text-gold font-medium">super aconchegante!</span>
        </p>

        {/* CTA Button */}
        <div className="mb-16 animate-scale-in">
          <Button 
            variant="hero" 
            size="xl"
            onClick={scrollToServices}
            className="group"
          >
            Conheça nosso espaço
            <ChevronDown className="ml-2 group-hover:animate-bounce" size={20} />
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-gold" size={24} />
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 border border-gold/20 rounded-full animate-float hidden lg:block"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 border border-gold/20 rounded-full animate-float hidden lg:block" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/2 left-5 w-12 h-12 border border-gold/20 rounded-full animate-float hidden lg:block" style={{animationDelay: '2s'}}></div>
    </section>
  );
};

export default HeroSection;