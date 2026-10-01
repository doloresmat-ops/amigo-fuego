import { useState, type FormEvent } from "react";

export const TIPOS_EVENTO = [
  "Cena de Fin de Año",
  "Evento Corporativo / Empresa",
  "Producción / Rodaje",
  "Evento Social / Celebración",
  "Menú de Madrugada / Tornafiesta",
  "Otro",
] as const;

const field =
  "w-full rounded-md border-0 bg-blanco px-4 py-3 text-carbon placeholder:text-carbon/50 focus:outline-none focus:ring-2 focus:ring-fuego/40";

export function QuoteForm({
  defaultTipo = "",
  title = "Asegura tu fecha y enciende el fuego.",
  intro = "Dinos qué estás organizando y para cuántas personas. Recibirás una propuesta a la medida en menos de 24 horas. Espacios limitados para temporada alta.",
  tone = "crema",
}: {
  defaultTipo?: string;
  title?: string;
  intro?: string;
  tone?: "crema" | "carbon";
}) {
  const [sent, setSent] = useState(false);
  const dark = tone === "carbon";

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!e.currentTarget.checkValidity()) return;
    setSent(true);
  }

  return (
    <section
      id="cotizar"
      className={`relative ${dark ? "border-t border-crema/15 bg-carbon text-crema" : "border-t border-carbon/15 bg-crema text-carbon"}`}
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-5 md:px-10 md:py-28">
        <div className="md:col-span-2">
          <p className="eyebrow text-carbon/70">Cotización</p>
          <h2 className="mt-4 text-4xl md:text-5xl">{title}</h2>
          <p className={`mt-5 ${dark ? "text-crema/75" : "text-carbon/75"}`}>{intro}</p>
        </div>
        <div
          className={`rounded-lg bg-carbon p-6 text-crema shadow-xl sm:p-10 md:col-span-3 ${dark ? "border border-crema/20" : ""}`}
        >
          {sent ? (
            <div className="py-10 text-center" role="status">
              <p className="font-display text-3xl text-crema">¡Gracias! El fuego ya está encendido.</p>
              <p className="mt-3 text-crema/70">Te escribimos muy pronto para armar tu evento.</p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2">
              <label className="sm:col-span-2">
                <span className="mb-1.5 block text-sm text-carbon">Nombre completo</span>
                <input required name="nombre" className={field} maxLength={100} />
              </label>
              <label>
                <span className="mb-1.5 block text-sm text-carbon">Correo electrónico</span>
                <input required type="email" name="email" className={field} maxLength={255} />
              </label>
              <label>
                <span className="mb-1.5 block text-sm text-carbon">Teléfono / WhatsApp</span>
                <input required type="tel" name="telefono" className={field} maxLength={20} />
              </label>
              <label className="sm:col-span-2">
                <span className="mb-1.5 block text-sm text-carbon">Empresa (opcional)</span>
                <input name="empresa" className={field} maxLength={100} />
              </label>
              <label className="sm:col-span-2">
                <span className="mb-1.5 block text-sm text-carbon">Tipo de evento</span>
                <select required name="tipo" defaultValue={defaultTipo} className={field}>
                  <option value="" disabled>Selecciona una opción</option>
                  {TIPOS_EVENTO.map((t) => <option key={t}>{t}</option>)}
                </select>
              </label>
              <label>
                <span className="mb-1.5 block text-sm text-carbon">Número estimado de personas</span>
                <input required type="number" min={10} name="personas" className={field} />
              </label>
              <label>
                <span className="mb-1.5 block text-sm text-carbon">Fecha estimada</span>
                <input required type="date" name="fecha" className={field} />
              </label>
              <button
                type="submit"
                className="mt-2 rounded-full bg-fuego px-6 py-4 text-base font-bold text-blanco transition hover:brightness-110 sm:col-span-2"
              >
                Quiero mi cotización
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
