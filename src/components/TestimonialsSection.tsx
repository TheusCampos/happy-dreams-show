import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote:
        "O salão Happy Dreams transformou nosso casamento em um verdadeiro conto de fadas. Cada detalhe foi pensado com carinho e a equipe nos acolheu de forma extraordinária. Nossa festa foi inesquecível!",
      name: "Maria e João Silva",
      title: "Casamento - Dezembro 2023",
    },
    {
      quote:
        "A elegância e sofisticação do ambiente combinadas com o atendimento impecável tornaram os 15 anos da nossa filha um momento mágico. Recomendamos de coração!",
      name: "Família Santos",
      title: "Debutante - Março 2024",
    },
    {
      quote:
        "Escolhemos o Happy Dreams para nossa bodas de prata e foi a melhor decisão. O local é deslumbrante e a equipe fez tudo com tanto amor que nos emocionamos.",
      name: "Ana e Carlos Oliveira",
      title: "Bodas de Prata - Janeiro 2024",
    },
    {
      quote:
        "Nosso evento corporativo foi um sucesso total! O profissionalismo da equipe e a beleza do espaço impressionaram todos os nossos convidados. Voltaremos com certeza!",
      name: "Empresa TechSolutions",
      title: "Evento Corporativo - Abril 2024",
    },
    {
      quote:
        "A festa de formatura do nosso filho foi perfeita! O ambiente elegante e o cuidado com cada detalhe fizeram toda a diferença. Gratidão eterna ao Happy Dreams!",
      name: "Roberto e Lucia Costa",
      title: "Formatura - Julho 2024",
    },
    {
      quote:
        "Realizamos nossa confraternização de fim de ano no Happy Dreams e foi maravilhoso! O ambiente acolhedor e a decoração elegante criaram a atmosfera perfeita.",
      name: "Equipe Marketing Plus",
      title: "Confraternização - Dezembro 2023",
    },
  ];
  return (
    <section className="py-20 bg-background-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,215,0,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,215,0,0.05),transparent_50%)]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h3 className="text-gold font-satisfy text-2xl md:text-3xl mb-4">Inspiração</h3>
          <h2 className="text-3xl md:text-5xl font-playfair font-bold bg-gradient-to-r from-white to-gold bg-clip-text text-transparent mb-6">
            Momentos que Inspiram
          </h2>
          <div className="w-20 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-foreground/70 max-w-2xl mx-auto font-inter leading-relaxed">
            Cada evento é único, cada momento é especial. Transformamos sonhos em realidade.
          </p>
        </div>

        {/* Animated Testimonials */}
        <div className="mb-16">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
            pauseOnHover={true}
            className="max-w-7xl mx-auto"
          />
        </div>

        {/* Static Inspiration Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Elegância Real */}
          <div className="group cursor-pointer">
            <div className="bg-card-dark rounded-2xl p-8 h-full border border-gold/10 hover:border-gold/30 transition-all duration-300 hover:shadow-gold/20 hover:shadow-2xl">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center mr-4">
                  <div className="w-6 h-6 bg-background-dark rounded-full"></div>
                </div>
                <h3 className="text-xl font-playfair font-bold text-white">Elegância Real</h3>
              </div>
              <p className="text-white/80 leading-relaxed mb-6">
                Nosso salão é mais que um espaço - é o cenário perfeito onde cada celebração ganha vida com elegância e sofisticação.
              </p>
              <div className="flex items-center text-gold text-sm">
                <div className="w-2 h-2 bg-gold rounded-full mr-3"></div>
                <span className="font-inter text-white">Magia em Cada Detalhe</span>
              </div>
            </div>
          </div>

          {/* Luxo Refinado */}
          <div className="group cursor-pointer">
            <div className="bg-gradient-to-br from-gold/90 to-gold rounded-2xl p-8 h-full hover:shadow-gold/30 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-background-dark/20 rounded-full flex items-center justify-center mr-4">
                  <div className="w-6 h-6 bg-background-dark rounded-full"></div>
                </div>
                <h3 className="text-xl font-playfair font-bold text-background-dark">Luxo Refinado</h3>
              </div>
              <p className="text-background-dark/80 leading-relaxed mb-6">
                Um ambiente que respira satisfação e acolhe com carinho cada momento especial da sua vida.
              </p>
              
              {/* Quote */}
              <div className="bg-background-dark/10 rounded-lg p-4 border border-background-dark/20">
                <p className="italic text-background-dark/90 text-sm leading-relaxed">
                  "Transformamos sonhos em realidade com todo carinho e dedicação"
                </p>
              </div>
            </div>
          </div>

          {/* Tradição e Modernidade */}
          <div className="group cursor-pointer md:col-span-2 lg:col-span-1">
            <div className="bg-card-dark rounded-2xl p-8 h-full border border-gold/10 hover:border-gold/30 transition-all duration-300 hover:shadow-gold/20 hover:shadow-2xl">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center mr-4">
                  <div className="w-6 h-6 bg-background-dark rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-gold rounded-full"></div>
                  </div>
                </div>
                <h3 className="text-xl font-playfair font-bold text-white">Tradição & Modernidade</h3>
              </div>
              <p className="text-white/80 leading-relaxed mb-6">
                Combinamos 25 anos de experiência com as mais modernas tendências em eventos sociais.
              </p>
              <div className="flex items-center text-gold text-sm">
                <div className="w-2 h-2 bg-gold rounded-full mr-3"></div>
                <span className="font-inter text-white">Amor em Cada Celebração</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Decoration */}
        <div className="text-center mt-16">
          <div className="flex items-center justify-center space-x-4 opacity-60">
            <div className="w-8 h-[1px] bg-gold"></div>
            <div className="w-4 h-4 bg-gold rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-background-dark rounded-full"></div>
            </div>
            <div className="w-8 h-[1px] bg-gold"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;