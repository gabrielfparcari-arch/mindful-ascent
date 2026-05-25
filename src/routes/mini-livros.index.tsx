import { createFileRoute, Link } from "@tanstack/react-router";
import { Shell } from "@/components/layout/Shell";
import { miniBooks } from "@/lib/books";
import { BookOpen, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/mini-livros/")({
  component: MiniBooks,
  head: () => ({
    meta: [
      { title: "Mini Livros — Aurea" },
      { name: "description", content: "Mini livros digitais com atividades, reflexões e práticas de bem-estar." },
    ],
  }),
});

function MiniBooks() {
  return (
    <Shell>
      <section className="gradient-hero">
        <div className="mx-auto max-w-5xl px-6 pt-24 pb-12 text-center">
          <span className="text-xs tracking-[0.18em] uppercase text-gold">Mini Livros</span>
          <h1 className="font-serif text-5xl md:text-6xl mt-6 leading-tight">
            Leituras pequenas. Transformações reais.
          </h1>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto text-lg">
            Guias práticos com atividades diárias, exercícios, reflexões e hábitos — escritos para caber no seu ritmo.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 grid md:grid-cols-3 gap-6">
        {miniBooks.map((b) => (
          <Link
            key={b.slug}
            to="/mini-livros/$slug"
            params={{ slug: b.slug }}
            className="group rounded-3xl bg-card hairline overflow-hidden hover:shadow-elegant transition-shadow flex flex-col"
          >
            <div className="aspect-[4/5] bg-gradient-to-br from-[var(--gold-soft)]/40 via-cream to-[var(--gold-deep)]/30 p-8 flex flex-col justify-between">
              <BookOpen className="text-gold" />
              <div>
                <h3 className="font-serif text-3xl leading-tight">{b.title}</h3>
                <p className="text-sm text-muted-foreground mt-2">{b.subtitle}</p>
              </div>
            </div>
            <div className="p-6 flex items-center justify-between">
              <div>
                <div className="text-xs text-muted-foreground">{b.pages} páginas · {b.duration}</div>
                <div className="font-serif text-xl mt-1">{b.price}</div>
              </div>
              <ArrowRight size={18} className="text-gold group-hover:translate-x-1 transition" />
            </div>
          </Link>
        ))}
      </section>
    </Shell>
  );
}
