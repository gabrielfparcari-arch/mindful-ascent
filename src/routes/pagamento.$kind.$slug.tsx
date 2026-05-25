import { createFileRoute, Link } from "@tanstack/react-router";
import { Shell } from "@/components/layout/Shell";
import { Check, QrCode, Wallet } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/pagamento/$kind/$slug")({
  component: Pagamento,
  head: () => ({ meta: [{ title: "Pagamento — Aurea" }] }),
});

function Pagamento() {
  const { kind, slug } = Route.useParams();
  const [method, setMethod] = useState<"pix" | "mercado-pago">("pix");

  const isMed = kind === "medicina";
  const title = isMed ? `Plano ${slug}` : `Mini Livro: ${slug}`;
  const subtitle = isMed
    ? "Assinatura da área médica premium"
    : "Acesso vitalício ao mini livro";

  return (
    <Shell>
      <section className="mx-auto max-w-3xl px-6 py-16">
        <Link to={isMed ? "/medicina/planos" : "/mini-livros"} className="text-sm text-muted-foreground">
          ← Voltar
        </Link>

        <div className="mt-8 rounded-3xl bg-card hairline p-10">
          <span className="text-xs tracking-[0.18em] uppercase text-gold">
            {isMed ? "Área Médica" : "Mini Livro"}
          </span>
          <h1 className="font-serif text-4xl mt-3 capitalize">{title}</h1>
          <p className="text-muted-foreground mt-2">{subtitle}</p>

          <div className="mt-10">
            <div className="text-xs uppercase tracking-wider text-muted-foreground mb-4">Forma de pagamento</div>
            <div className="grid sm:grid-cols-2 gap-3">
              <MethodCard
                active={method === "pix"}
                onClick={() => setMethod("pix")}
                icon={QrCode}
                title="PIX"
                hint="Aprovação imediata"
              />
              <MethodCard
                active={method === "mercado-pago"}
                onClick={() => setMethod("mercado-pago")}
                icon={Wallet}
                title="Mercado Pago"
                hint="Cartão, boleto ou saldo"
              />
            </div>
          </div>

          <div className="mt-10 rounded-2xl bg-cream/60 p-6">
            <div className="flex items-start gap-3">
              <Check size={18} className="text-gold mt-1" />
              <p className="text-sm">
                O conteúdo será liberado <strong>automaticamente após a confirmação do pagamento</strong>. Você poderá acessá-lo na sua{" "}
                <Link to="/conta" className="text-gold">área pessoal</Link>.
              </p>
            </div>
          </div>

          <button className="w-full mt-8 px-6 py-4 rounded-full bg-foreground text-background hover:opacity-90">
            {method === "pix" ? "Gerar QR Code PIX" : "Ir para o Mercado Pago"}
          </button>
          <p className="text-xs text-muted-foreground text-center mt-3">
            Estrutura preparada — integração de pagamento será habilitada em breve.
          </p>
        </div>
      </section>
    </Shell>
  );
}

function MethodCard({ active, onClick, icon: Icon, title, hint }: any) {
  return (
    <button
      onClick={onClick}
      className={`text-left rounded-2xl p-5 transition ${
        active ? "border-2 border-foreground bg-background" : "hairline hover:bg-accent"
      }`}
    >
      <Icon className="text-gold" />
      <div className="font-serif text-xl mt-3">{title}</div>
      <div className="text-xs text-muted-foreground mt-1">{hint}</div>
    </button>
  );
}
