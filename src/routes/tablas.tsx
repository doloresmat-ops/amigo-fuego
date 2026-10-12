import { createFileRoute, Link } from "@tanstack/react-router";

import { CtaLink, Section, pageHead } from "@/components/amigo/site";
import { QuoteForm } from "@/components/amigo/QuoteForm";
import { TablaCard } from "@/components/amigo/TablaCard";
import { TABLAS } from "@/components/amigo/tablas";

export const Route = createFileRoute("/tablas")({
  head: () =>
    pageHead(
      "/tablas",
      "Tablas de Picada para llevar | Amigo Fuego",
      "Tablas de picada para llevar en CDMX: embutidos, quesos curados, pan de masa madre y acompañamientos. Pide tu tabla por WhatsApp.",
    ),
  component: TablasPage,
});

function TablasPage() {
  return (
    <>
      <section className="bg-carbon text-crema">
        <div className="mx-auto max-w-7xl px-5 pb-16 pt-10 md:px-10 md:pb-20">
          <nav aria-label="Migas de pan" className="text-sm text-crema/70">
            <Link to="/" className="hover:text-cielo">Inicio</Link> <span aria-hidden>›</span>{" "}
            <span className="text-crema">Tablas</span>
          </nav>
          <p className="eyebrow mt-10 text-tierra">Para llevar</p>
          <h1 className="mt-4 max-w-3xl text-5xl md:text-6xl">Tablas Amigo Fuego</h1>
          <p className="mt-5 max-w-2xl text-lg text-crema/80">
            Cuando no hay evento pero sí ganas de mesa compartida. Tablas listas con embutidos,
            quesos y lo esencial para armar el momento.
          </p>
        </div>
      </section>
      <section className="bg-crema text-carbon">
        <Section>
          <div data-stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {TABLAS.map((t) => (
              <TablaCard key={t.nombre} tabla={t} />
            ))}
          </div>
        </Section>
      </section>
      <section className="bg-carbon text-crema">
        <div className="mx-auto max-w-3xl px-5 py-16 text-center md:px-10 md:py-20">
          <h2 className="text-3xl md:text-4xl">Una mesa lista para compartir</h2>
          <p className="mt-5 text-lg text-crema/80">
            Cada tabla se arma el mismo día con productos seleccionados: quesos con carácter,
            fiambres cortados al momento, pan de masa madre y acompañamientos dulces y salados.
            Ideales para una sobremesa en casa, una reunión con amigos o un regalo que se disfruta
            entre todos.
          </p>
          <div className="mt-8 flex justify-center">
            <CtaLink>¿Algo más grande? Cotiza tu evento</CtaLink>
          </div>
        </div>
      </section>
      <QuoteForm />
    </>
  );
}
