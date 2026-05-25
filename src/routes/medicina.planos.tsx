import { createFileRoute, Link } from "@tanstack/react-router";
import { Shell } from "@/components/layout/Shell";
import { Check, Sparkles } from "lucide-react";

export const Route = createFileRoute("/medicina/planos")({
  component: Planos,
  head: () => ({
    meta: [
      { title: "Planos — Área Médica | Aurea" },
      { name: "description", content: "Planos de assinatura para acessar a biblioteca médica premium." },
    ],
  }),
});

const plans = [
  {
    name: "Mensal",
    price: "R$ 79",
    period: "/mês",
    perks: ["Acesso completo à biblioteca", "Flashcards e fluxogramas", "Atualizações contínuas"],
  },
  {
    name: "Anual",
    price: "R$ 59",
    period: "/mês",
    badge: "Mais escolhido",
    perks: ["Tudo do mensal", "2 meses grátis", "Suporte prioritário", "Conteúdos exclusivos"],
    highlight: true,
  },
  {
    name: "Vitalício",
    price: "R$ 1.490",
    period: " único",
    perks: ["Acesso para sempre", "Todas as atualizações futuras", "Material novo incluso"],
  },
];

export function Planos() {
  return (
    <Shell>
      <section className="bg-ink text-background">
        <div className="mx-auto max-w-5xl px-6 pt-20 pb-16 text-center">
          <span className="text-xs tracking-[0.18em] uppercase text-gold">Planos · Área Médica</span>
          <h1 className="font-serif text-5xl md:text-6xl mt-6">Invista no seu raciocínio clínico.</h1>
          <p className="text-white/70 mt-6 max-w-2xl mx-auto">
            Acesso desbloqueado após confirmação do pagamento. PIX e Mercado Pago disponíveis.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 -mt-12 pb-24 grid md:grid-cols-3 gap-4">
        {plans.map((p) => (
          <div
            key={p.name}
            className={`rounded-3xl p-8 flex flex-col ${
              p.highlight
                ? "bg-card hairline-gold shadow-elegant relative"
                : "bg-card hairline"
            }`}
          >
            {p.badge && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 text-[10px] uppercase tracking-widest bg-gold text-ink rounded-full">
                {p.badge}
              </span>
            )}
            <div className="text-xs tracking-[0.18em] uppercase text-muted-foreground">{p.name}</div>
            <div className="mt-4 font-serif text-5xl">
              {p.price}
              <span className="text-base text-muted-foreground">{p.period}</span>
            </div>
            <ul className="mt-8 space-y-3 flex-1">
              {p.perks.map((perk) => (
                <li key={perk} className="flex gap-2 text-sm">
                  <Check size={16} className="text-gold shrink-0 mt-0.5" /> {perk}
                </li>
              ))}
            </ul>
            <Link
              to="/pagamento/$kind/$slug"
              params={{ kind: "medicina", slug: p.name.toLowerCase() }}
              className={`mt-8 px-6 py-3 rounded-full text-center transition ${
                p.highlight
                  ? "bg-foreground text-background hover:opacity-90"
                  : "hairline hover:bg-accent"
              }`}
            >
              Assinar {p.name}
            </Link>
          </div>
        ))}
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-24 text-center">
        <Sparkles className="text-gold mx-auto" />
        <p className="text-muted-foreground mt-4">
          Mesmo sem assinar, você já pode baixar gratuitamente o PDF de <span className="text-foreground font-medium">Transtornos Depressivos</span> e <span className="text-foreground font-medium">Transtornos Ansiosos</span> na biblioteca.
        </p>
        <Link to="/medicina/biblioteca" className="inline-block mt-6 text-gold">Ir para a biblioteca →</Link>
      </section>
    </Shell>
  );
}
