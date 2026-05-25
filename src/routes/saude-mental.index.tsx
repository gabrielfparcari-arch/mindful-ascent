import { createFileRoute, Link } from "@tanstack/react-router";
import { Shell } from "@/components/layout/Shell";
import { topics } from "@/lib/topics";
import { ArrowRight, Heart } from "lucide-react";

export const Route = createFileRoute("/saude-mental/")({
  component: SaudeMental,
  head: () => ({
    meta: [
      { title: "Saúde Mental — Aurea" },
      { name: "description", content: "Conteúdo acolhedor sobre ansiedade, depressão, burnout, autoestima, insônia, TDAH e mais." },
    ],
  }),
});

function SaudeMental() {
  const featured = topics.filter((t) => t.featured);
  const others = topics.filter((t) => !t.featured);
  return (
    <Shell>
      <section className="gradient-hero">
        <div className="mx-auto max-w-5xl px-6 pt-24 pb-16 text-center">
          <Heart className="mx-auto text-gold" />
          <h1 className="font-serif text-5xl md:text-6xl mt-6 leading-tight">
            Você não precisa atravessar isso sozinho.
          </h1>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto text-lg">
            Aqui você encontra textos escritos com cuidado para te ajudar a entender o que sente e dar o próximo passo.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {featured.map((t) => (
            <Link
              key={t.slug}
              to="/saude-mental/$slug"
              params={{ slug: t.slug }}
              className="rounded-3xl bg-gradient-to-br from-cream to-background hairline-gold p-10 group"
            >
              <span className="text-xs tracking-[0.18em] uppercase text-gold">Destaque</span>
              <h2 className="font-serif text-4xl mt-3">{t.title}</h2>
              <p className="text-muted-foreground mt-3">{t.tagline}</p>
              <span className="inline-flex items-center gap-2 mt-8 text-sm group-hover:gap-3 transition-all">
                Ler <ArrowRight size={14} />
              </span>
            </Link>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {others.map((t) => (
            <Link
              key={t.slug}
              to="/saude-mental/$slug"
              params={{ slug: t.slug }}
              className="rounded-2xl bg-card hairline p-6 hover:shadow-soft transition"
            >
              <h3 className="font-serif text-2xl">{t.title}</h3>
              <p className="text-sm text-muted-foreground mt-2">{t.tagline}</p>
            </Link>
          ))}
        </div>
      </section>
    </Shell>
  );
}
