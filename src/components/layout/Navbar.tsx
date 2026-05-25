import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Início" },
  { to: "/saude-mental", label: "Saúde Mental" },
  { to: "/mini-livros", label: "Mini Livros" },
  { to: "/medicina", label: "Área Médica" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/75 border-b border-border/60">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="h-7 w-7 rounded-full bg-gradient-to-br from-[var(--gold-soft)] via-[var(--gold)] to-[var(--gold-deep)] shadow-soft" />
          <span className="font-serif text-xl tracking-tight">Aurea<span className="text-gold">.</span></span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              activeProps={{ className: "text-sm text-foreground font-medium" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Link to="/login" className="text-sm text-muted-foreground hover:text-foreground">Entrar</Link>
          <Link
            to="/cadastro"
            className="text-sm px-4 py-2 rounded-full bg-foreground text-background hover:opacity-90 transition"
          >
            Criar conta
          </Link>
        </div>

        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="px-6 py-4 flex flex-col gap-3">
            {links.map((l) => (
              <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="py-2 text-sm">
                {l.label}
              </Link>
            ))}
            <div className="flex gap-3 pt-2 border-t border-border">
              <Link to="/login" onClick={() => setOpen(false)} className="text-sm py-2">Entrar</Link>
              <Link to="/cadastro" onClick={() => setOpen(false)} className="text-sm py-2 px-4 rounded-full bg-foreground text-background">Criar conta</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
