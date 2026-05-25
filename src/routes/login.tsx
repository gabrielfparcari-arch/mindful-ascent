import { createFileRoute, Link } from "@tanstack/react-router";
import { Shell } from "@/components/layout/Shell";

export const Route = createFileRoute("/login")({
  component: Login,
  head: () => ({ meta: [{ title: "Entrar — Aurea" }] }),
});

function Login() {
  return (
    <Shell>
      <section className="mx-auto max-w-md px-6 py-20">
        <h1 className="font-serif text-4xl">Bem-vindo de volta.</h1>
        <p className="text-muted-foreground mt-2">Entre com seu e-mail e CPF.</p>

        <form className="mt-10 space-y-4" onSubmit={(e) => e.preventDefault()}>
          <Field label="E-mail" type="email" placeholder="voce@email.com" />
          <Field label="CPF" placeholder="000.000.000-00" />
          <Field label="Senha" type="password" placeholder="••••••••" />

          <button className="w-full mt-4 px-6 py-3 rounded-full bg-foreground text-background hover:opacity-90">
            Entrar
          </button>
        </form>

        <p className="text-sm text-muted-foreground mt-8 text-center">
          Ainda não tem conta? <Link to="/cadastro" className="text-gold">Criar conta</Link>
        </p>
      </section>
    </Shell>
  );
}

function Field({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block">
      <span className="text-xs tracking-[0.16em] uppercase text-muted-foreground">{label}</span>
      <input
        {...props}
        className="mt-2 w-full px-4 py-3 rounded-xl bg-card hairline focus:outline-none focus:border-foreground/40"
      />
    </label>
  );
}
