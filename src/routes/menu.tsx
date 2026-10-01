import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CtaLink, PageHero, Section, pageHead } from "@/components/amigo/site";
import { QuoteForm } from "@/components/amigo/QuoteForm";
import gCorte from "@/assets/galeria-corte.jpg";
import gPizzas from "@/assets/galeria-mini-pizzas.jpg";
import gCalabaza from "@/assets/galeria-calabaza.jpg";
import gParrilla from "@/assets/galeria-parrilla-vivo.jpg";

export const Route = createFileRoute("/menu")({
  head: () =>
    pageHead(
      "/menu",
      "Menú de Asado Argentino y Experiencia en Vivo | Amigo Fuego",
      "El ritual del asado en 5 pasos: vermut, empanadas, vacío, asado de tira, churrasco Angus y mini pizzas de masa madre. Paquetes desde $550 MXN por persona.", "Menú"
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
  const p = PASOS[active] ?? PASOS[0]!;
  return (
    <>
      <PageHero
        crumb="Menú"
        eyebrow="Menú · Experiencia"
        title="El Ritual del Asado Argentino: Menú y Experiencia en Vivo"
        subtitle="Cinco pasos, un solo fuego. Así se vive un asado Amigo Fuego."
        image={gParrilla}
      >
        <CtaLink variant="oliva">Cotizar mi menú</CtaLink>
      </PageHero>
      <section className="bg-crema text-carbon">
       <Section>
        <p className="eyebrow text-oxido">Los 5 pasos del ritual</p>
        <div className="mt-8 grid gap-8 md:grid-cols-[1fr_1.4fr]">
          <div role="tablist" aria-label="Pasos del ritual" aria-orientation="vertical" className="flex flex-col gap-2">
            {PASOS.map((s, i) => {
              const on = i === active;
              return (
                <button
                  key={s.t}
                  role="tab"
                  aria-selected={on}
                  aria-controls="ritual-panel"
                  onClick={() => setActive(i)}
                  className={`group flex items-center gap-4 rounded-r-lg border-l-4 px-5 py-4 text-left transition-all duration-300 ${
                    on
                      ? "border-fuego bg-carbon text-fuego shadow-lg"
                      : "border-carbon/20 bg-blanco/60 text-carbon hover:border-fuego/60 hover:bg-carbon/10 hover:text-oxido"
                  }`}
                >
                  <span className={`font-display text-3xl ${on ? "text-fuego" : "text-oxido"}`}>{i + 1}</span>
                  <span className={`flex-1 text-lg ${on ? "text-fuego" : ""}`}>{s.t}</span>
                  <span
                    aria-hidden="true"
                    className={`flex h-8 w-8 items-center justify-center rounded-full border text-xl transition-transform duration-300 ${
                      on ? "rotate-45 border-fuego text-fuego" : "border-carbon/30 group-hover:border-oxido group-hover:translate-x-1"
                    }`}
                  >
                    +
                  </span>
                </button>
              );
            })}
          </div>
          <div id="ritual-panel" role="tabpanel" key={active} className="animate-in fade-in slide-in-from-right-4 rounded-lg border-l-4 border-fuego bg-carbon p-8 text-crema shadow-xl duration-500 md:p-10">
            <p className="eyebrow text-fuego">Paso {active + 1} de {PASOS.length}</p>
            <h2 className="mt-3 text-4xl text-crema md:text-5xl">{p.t}</h2>
            <p className="mt-4 text-crema/75">{p.d}</p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {p.items.map((it) => (
                <li key={it} className="border-t border-crema/25 pt-3 font-display text-xl">{it}</li>
              ))}
            </ul>
          </div>
        </div>
       </Section>
      </section>
      <section className="bg-carbon text-crema">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
          <p className="eyebrow text-tierra">Productos héroe</p>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <article className="md:col-span-2">
              <div className="relative overflow-hidden rounded-xl">
                <img src={gCorte} alt="Cortes premium al fuego en la parrilla" loading="lazy" className="aspect-[16/9] w-full object-cover md:aspect-[21/9]" />
                <div className="golden absolute inset-0" />
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-10">
                  <p className="eyebrow text-fuego">La protagonista</p>
                  <h3 className="mt-2 text-4xl text-crema md:text-6xl">Cortes Premium al Fuego</h3>
                  <p className="mt-3 max-w-xl text-lg text-crema/85">Vacío, asado de tira y churrasco Angus cocinados lentamente.</p>
                </div>
              </div>
            </article>
            {[
              { img: gCalabaza, t: "Calabaza rellena de humita", d: "Asada lentamente en las brasas, cremosa y dulce." },
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
      <section className="bg-crema text-carbon">
       <Section className="text-center">
        <p className="eyebrow text-oxido">Precio</p>
        <p className="mt-4 font-display text-5xl md:text-7xl">
          Paquetes desde <span className="text-oxido">$550 MXN</span>
        </p>
        <p className="mt-3 text-carbon/70">por persona</p>
        <div className="mt-8"><CtaLink variant="dark">Cotizar ahora</CtaLink></div>
       </Section>
      </section>
      <QuoteForm tone="carbon" />
    </>
  );
}
