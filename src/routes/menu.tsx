import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { CtaLink, PageHero, pageHead } from "@/components/amigo/site";
import { QuoteForm } from "@/components/amigo/QuoteForm";
const CDN = "https://cdn.jsdelivr.net/gh/doloresmat-ops/amigo-fuego@main/public";
const gParrilla = `${CDN}/parrilla-argentina-amigo-fuego-cortando-carne.webp`;
const gPizzas = `${CDN}/estacion-pizzas-amigo-fuego-evento.webp`;
const gMaridaje = `${CDN}/barra-bebidas-amigo-fuego-vermut-cerveza.webp`;
const gChori = `${CDN}/evento-nocturno-amigo-fuego-choripan.webp`;

export const Route = createFileRoute("/menu")({
  head: () =>
    pageHead(
      "/menu",
      "Menú: Parrilla, Barra de Pizza, Bebidas y Choripaneada | Amigo Fuego",
      "Cuatro servicios para tu evento: Parrilla Argentina, Barra de Pizza con ensalada y pastas, Barra de Bebidas y Choripaneada. Paquetes desde $550 MXN por persona.",
      "Menú",
    ),
  component: Menu,
});

type Servicio = {
  id: string;
  eyebrow: string;
  title: string;
  body: ReactNode;
  items: string[];
  img: string;
  alt: string;
  cta: string;
};

const SERVICIOS: Servicio[] = [
  {
    id: "parrilla",
    eyebrow: "Servicio 01",
    title: "Parrilla Argentina",
    body: "El ritual completo del asado: bienvenida con vermut, entradas que salen de la parrilla, cortes al punto y guarniciones hechas al fuego. Paquetes desde $550 MXN por persona.",
    items: ["Empanadas y choripanes", "Vacío, asado de tira y churrasco Angus", "Calabaza con humita y pimientos asados", "Chimichurri, salsa criolla y pan"],
    img: gParrilla,
    alt: "Parrilla encendida durante el servicio de asado",
    cta: "Cotizar servicio",
  },
  {
    id: "pizza",
    eyebrow: "Servicio 02",
    title: "Barra de Pizza",
    body: (
      <>
        Mini pizzas de masa madre a la parrilla, directo de los hornos de nuestro restaurante hermano,{" "}
        <a href="https://lunfardopizzeria.com" target="_blank" rel="noopener noreferrer" className="font-medium text-tierra underline underline-offset-4">Lunfardo Pizzería</a>. Incluye ensalada y pastas.
      </>
    ),
    items: ["Mini pizzas de masa madre", "Ensalada fresca", "Pastas"],
    img: gPizzas,
    alt: "Mini pizzas de masa madre a la parrilla",
    cta: "Cotizar barra",
  },
  {
    id: "bebidas",
    eyebrow: "Servicio 03",
    title: "Barra de Bebidas",
    body: "El ritual empieza antes del primer corte. Vermut de bienvenida, fernet, vino Malbec y todo lo necesario para brindar sin prisa.",
    items: ["Vermut", "Fernet", "Vino Malbec"],
    img: gMaridaje,
    alt: "Brindis con Malbec, vermut y fernet",
    cta: "Cotizar barra",
  },
  {
    id: "choripaneada",
    eyebrow: "Servicio 04",
    title: "Choripaneada",
    body: "Choripanes recién salidos de la parrilla, con chimichurri y salsa criolla. Ideal para tornafiestas, rodajes y celebraciones informales.",
    items: ["Choripanes al momento", "Chimichurri", "Salsa criolla"],
    img: gChori,
    alt: "Choripanes servidos con chimichurri",
    cta: "Cotizar servicio",
  },
];

function Menu() {
  return (
    <>
      <PageHero
        crumb="Menú"
        eyebrow="Menú · Servicios"
        title="Nuestro Menú: Cuatro Formas de Vivir la Parrilla Argentina"
        subtitle="Parrilla, pizza, bebidas y choripaneada. Elige uno o combínalos para tu evento."
        image={gParrilla}
      >
        <CtaLink>Cotizar mi menú</CtaLink>
      </PageHero>
      {SERVICIOS.map((s, i) => {
        const dark = i % 2 === 1;
        return (
          <section key={s.id} id={s.id} className={dark ? "bg-carbon text-crema" : "bg-crema text-carbon"}>
            <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 md:grid-cols-2 md:items-center md:px-10 md:py-28">
              <div className={`image-zoom overflow-hidden rounded-xl ${dark ? "md:order-2" : ""}`}>
                <img src={s.img} alt={s.alt} loading="lazy" className="aspect-[4/3] w-full object-cover" />
              </div>
              <div>
                <p className="eyebrow text-tierra">{s.eyebrow}</p>
                <h2 className={`mt-4 text-4xl md:text-6xl ${dark ? "text-crema" : "text-carbon"}`}>{s.title}</h2>
                <p className={`mt-6 text-lg ${dark ? "text-crema/80" : "text-carbon/75"}`}>{s.body}</p>
                <ul className={`mt-6 space-y-2 ${dark ? "text-crema/80" : "text-carbon/80"}`}>
                  {s.items.map((it) => (
                    <li key={it} className="flex gap-3"><span aria-hidden="true" className="text-fuego">•</span>{it}</li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-wrap gap-4">
                  <CtaLink>{s.cta}</CtaLink>
                  {/* Pendiente: enlazar al PDF del menú de este servicio */}
                  <a
                    href="#"
                    className={`inline-flex min-h-12 items-center justify-center rounded-full border-2 px-8 py-3 text-base font-bold transition-colors duration-300 ${dark ? "border-crema text-crema hover:bg-crema hover:text-carbon" : "border-fuego text-fuego hover:bg-fuego hover:text-blanco"}`}
                  >
                    Ver menú
                  </a>
                </div>
              </div>
            </div>
          </section>
        );
      })}
      <QuoteForm />
    </>
  );
}
