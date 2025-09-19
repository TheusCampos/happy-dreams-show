import { 
  Building2, 
  Snowflake, 
  Flame, 
  ChefHat, 
  Refrigerator, 
  Waves, 
  UtensilsCrossed, 
  Users, 
  Accessibility,
  Car,
  Trees
} from 'lucide-react';

const StructureSection = () => {
  const features = [
    {
      icon: Building2,
      title: 'Espaço amplo com dois ambientes',
      description: 'Ambientes versáteis para diferentes tipos de eventos'
    },
    {
      icon: Snowflake,
      title: 'Salão climatizado para até 200 pessoas',
      description: 'Conforto garantido em qualquer época do ano'
    },
    {
      icon: Flame,
      title: 'Quiosque com churrasqueira grande com grelha',
      description: 'Perfeito para churrascos e confraternizações'
    },
    {
      icon: ChefHat,
      title: '2 Fogões 4 bocas com forno (sem gás)',
      description: 'Cozinha completa para preparar suas refeições'
    },
    {
      icon: Refrigerator,
      title: '1 Geladeira + 1 Freezer',
      description: 'Conservação adequada para todos os alimentos'
    },
    {
      icon: UtensilsCrossed,
      title: '2 Bancadas de inox + 1 Forno grande',
      description: 'Espaço profissional para preparo de alimentos'
    },
    {
      icon: Waves,
      title: 'Piscina grande com cascata',
      description: 'Diversão garantida para toda a família'
    },
    {
      icon: UtensilsCrossed,
      title: 'Mesa para buffet',
      description: 'Mesa dedicada para servir suas refeições'
    },
    {
      icon: Users,
      title: '2 WCs femininos + 2 WCs masculinos',
      description: 'Banheiros separados para maior comodidade'
    },
    {
      icon: UtensilsCrossed,
      title: 'Mesas e cadeiras de ferro estofadas (6 lugares)',
      description: 'Mobiliário confortável e elegante'
    },
    {
      icon: Trees,
      title: 'Amplo gramado para cerimônias ao ar livre',
      description: 'Espaço verde para cerimônias e atividades'
    },
    {
      icon: Car,
      title: 'Estacionamento próprio',
      description: 'Comodidade e segurança para seus convidados'
    }
  ];

  return (
    <section id="estrutura" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-6">
            Estrutura do <span className="text-gold">Espaço</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-gold mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-inter">
            Tudo que você precisa para realizar o evento perfeito
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="bg-card p-6 rounded-lg shadow-card hover:shadow-elegant transition-all duration-300 group hover:-translate-y-1"
              style={{animationDelay: `${index * 0.05}s`}}
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-gold rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="text-gold-foreground" size={24} />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-playfair font-semibold text-foreground mb-2 group-hover:text-gold transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm font-inter leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Accessibility Notice */}
        <div className="text-center bg-card p-8 rounded-lg shadow-card">
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center">
              <Accessibility className="text-gold-foreground" size={32} />
            </div>
          </div>
          <h3 className="text-2xl font-playfair font-bold text-foreground mb-3">
            Espaço <span className="text-gold">Acessível</span>
          </h3>
          <p className="text-muted-foreground font-inter text-lg">
            Nosso espaço é apropriado para cadeirantes, garantindo conforto e acessibilidade para todos os convidados.
          </p>
        </div>
      </div>
    </section>
  );
};

export default StructureSection;