export type Topic = {
  slug: string;
  title: string;
  tagline: string;
  intro: string;
  signs: string[];
  symptoms: string[];
  guidance: string[];
  featured?: boolean;
};

export const topics: Topic[] = [
  {
    slug: "ansiedade",
    title: "Ansiedade",
    tagline: "Quando a mente acelera mais que o corpo consegue acompanhar.",
    intro:
      "A ansiedade é uma resposta natural — um sinal de que algo precisa de atenção. Mas quando ela se torna constante, intensa ou começa a atrapalhar o dia a dia, é hora de olhar para ela com carinho e cuidado.",
    signs: [
      "Preocupação constante difícil de controlar",
      "Sensação de inquietação ou de estar 'no limite'",
      "Tensão muscular, especialmente no pescoço e ombros",
      "Dificuldade para relaxar mesmo em momentos calmos",
    ],
    symptoms: [
      "Coração acelerado e respiração curta",
      "Pensamentos repetitivos sobre o pior cenário",
      "Insônia ou sono não reparador",
      "Irritabilidade fora do comum",
      "Dor de cabeça e desconforto no estômago",
    ],
    guidance: [
      "Respire devagar: inspire em 4 tempos, segure 4, solte em 6.",
      "Reduza estímulos: silencie notificações por blocos de tempo.",
      "Mova o corpo todos os dias, mesmo que sejam 15 minutos.",
      "Procure um profissional quando a ansiedade tirar sua qualidade de vida.",
    ],
    featured: true,
  },
  {
    slug: "depressao",
    title: "Depressão",
    tagline: "Não é fraqueza. É um pedido silencioso por cuidado.",
    intro:
      "A depressão vai muito além da tristeza. É um cansaço que mora dentro, uma névoa que cobre o que antes era leve. Falar sobre ela é o primeiro passo — e você não precisa atravessar esse caminho sozinho.",
    signs: [
      "Perda de interesse por coisas que antes traziam prazer",
      "Cansaço persistente, mesmo após descansar",
      "Sensação de vazio ou de estar 'desligado' das emoções",
      "Dificuldade de concentração e tomada de decisões",
    ],
    symptoms: [
      "Tristeza profunda na maior parte do dia",
      "Alteração no apetite e no peso",
      "Sono em excesso ou insônia",
      "Sentimentos de culpa ou inutilidade",
      "Pensamentos sobre não querer mais estar aqui",
    ],
    guidance: [
      "Conte para alguém de confiança como você está se sentindo.",
      "Mantenha pequenas rotinas: banho, alimentação, luz natural.",
      "Procure ajuda profissional — psicoterapia e, quando indicado, medicação.",
      "Em momentos de crise grave, ligue para o CVV: 188 (24h, gratuito).",
    ],
    featured: true,
  },
  {
    slug: "burnout",
    title: "Burnout",
    tagline: "Quando o trabalho passa a custar mais do que paga.",
    intro:
      "Burnout é o esgotamento que surge quando damos demais por tempo demais. Reconhecer os sinais cedo é o que permite reorganizar a vida antes que o corpo cobre a conta.",
    signs: [
      "Exaustão física e emocional ao acordar",
      "Cinismo ou distanciamento com o trabalho",
      "Sensação de ineficácia mesmo entregando o que precisa",
    ],
    symptoms: [
      "Dores frequentes (cabeça, costas, estômago)",
      "Queda na concentração e memória",
      "Irritabilidade e choro fácil",
      "Vontade de fugir de tudo",
    ],
    guidance: [
      "Crie limites claros de horário e disponibilidade.",
      "Reserve tempo para pausas reais — sem telas, sem demandas.",
      "Reavalie expectativas e renegocie cargas quando possível.",
    ],
  },
  {
    slug: "autoestima",
    title: "Autoestima",
    tagline: "Aprender a se olhar com a mesma gentileza que você oferece aos outros.",
    intro:
      "Autoestima não é se achar perfeito. É se reconhecer como suficiente — com qualidades, falhas e potencial em construção.",
    signs: [
      "Crítica interna constante",
      "Dificuldade de receber elogios",
      "Comparação frequente com outras pessoas",
    ],
    symptoms: [
      "Sensação de não ser bom o bastante",
      "Medo de tentar coisas novas",
      "Necessidade de aprovação para se sentir bem",
    ],
    guidance: [
      "Observe seu diálogo interno — você falaria assim com um amigo?",
      "Celebre pequenas conquistas todos os dias.",
      "Cultive vínculos com pessoas que te enxergam de verdade.",
    ],
  },
  {
    slug: "insonia",
    title: "Insônia",
    tagline: "Quando a noite vira o momento mais difícil do dia.",
    intro:
      "Dormir mal por dias seguidos afeta o humor, a memória e o corpo. A boa notícia: existem estratégias simples que ajudam a reeducar o sono.",
    signs: [
      "Dificuldade para iniciar o sono",
      "Acordar várias vezes durante a noite",
      "Despertar muito cedo sem conseguir voltar a dormir",
    ],
    symptoms: [
      "Cansaço durante o dia",
      "Irritabilidade",
      "Queda de desempenho",
    ],
    guidance: [
      "Mantenha horários regulares, inclusive nos finais de semana.",
      "Evite telas pelo menos 30 minutos antes de deitar.",
      "Use o quarto apenas para dormir — silêncio, escuro e fresco.",
    ],
  },
  {
    slug: "tdah",
    title: "TDAH",
    tagline: "Uma forma diferente — não pior — de funcionar.",
    intro:
      "O TDAH muda a forma como o cérebro organiza atenção, tempo e prioridades. Com diagnóstico e suporte adequados, é possível construir uma vida produtiva e leve.",
    signs: [
      "Dificuldade de manter o foco em tarefas longas",
      "Procrastinação frequente",
      "Esquecimento de compromissos do dia a dia",
    ],
    symptoms: [
      "Inquietação interna",
      "Impulsividade nas decisões e nas falas",
      "Hiperfoco em assuntos de interesse",
    ],
    guidance: [
      "Use listas curtas e visíveis.",
      "Divida tarefas grandes em blocos pequenos e cronometrados.",
      "Busque avaliação profissional — o diagnóstico abre caminho para tratamento.",
    ],
  },
  {
    slug: "sofrimento-emocional",
    title: "Sofrimento Emocional",
    tagline: "Sentir muito não é sinal de fraqueza.",
    intro:
      "Existem dores que não aparecem em exames, mas pesam tanto quanto. Reconhecer o sofrimento já é um ato de coragem.",
    signs: [
      "Sensação de estar 'sem chão'",
      "Choro frequente sem motivo aparente",
      "Vontade de se isolar",
    ],
    symptoms: [
      "Aperto no peito",
      "Falta de vontade de fazer o básico",
      "Dificuldade de imaginar o futuro",
    ],
    guidance: [
      "Nomeie o que sente — escrever ajuda a organizar.",
      "Procure escuta qualificada, profissional ou de confiança.",
      "Lembre-se: emoções passam, mesmo que pareçam permanentes.",
    ],
  },
];

export const featuredTopics = topics.filter((t) => t.featured);
