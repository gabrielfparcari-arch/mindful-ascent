import { createFileRoute, Link } from "@tanstack/react-router";
import { Shell } from "@/components/layout/Shell";
import { featuredTopics, topics } from "@/lib/topics";
import { ArrowRight, BookOpen, HeartHandshake, Stethoscope, Sparkles } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Aurea — Saúde mental acolhedora e educação médica premium" },
      { name: "description", content: "Conteúdo de saúde mental humano e acolhedor para o público geral, e biblioteca médica premium baseada em evidências." },
    ],
  }),
});

function Home() {
  return (
    <Shell>
      {/* HERO */}
      <section className="gradient-hero">
        <div className="mx-auto max-w-7xl px-6 pt-24 pb-28 md:pt-32 md:pb-36">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 text-xs tracking-[0.18em] uppercase text-muted-foreground">
              <span className="h-px w-6 bg-gold" /> Saúde mental & educação médica
            </span>
            <h1 className="font-serif text-5xl md:text-7xl leading-[1.05] tracking-tight mt-6">
              Cuidar da mente <br />
              com <span className="gradient-gold-text">ciência</span> e
              <span className="italic"> sensibilidade</span>.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
              Uma plataforma com duas portas: uma área pública, acolhedora, para quem busca entender suas emoções — e uma biblioteca médica premium, para profissionais e estudantes que vivem da clínica.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/saude-mental"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background hover:opacity-90 transition"
              >
                Explorar Saúde Mental <ArrowRight size={16} />
              </Link>
              <Link
                to="/medicina"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full hairline-gold text-foreground hover:bg-accent transition"
              >
                Área Médica Premium
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* DUAS PORTAS */}
      <section className="mx-auto max-w-7xl px-6 py-24 grid md:grid-cols-2 gap-6">
        <Link to="/saude-mental" className="group rounded-3xl bg-card hairline p-10 hover:shadow-elegant transition-shadow">
          <HeartHandshake className="text-gold" size={28} />
          <h3 className="font-serif text-3xl mt-6">Para você</h3>
          <p className="text-muted-foreground mt-3">
            Conteúdo aberto sobre ansiedade, depressão, burnout, sono e mais. Linguagem humana, leitura confortável.
          </p>
          <span className="inline-flex items-center gap-2 mt-8 text-sm text-gold group-hover:gap-3 transition-all">
            Entrar na área pública <ArrowRight size={14} />
          </span>
        </Link>
        <Link to="/medicina" className="group rounded-3xl bg-ink text-background p-10 hover:shadow-elegant transition-shadow">
          <Stethoscope className="text-gold" size={28} />
          <h3 className="font-serif text-3xl mt-6">Para médicos e estudantes</h3>
          <p className="text-white/70 mt-3">
            Resumos clínicos, fluxogramas, doses, flashcards e raciocínio clínico. Biblioteca premium baseada em evidências.
          </p>
          <span className="inline-flex items-center gap-2 mt-8 text-sm text-gold group-hover:gap-3 transition-all">
            Conhecer a biblioteca <ArrowRight size={14} />
          </span>
        </Link>
      </section>

      {/* FEATURED TOPICS */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex items-end justify-between mb-10">
          <div>
            <span className="text-xs tracking-[0.18em] uppercase text-muted-foreground">Temas em destaque</span>
            <h2 className="font-serif text-4xl mt-3">Comece por onde dói mais</h2>
          </div>
          <Link to="/saude-mental" className="text-sm text-gold hidden md:inline-flex items-center gap-2">
            Ver todos <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {featuredTopics.map((t) => (
            <Link
              key={t.slug}
              to="/saude-mental/$slug"
              params={{ slug: t.slug }}
              className="relative rounded-3xl overflow-hidden p-10 bg-gradient-to-br from-cream to-background hairline-gold group"
            >
              <Sparkles className="absolute top-6 right-6 text-gold opacity-60" size={20} />
              <span className="text-xs tracking-[0.18em] uppercase text-gold">Destaque</span>
              <h3 className="font-serif text-4xl mt-3">{t.title}</h3>
              <p className="text-muted-foreground mt-3 max-w-md">{t.tagline}</p>
              <span className="inline-flex items-center gap-2 mt-8 text-sm group-hover:gap-3 transition-all">
                Ler com calma <ArrowRight size={14} />
              </span>
            </Link>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 mt-6">
          {topics.filter(t => !t.featured).map((t) => (
            <Link
              key={t.slug}
              to="/saude-mental/$slug"
              params={{ slug: t.slug }}
              className="rounded-2xl bg-card hairline p-6 hover:border-foreground/40 transition"
            >
              <h4 className="font-serif text-xl">{t.title}</h4>
              <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{t.tagline}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* MINI BOOKS TEASER */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="rounded-3xl bg-ink text-background p-12 md:p-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="text-xs tracking-[0.18em] uppercase text-gold">Mini Livros</span>
            <h2 className="font-serif text-4xl md:text-5xl mt-4 leading-tight">
              Leituras curtas que cabem no seu tempo — e mudam o seu mês.
            </h2>
            <p className="text-white/70 mt-6 max-w-md">
              Guias práticos escritos para acompanhar você dia após dia, com atividades, reflexões e hábitos.
            </p>
            <Link
              to="/mini-livros"
              className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-full bg-background text-foreground hover:opacity-90 transition"
            >
              Ver coleção <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {["Respirar de Novo", "Luz Baixa", "Voltar pra Si"].map((t, i) => (
              <div key={t} className={`aspect-[3/4] rounded-xl p-4 flex flex-col justify-between ${i === 1 ? "translate-y-4" : ""} bg-gradient-to-br from-[var(--gold-soft)]/30 to-[var(--gold-deep)]/40 border border-gold/40`}>
                <BookOpen size={16} className="text-gold" />
                <div className="font-serif text-sm leading-tight">{t}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Shell>
  );
}
