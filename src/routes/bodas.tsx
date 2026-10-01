import { createFileRoute, Link } from "@tanstack/react-router";
import { CtaLink, PageHero, Section, pageHead } from "@/components/amigo/site";
import { QuoteForm } from "@/components/amigo/QuoteForm";
import gJardin from "@/assets/galeria-jardin.jpg";
import gChoripan from "@/assets/galeria-choripan.jpg";

export const Route = createFileRoute("/bodas")({
  head: () =>
    pageHead(
      "/bodas",
      "Catering de Asado Argentino para Eventos Sociales | Amigo Fuego",
      "Asado argentino para eventos sociales y celebraciones, con la Tornafiesta Amigo Fuego: parrilla encendida de madrugada con choripanes.", "Eventos Sociales"
    ),
  component: Bodas,
});

function Bodas() {
  return (
    <>
      <PageHero
        crumb="Eventos Sociales"
        eyebrow="Eventos Sociales · Tornafiestas"
        title="Eventos Sociales Inolvidables"
        subtitle="Para parejas que se preocupan menos por impresionar y más por emocionar, con una mesa infinita y cercana."
        image={gJardin}
      >
        <CtaLink variant="oliva">Cotizar mi evento</CtaLink>
      </PageHero>
      <section className="bg-crema text-carbon">
       <Section>
        <div className="mx-auto max-w-5xl text-center">
          <p className="eyebrow text-oxido">La mesa infinita</p>
          <h2 className="mt-6 text-5xl leading-[1.05] md:text-7xl lg:text-8xl">
            <span aria-hidden="true" className="text-oxido">“</span>Una celebración que sabe a familia<span aria-hidden="true" className="text-oxido">”</span>
          </h2>
          <div className="mx-auto mt-10 h-px w-24 bg-oxido" />
          <p className="mx-auto mt-10 max-w-2xl text-lg text-carbon/75 md:text-xl">
            Nada de platos que llegan y se van. La parrilla queda a la vista, los cortes
            pasan de mano en mano y la mesa se llena de conversación. Así se celebra en
            Argentina, y así lo llevamos a tu evento. Conoce <Link to="/historia" className="text-oxido underline underline-offset-4">la historia de Gabriel y su familia parrillera</Link>,
            que lleva más de 25 años compartiendo el fuego en México.
          </p>
        </div>
       </Section>
      </section>
      <section className="border-y border-crema/20 bg-carbon">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 md:grid-cols-2 md:items-center md:px-10 md:py-28">
          <img src={gChoripan} alt="Choripanes en la parrilla de madrugada" loading="lazy" className="aspect-[4/5] w-full rounded-xl object-cover" />
          <div>
            <p className="eyebrow text-oliva">Sección estelar</p>
            <h2 className="mt-4 text-4xl md:text-6xl">La Tornafiesta Amigo Fuego</h2>
            <p className="mt-6 text-lg text-crema/80">
              Cuando la pista sigue llena y el hambre aparece, la parrilla se enciende de
              madrugada. Choripanes recién hechos, chimichurri y pan para que la fiesta
              siga hasta el amanecer.
            </p>
            <div className="mt-8"><CtaLink>Agregar la tornaboda</CtaLink></div>
          </div>
        </div>
      </section>
      <QuoteForm defaultTipo="Evento Social / Celebración" />
    </>
  );
}
