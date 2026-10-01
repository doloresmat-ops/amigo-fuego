import { createFileRoute, Link } from "@tanstack/react-router";
import { CtaLink, PageHero, Section, TrustStrip, pageHead } from "@/components/amigo/site";
import { QuoteForm } from "@/components/amigo/QuoteForm";
import gMesa from "@/assets/galeria-mesa-corporativa.jpg";
import gParrilla from "@/assets/galeria-parrilla-vivo.jpg";

export const Route = createFileRoute("/corporativo")({
  head: () =>
    pageHead(
      "/corporativo",
      "Catering Corporativo y Asados para Producciones | Amigo Fuego",
      "Asados argentinos para cenas de fin de año, despachos, clientes internacionales y cierres de rodaje. Desde 10 personas hasta eventos masivos en CDMX.", "Corporativo"
    ),
  component: Corporativo,
});

const OCASIONES = [
  { t: "Cenas de fin de año", d: "La mesa que tu equipo va a recordar. Fuego, brindis y cortes al centro." },
  { t: "Reuniones de despacho", d: "La reunión mensual de arquitectos o abogados, convertida en ritual." },
  { t: "Clientes internacionales", d: "Agasaja a quien viene de fuera con una experiencia honesta y memorable." },
  { t: "Cierres de rodaje", d: "El agradecimiento de la productora al equipo después del último corte." },
];

const FORMATOS = [
  { n: "10–30", t: "Íntimo", d: "Juntas y cenas de dirección." },
  { n: "30–120", t: "Equipo", d: "Fin de año, aniversarios, lanzamientos." },
  { n: "120+", t: "Masivo", d: "Varias parrillas y equipo completo." },
];

function Corporativo() {
  return (
    <>
      <PageHero
        crumb="Corporativo"
        eyebrow="Empresas · Productoras · Agencias"
        title="Catering Corporativo y Asados para Producciones y Cines"
        subtitle="La carne es festiva, la carne habla de negocios y de poder. Llevamos la parrilla a tu oficina, foro o terraza."
        image={gMesa}
      >
        <CtaLink variant="oliva">Cotizar evento corporativo</CtaLink>
      </PageHero>
      <TrustStrip />
      <section className="bg-carbon text-crema">
       <Section>
        <p className="eyebrow text-tierra">Ocasiones</p>
        <h2 className="mt-4 max-w-3xl text-4xl md:text-5xl">Para cuando la mesa también cierra tratos</h2>
        <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-crema/20 bg-crema/20 sm:grid-cols-2">
          {OCASIONES.map((o) => (
            <div key={o.t} className="bg-carbon p-8">
              <h3 className="text-2xl text-crema">{o.t}</h3>
              <p className="mt-3 text-crema/70">{o.d}</p>
            </div>
          ))}
        </div>
        <p className="mt-10 max-w-3xl text-lg text-crema/75">
          Revisa nuestros <Link to="/menu" className="text-tierra underline underline-offset-4">cortes a la parrilla como vacío y churrasco Angus</Link> y
          las <Link to="/menu" className="text-tierra underline underline-offset-4">mini pizzas de masa madre a la parrilla</Link>, el favorito de los equipos.
        </p>
       </Section>
      </section>
      <section className="relative isolate overflow-hidden">
        <img src={gParrilla} alt="Parrilla encendida en evento" loading="lazy" className="absolute inset-0 -z-20 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-carbon/80" />
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
          <p className="eyebrow text-tierra">Formatos flexibles</p>
          <h2 className="mt-4 text-4xl md:text-5xl">Desde juntas íntimas de 10 personas hasta eventos masivos</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {FORMATOS.map((f) => (
              <div key={f.t} className="rounded-lg border border-crema/20 bg-carbon/60 p-8">
                <p className="font-display text-5xl text-terracota">{f.n}</p>
                <p className="mt-2 text-sm uppercase tracking-widest text-crema/60">personas</p>
                <h3 className="mt-6 text-2xl">{f.t}</h3>
                <p className="mt-2 text-crema/70">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <QuoteForm
        defaultTipo="Cena Fin de Año"
        title="Cotización para empresas"
        intro="Facturamos. Cuéntanos la fecha, el número de personas y el lugar, y te enviamos una propuesta."
      />
    </>
  );
}
