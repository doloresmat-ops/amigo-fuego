import { createFileRoute, Link } from "@tanstack/react-router";
import { CtaLink, PageHero, Section, TrustStrip, pageHead } from "@/components/amigo/site";
import { QuoteForm } from "@/components/amigo/QuoteForm";
import gMesa from "@/assets/galeria-mesa-corporativa.jpg";
import gEquipo from "@/assets/galeria-equipo.jpg";
import gParrilla from "@/assets/galeria-parrilla-vivo.jpg";

export const Route = createFileRoute("/eventos-empresas")({
  head: () =>
    pageHead(
      "/eventos-empresas",
      "Catering Corporativo y Asado Argentino para Producciones y Empresas | Amigo Fuego",
      "Asado argentino con maestro parrillero para cenas de fin de año, producciones, juntas de despacho y clientes VIP. Desde 10 personas hasta eventos masivos.",
      "Eventos para Empresas"
    ),
  component: EventosEmpresas,
});

const OCASIONES = [
  {
    t: "Cenas de Fin de Año",
    d: "La mesa que tu equipo va a recordar. El fuego se prende con anticipación y la carne sale poco a poco en un desfile de cortes premium pensados para compartir. Ideal para premiar a tu talento.",
  },
  {
    t: "Producciones y Wrap Parties",
    d: "El agradecimiento perfecto para los directores y el crew al fin de grabación. Llevamos el ritual completo con empanadas, choripanes y cortes directos al foro de grabación.",
  },
  {
    t: "Juntas de Despacho y Agencias",
    d: "Cada mes, los arquitectos, creativos y directivos necesitan salir de la rutina. Convertimos tu junta mensual en una experiencia relajada alrededor de las brasas, donde la conversación fluye sin prisa.",
  },
  {
    t: "Clientes Internacionales y VIP",
    d: "Recibe a quienes vienen de fuera con una experiencia auténtica y honesta. Vermut, fernet y vino Malbec en la mesa del parrillero, garantizando un nivel de servicio que sella tratos.",
  },
];

const FORMATOS = [
  {
    n: "10–30",
    t: "Íntimo",
    d: "Juntas directivas, cierres de proyecto y convivencias de despachos. Montaje ágil y discreto.",
  },
  {
    n: "30–120",
    t: "Equipo",
    d: "Fiestas de fin de año, aniversarios corporativos y lanzamientos de marca. Estaciones de parrilla a la vista con flujo constante de cortes y guarniciones para compartir.",
  },
  {
    n: "120+",
    t: "Masivo",
    d: "Wrap parties de grandes producciones y congresos. Despliegue de múltiples parrillas, equipo completo de maestros parrilleros y logística impecable de tiempos.",
  },
];

const CONFIANZA = [
  "Facturación corporativa disponible",
  "Cobertura en foros y oficinas",
  "Puntualidad y logística impecable",
];

