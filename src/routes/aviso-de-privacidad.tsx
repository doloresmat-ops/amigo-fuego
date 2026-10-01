import { createFileRoute } from "@tanstack/react-router";
import { Section, pageHead } from "@/components/amigo/site";

export const Route = createFileRoute("/aviso-de-privacidad")({
  head: () =>
    pageHead(
      "/aviso-de-privacidad",
      "Aviso de Privacidad | Amigo Fuego",
      "Cómo Amigo Fuego trata los datos personales que compartes al solicitar una cotización.", "Aviso de privacidad"
    ),
  component: Aviso,
});

function Aviso() {
  return (
    <Section className="max-w-3xl">
      <h1 className="text-4xl md:text-5xl">Aviso de privacidad</h1>
      <div className="mt-8 space-y-4 text-crema/80">
        <p>
          Amigo Fuego utiliza los datos que nos compartes en el formulario de cotización
          (nombre, correo, teléfono, empresa y detalles del evento) únicamente para
          contactarte y preparar tu propuesta.
        </p>
        <p className="text-sm text-muted-foreground">
          Texto provisional: el aviso de privacidad completo está pendiente de confirmar.
        </p>
      </div>
    </Section>
  );
}
