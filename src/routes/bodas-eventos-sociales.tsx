import { createFileRoute } from "@tanstack/react-router";
import { CtaLink, PageHero, Section, pageHead } from "@/components/amigo/site";
import { QuoteForm } from "@/components/amigo/QuoteForm";
import gJardin from "@/assets/galeria-jardin.webp";
import gChoripan from "@/assets/galeria-choripan.jpg";

export const Route = createFileRoute("/bodas-eventos-sociales")({
  head: () =>
    pageHead(
      "/bodas-eventos-sociales",
      "Catering de Asado Argentino para Eventos Sociales | Amigo Fuego",
      "Asado argentino para eventos sociales y celebraciones, con la Tornafiesta Amigo Fuego: parrilla encendida de madrugada con choripanes.", "Eventos Sociales", "https://cdn.jsdelivr.net/gh/doloresmat-ops/amigo-fuego@main/public/eventos-sociales-parrilla-amigo-fuego-noche.webp"
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
        width={1024}
        height={768}
        alt="Jardín con mesa larga de celebración e invitados alrededor del asado argentino Amigo Fuego"
        overlay
      >
        <CtaLink>Cotizar mi evento</CtaLink>
      </PageHero>
      <section className="bg-crema text-carbon">
        <Section>
          <div className="mx-auto grid max-w-6xl overflow-hidden rounded-2xl bg-blanco shadow-xl md:grid-cols-[1fr_1.2fr]">
            <div className="flex flex-col justify-center bg-carbon p-10 text-crema md:p-14">
              <p className="eyebrow text-tierra">Catering para Eventos Sociales y Celebraciones</p>
              <h2 className="mt-6 text-4xl leading-tight md:text-5xl">Una celebración que sabe a familia.</h2>
               <div className="mt-8 h-px w-16 bg-cielo/70" />
            </div>
            <div className="flex flex-col justify-center p-10 md:p-14">
              <p className="text-xl leading-relaxed text-carbon/85 md:text-2xl">
                Para anfitriones que se preocupan menos por impresionar y más por emocionar.
                Llevamos el ritual del asado a tu jardín para crear una mesa infinita donde la
                conversación nunca termina.
              </p>
              <div className="mt-8">
                <CtaLink to="/sobre-nosotros">Conoce nuestro legado parrillero</CtaLink>
              </div>
            </div>
          </div>
        </Section>
      </section>
      <section className="bg-carbon text-crema">
        <Section>
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow text-tierra">Celebraciones</p>
            <h2 className="mt-4 text-4xl md:text-5xl">Cualquier motivo es bueno para encender el fuego</h2>
          </div>
           <div data-stagger className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              ["Cumpleaños y Aniversarios", "El fuego se enciende con anticipación para un gran festejo. Porciones abundantes al centro de la mesa para compartir y repetir."],
              ["Bautizos y Primeras Comuniones", "Una forma de celebrar tan relajada como un domingo en familia. Tú disfruta de tus invitados, nuestro maestro parrillero se encarga de las brasas."],
              ["Fiestas Privadas", "Comida real, fuego real y momentos espontáneos sin formalidades innecesarias."],
            ].map(([t, d]) => (
              <article key={t} className="rounded-xl border border-crema/20 bg-crema/5 p-8">
                 <div className="h-px w-12 bg-cielo/70" />
                <h3 className="mt-6 text-2xl">{t}</h3>
                <p className="mt-4 leading-relaxed text-crema/80">{d}</p>
              </article>
            ))}
          </div>
          <div className="mt-12 text-center">
            <CtaLink>Cotizar mi celebración</CtaLink>
          </div>
        </Section>
      </section>
      <section className="bg-crema text-carbon">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
          <div className="mb-10 grid gap-10 overflow-hidden rounded-2xl bg-carbon p-8 text-crema shadow-xl md:grid-cols-2 md:items-center md:p-16 md:mb-16">
            <div className="image-zoom overflow-hidden rounded-xl">
              <img src={gChoripan} alt="Choripanes en la parrilla argentina de Amigo Fuego durante una tornafiesta de madrugada" loading="lazy" width={1024} height={768} className="aspect-[4/5] w-full object-cover" />
            </div>
            <div>
              <p className="eyebrow text-tierra">Sección estelar</p>
              <h2 className="mt-4 text-4xl md:text-6xl">La Tornafiesta Amigo Fuego</h2>
              <p className="mt-6 text-lg text-crema/85">
                Cuando la pista sigue llena y el hambre aparece, la parrilla se enciende de
                madrugada. Choripanes recién hechos, chimichurri y pan para que la fiesta
                siga hasta el amanecer.
              </p>
              <div className="mt-8"><CtaLink>Cotizar Tornafiesta</CtaLink></div>
            </div>
          </div>
        </div>
      </section>
      <QuoteForm defaultTipo="Evento Social / Celebración" />
    </>
  );
}
