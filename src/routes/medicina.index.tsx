import { createFileRoute, Link } from "@tanstack/react-router";
import { Shell } from "@/components/layout/Shell";
import { categories, materials } from "@/lib/materials";
import { ArrowRight, BookMarked, FileText, Layers, Workflow, Sparkles } from "lucide-react";

export const Route = createFileRoute("/medicina/")({
  component: Medicina,
  head: () => ({
    meta: [
      { title: "Área Médica Premium — Aurea" },
      { name: "description", content: "Biblioteca premium para médicos e estudantes: psiquiatria, emergência, doses, fluxogramas, flashcards e raciocínio clínico." },
    ],
  }),
});

function Medicina() {
  return (
    <Shell>
      <section className="bg-ink text-background">
        <div className="mx-auto max-w-7xl px-6 pt-24 pb-28">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 text-xs tracking-[0.18em] uppercase text-gold">
              <span className="h-px w-6 bg-gold" /> Área Premium
            </span>
            <h1 className="font-serif text-5xl md:text-7xl leading-[1.05] mt-6">
              Estudo clínico <span className="gradient-gold-text">refinado</span>.
            </h1>
            <p className="text-white/70 text-lg mt-6 max-w-2xl">
              Resumos profundos, fluxogramas de conduta, doses e flashcards — organizados como uma biblioteca, com a curadoria de quem vive a clínica e a evidência.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link to="/medicina/planos" className="px-6 py-3 rounded-full bg-background text-foreground inline-flex items-center gap-2">
                Ver planos <ArrowRight size={16} />
              </Link>
              <Link to="/medicina/biblioteca" className="px-6 py-3 rounded-full hairline-gold text-background inline-flex items-center gap-2">
                Explorar biblioteca
              </Link>
            </div>
            <p className="text-xs text-white/50 mt-6 flex items-center gap-2">
              <Sparkles size={12} className="text-gold" /> PDF de Transtornos Depressivos e Ansiosos liberados gratuitamente.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 grid sm:grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { icon: FileText, label: "Resumos clínicos", desc: "PDFs aprofundados" },
          { icon: Workflow, label: "Fluxogramas", desc: "Condutas passo a passo" },
          { icon: Layers, label: "Flashcards", desc: "Revisão espaçada" },
          { icon: BookMarked, label: "Baseado em evidências", desc: "PubMed · SciELO" },
        ].map((f) => (
          <div key={f.label} className="rounded-2xl bg-card hairline p-6">
            <f.icon className="text-gold" />
            <div className="font-serif text-xl mt-4">{f.label}</div>
            <div className="text-sm text-muted-foreground mt-1">{f.desc}</div>
          </div>
        ))}
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="flex items-end justify-between mb-8">
          <h2 className="font-serif text-3xl">Categorias da biblioteca</h2>
          <Link to="/medicina/biblioteca" className="text-sm text-gold inline-flex items-center gap-2">
            Abrir biblioteca <ArrowRight size={14} />
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
          {categories.map((c) => {
            const count = materials.filter((m) => m.category === c).length;
            return (
              <Link
                key={c}
                to="/medicina/biblioteca"
                className="rounded-2xl bg-card hairline p-6 hover:border-foreground/40 transition flex justify-between items-center"
              >
                <div>
                  <div className="font-serif text-xl">{c}</div>
                  <div className="text-xs text-muted-foreground mt-1">{count} materiais</div>
                </div>
                <ArrowRight size={16} className="text-gold" />
              </Link>
            );
          })}
        </div>
      </section>
    </Shell>
  );
}
