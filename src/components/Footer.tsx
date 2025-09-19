import { Instagram, Facebook, Phone, MapPin } from 'lucide-react';
import happyDreamsLogo from '@/assets/happy-dreams-logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: '#inicio', label: 'Início' },
    { href: '#servicos', label: 'Serviços' },
    { href: '#estrutura', label: 'Estrutura' },
    { href: '#galeria', label: 'Galeria' },
    { href: '#contato', label: 'Contato' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-background-dark text-foreground-dark">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <img 
                src={happyDreamsLogo} 
                alt="Happy Dreams Buffet" 
                className="h-16 w-auto filter brightness-0 invert"
              />
            </div>
            <p className="text-foreground-dark/80 font-inter leading-relaxed mb-6 max-w-md">
              O Happy Dreams Buffet é o espaço ideal para realizar seus eventos mais especiais. 
              Com estrutura completa e atendimento personalizado, transformamos sonhos em realidade.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-foreground-dark/10 hover:bg-gold rounded-full flex items-center justify-center transition-all duration-300 group"
              >
                <Instagram className="text-foreground-dark group-hover:text-gold-foreground" size={20} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-foreground-dark/10 hover:bg-gold rounded-full flex items-center justify-center transition-all duration-300 group"
              >
                <Facebook className="text-foreground-dark group-hover:text-gold-foreground" size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-playfair font-bold mb-6 text-gold">
              Links Rápidos
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-foreground-dark/80 hover:text-gold transition-colors duration-300 font-inter"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-playfair font-bold mb-6 text-gold">
              Contato
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="text-gold mt-1 flex-shrink-0" size={16} />
                <div>
                  <p className="text-foreground-dark/80 font-inter text-sm">
                    (65) 99672-0567
                  </p>
                  <p className="text-foreground-dark/60 font-inter text-xs">
                    Thiago Martinez
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="text-gold mt-1 flex-shrink-0" size={16} />
                <div>
                  <p className="text-foreground-dark/80 font-inter text-sm leading-relaxed">
                    Rua 9, nº 224 – Jardim Beira Rio (Coophamil), Cuiabá – MT
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-foreground-dark/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-foreground-dark/60 font-inter text-sm text-center md:text-left">
              © {currentYear} Happy Dreams Buffet. Todos os direitos reservados.
            </p>
            
            <div className="mt-4 md:mt-0">
              <button
                onClick={() => window.open('https://wa.me/5565996720567', '_blank')}
                className="inline-flex items-center space-x-2 text-gold hover:text-gold-muted transition-colors font-inter text-sm group"
              >
                <Phone size={16} />
                <span>Falar no WhatsApp</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;