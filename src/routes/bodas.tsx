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
          <div className="mx-auto grid max-w-6xl overflow-hidden rounded-2xl bg-blanco shadow-xl md:grid-cols-[1fr_1.2fr]">
            <div className="flex flex-col justify-center bg-carbon p-10 text-crema md:p-14">
              <p className="eyebrow text-tierra">Catering para Eventos Sociales y Celebraciones</p>
              <h2 className="mt-6 text-4xl leading-tight md:text-5xl">Una celebración que sabe a familia.</h2>
              <div className="mt-8 h-px w-16 bg-oxido" />
            </div>
            <div className="flex flex-col justify-center p-10 md:p-14">
              <p className="text-xl leading-relaxed text-carbon/85 md:text-2xl">
                Para anfitriones que se preocupan menos por impresionar y más por emocionar.
                Llevamos el ritual del asado a tu jardín para crear una mesa infinita donde la
                conversación nunca termina.
              </p>
              <p className="mt-6 text-carbon/70">
                Conoce <Link to="/historia" className="text-oxido underline underline-offset-4">la historia de Gabriel y su familia parrillera</Link>,
                que lleva más de 25 años compartiendo el fuego en México.
              </p>
            </div>
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