function EventosEmpresas() {
  return (
    <>
      <PageHero
        crumb="Eventos para Empresas"
        eyebrow="Empresas · Productoras · Agencias"
        title="Catering Corporativo y Asado Argentino para Producciones y Empresas"
        subtitle="La tradición que transforma una comida en un gran momento de negocios."
        image={gMesa}
        overlay
      >
        <CtaLink variant="crema" size="lg">Cotizar evento corporativo</CtaLink>
      </PageHero>

      <TrustStrip />

      {/* RTB */}
      <section className="bg-carbon text-crema">
        <Section>
          <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
            <img
              src={gEquipo}
              alt="El equipo de Amigo Fuego cocinando frente a los invitados"
              className="aspect-[4/3] w-full rounded-lg object-cover"
            />
            <div>
              <p className="eyebrow text-tierra">¿Por qué Amigo Fuego para tu empresa?</p>
              <h2 className="mt-4 text-4xl md:text-5xl">
                El gran anfitrión de tus cierres de negocio
              </h2>
              <p className="mt-6 text-lg text-crema/80">
                Olvídate de los banquetes corporativos fríos y comunes. Buscamos que tus
                invitados se sientan bien a través de la hospitalidad y la abundancia.
              </p>
              <p className="mt-4 text-lg text-crema/80">
                Nuestro maestro parrillero enciende el fuego en tu foro, oficina o
                terraza, cocinando frente a tus invitados para construir el momento de
                encuentro.
              </p>
            </div>
          </div>
        </Section>
      </section>

      {/* Ocasiones */}
      <section className="bg-crema text-carbon">
        <Section>
          <p className="eyebrow text-oxido">Ocasiones</p>
          <h2 className="mt-4 max-w-3xl text-4xl md:text-5xl">
            Para cuando la mesa también cierra tratos
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {OCASIONES.map((o, i) => (
              <article
                key={o.t}
                className="rounded-lg border-2 border-carbon/15 bg-blanco p-8"
              >
                <p className="font-display text-4xl text-oxido">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-4 text-2xl">{o.t}</h3>
                <p className="mt-3 text-carbon/75">{o.d}</p>
              </article>
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <CtaLink variant="dark" size="lg">Cotizar evento corporativo</CtaLink>
          </div>
        </Section>
      </section>

      {/* Formatos */}
      <section className="bg-carbon text-crema">
        <Section>
          <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
            <div>
              <p className="eyebrow text-tierra">Formatos flexibles</p>
              <h2 className="mt-4 text-4xl md:text-5xl">
                Desde juntas íntimas de 10 personas hasta eventos masivos
              </h2>
              <img
                src={gParrilla}
                alt="Parrilla encendida en vivo durante un evento"
                className="mt-8 aspect-[4/3] w-full rounded-lg object-cover md:hidden"
              />
            </div>
            <img
              src={gParrilla}
              alt="Parrilla encendida en vivo durante un evento"
              className="hidden aspect-[4/3] w-full rounded-lg object-cover md:block"
            />
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {FORMATOS.map((f) => (
              <div key={f.t} className="rounded-lg bg-crema p-8 text-carbon">
                <p className="font-display text-5xl text-oxido">{f.n}</p>
                <p className="mt-2 text-sm uppercase tracking-widest text-carbon/60">
                  personas
                </p>
                <h3 className="mt-6 text-2xl">{f.t}</h3>
                <p className="mt-2 text-carbon/70">{f.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <CtaLink variant="crema" size="lg">Cotizar evento corporativo</CtaLink>
          </div>
          <aside className="mt-16 flex flex-col gap-8 rounded-2xl bg-crema p-8 text-carbon md:flex-row md:items-center md:justify-between md:p-12">
            <div className="max-w-2xl">
              <p className="eyebrow text-oxido">También te puede interesar</p>
              <h3 className="mt-3 text-2xl md:text-3xl">¿Quieres conocer los cortes que llevaremos a tu mesa?</h3>
              <p className="mt-3 text-carbon/75">
                Descubre nuestro ritual de 5 pasos. Desde las empanadas de apertura hasta los cortes Angus y las mini pizzas de masa madre a la parrilla.
              </p>
            </div>
            <Link to="/menu" className="inline-flex shrink-0 items-center justify-center rounded-full bg-carbon px-8 py-4 font-bold text-crema transition hover:brightness-125">
              Ver el Menú Completo
            </Link>
          </aside>
        </Section>
      </section>

      {/* Confianza B2B */}
      <section className="bg-crema py-14 text-carbon">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <ul className="flex flex-col items-center justify-center gap-4 text-center md:flex-row md:gap-10">
            {CONFIANZA.map((c) => (
              <li key={c} className="flex items-center gap-3 font-semibold">
                <span aria-hidden="true" className="h-2 w-2 rounded-full bg-oxido" />
                {c}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <QuoteForm defaultTipo="Cena de Fin de Año" tone="carbon" />
    </>
  );
}
