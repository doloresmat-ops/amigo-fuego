import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import { Logo, Spark } from "@/components/amigo/Logo";
import hero from "@/assets/hero-parrilla-noche.jpg";
import gParrilla from "@/assets/galeria-parrilla-vivo.jpg";
import gPizzas from "@/assets/galeria-mini-pizzas.jpg";
import gMesa from "@/assets/galeria-mesa-corporativa.jpg";
import gJardin from "@/assets/galeria-jardin.jpg";
import gCorte from "@/assets/galeria-corte.jpg";
import gEquipo from "@/assets/galeria-equipo.jpg";
import gChoripan from "@/assets/galeria-choripan.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Amigo Fuego | Parrilla argentina para eventos en México" },
      {
        name: "description",
        content:
          "Cenas corporativas, cierres de rodaje, bodas y tornabodas. Asado con historia.",
      },
      {
        property: "og:title",
        content: "Amigo Fuego | Parrilla argentina para eventos en México",
      },
      {
        property: "og:description",
        content:
          "Cenas corporativas, cierres de rodaje, bodas y tornabodas. Asado con historia.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const WA = "https://wa.me/520000000000"; // placeholder

function Index() {
  return (
    <div className="bg-crema text-carbon">
      <Header />
      <main>
        <Hero />
        <Logos />
        <Ocasiones />
        <ParaQuien />
        <Experiencia />
        <Momentos />
        <Historia />
        <Galeria />
        <Cotizar />
        <Faq />
      </main>
      <Footer />
      <a
        href={WA}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-fuego px-5 py-3 text-sm font-semibold text-crema shadow-lg md:hidden"
      >
        WhatsApp
      </a>
    </div>
  );
}

/* ---------------- Header ---------------- */

const NAV = [
  { href: "#ocasiones", label: "Ocasiones" },
  { href: "#experiencia", label: "Experiencia" },
  { href: "#confian", label: "Confían en nosotros" },
  { href: "#historia", label: "Historia" },
];

function Header() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid ? "bg-carbon" : "bg-crema"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-10">
        <a href="#top" aria-label="Amigo Fuego">
          <Logo tone={solid ? "crema" : "fuego"} />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className={`border-b-2 border-transparent pb-0.5 text-sm transition-colors hover:border-fuego hover:text-fuego ${
                solid ? "text-crema" : "text-carbon"
              }`}
            >
              {n.label}
            </a>
          ))}
          <a
            href="#cotizar"
            className="rounded-[10px] bg-fuego px-5 py-2.5 text-sm font-semibold text-crema transition-opacity hover:opacity-90"
          >
            Cotizar evento
          </a>
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Menú"
          className={`md:hidden ${solid ? "text-crema" : "text-carbon"}`}
        >
          <div className="space-y-1.5">
            <span className="block h-0.5 w-6 bg-current" />
            <span className="block h-0.5 w-6 bg-current" />
            <span className="block h-0.5 w-4 bg-current" />
          </div>
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-carbon px-5 py-5 md:hidden">
          <div className="flex flex-col gap-4">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="text-crema"
              >
                {n.label}
              </a>
            ))}
            <a
              href="#cotizar"
              onClick={() => setOpen(false)}
              className="rounded-[10px] bg-fuego px-5 py-3 text-center font-semibold text-crema"
            >
              Cotizar evento
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

/* ---------------- Hero ---------------- */

