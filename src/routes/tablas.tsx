import { createFileRoute } from "@tanstack/react-router";

import { PageHero, Section, pageHead, waLink } from "@/components/amigo/site";
import { Button } from "@/components/ui/button";
import { TABLA, TAMANOS, INGREDIENTES, NOTA_ANTICIPACION, NOTA_MARIDAJE, FOTO_INGREDIENTES, FONDO_PRECIOS } from "@/components/amigo/tablas";

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
      <PageHero
        crumb="Tablas"
        eyebrow="Para llevar"
        title="Tablas Amigo Fuego"
        subtitle={TABLA.apoyo}
        image={TABLA.img}
        cinematic
        overlay="fuerte"
      >
        <p className="max-w-2xl text-crema/85">Una sola tabla, con los mismos ingredientes en todos los tamaños. Solo cambia la cantidad.</p>
        <p className="inline-flex items-center rounded-full border border-tierra/50 bg-carbon/70 px-5 py-2.5 text-sm font-bold text-tierra backdrop-blur-sm">
          {NOTA_ANTICIPACION}
        </p>
      </PageHero>
      <section className="bg-crema text-carbon">
        <Section>
          <p className="eyebrow text-tierra">La misma selección, siempre</p>
          <h2 className="mt-4 text-3xl md:text-4xl">Lo que lleva tu tabla</h2>
          <div className="mt-10 grid items-start gap-10 lg:grid-cols-2">
            <figure>
              <div className="image-zoom aspect-[4/3] overflow-hidden rounded-lg">
                <img src={FOTO_INGREDIENTES.img} alt={FOTO_INGREDIENTES.alt} loading="lazy" width={1600} height={1192} className="h-full w-full object-cover" />
              </div>
              <figcaption className="mt-3 text-sm text-carbon/60">Imagen ilustrativa.</figcaption>
            </figure>
            <div data-stagger className="grid gap-8 sm:grid-cols-2">
              {INGREDIENTES.map((grupo) => (
                <div key={grupo.nombre}>
                  <h3 className="text-xl text-carbon">{grupo.nombre}</h3>
                  <ul className="mt-4 space-y-2 text-carbon/80">
                    {grupo.items.map((item) => <li key={item} className="flex gap-3"><span className="text-oliva" aria-hidden="true">✓</span><span>{item}</span></li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </Section>
      </section>
      <section className="relative isolate overflow-hidden bg-carbon text-crema">
        <img src={FONDO_PRECIOS} alt="" loading="lazy" className="absolute inset-0 -z-20 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-carbon/92" />
        <Section>
          <p className="eyebrow text-tierra">A tu medida</p>
          <h2 className="mt-4 text-3xl md:text-4xl">Elige el tamaño de tu mesa</h2>
          <p className="mt-5 max-w-3xl text-lg text-crema/80">
            <strong>“Comen”</strong> es la cantidad recomendada si la tabla es el plato principal.
            {" "}<strong>“Pican”</strong> es la cantidad recomendada si es para compartir como entrada o botana.
          </p>
          <p className="mt-3 text-sm text-crema/70">Precios en MXN.</p>
          <p className="mt-2 text-sm font-bold text-tierra">{NOTA_ANTICIPACION}</p>
          <div data-stagger className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {TAMANOS.map((t) => (
              <article key={t.comen} className="flex flex-col rounded-lg border border-tierra/25 bg-crema p-6 text-carbon shadow-lg">
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
          <p className="mx-auto mt-16 max-w-3xl text-center text-base leading-relaxed text-crema/80">
            <span aria-hidden="true">🍷 </span>
            <span className="font-bold text-tierra">{NOTA_MARIDAJE.inicio}</span>
            {" "}{NOTA_MARIDAJE.cuerpo}
          </p>
        </Section>
      </section>
      <section id="cotizar" className="bg-crema text-carbon">
        <Section>
          <aside className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <p className="eyebrow text-tierra">Eventos a la parrilla</p>
              <h2 className="mt-4 text-3xl md:text-4xl">¿Quieres la parrilla en tu evento?</h2>
              <p className="mt-4 text-carbon/75">
                Además de nuestras tablas para llevar, cotiza con nosotros la parrilla argentina para tu evento:
                nosotros llevamos todo y tu solo disfrutas con tus invitados.
              </p>
            </div>
            <Button asChild variant="conversion" size="conversion" className="shrink-0 whitespace-normal">
              <a href="/#cotizar">Cotizar mi evento</a>
            </Button>
          </aside>
        </Section>
      </section>
    </>
  );
}
