import { useState, type FormEvent } from "react";

export const TIPOS_EVENTO = [
  "Cena Fin de Año",
  "Producción",
  "Reunión de Despacho",
  "Boda / Tornaboda",
  "Otro",
] as const;

const field =
  "w-full rounded-md border-2 border-carbon/25 bg-crema px-4 py-3 text-carbon placeholder:text-carbon/50 focus:border-oxido focus:outline-none focus:ring-2 focus:ring-oxido/25";

export function QuoteForm({
  defaultTipo = "",
  title = "Cotiza tu evento",
  intro = "Cuéntanos fecha, personas y ocasión. Te respondemos en menos de 24 horas.",
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
          <p className={`eyebrow ${dark ? "text-tierra" : "text-oxido"}`}>Cotización</p>
          <h2 className="mt-4 text-4xl md:text-5xl">{title}</h2>
          <p className={`mt-5 ${dark ? "text-crema/75" : "text-carbon/75"}`}>{intro}</p>
        </div>
        <div
          className={`rounded-xl border-t-4 border-oxido p-6 text-carbon shadow-[0_18px_40px_-20px_rgba(29,25,18,0.45)] md:col-span-3 md:p-8 ${dark ? "bg-crema" : "bg-blanco"}`}
        >
          {sent ? (
            <div className="py-10 text-center" role="status">
              <p className="font-display text-3xl text-carbon">¡Gracias! El fuego ya está encendido.</p>
              <p className="mt-3 text-carbon/70">Te escribimos muy pronto para armar tu evento.</p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2">
              <label className="sm:col-span-2">
                <span className="mb-1.5 block text-sm text-carbon/80">Nombre completo</span>
                <input required name="nombre" className={field} maxLength={100} />
              </label>
              <label>
                <span className="mb-1.5 block text-sm text-carbon/80">Correo electrónico</span>
                <input required type="email" name="email" className={field} maxLength={255} />
              </label>
              <label>
                <span className="mb-1.5 block text-sm text-carbon/80">Teléfono / WhatsApp</span>
                <input required type="tel" name="telefono" className={field} maxLength={20} />
              </label>
              <label className="sm:col-span-2">
                <span className="mb-1.5 block text-sm text-carbon/80">Empresa (opcional)</span>
                <input name="empresa" className={field} maxLength={100} />
              </label>
              <label className="sm:col-span-2">
                <span className="mb-1.5 block text-sm text-carbon/80">Tipo de evento</span>
                <select required name="tipo" defaultValue={defaultTipo} className={field}>
                  <option value="" disabled>Selecciona una opción</option>
                  {TIPOS_EVENTO.map((t) => <option key={t}>{t}</option>)}
                </select>
              </label>
              <label>
                <span className="mb-1.5 block text-sm text-carbon/80">Número estimado de personas</span>
                <input required type="number" min={10} name="personas" className={field} />
              </label>
              <label>
                <span className="mb-1.5 block text-sm text-carbon/80">Fecha estimada</span>
                <input required type="date" name="fecha" className={field} />
              </label>
              <button
                type="submit"
                className="mt-2 rounded-full bg-oxido px-6 py-4 text-base font-bold text-crema transition hover:brightness-110 sm:col-span-2"
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
