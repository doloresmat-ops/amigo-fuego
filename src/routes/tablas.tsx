import { createFileRoute, Link } from "@tanstack/react-router";

import { Section, pageHead, waLink } from "@/components/amigo/site";
import { Button } from "@/components/ui/button";
import { QuoteForm } from "@/components/amigo/QuoteForm";
import { TABLA, TAMANOS, INGREDIENTES } from "@/components/amigo/tablas";

export const Route = createFileRoute("/tablas")({
  head: () =>
    pageHead(
      "/tablas",
      "Tablas de Picada para llevar | Amigo Fuego",
      "Tabla de picada para llevar con embutidos, milanesas, quesos y pan de masa madre. Cuatro tamaños desde $750 MXN: comen 6 a 12, pican 12 a 24. Pide por WhatsApp.",
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
            {TABLA.apoyo}
          </p>
          <p className="mt-5 max-w-2xl text-crema/80">Una sola tabla, con los mismos ingredientes en todos los tamaños. Solo cambia la cantidad.</p>
        </div>
      </section>
      <section className="bg-crema text-carbon">
        <Section>
          <p className="eyebrow text-tierra">A tu medida</p>
          <h2 className="mt-4 text-3xl md:text-4xl">Elige el tamaño de tu mesa</h2>
          <p className="mt-5 max-w-3xl text-lg text-carbon/80">
            <strong>“Comen”</strong> es la cantidad recomendada si la tabla es el plato principal.
            {" "}<strong>“Pican”</strong> es la cantidad recomendada si es para compartir como entrada o botana.
          </p>
          <p className="mt-3 text-sm text-carbon/70">Precios en MXN.</p>
          <div data-stagger className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {TAMANOS.map((t) => (
              <article key={t.comen} className="flex flex-col rounded-lg bg-blanco p-6 shadow-sm">
                <h3 className="text-xl">Comen {t.comen} / pican {t.pican}</h3>
                <p className="mt-5 font-display text-4xl text-tierra">{t.precio}</p>
                <div className="mt-auto pt-8">
                  <Button asChild variant="conversion" size="conversion" className="w-full whitespace-normal px-4 sm:px-4 sm:text-base">
                    <a href={waLink(`Hola, quiero pedir la Tabla de Picada tamaño comen ${t.comen} / pican ${t.pican}, de ${t.precio} MXN. ¿Me pueden confirmar disponibilidad y detalles?`)} target="_blank" rel="noopener noreferrer">Pedir por WhatsApp</a>
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </Section>
      </section>
      <section className="bg-carbon text-crema">
        <Section>
          <p className="eyebrow text-tierra">La misma selección, siempre</p>
          <h2 className="mt-4 text-3xl md:text-4xl">Lo que lleva tu tabla</h2>
          <div className="mt-10 grid items-start gap-10 lg:grid-cols-2">
            <figure>
              <div className="image-zoom aspect-[4/3] overflow-hidden rounded-lg">
                <img src={TABLA.img} alt="Tabla de picada con quesos, embutidos y acompañamientos" loading="lazy" width={800} height={1008} className="h-full w-full object-cover" />
              </div>
              <figcaption className="mt-3 text-sm text-crema/60">Imagen ilustrativa.</figcaption>
            </figure>
            <div data-stagger className="grid gap-8 sm:grid-cols-2">
              {INGREDIENTES.map((grupo) => (
                <div key={grupo.nombre}>
                  <h3 className="text-xl text-crema">{grupo.nombre}</h3>
                  <ul className="mt-4 space-y-2 text-crema/80">
                    {grupo.items.map((item) => <li key={item} className="flex gap-3"><span className="text-oliva" aria-hidden="true">✓</span><span>{item}</span></li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </Section>
      </section>
      <QuoteForm />
    </>
  );
}
