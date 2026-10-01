import { createFileRoute, Link } from "@tanstack/react-router";

import { CtaLink, PageHero, Section, TrustStrip, pageHead } from "@/components/amigo/site";
import { QuoteForm } from "@/components/amigo/QuoteForm";
import hero from "@/assets/hero-parrilla-noche.jpg";
import gMesa from "@/assets/galeria-mesa-corporativa.jpg";
import gJardin from "@/assets/galeria-jardin.jpg";
import gCorte from "@/assets/galeria-corte.jpg";

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
  { to: "/corporativo", img: gMesa, label: "Eventos Corporativos", text: "Cenas de fin de año, despachos y cierres de rodaje." },
  { to: "/bodas", img: gJardin, label: "Bodas y Tornabodas", text: "Una mesa infinita y la parrilla encendida de madrugada." },
  { to: "/menu", img: gCorte, label: "El Menú", text: "Los 5 pasos del ritual del asado argentino." },
] as const;

function Home() {
  return (
    <>
      <PageHero
        eyebrow="Parrilla argentina · CDMX"
        title="Catering de Asado Argentino y Parrilla a Domicilio"
        subtitle="No vendemos carne, vendemos un ritual. Llevamos el fuego, el maestro parrillero y la experiencia completa a tu mesa."
        image={hero}
      >
        <CtaLink variant="oliva">Cotizar mi evento</CtaLink>
        <CtaLink variant="ghost" to="/menu">Ver el menú</CtaLink>
      </PageHero>
      <TrustStrip />
      <section className="border-b border-border bg-brasa">
        <div className="mx-auto max-w-7xl px-5 py-16 text-center md:px-10 md:py-20">
          <p className="eyebrow text-tierra">Precio</p>
          <p className="mt-4 font-display text-4xl md:text-6xl">
            Paquetes desde <span className="text-oliva">$550 MXN</span>
          </p>
          <p className="mt-3 text-crema/70">por persona</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <CtaLink>Cotizar ahora</CtaLink>
            <CtaLink variant="ghost" to="/menu">Ver el menú</CtaLink>
          </div>
        </div>
      </section>
      <Section>
        <p className="eyebrow text-tierra">¿Qué estás organizando?</p>
        <h2 className="mt-4 max-w-2xl text-4xl md:text-5xl">Elige tu ocasión</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {BLOQUES.map((b) => (
            <Link key={b.to} to={b.to} className="group relative isolate block aspect-[4/5] overflow-hidden rounded-xl">
              <img src={b.img} alt={b.label} loading="lazy" className="absolute inset-0 -z-20 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="golden absolute inset-0 -z-10" />
              <div className="flex h-full flex-col justify-end p-6">
                <h3 className="text-3xl text-crema">{b.label}</h3>
                <p className="mt-2 text-crema/80">{b.text}</p>
                <span className="mt-4 text-sm font-semibold text-oliva">Ver más →</span>
              </div>
            </Link>
          ))}
        </div>
      </Section>
      <QuoteForm />
    </>
  );
}
