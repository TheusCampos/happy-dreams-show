"use client";

import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export default function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-background-dark items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

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
];