import { createFileRoute } from "@tanstack/react-router";
import { CtaLink, PageHero, Section, pageHead } from "@/components/amigo/site";
import { QuoteForm } from "@/components/amigo/QuoteForm";
import gCorte from "@/assets/galeria-corte.jpg";
import gPizzas from "@/assets/galeria-mini-pizzas.jpg";
import gCalabaza from "@/assets/galeria-calabaza.jpg";
import gMaridaje from "@/assets/galeria-maridaje.jpg";
import gParrilla from "@/assets/galeria-parrilla-vivo.jpg";
import gMesa from "@/assets/galeria-mesa-corporativa.jpg";
import gJardin from "@/assets/galeria-jardin.jpg";
import gEquipo from "@/assets/galeria-equipo.jpg";

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

const GALERIA = [
  { img: gParrilla, alt: "Parrilla encendida durante el servicio de asado" },
  { img: gCorte, alt: "Cortes de carne preparados sobre el fuego" },
  { img: gMesa, alt: "Mesa dispuesta para compartir un asado" },
  { img: gEquipo, alt: "Equipo de parrilleros durante un evento" },
  { img: gJardin, alt: "Invitados reunidos alrededor de una mesa al aire libre" },
];

function Menu() {
  return (
    <>
      <PageHero
        crumb="Menú"
        eyebrow="Menú · Experiencia"
        title="El Ritual del Asado Argentino: Menú y Experiencia en Vivo"
        subtitle="Cinco pasos, un solo fuego. Así se vive un asado Amigo Fuego."
        image={gParrilla}
      >
        <CtaLink>Cotizar mi menú</CtaLink>
      </PageHero>
      <section id="ritual" className="bg-crema text-carbon">
       <Section>
        <p className="eyebrow text-oxido">Los 5 pasos del ritual</p>
        <h2 className="mt-4 max-w-2xl text-3xl text-carbon md:text-5xl">Cinco pasos, un solo fuego</h2>
        <div className="mt-10 flex flex-wrap justify-center gap-6">
          {PASOS.map((paso, i) => (
            <article key={paso.t} className="flex w-full flex-col rounded-xl bg-blanco p-6 shadow-[0_6px_20px_rgba(29,25,18,0.08)] sm:w-[calc(50%-0.75rem)] sm:p-8 lg:w-[calc(33.333%-1rem)]">
              <span aria-hidden="true" className="font-display text-5xl text-fuego md:text-6xl">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-4 text-2xl text-carbon">{paso.t}</h3>
              <p className="mt-3 text-base text-carbon/75">{paso.d}</p>
              <p className="mt-auto pt-4 text-base leading-relaxed text-carbon/80">{paso.items.join(" · ")}</p>
            </article>
          ))}
        </div>
       </Section>
      </section>
      <section className="bg-carbon text-crema">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 md:grid-cols-2 md:items-center md:px-10 md:py-28">
          <img src={gMaridaje} alt="Brindis con Malbec, vermut y fernet alrededor de la parrilla" loading="lazy" className="aspect-[4/5] w-full rounded-xl object-cover" />
          <div>
            <p className="eyebrow text-tierra">Bebidas y maridaje</p>
            <h2 className="mt-4 text-4xl md:text-6xl">El Maridaje: Vermut, Fernet y Malbec</h2>
            <p className="mt-6 text-lg text-crema/80">
              No es ir a un restaurante, es tener tiempo para reunirte. El ritual comienza mucho
              antes del primer corte con un vermut de bienvenida. En la mesa del parrillero nunca
              falta el fernet, el vino Malbec y algo que siempre sobra: tiempo.
            </p>
          </div>
        </div>
      </section>
      <section className="overflow-hidden bg-crema py-20 text-carbon md:py-28" aria-labelledby="galeria-asados-title">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <h3 id="galeria-asados-title" className="max-w-3xl text-3xl text-carbon md:text-5xl">Del fuego a tu evento: Así se ven nuestras mesas</h3>
        </div>
        <div className="mt-9 overflow-hidden" aria-label="Galería de asados">
          <div className="flex w-max animate-gallery-marquee motion-reduce:animate-none">
            {[false, true].map((duplicate) => (
              <div key={String(duplicate)} className="flex w-max shrink-0 gap-4 pr-4 md:gap-6 md:pr-6" aria-hidden={duplicate ? "true" : undefined}>
                {GALERIA.map((foto) => (
                  <figure key={foto.alt} className="w-[78vw] max-w-[560px] shrink-0 sm:w-[52vw] lg:w-[38vw]">
                    <img src={foto.img} alt={duplicate ? "" : foto.alt} loading="lazy" className="aspect-[4/3] w-full rounded-md object-cover" />
                  </figure>
                ))}
              </div>
            ))}
          </div>
        </div>
        <p className="mx-auto mt-5 max-w-7xl px-5 text-sm text-carbon/60 md:px-10">Imágenes ilustrativas.</p>
      </section>
      <section className="bg-crema text-carbon">
        <div className="mx-auto max-w-7xl px-5 py-4 md:px-10 md:py-6">
          <div className="my-10 rounded-2xl bg-carbon p-6 text-crema shadow-[0_24px_60px_rgba(29,25,18,0.25)] sm:p-10 md:my-20 md:p-16">
            <p className="eyebrow text-tierra">Los estelares de nuestra parrilla</p>
            <h3 className="mt-4 max-w-3xl text-2xl text-crema md:text-3xl">
              Una pequeña muestra de la abundancia que llevamos a tu mesa. Conoce nuestras opciones de entradas, cortes y guarniciones al fuego.
            </h3>
            <div className="mt-10 grid gap-8 md:grid-cols-2">
              <article className="group md:col-span-2">
                <div className="relative overflow-hidden rounded-xl">
                  <img src={gCorte} alt="Cortes premium al fuego en la parrilla" loading="lazy" className="aspect-[16/9] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105 md:aspect-[21/9]" />
                  <div className="golden absolute inset-0" />
                  <div className="absolute inset-x-0 bottom-0 p-6 md:p-10">
                    <p className="eyebrow text-fuego">La protagonista</p>
                    <h3 className="mt-2 text-4xl text-crema transition-colors duration-300 group-hover:text-fuego md:text-6xl">Cortes Premium al Fuego</h3>
                    <p className="mt-3 max-w-xl text-lg text-crema/90">Vacío, asado de tira y churrasco Angus cocinados lentamente.</p>
                  </div>
                </div>
              </article>
              {[
                { img: gCalabaza, t: "Calabaza rellena de humita", d: "Asada lentamente en las brasas, cremosa y dulce." },
                { img: gPizzas, t: "Mini pizzas de masa madre a la parrilla", d: "El ultra éxito de la casa, herencia de la pizzería familiar en Santa Fe." },
              ].map((h) => (
                <article key={h.t} className="group cursor-default">
                  <div className="overflow-hidden rounded-xl">
                    <img src={h.img} alt={h.t} loading="lazy" className="aspect-[4/3] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105" />
                  </div>
                  <h3 className="mt-5 text-3xl text-crema transition-colors duration-300 group-hover:text-fuego">{h.t}</h3>
                  <p className="mt-2 text-crema/75">{h.d}</p>
                </article>
              ))}
            </div>
            <div className="mt-12 text-center">
              <a href="#ritual" className="inline-flex min-h-12 items-center justify-center rounded-full border-2 border-fuego px-8 py-4 text-base font-bold text-fuego transition-colors duration-300 hover:bg-fuego hover:text-blanco sm:px-10 sm:text-lg">
                Ver todas las opciones del menú
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-carbon text-crema">
        <Section className="text-center">
        <p className="eyebrow text-crema">Precio</p>
        <p className="mt-4 font-display text-5xl md:text-7xl">
          Paquetes desde <span className="text-crema">$550 MXN</span>
        </p>
        <p className="mt-3 text-crema/80">por persona</p>
         <div className="mt-8"><CtaLink>Cotizar ahora</CtaLink></div>
       </Section>
      </section>
      <QuoteForm />
    </>
  );
}
