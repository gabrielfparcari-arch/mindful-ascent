export type MiniBook = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  price: string;
  pages: number;
  duration: string;
  chapters: { title: string; preview: string }[];
};

export const miniBooks: MiniBook[] = [
  {
    slug: "respirar-de-novo",
    title: "Respirar de Novo",
    subtitle: "21 dias para acalmar a mente ansiosa",
    description:
      "Um guia prático com exercícios diários, reflexões e hábitos para reduzir a ansiedade e voltar a habitar o presente.",
    price: "R$ 39,90",
    pages: 84,
    duration: "21 dias",
    chapters: [
      { title: "Dia 1 — O nome do que você sente", preview: "Aprender a nomear é o primeiro passo para se libertar..." },
      { title: "Dia 7 — Respiração que ancora", preview: "Uma técnica simples que muda o tom do dia..." },
      { title: "Dia 14 — O que você pode controlar", preview: "Reorganize a energia onde ela realmente importa..." },
    ],
  },
  {
    slug: "luz-baixa",
    title: "Luz Baixa",
    subtitle: "Pequenos gestos para dias difíceis",
    description:
      "Um livro de companhia para quem atravessa a depressão. Leituras curtas, exercícios gentis e práticas de autocuidado.",
    price: "R$ 39,90",
    pages: 96,
    duration: "Leitura livre",
    chapters: [
      { title: "Quando levantar é o mais difícil", preview: "Estratégias mínimas para começar o dia..." },
      { title: "Pequenos rituais de cuidado", preview: "O que devolve cor sem exigir muito..." },
      { title: "Pedir ajuda também é cura", preview: "Como e quando buscar apoio profissional..." },
    ],
  },
  {
    slug: "voltar-pra-si",
    title: "Voltar pra Si",
    subtitle: "Autoestima como prática diária",
    description:
      "Reflexões, atividades e exercícios para construir uma relação mais gentil com você mesmo.",
    price: "R$ 34,90",
    pages: 72,
    duration: "30 dias",
    chapters: [
      { title: "O espelho honesto", preview: "Como você se descreveria sem julgamento?" },
      { title: "Pequenas vitórias", preview: "Um sistema simples para celebrar o que importa..." },
      { title: "O contrato com você", preview: "Combinados que sustentam autoestima a longo prazo..." },
    ],
  },
];
