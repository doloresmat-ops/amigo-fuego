import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CtaLink, PageHero, Section, pageHead } from "@/components/amigo/site";
import { QuoteForm } from "@/components/amigo/QuoteForm";
import gCorte from "@/assets/galeria-corte.jpg";
import gPizzas from "@/assets/galeria-mini-pizzas.jpg";
import gParrilla from "@/assets/galeria-parrilla-vivo.jpg";

export const Route = createFileRoute("/menu")({
  head: () =>
    pageHead(
      "/menu",
      "Menú de Asado Argentino y Experiencia en Vivo | Amigo Fuego",
      "El ritual del asado en 5 pasos: vermut, empanadas, vacío, asado de tira, churrasco Angus y mini pizzas de masa madre. Paquetes desde $550 MXN por persona.",
    ),
  component: Menu,
});

const PASOS = [
  { t: "La bienvenida", d: "Vermut y fuego. Los invitados llegan con la parrilla ya encendida.", items: ["Vermut", "Fuego encendido"] },
  { t: "La apertura", d: "Lo primero que sale de la parrilla para abrir el apetito.", items: ["Empanadas", "Choripanes", "Mollejas", "Matambre"] },
  { t: "El momento de la parrilla", d: "Los cortes, al punto y al centro de la mesa.", items: ["Vacío", "Asado de tira", "Churrasco Angus"] },
  { t: "La mesa se completa", d: "Guarniciones hechas también al fuego.", items: ["Fondue de calabaza", "Pimientos asados", "Ensaladas"] },
  { t: "Los imprescindibles", d: "Sin esto no hay asado.", items: ["Chimichurri", "Salsa criolla", "Pan"] },
];

function Menu() {
  const [active, setActive] = useState(0);
  const p = PASOS[active];
  return (
    <>
      <PageHero
        eyebrow="Menú · Experiencia"
        title="El Ritual del Asado Argentino: Menú y Experiencia en Vivo"
        subtitle="Cinco pasos, un solo fuego. Así se vive un asado Amigo Fuego."
        image={gParrilla}
      >
        <CtaLink variant="oliva">Cotizar mi menú</CtaLink>
      </PageHero>
      <Section>
        <p className="eyebrow text-tierra">Los 5 pasos del ritual</p>
        <div className="mt-8 grid gap-8 md:grid-cols-[1fr_1.4fr]">
          <div role="tablist" aria-label="Pasos del ritual" className="flex flex-col gap-2">
            {PASOS.map((s, i) => (
              <button
                key={s.t}
                role="tab"
                aria-selected={i === active}
                onClick={() => setActive(i)}
                className={`flex items-center gap-4 rounded-lg border px-5 py-4 text-left transition-colors ${
                  i === active ? "border-terracota bg-terracota/15" : "border-border hover:bg-brasa"
                }`}
              >
                <span className="font-display text-3xl text-terracota">{i + 1}</span>
                <span className="text-lg text-crema">{s.t}</span>
              </button>
            ))}
          </div>
          <div role="tabpanel" className="rounded-xl border border-border bg-brasa p-8 md:p-10">
            <p className="eyebrow text-oliva">Paso {active + 1}</p>
            <h2 className="mt-3 text-4xl">{p.t}</h2>
            <p className="mt-4 text-crema/75">{p.d}</p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {p.items.map((it) => (
                <li key={it} className="border-t border-border pt-3 font-display text-xl">{it}</li>
              ))}
            </ul>
          </div>
        </div>
      </Section>
      <section className="border-y border-border bg-brasa">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
          <p className="eyebrow text-tierra">Productos héroe</p>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {[
              { img: gCorte, t: "Calabaza rellena de humita", d: "Asada lentamente en las brasas, cremosa y dulce." },
              { img: gPizzas, t: "Mini pizzas de masa madre a la parrilla", d: "El ultra éxito de la casa, herencia de la pizzería familiar en Santa Fe." },
            ].map((h) => (
              <article key={h.t}>
                <img src={h.img} alt={h.t} loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover" />
                <h3 className="mt-5 text-3xl">{h.t}</h3>
                <p className="mt-2 text-crema/70">{h.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Section className="text-center">
        <p className="eyebrow text-tierra">Precio</p>
        <p className="mt-4 font-display text-5xl md:text-7xl">
          Paquetes desde <span className="text-oliva">$550 MXN</span>
        </p>
        <p className="mt-3 text-crema/70">por persona</p>
        <div className="mt-8"><CtaLink variant="oliva">Cotizar ahora</CtaLink></div>
      </Section>
      <QuoteForm />
    </>
  );
}
