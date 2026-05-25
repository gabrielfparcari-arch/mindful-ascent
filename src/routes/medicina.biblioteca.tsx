import { createFileRoute, Link } from "@tanstack/react-router";
import { Shell } from "@/components/layout/Shell";
import { categories, materials, type Material } from "@/lib/materials";
import { useState } from "react";
import { FileText, Layers, Workflow, Table, Lock, Check, Search } from "lucide-react";

export const Route = createFileRoute("/medicina/biblioteca")({
  component: Biblioteca,
  head: () => ({
    meta: [
      { title: "Biblioteca Médica — Aurea" },
      { name: "description", content: "PDFs, flashcards, fluxogramas e tabelas organizados por especialidade." },
    ],
  }),
});

const iconFor = (t: Material["type"]) =>
  t === "PDF" ? FileText : t === "Flashcards" ? Layers : t === "Fluxograma" ? Workflow : Table;

function Biblioteca() {
  const [cat, setCat] = useState<string>("Todas");
  const [q, setQ] = useState("");
  const filtered = materials.filter(
    (m) =>
      (cat === "Todas" || m.category === cat) &&
      (q === "" || m.title.toLowerCase().includes(q.toLowerCase())),
  );

  return (
    <Shell>
      <section className="mx-auto max-w-7xl px-6 pt-16 pb-8">
        <span className="text-xs tracking-[0.18em] uppercase text-gold">Biblioteca</span>
        <h1 className="font-serif text-5xl mt-3">Materiais organizados</h1>
        <p className="text-muted-foreground mt-3 max-w-2xl">
          Resumos, tabelas, flashcards e fluxogramas. Conteúdo premium liberado após pagamento. Materiais gratuitos marcados com selo.
        </p>

        <div className="mt-10 flex flex-col md:flex-row md:items-center gap-4">
          <div className="relative md:w-80">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Buscar material..."
              className="w-full pl-11 pr-4 py-3 rounded-full bg-card hairline focus:outline-none focus:border-foreground/40"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {["Todas", ...categories].map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`px-4 py-2 text-sm rounded-full transition ${
                  cat === c ? "bg-foreground text-background" : "hairline hover:bg-accent"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((m) => {
          const Icon = iconFor(m.type);
          return (
            <div key={m.id} className="rounded-2xl bg-card hairline p-6 flex flex-col">
              <div className="flex items-start justify-between">
                <div className="h-10 w-10 rounded-full bg-cream flex items-center justify-center">
                  <Icon size={18} className="text-gold" />
                </div>
                {m.free ? (
                  <span className="text-[10px] uppercase tracking-wider px-2 py-1 rounded-full bg-gold/15 text-gold-deep border border-gold/30 inline-flex items-center gap-1">
                    <Check size={10} /> Grátis
                  </span>
                ) : (
                  <span className="text-[10px] uppercase tracking-wider px-2 py-1 rounded-full bg-foreground/5 text-muted-foreground inline-flex items-center gap-1">
                    <Lock size={10} /> Premium
                  </span>
                )}
              </div>
              <div className="text-xs text-muted-foreground mt-5">{m.category} · {m.type}</div>
              <h3 className="font-serif text-xl mt-1 leading-snug">{m.title}</h3>
              <p className="text-sm text-muted-foreground mt-2 flex-1">{m.description}</p>
              <div className="mt-5 flex justify-between items-center">
                <span className="text-xs text-muted-foreground">
                  {m.pages ? `${m.pages} páginas` : `${m.cards} cards`}
                </span>
                {m.free ? (
                  <Link to="/login" className="text-sm text-gold">Acessar →</Link>
                ) : (
                  <Link to="/medicina/planos" className="text-sm text-gold">Desbloquear →</Link>
                )}
              </div>
            </div>
          );
        })}
      </section>
    </Shell>
  );
}