function Hero() {
  return (
    <section id="top" className="relative min-h-[92vh] w-full overflow-hidden">
      <img
        src={hero}
        alt="Parrilla argentina encendida de noche"
        width={1920}
        height={1088}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-carbon/65" />
      <div className="relative mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-end px-5 pb-16 pt-32 md:px-10 md:pb-24">
        <p className="eyebrow text-tierra">Parrilla Argentina</p>
        <h1 className="mt-4 max-w-4xl font-display text-[2.2rem] leading-[1.05] text-crema sm:text-5xl md:text-6xl lg:text-7xl">
          El asado que se pide cuando ya no quieres{" "}
          <em className="italic text-fuego">el mismo catering</em>.
        </h1>
        <p className="mt-6 max-w-xl text-base text-crema/85 md:text-lg">
          Experiencia de fuego para cenas corporativas, cierres de rodaje, bodas y
          reuniones que sí se recuerdan.
        </p>

        <span className="mt-7 inline-flex w-fit items-center gap-2 rounded-full bg-fuego px-4 py-2 text-xs font-semibold text-crema">
          <Spark className="h-3.5 w-3.5" />
          Temporada fuerte: cenas de fin de año
        </span>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#cotizar"
            className="rounded-[10px] bg-fuego px-6 py-3.5 font-semibold text-crema transition-opacity hover:opacity-90"
          >
            Cotizar mi evento
          </a>
          <a
            href="#ocasiones"
            className="rounded-[10px] border border-crema/70 px-6 py-3.5 font-semibold text-crema transition-colors hover:border-fuego hover:text-fuego"
          >
            Ver ocasiones
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Logos ---------------- */

const CLIENTES = [
  "Amazon (placeholder)",
  "Logo cliente",
  "Logo cliente",
  "Logo cliente",
  "Logo cliente",
  "Logo cliente",
  "Logo cliente",
];

function Logos() {
  return (
    <section id="confian" className="border-b border-border py-14 md:py-16">
      <p className="caption-sc px-5 text-center text-sm text-muted-foreground md:px-10">
        Han confiado sus cenas a Amigo Fuego
      </p>
      <div className="mt-8 overflow-hidden">
        <div className="flex w-max animate-marquee gap-14">
          {[...CLIENTES, ...CLIENTES].map((c, i) => (
            <span
              key={i}
              className="whitespace-nowrap font-display text-lg text-carbon/70"
            >
              {c}
            </span>
          ))}
        </div>
      </div>
      <p className="mt-8 px-5 text-center text-sm text-muted-foreground md:px-10">
        De boca en boca entre productoras, despachos y anfitriones.
      </p>
    </section>
  );
}

/* ---------------- Ocasiones ---------------- */

const OCASIONES = [
  {
    label: "Corporativo",
    labelClass: "text-cielo",
    title: "Cenas que cierran el año — o el trato",
    body: "RH y líderes que quieren una mesa distinta para Navidad, fin de año o un cierre. La carne es festiva: habla de negocio, de poder y de equipo.",
    casos: "Cena navideña · Reunión mensual de despacho",
    cta: "Cotizar cena corporativa",
  },
  {
    label: "Producción",
    labelClass: "text-tierra",
    title: "El agradecimiento después del corte final",
    body: "Productoras nos buscan para la mesa de los directores —muchas veces argentinos— cuando se cierra una película o un comercial. No es el catering de extras.",
    casos: "Wrap de película · Cierre de comercial",
    cta: "Armar cena de wrap",
  },
  {
    label: "Social",
    labelClass: "text-oliva",
    title: "Menos impresionar. Más emocionar.",
    body: "Parejas y anfitriones con buen gusto que no necesitan presumirlo. Jardín, tornaboda con choripanes, o la parrilla como alternativa al menú de siempre.",
    casos: "Boda en jardín · Tornaboda",
    cta: "Cotizar boda o reunión",
  },
];

function Ocasiones() {
  return (
    <section id="ocasiones" className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
      <h2 className="max-w-2xl font-display text-3xl md:text-5xl">
        Tres formas de <em className="italic text-fuego">sentarse</em> a la misma mesa
      </h2>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {OCASIONES.map((o) => (
          <article
            key={o.label}
            className="flex flex-col rounded-2xl border border-border bg-card p-7 transition-colors hover:border-fuego"
          >
            <p className={`eyebrow ${o.labelClass}`}>{o.label}</p>
            <h3 className="mt-4 font-display text-2xl leading-snug">{o.title}</h3>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{o.body}</p>
            <p className="caption-sc mt-5 text-sm text-tierra">{o.casos}</p>
            <a
              href="#cotizar"
              className="mt-7 inline-flex w-fit border-b-2 border-fuego pb-1 text-sm font-semibold text-fuego"
            >
              {o.cta}
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Para quién es ---------------- */

const QUIEN = [
  {
    t: "El gran anfitrión",
    d: "Quiere salirse del catering común. Que los invitados se sientan bien y se acuerden de la noche.",
  },
  {
    t: "Quien opera la empresa",
    d: "RH, producción, administración. Tiene que salir impecable y tiene que recordarse.",
  },
  {
    t: "Quien extraña el asado",
    d: "Argentinos que acercan su legado, y mexicanos que buscan una alternativa con historia.",
  },
];

function ParaQuien() {
  return (
    <section className="border-y border-border">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-24">
        <p className="eyebrow text-tierra">Para quién es</p>
        <div className="mt-10 grid gap-10 md:grid-cols-3">
          {QUIEN.map((q) => (
            <div key={q.t}>
              <h3 className="font-display text-2xl">{q.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{q.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Experiencia ---------------- */

const EXPERIENCIA = [
  { t: "Parrilla en vivo", d: "El fuego es parte de la fiesta, no algo que pasa en la cocina." },
  { t: "Menús que rotan", d: "Para no repetir con clientes frecuentes." },
  {
    t: "Firmas de la casa",
    d: "Mini pizzas (el hit que ya va fijo), asado y opción tornaboda.",
  },
  { t: "De 10 a temporada", d: "De la mesa chica de 10 al evento de fin de año." },
];

function Experiencia() {
  return (
    <section id="experiencia" className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="eyebrow text-tierra">La experiencia</p>
          <h2 className="mt-4 font-display text-3xl md:text-5xl">
            Fuego, mesa larga y <em className="italic text-fuego">tiempo</em>
          </h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            {EXPERIENCIA.map((e) => (
              <div key={e.t} className="filete pt-5">
                <h3 className="font-display text-xl">{e.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{e.d}</p>
              </div>
            ))}
          </div>
          <p className="caption-sc mt-10 text-sm text-tierra">
            Origen argentino. Cocina posible para paladares mexicanos.
          </p>
        </div>
        <img
          src={gParrilla}
          alt="Parrillero trabajando en vivo durante un evento"
          loading="lazy"
          width={1024}
          height={1280}
          className="h-full max-h-[620px] w-full rounded-2xl object-cover"
        />
      </div>
    </section>
  );
}

/* ---------------- Momentos ---------------- */

const MOMENTOS = [
  "Cena de fin de año / Navidad corporativa",
  "Cierre de rodaje o comercial",
  "Reunión mensual de despacho",
  "Cena para clientes o partners",
  "Boda en jardín",
  "Tornaboda (choripán / parrilla)",
];

function Momentos() {
  return (
    <section className="border-y border-border">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-24">
        <h2 className="font-display text-3xl md:text-4xl">Momentos para llamarnos</h2>
        <div className="mt-10 grid gap-x-12 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {MOMENTOS.map((m, i) => (
            <div key={m} className="filete flex gap-4 pt-5">
              <span className="font-display text-2xl text-fuego">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-base leading-snug">{m}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Historia ---------------- */

function Historia() {
  return (
    <section id="historia" className="bg-carbon text-crema">
      <div className="mx-auto max-w-3xl px-5 py-24 text-center md:px-10 md:py-32">
        <Spark className="mx-auto h-8 w-8 text-fuego" />
        <h2 className="mt-6 font-display text-3xl leading-tight md:text-5xl">
          Por qué un mexicano <em className="italic text-fuego">contrataría</em> un asado
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-crema/80">
          En Argentina el asado es el default. Aquí se pide porque se busca algo distinto:
          una experiencia de parrilla con raíz, no el mismo menú de siempre.
        </p>
      </div>
    </section>
  );
}

/* ---------------- Galería ---------------- */

const FOTOS = [
  { src: gMesa, alt: "Mesa corporativa de noche", cap: "Cena de fin de año, mesa larga", span: "md:col-span-2" },
  { src: gCorte, alt: "Corte de carne recién hecho", cap: "El corte, antes de servir", span: "" },
  { src: gPizzas, alt: "Mini pizzas a la parrilla", cap: "Las mini pizzas de la casa", span: "" },
  { src: gJardin, alt: "Boda en jardín", cap: "Boda en jardín, luz de tarde", span: "md:col-span-2" },
  { src: gChoripan, alt: "Choripanes con chimichurri", cap: "Tornaboda: choripán a la mano", span: "" },
  { src: gEquipo, alt: "Equipo emplatando junto a la parrilla", cap: "El equipo, media hora antes", span: "md:col-span-2" },
];

function Galeria() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
      <p className="eyebrow text-tierra">Galería</p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {FOTOS.map((f) => (
          <figure key={f.cap} className={f.span}>
            <img
              src={f.src}
              alt={f.alt}
              loading="lazy"
              className="h-64 w-full rounded-xl object-cover md:h-72"
            />
            <figcaption className="caption-sc mt-2 text-sm text-muted-foreground">
              {f.cap}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Cotizar ---------------- */

const FIELD =
  "w-full rounded-[10px] border border-crema/25 bg-crema/5 px-4 py-3 text-crema placeholder:text-crema/40 outline-none focus:border-fuego";

function Cotizar() {
  const [sent, setSent] = useState(false);

  return (
    <section id="cotizar" className="bg-carbon text-crema">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:px-10 md:py-28 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="eyebrow text-tierra">Cotizar</p>
          <h2 className="mt-4 font-display text-3xl md:text-5xl">
            Cuéntanos de tu <em className="italic text-fuego">evento</em>
          </h2>
          <p className="mt-5 max-w-md text-crema/75">
            Temporada de fin de año se llena. Respuesta humana, no bot.
          </p>
          <div className="mt-8 rounded-2xl border border-crema/20 p-6">
            <p className="font-display text-xl">¿Lo necesitas ya?</p>
            <a
              href={WA}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex rounded-[10px] bg-fuego px-5 py-3 font-semibold text-crema"
            >
              Escribir por WhatsApp
            </a>
          </div>
        </div>

        {sent ? (
          <div className="flex flex-col items-start justify-center rounded-2xl border border-fuego p-8">
            <Spark className="h-8 w-8 text-fuego" />
            <h3 className="mt-4 font-display text-2xl">Listo, ya prendimos el carbón</h3>
            <p className="mt-3 text-crema/75">
              Recibimos tus datos. Te contestamos por el medio que nos dejaste.
            </p>
            <button
              onClick={() => setSent(false)}
              className="mt-6 border-b-2 border-fuego pb-1 text-sm font-semibold text-fuego"
            >
              Enviar otra solicitud
            </button>
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="grid gap-4 rounded-2xl border border-crema/20 p-6 sm:grid-cols-2"
          >
            <input required placeholder="Nombre" className={`${FIELD} sm:col-span-2`} />
            <select required defaultValue="" className={FIELD}>
              <option value="" disabled>
                Tipo de evento
              </option>
              {["Corporativo", "Producción", "Boda", "Tornaboda", "Reunión social", "Otro"].map(
                (o) => (
                  <option key={o} className="text-carbon">
                    {o}
                  </option>
                ),
              )}
            </select>
            <input type="date" required className={FIELD} aria-label="Fecha tentativa" />
            <input type="number" min={1} placeholder="Nº de personas" className={FIELD} />
            <input placeholder="Ciudad o sede" className={FIELD} />
            <select defaultValue="" className={`${FIELD} sm:col-span-2`}>
              <option value="" disabled>
                Cómo nos conociste
              </option>
              {["Planner", "Pauta", "Recomendación", "LinkedIn", "Otro"].map((o) => (
                <option key={o} className="text-carbon">
                  {o}
                </option>
              ))}
            </select>
            <input
              required
              placeholder="WhatsApp o mail"
              className={`${FIELD} sm:col-span-2`}
            />
            <button
              type="submit"
              className="mt-2 rounded-[10px] bg-fuego px-6 py-3.5 font-semibold text-crema sm:col-span-2"
            >
              Pedir cotización
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */

const FAQ = [
  { q: "¿Solo hacen eventos grandes?", a: "No. También reuniones de despacho y mesas chicas." },
  { q: "¿Trabajan con planners?", a: "Sí, y también directo con el anfitrión o la empresa." },
  { q: "¿Es solo comida argentina?", a: "Asado argentino con toque mexicano." },
  { q: "¿Hacen cenas de Navidad corporativa?", a: "Sí. Es nuestra temporada fuerte." },
  {
    q: "¿Hay un menú cerrado?",
    a: "Se arma por ocasión. Hay firmas fijas, como las mini pizzas.",
  },
];

function Faq() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-20 md:px-10 md:py-28">
      <h2 className="font-display text-3xl md:text-4xl">Preguntas</h2>
      <div className="mt-8">
        {FAQ.map((f) => (
          <details key={f.q} className="filete group py-5">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-xl">
              {f.q}
              <span className="text-fuego transition-transform group-open:rotate-45">+</span>
            </summary>
            <p className="mt-3 text-muted-foreground">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Footer ---------------- */

function Footer() {
  return (
    <footer className="bg-carbon text-crema">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-10">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <Logo tone="fuego" />
            <p className="mt-4 max-w-xs font-display text-xl">
              Asado para ocasiones que importan.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2">
            <div className="flex flex-col gap-2 text-sm text-crema/75">
              {NAV.map((n) => (
                <a key={n.href} href={n.href} className="hover:text-fuego">
                  {n.label}
                </a>
              ))}
              <a href="#cotizar" className="hover:text-fuego">
                Cotizar evento
              </a>
            </div>
            <div className="flex flex-col gap-2 text-sm text-crema/75">
              <a href="#" className="hover:text-fuego">
                Instagram
              </a>
              <a href="#" className="hover:text-fuego">
                LinkedIn
              </a>
              <a href={WA} target="_blank" rel="noreferrer" className="hover:text-fuego">
                WhatsApp
              </a>
              <a href="#" className="hover:text-fuego">
                Aviso de privacidad
              </a>
            </div>
          </div>
        </div>
        <p className="filete mt-12 pt-6 text-xs text-crema/50">
          © {new Date().getFullYear()} Amigo Fuego · Parrilla argentina en México
        </p>
      </div>
    </footer>
  );
}
