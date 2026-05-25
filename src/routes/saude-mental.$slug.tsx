import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Shell } from "@/components/layout/Shell";
import { topics } from "@/lib/topics";
import { ArrowLeft, Sparkles } from "lucide-react";

export const Route = createFileRoute("/saude-mental/$slug")({
  component: TopicPage,
  loader: ({ params }) => {
    const topic = topics.find((t) => t.slug === params.slug);
    if (!topic) throw notFound();
    return { topic };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.topic.title} — Saúde Mental | Aurea` },
          { name: "description", content: loaderData.topic.tagline },
        ]
      : [],
  }),
  notFoundComponent: () => (
    <Shell>
      <div className="mx-auto max-w-2xl px-6 py-32 text-center">
        <h1 className="font-serif text-3xl">Tema não encontrado</h1>
        <Link to="/saude-mental" className="text-gold mt-4 inline-block">Voltar</Link>
      </div>
    </Shell>
  ),
});

function TopicPage() {
  const { topic } = Route.useLoaderData();

  return (
    <Shell>
      <article className="mx-auto max-w-3xl px-6 pt-20 pb-24">
        <Link to="/saude-mental" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft size={14} /> Todos os temas
        </Link>

        <span className="inline-block mt-10 text-xs tracking-[0.18em] uppercase text-gold">Saúde Mental</span>
        <h1 className="font-serif text-5xl md:text-6xl leading-tight mt-3">{topic.title}</h1>
        <p className="font-serif italic text-2xl text-muted-foreground mt-4">{topic.tagline}</p>

        <p className="text-lg leading-relaxed mt-10 text-foreground/90">{topic.intro}</p>

        <Section title="Primeiros sinais">
          <ul className="space-y-3">
            {topic.signs.map((s: string) => (
              <li key={s} className="flex gap-3 items-start">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </Section>

        <Section title="Sintomas">
          <ul className="space-y-3">
            {topic.symptoms.map((s: string) => (
              <li key={s} className="flex gap-3 items-start">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-foreground/40 shrink-0" />
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </Section>

        <Section title="Orientações gerais">
          <div className="grid gap-3">
            {topic.guidance.map((g: string, i: number) => (
              <div key={g} className="rounded-2xl bg-cream/60 hairline p-5 flex gap-4">
                <span className="font-serif text-2xl text-gold">{String(i + 1).padStart(2, "0")}</span>
                <p className="leading-relaxed">{g}</p>
              </div>
            ))}
          </div>
        </Section>

        <div className="mt-16 rounded-3xl bg-ink text-background p-10">
          <Sparkles className="text-gold" />
          <h3 className="font-serif text-3xl mt-4">Quer ir mais a fundo?</h3>
          <p className="text-white/70 mt-2">Conheça os mini livros pensados para acompanhar você dia após dia.</p>
          <Link to="/mini-livros" className="inline-block mt-6 px-6 py-3 rounded-full bg-background text-foreground">
            Ver mini livros
          </Link>
        </div>

        <p className="text-xs text-muted-foreground mt-12 leading-relaxed">
          Este conteúdo tem caráter educativo e não substitui avaliação profissional. Em situações de crise, ligue para o CVV — 188 (24h, gratuito).
        </p>
      </article>
    </Shell>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-14">
      <h2 className="text-xs tracking-[0.18em] uppercase text-muted-foreground mb-5">{title}</h2>
      <div className="text-foreground/90 leading-relaxed">{children}</div>
    </section>
  );
}
