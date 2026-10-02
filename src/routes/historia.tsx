import { createFileRoute } from "@tanstack/react-router";
import { CtaLink, PageHero, Section, pageHead } from "@/components/amigo/site";
import gEquipo from "@/assets/galeria-equipo.jpg";
import gParrillero from "@/assets/historia-parrillero.jpg";

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
  { t: "Hospitalidad", d: "La experiencia es cercana y sin formalidades innecesarias. Hay un lugar para ti en la mesa." },
  { t: "Generosidad", d: "Comida al centro, porciones abundantes. La mesa debe sentirse abierta, no medida." },
  { t: "Autenticidad", d: "Fuego real, personas reales. Mostramos el asado tal como lo vivimos." },
  { t: "Oficio", d: "Conocimiento y técnica. Sabemos trabajar las brasas y elegir los cortes." },
];

function Historia() {
  return (
    <>
      <PageHero
        overlay
        crumb="Nuestra Historia"
        eyebrow="Nuestra historia"
        title="El Legado del Fuego: Quiénes Somos"
        subtitle="Una familia, una pizzería en Santa Fe y 25 años de fuego en México."
        image={gEquipo}
      />
      <section className="bg-crema text-carbon">
       <Section>
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <img src={gParrillero} alt="Maestro parrillero trabajando cortes sobre las brasas" loading="lazy" className="aspect-[4/5] w-full rounded-xl object-cover" />
          <div className="space-y-5 text-lg text-carbon/80">
            <h2 className="text-4xl text-carbon md:text-5xl">Gabriel y el Fuego: 25 años de oficio.</h2>
            <p>
              Gabriel es un migrante argentino que lleva 25 años en México. Creció entre hornos y masa,
              heredando el oficio de la pizzería tradicional de su familia en la provincia de Santa Fe.
            </p>
            <p>
              Tras abrir su propio local en Satélite, la nostalgia y la demanda lo llevaron a sacar las
              brasas de su casa para llevarlas a eventos sociales. Empezó con una parrilla, luego con dos,
              luego con tres, siempre junto a su esposa.
            </p>
            <p>
              Así nació Amigo Fuego. No como un negocio de banquetes corporativos, sino como el deseo
              genuino de acercar a los demás el ritual del asado argentino, transformando cualquier evento
              en una celebración alrededor del fuego.
            </p>
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
          <div className="mt-14 flex justify-center">
            <CtaLink variant="fuego" size="lg" to="#cotizar">Llevar el fuego a mi evento</CtaLink>
          </div>
        </div>
      </section>
    </>
  );
}
