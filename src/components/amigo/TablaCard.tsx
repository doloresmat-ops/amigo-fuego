import { Button } from "@/components/ui/button";
import { waLink } from "./site";

export type Tabla = {
  nombre: string;
  descripcion: string;
  precio: string;
  img: string;
};

/** Tarjeta de una tabla para llevar: foto, nombre, descripción, precio y pedido por WhatsApp. */
export function TablaCard({ tabla }: { tabla: Tabla }) {
  const mensaje = `Hola Amigo Fuego, quiero pedir la ${tabla.nombre}. ¿Me pueden confirmar disponibilidad y detalles?`;

  return (
    <article className="flex flex-col overflow-hidden rounded-xl bg-crema text-carbon shadow-xl">
      <div className="image-zoom relative aspect-[4/5] overflow-hidden">
        <img
          src={tabla.img}
          alt={tabla.nombre}
          loading="lazy"
          width={800}
          height={1008}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-2xl">{tabla.nombre}</h3>
        <p className="mt-3 text-carbon/75">{tabla.descripcion}</p>
        <p className="eyebrow mt-5 text-tierra">{tabla.precio}</p>
        <div className="mt-6 md:mt-auto md:pt-6">
          <Button asChild variant="conversion" className="w-full min-h-11 px-6 py-3 text-base sm:px-6 sm:py-3 sm:text-base">
            <a href={waLink(mensaje)} target="_blank" rel="noreferrer">
              Pedir por WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </article>
  );
}
