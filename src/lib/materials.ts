export type Material = {
  id: string;
  title: string;
  category: string;
  type: "PDF" | "Flashcards" | "Fluxograma" | "Tabela";
  pages?: number;
  cards?: number;
  description: string;
  free?: boolean;
};

export const materials: Material[] = [
  {
    id: "transtornos-depressivos",
    title: "Transtornos Depressivos — Resumo Clínico",
    category: "Psiquiatria",
    type: "PDF",
    pages: 42,
    description: "Critérios DSM-5-TR, diagnóstico diferencial, tratamento farmacológico e psicoterápico, doses e ajustes.",
    free: true,
  },
  {
    id: "transtornos-ansiosos",
    title: "Transtornos Ansiosos — Resumo Clínico",
    category: "Psiquiatria",
    type: "PDF",
    pages: 38,
    description: "TAG, pânico, fobias e TOC. Critérios, primeira linha terapêutica e algoritmos de manejo.",
    free: true,
  },
  {
    id: "emergencia-psiquiatrica",
    title: "Emergências Psiquiátricas",
    category: "Emergência",
    type: "Fluxograma",
    pages: 24,
    description: "Agitação, ideação suicida, síndrome serotoninérgica, NMS — fluxos de conduta passo a passo.",
  },
  {
    id: "antidepressivos-doses",
    title: "Antidepressivos — Doses e Interações",
    category: "Farmacologia",
    type: "Tabela",
    pages: 18,
    description: "Tabela comparativa de ISRS, IRSN, tricíclicos e atípicos com doses, titulação e efeitos adversos.",
  },
  {
    id: "psicopatologia-flashcards",
    title: "Psicopatologia — Flashcards",
    category: "Psicopatologia",
    type: "Flashcards",
    cards: 180,
    description: "Sinais, sintomas e síndromes em formato de revisão espaçada.",
  },
  {
    id: "bipolar",
    title: "Transtorno Bipolar",
    category: "Psiquiatria",
    type: "PDF",
    pages: 36,
    description: "Tipos I e II, episódios mistos, estabilizadores de humor, manejo de mania aguda.",
  },
  {
    id: "esquizofrenia",
    title: "Esquizofrenia e Espectro",
    category: "Psiquiatria",
    type: "PDF",
    pages: 44,
    description: "Critérios diagnósticos, antipsicóticos de 1ª e 2ª geração, manejo de efeitos adversos.",
  },
  {
    id: "exames-psiquiatria",
    title: "Exames Complementares em Psiquiatria",
    category: "Exames",
    type: "Tabela",
    pages: 14,
    description: "Triagem laboratorial, monitorização de lítio, clozapina e antipsicóticos.",
  },
  {
    id: "raciocinio-clinico",
    title: "Raciocínio Clínico Psiquiátrico",
    category: "Raciocínio Clínico",
    type: "PDF",
    pages: 56,
    description: "Casos reais com construção do diagnóstico, baseado em medicina baseada em evidências.",
  },
];

export const categories = Array.from(new Set(materials.map((m) => m.category)));
