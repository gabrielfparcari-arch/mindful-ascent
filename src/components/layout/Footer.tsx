import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t border-border bg-cream/40 mt-24">
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-12 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="h-7 w-7 rounded-full bg-gradient-to-br from-[var(--gold-soft)] via-[var(--gold)] to-[var(--gold-deep)]" />
            <span className="font-serif text-xl">Aurea<span className="text-gold">.</span></span>
          </div>
          <p className="text-sm text-muted-foreground max-w-xs">
            Saúde mental acolhedora e educação médica baseada em evidências.
          </p>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-4">Saúde Mental</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/saude-mental/ansiedade" className="hover:text-gold">Ansiedade</Link></li>
            <li><Link to="/saude-mental/depressao" className="hover:text-gold">Depressão</Link></li>
            <li><Link to="/saude-mental" className="hover:text-gold">Todos os temas</Link></li>
            <li><Link to="/mini-livros" className="hover:text-gold">Mini Livros</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-4">Área Médica</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/medicina" className="hover:text-gold">Visão geral</Link></li>
            <li><Link to="/medicina/biblioteca" className="hover:text-gold">Biblioteca</Link></li>
            <li><Link to="/medicina/planos" className="hover:text-gold">Planos</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-4">Conta</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/login" className="hover:text-gold">Entrar</Link></li>
            <li><Link to="/cadastro" className="hover:text-gold">Criar conta</Link></li>
            <li><Link to="/conta" className="hover:text-gold">Minha área</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-6 text-xs text-muted-foreground flex flex-col md:flex-row justify-between gap-2">
          <span>© {new Date().getFullYear()} Aurea. Todos os direitos reservados.</span>
          <span>Conteúdo educativo. Não substitui consulta médica.</span>
        </div>
      </div>
    </footer>
  );
}
