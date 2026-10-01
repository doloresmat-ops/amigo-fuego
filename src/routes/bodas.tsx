import { createFileRoute, Link } from "@tanstack/react-router";
import { CtaLink, PageHero, Section, pageHead } from "@/components/amigo/site";
import { QuoteForm } from "@/components/amigo/QuoteForm";
import gJardin from "@/assets/galeria-jardin.jpg";
import gChoripan from "@/assets/galeria-choripan.jpg";

export const Route = createFileRoute("/bodas")({
  head: () =>
    pageHead(
      "/bodas",
      "Catering de Asado Argentino para Bodas y Tornabodas | Amigo Fuego",
      "Asado argentino para bodas en jardín y la Tornaboda Amigo Fuego: parrilla encendida de madrugada con choripanes para tus invitados.", "Bodas"
    ),
  component: Bodas,
});

function Bodas() {
  return (
    <>
      <PageHero
        crumb="Bodas"
        eyebrow="Bodas · Tornabodas"
        title="Catering de Asado Argentino para Bodas y Tornabodas Inolvidables"
        subtitle="Para parejas que se preocupan menos por impresionar y más por emocionar, con una mesa infinita y cercana."
        image={gJardin}
      >
        <CtaLink variant="oliva">Cotizar mi boda</CtaLink>
      </PageHero>
      <section className="bg-crema text-carbon">
       <Section>
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="eyebrow text-oxido">La mesa infinita</p>
            <h2 className="mt-4 text-4xl md:text-5xl">Una boda que sabe a familia</h2>
          </div>
          <p className="text-lg text-carbon/75">
            Nada de platos que llegan y se van. La parrilla queda a la vista, los cortes
            pasan de mano en mano y la mesa se llena de conversación. Así se celebra en
            Argentina, y así lo llevamos a tu jardín. Conoce <Link to="/historia" className="text-oxido underline underline-offset-4">la historia de Gabriel y su familia parrillera</Link>,
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
            <h2 className="mt-4 text-4xl md:text-6xl">La Tornaboda Amigo Fuego</h2>
            <p className="mt-6 text-lg text-crema/80">
              Cuando la pista sigue llena y el hambre aparece, la parrilla se enciende de
              madrugada. Choripanes recién hechos, chimichurri y pan para que la fiesta
              siga hasta el amanecer.
            </p>
            <div className="mt-8"><CtaLink>Agregar la tornaboda</CtaLink></div>
          </div>
        </div>
      </section>
      <QuoteForm defaultTipo="Boda / Tornaboda" title="Cuéntanos de tu boda" />
    </>
  );
}
