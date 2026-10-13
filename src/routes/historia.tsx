import { createFileRoute } from "@tanstack/react-router";
import { CtaLink, PageHero, Section, pageHead } from "@/components/amigo/site";
import { QuoteForm } from "@/components/amigo/QuoteForm";
import gJardin from "@/assets/galeria-jardin.jpg";
import gEquipo from "@/assets/galeria-equipo.jpg";
const gParrillero = "/GabrielBourdinparrilla.webp";

export const Route = createFileRoute("/historia")({
  head: () =>
    pageHead(
      "/historia",
      "El Legado del Fuego: Quiénes Somos | Amigo Fuego",
      "La historia de Gabriel, parrillero argentino con 25 años en México, y de cómo una pizzería familiar de Entre Ríos se convirtió en Amigo Fuego.", "Nuestra Historia"
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
        subtitle="Una familia, una pizzería en Entre Ríos y 25 años de fuego en México."
        image={gEquipo}
      />
      <section className="bg-crema text-carbon">
       <Section>
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
           <div className="image-zoom overflow-hidden rounded-xl"><img src={gParrillero} alt="Gabriel Bourdin trabajando en la parrilla" loading="lazy" className="aspect-[4/5] w-full object-cover" /></div>
          <div className="space-y-5 text-lg text-carbon/80">
            <h2 className="text-4xl text-carbon md:text-5xl">Gabriel y el Fuego: 25 años de oficio.</h2>
            <p>
              Gabriel es un migrante argentino que lleva 25 años en México. Creció entre hornos y masa,
              heredando el oficio de la pizzería tradicional de su familia en Entre Ríos. Tras abrir las
              puertas de{" "}
              <a
                href="https://lunfardopizzeria.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-tierra underline decoration-tierra/50 underline-offset-4 transition-colors hover:decoration-tierra"
              >
                Lunfardo Pizzería
              </a>{" "}
              en la Ciudad de México,
            </p>
            <p>
              La nostalgia y la demanda lo llevaron a sacar las brasas de su casa para llevarlas a eventos sociales. Junto a su esposa Lolita, empezó con una parrilla para agasajar a los amigos y luego el boca a boca se fue regando: hay parrilla argentina en México.{"\u00a0"}
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
      <section className="bg-carbon text-crema">
        <Section>
          <h2 className="max-w-3xl text-4xl md:text-5xl">El Oficio del Fuego y los Cortes Premium.</h2>
          <div className="mt-10 grid gap-10 text-lg text-crema/80 md:grid-cols-2">
            <p>Detrás de cada plato hay conocimiento, técnica y un profundo respeto por el fuego. En Argentina, el asado es una tradición única que requiere paciencia. El fuego se enciende con anticipación, sin prisa, creando las brasas perfectas mientras la conversación comienza. No somos un servicio de banquetes exprés; somos maestros parrilleros que dominan los tiempos de cocción de la carne asada.</p>
            <p>Llevamos a tus eventos cortes premium como el asado de tira, el churrasco Angus y el vacío, cocinándolos lentamente frente a tus invitados. La parrilla se convierte en el punto de encuentro natural: los amigos se acercan, miran el fuego y confían en la experiencia de quien sabe trabajar las brasas y elegir los cortes exactos para una carne siempre en su punto.</p>
          </div>
        </Section>
      </section>
      <section className="bg-crema text-carbon">
        <div className="grid md:grid-cols-2">
           <div className="image-zoom min-h-[320px] overflow-hidden"><img src={gJardin} alt="Mesa larga compartida con invitados, vino y tablas de asado" loading="lazy" className="h-full min-h-[320px] w-full object-cover" /></div>
          <div className="px-5 py-20 md:px-14 md:py-28">
             <p className="eyebrow text-tierra">Catering de Asado a Domicilio</p>
            <h2 className="mt-4 text-4xl md:text-5xl">La Mesa Infinita.</h2>
            <p className="mt-6 text-lg text-carbon/80">No es simplemente la pregunta de "¿Qué vamos a comer?", sino "¿Qué vamos a celebrar?". Amigo Fuego no llega a tu evento con charolas de comida precalentada. Llevamos una experiencia auditiva, olfativa y de sabor a tu oficina, jardín o foro de grabación. Ya sea para una cena corporativa de fin de año, una reunión mensual de despacho, o una tornafiesta, diseñamos mesas donde la carne pasa de mano en mano, las porciones son generosas y el tiempo siempre sobra para la sobremesa.</p>
          </div>
        </div>
      </section>
      <section className="bg-crema text-carbon">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-20">
          <aside className="flex flex-col gap-8 rounded-2xl bg-carbon p-8 text-crema shadow-xl md:flex-row md:items-center md:justify-between md:p-12">
            <div className="max-w-2xl">
              <p className="eyebrow text-tierra">También te puede interesar</p>
              <h3 className="mt-3 text-2xl md:text-3xl">¿Listo para ver lo que llevaremos a tu mesa?</h3>
              <p className="mt-3 text-crema/80">
                Descubre el ritual de 5 pasos. Desde las empanadas y el vermut de bienvenida, hasta el desfile de cortes premium cocinados lentamente al fuego.
              </p>
            </div>
            <CtaLink to="/menu">Ver el Menú Completo</CtaLink>
          </aside>
        </div>
      </section>
      <section className="border-y border-crema/20 bg-carbon">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
          <p className="eyebrow text-tierra">Nuestros valores</p>
           <div data-stagger className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VALORES.map((v) => (
              <div key={v.t} className="rounded-xl border border-border p-7">
                <h3 className="text-2xl text-terracota">{v.t}</h3>
                <p className="mt-3 text-crema/70">{v.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-14 flex justify-center">
            <CtaLink to="#cotizar">Llevar el fuego a mi evento</CtaLink>
          </div>
        </div>
      </section>
      <QuoteForm />
    </>
  );
}
