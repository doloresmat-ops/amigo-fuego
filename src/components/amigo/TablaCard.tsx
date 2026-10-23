import { CtaLink } from "./site";
import { TABLA } from "./tablas";

export function TablaCard() {
  return (
    <article className="grid overflow-hidden rounded-lg border border-carbon/15 bg-crema text-carbon shadow-xl md:grid-cols-2">
      <div className="image-zoom relative aspect-[4/3] overflow-hidden md:aspect-auto">
        <img
          src={TABLA.img}
          alt="Tabla de picada con embutidos, quesos y acompañamientos"
          loading="lazy"
          width={1600}
          height={1194}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-col justify-center p-6 sm:p-10 md:p-12">
        <h3 className="text-3xl">{TABLA.nombre}</h3>
        <p className="mt-4 text-lg text-carbon/75">{TABLA.descripcion}</p>
        <p className="mt-4 text-carbon/75">Una misma selección, en cuatro tamaños para compartir.</p>
        <div className="mt-8">
          <CtaLink to="/tablas-de-picada">Ver tamaños y pedir</CtaLink>
        </div>
        <p className="mt-5 text-sm text-carbon/60">{"\n"}</p>
      </div>
    </article>
  );
}
