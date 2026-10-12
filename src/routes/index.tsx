import { createFileRoute, Link } from "@tanstack/react-router";

import { CtaLink, PageHero, Section, TrustStrip, pageHead } from "@/components/amigo/site";
import { QuoteForm } from "@/components/amigo/QuoteForm";
import { TablaCard, type Tabla } from "@/components/amigo/TablaCard";
import hero from "@/assets/hero-parrilla-noche.jpg";
import ritual from "@/assets/ritual-banner.jpg";
import gMesa from "@/assets/galeria-mesa-corporativa.jpg";
import gJardin from "@/assets/galeria-jardin.jpg";
import gEquipo from "@/assets/galeria-equipo.jpg";
import tQuesos from "@/assets/tabla-quesos.jpg";
import tEmbutidos from "@/assets/tabla-embutidos.jpg";
import tCasa from "@/assets/tabla-casa.jpg";

export const Route = createFileRoute("/")({
  head: () =>
    pageHead(
      "/",
      "Catering de Asado Argentino y Parrilla a Domicilio | Amigo Fuego",
      "Catering de asado argentino en CDMX con maestro parrillero. Eventos corporativos, producciones, bodas y tornabodas. Paquetes desde $550 MXN por persona.",
    ),
  component: Home,
});

const BLOQUES = [
  { to: "/eventos-empresas", img: gMesa, label: "Eventos Corporativos", text: "Cenas de fin de año, reuniones de despachos y networking." },
  { to: "/eventos-empresas", img: gEquipo, label: "Producciones y Cines", text: "Catering premium para cierres de rodaje, directores e invitados internacionales." },
  { to: "/bodas", img: gJardin, label: "Eventos Sociales", text: "Bodas, tornabodas, cumpleaños y celebraciones de vida alrededor del fuego." },
] as const;

const TABLAS: readonly Tabla[] = [
  {
    nombre: "Tabla de Quesos",
    descripcion: "Quesos curados y untuosos con uvas, nueces, miel y pan de masa madre recién cortado.",
    precio: "Consultar",
    img: tQuesos,
  },
  {
    nombre: "Tabla de Embutidos",
    descripcion: "Jamones, salames y fiambres cortados al momento, con pepinillos, mostaza, higos y aceitunas.",
    precio: "Consultar",
    img: tEmbutidos,
  },
  {
    nombre: "Tabla de la Casa",
    descripcion: "Embutidos y quesos juntos en una sola mesa: almendras, membrillo, grissinis y uvas para compartir.",
    precio: "Consultar",
    img: tCasa,
  },
];

function Home() {
  return (
    <>
      <PageHero
        eyebrow="Parrilla argentina"
        title="Catering de Asado Argentino y Parrilla a Domicilio"
        subtitle="No vendemos carne, vendemos un ritual. Llevamos el fuego, el maestro parrillero y la experiencia completa a tu mesa."
        image={hero}
      >
        <CtaLink>Cotizar mi evento</CtaLink>
        <CtaLink to="/menu" secondary>Ver el menú</CtaLink>
      </PageHero>
      <TrustStrip />
      <section className="bg-carbon text-crema">
        <div className="mx-auto max-w-7xl px-5 py-16 text-center md:px-10 md:py-20">
          <p className="eyebrow text-tierra">Precio</p>
          <p className="mt-4 font-display text-4xl md:text-6xl">
            Paquetes desde <span className="text-tierra">$550 MXN</span>
          </p>
          <p className="mt-3 text-crema/70">por persona</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <CtaLink>Cotizar ahora</CtaLink>
            <CtaLink to="/menu" secondary>Ver el menú</CtaLink>
          </div>
        </div>
      </section>
      <section className="bg-crema text-carbon">
        <Section>
          <p className="eyebrow text-tierra">¿Qué estás organizando?</p>
          <h2 className="mt-4 max-w-2xl text-4xl md:text-5xl">Elige tu ocasión</h2>
           <div data-stagger className="mt-12 grid gap-6 md:grid-cols-3">
            {BLOQUES.map((b) => (
               <Link key={b.label} to={b.to} className="image-zoom group relative isolate block aspect-[4/5] overflow-hidden rounded-xl">
                 <img src={b.img} alt={b.label} loading="lazy" className="absolute inset-0 -z-20 h-full w-full object-cover" />
                <div className="golden absolute inset-0 -z-10" />
                <div className="flex h-full flex-col justify-end p-6">
                  <h3 className="text-3xl text-crema">{b.label}</h3>
                  <p className="mt-2 text-crema/80">{b.text}</p>
                  <span className="mt-4 text-sm font-semibold text-crema">Ver más →</span>
                </div>
              </Link>
            ))}
          </div>
        </Section>
      </section>
      <section className="bg-carbon text-crema">
        <Section>
          <p className="eyebrow text-tierra">Para llevar</p>
          <h2 className="mt-4 max-w-2xl text-4xl md:text-5xl">Tablas Amigo Fuego</h2>
          <p className="mt-5 max-w-2xl text-lg text-crema/80">
            Cuando no hay evento pero sí ganas de mesa compartida. Tablas listas con embutidos,
            quesos y lo esencial para armar el momento.
          </p>
          <div data-stagger className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {TABLAS.map((tabla) => (
              <TablaCard key={tabla.nombre} tabla={tabla} />
            ))}
          </div>
        </Section>
      </section>
      <section data-parallax-hero className="relative isolate overflow-hidden">
        <img data-hero-image src={ritual} alt="" loading="lazy" className="hero-parallax-image absolute inset-0 -z-20 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-carbon/75" />
        <div className="mx-auto flex max-w-4xl flex-col items-center px-5 py-20 text-center md:px-10 md:py-28">
          <h2 className="max-w-2xl text-4xl text-crema md:text-5xl">El Ritual: Conoce lo que llevamos a tu mesa</h2>
          <div className="mt-8">
            <CtaLink to="/menu">Ver el Menú Completo</CtaLink>
          </div>
        </div>
      </section>
      <QuoteForm />
    </>
  );
}
