import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Shell } from "@/components/layout/Shell";
import { miniBooks } from "@/lib/books";
import { ArrowLeft, BookOpen, Check } from "lucide-react";

export const Route = createFileRoute("/mini-livros/$slug")({
  component: BookPage,
  loader: ({ params }) => {
    const book = miniBooks.find((b) => b.slug === params.slug);
    if (!book) throw notFound();
    return { book };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.book.title} — Mini Livro | Aurea` },
          { name: "description", content: loaderData.book.description },
        ]
      : [],
  }),
  notFoundComponent: () => (
    <Shell>
      <div className="mx-auto max-w-2xl px-6 py-32 text-center">
        <h1 className="font-serif text-3xl">Livro não encontrado</h1>
        <Link to="/mini-livros" className="text-gold mt-4 inline-block">Ver coleção</Link>
      </div>
    </Shell>
  ),
});

function BookPage() {
  const { book } = Route.useLoaderData();
  return (
    <Shell>
      <article className="mx-auto max-w-6xl px-6 pt-20 pb-24">
        <Link to="/mini-livros" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft size={14} /> Coleção
        </Link>

        <div className="grid md:grid-cols-2 gap-12 mt-10 items-start">
          <div className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-[var(--gold-soft)]/40 via-cream to-[var(--gold-deep)]/30 p-10 flex flex-col justify-between sticky top-24">
            <BookOpen className="text-gold" />
            <div>
              <h1 className="font-serif text-4xl leading-tight">{book.title}</h1>
              <p className="text-muted-foreground mt-3">{book.subtitle}</p>
            </div>
          </div>

          <div>
            <span className="text-xs tracking-[0.18em] uppercase text-gold">Mini Livro</span>
            <h2 className="font-serif text-4xl mt-3">{book.title}</h2>
            <p className="text-lg text-muted-foreground mt-4">{book.description}</p>

            <div className="grid grid-cols-2 gap-3 mt-8">
              <Stat label="Páginas" value={String(book.pages)} />
              <Stat label="Duração" value={book.duration} />
            </div>

            <div className="mt-10 rounded-3xl bg-cream/60 hairline p-6">
              <div className="flex items-end justify-between">
                <div>
                  <div className="text-xs text-muted-foreground">Acesso vitalício</div>
                  <div className="font-serif text-4xl mt-1">{book.price}</div>
                </div>
                <Link
                  to="/pagamento/$kind/$slug"
                  params={{ kind: "livro", slug: book.slug }}
                  className="px-6 py-3 rounded-full bg-foreground text-background hover:opacity-90 transition"
                >
                  Comprar
                </Link>
              </div>
              <ul className="mt-6 space-y-2 text-sm">
                {["Leitura online confortável", "Atividades e exercícios práticos", "Acesso pela sua conta Aurea"].map(
                  (b) => (
                    <li key={b} className="flex gap-2 items-center">
                      <Check size={14} className="text-gold" /> {b}
                    </li>
                  ),
                )}
              </ul>
            </div>

            <h3 className="font-serif text-2xl mt-12">Prévia dos capítulos</h3>
            <div className="mt-4 space-y-3">
              {book.chapters.map((c, i) => (
                <div key={c.title} className="rounded-2xl hairline p-5">
                  <div className="text-xs text-gold">Capítulo {i + 1}</div>
                  <div className="font-serif text-xl mt-1">{c.title}</div>
                  <p className="text-sm text-muted-foreground mt-2">{c.preview}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </article>
    </Shell>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl hairline p-4">
      <div className="text-xs text-muted-foreground uppercase tracking-wider">{label}</div>
      <div className="font-serif text-xl mt-1">{value}</div>
    </div>
  );
}
