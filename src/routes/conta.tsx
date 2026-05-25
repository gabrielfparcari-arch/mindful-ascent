import { createFileRoute, Link } from "@tanstack/react-router";
import { Shell } from "@/components/layout/Shell";
import { BookOpen, FileText, TrendingUp, User } from "lucide-react";

export const Route = createFileRoute("/conta")({
  component: Conta,
  head: () => ({ meta: [{ title: "Minha Área — Aurea" }] }),
});

function Conta() {
  return (
    <Shell>
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex items-center gap-4">
          <div className="h-14 w-14 rounded-full bg-gradient-to-br from-[var(--gold-soft)] to-[var(--gold-deep)] flex items-center justify-center text-background">
            <User size={20} />
          </div>
          <div>
            <div className="text-xs tracking-[0.18em] uppercase text-muted-foreground">Minha área</div>
            <h1 className="font-serif text-3xl">Olá de novo.</h1>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mt-12">
          <Stat icon={FileText} label="Materiais acessíveis" value="2" hint="Gratuitos liberados" />
          <Stat icon={BookOpen} label="Mini livros" value="0" hint="Compre o primeiro" />
          <Stat icon={TrendingUp} label="Progresso" value="—" hint="Em breve" />
        </div>

        <div className="grid md:grid-cols-2 gap-4 mt-10">
          <Card title="Área médica" desc="Você ainda não tem assinatura ativa.">
            <Link to="/medicina/planos" className="text-gold text-sm">Ver planos →</Link>
          </Card>
          <Card title="Meus mini livros" desc="Suas compras aparecerão aqui.">
            <Link to="/mini-livros" className="text-gold text-sm">Explorar coleção →</Link>
          </Card>
        </div>
      </section>
    </Shell>
  );
}

function Stat({ icon: Icon, label, value, hint }: any) {
  return (
    <div className="rounded-2xl bg-card hairline p-6">
      <Icon size={18} className="text-gold" />
      <div className="text-xs uppercase tracking-wider text-muted-foreground mt-4">{label}</div>
      <div className="font-serif text-4xl mt-1">{value}</div>
      <div className="text-xs text-muted-foreground mt-1">{hint}</div>
    </div>
  );
}

function Card({ title, desc, children }: { title: string; desc: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl bg-card hairline p-8">
      <h3 className="font-serif text-2xl">{title}</h3>
      <p className="text-muted-foreground mt-2">{desc}</p>
      <div className="mt-4">{children}</div>
    </div>
  );
}
