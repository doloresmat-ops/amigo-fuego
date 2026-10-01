import { createFileRoute } from "@tanstack/react-router";
import { CtaLink, PageHero, Section, pageHead } from "@/components/amigo/site";
import gEquipo from "@/assets/galeria-equipo.jpg";
import gPizzas from "@/assets/galeria-mini-pizzas.jpg";

export const Route = createFileRoute("/historia")({
  head: () =>
    pageHead(
      "/historia",
      "El Legado del Fuego: Quiénes Somos | Amigo Fuego",
      "La historia de Gabriel, parrillero argentino con 25 años en México, y de cómo una pizzería familiar de Santa Fe se convirtió en Amigo Fuego.", "Nuestra Historia"
    ),
  component: Historia,
});

const VALORES = [
  { t: "Hospitalidad", d: "Recibimos a tus invitados como si fueran nuestros." },
  { t: "Generosidad", d: "Mesas abundantes, sin medir de más." },
  { t: "Autenticidad", d: "Asado argentino de verdad, sin disfraces." },
  { t: "Oficio", d: "Años frente al fuego, aprendiendo cada corte." },
];

function Historia() {
  return (
    <>
      <PageHero
        crumb="Nuestra Historia"
        eyebrow="Nuestra historia"
        title="El Legado del Fuego: Quiénes Somos"
        subtitle="Una familia, una pizzería en Santa Fe y 25 años de fuego en México."
        image={gEquipo}
      />
      <section className="bg-crema text-carbon">
       <Section>
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <img src={gPizzas} alt="Pizzas a la parrilla, herencia familiar" loading="lazy" className="aspect-[4/5] w-full rounded-xl object-cover" />
          <div className="space-y-5 text-lg text-carbon/80">
            <h2 className="text-4xl text-carbon md:text-5xl">Gabriel y el fuego</h2>
            <p>
              Gabriel es argentino y lleva 25 años en México. Creció entre hornos y masa:
              su familia tenía una pizzería tradicional en Santa Fe.
            </p>
            <p>
              Tras abrir su local en Satélite, empezó a llevar el asado a eventos. Primero
              con una parrilla, luego con dos, luego con tres, siempre junto a su esposa.
            </p>
            <p>Así nació Amigo Fuego: el ritual del asado, llevado a tu mesa.</p>
          </div>
        </div>
       </Section>
      </section>
      <section className="border-y border-crema/20 bg-carbon">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
          <p className="eyebrow text-tierra">Nuestros valores</p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VALORES.map((v) => (
              <div key={v.t} className="rounded-xl border border-border p-7">
                <h3 className="text-2xl text-terracota">{v.t}</h3>
                <p className="mt-3 text-crema/70">{v.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-12"><CtaLink variant="oliva" to="/eventos-empresas">Llevar el fuego a mi evento</CtaLink></div>
        </div>
      </section>
    </>
  );
}
