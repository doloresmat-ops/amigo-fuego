import { useState, type FormEvent } from "react";

export const TIPOS_EVENTO = [
  "Cena Fin de Año",
  "Producción",
  "Reunión de Despacho",
  "Boda / Tornaboda",
  "Otro",
] as const;

const field =
  "w-full rounded-md border border-input bg-carbon px-4 py-3 text-crema placeholder:text-crema/40 focus:border-terracota focus:outline-none focus:ring-2 focus:ring-ring/40";

export function QuoteForm({
  defaultTipo = "",
  title = "Cotiza tu evento",
  intro = "Cuéntanos fecha, personas y ocasión. Te respondemos en menos de 24 horas.",
}: {
  defaultTipo?: string;
  title?: string;
  intro?: string;
}) {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!e.currentTarget.checkValidity()) return;
    setSent(true);
  }

  return (
    <section id="cotizar" className="relative border-t border-border bg-burdeos/25">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-5 md:px-10 md:py-28">
        <div className="md:col-span-2">
          <p className="eyebrow text-tierra">Cotización</p>
          <h2 className="mt-4 text-4xl text-crema md:text-5xl">{title}</h2>
          <p className="mt-5 text-crema/75">{intro}</p>
        </div>
        <div className="rounded-xl border border-border bg-brasa p-6 md:col-span-3 md:p-8">
          {sent ? (
            <div className="py-10 text-center" role="status">
              <p className="font-display text-3xl text-crema">¡Gracias! El fuego ya está encendido.</p>
              <p className="mt-3 text-crema/70">Te escribimos muy pronto para armar tu evento.</p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2">
              <label className="sm:col-span-2">
                <span className="mb-1.5 block text-sm text-crema/80">Nombre completo</span>
                <input required name="nombre" className={field} maxLength={100} />
              </label>
              <label>
                <span className="mb-1.5 block text-sm text-crema/80">Correo electrónico</span>
                <input required type="email" name="email" className={field} maxLength={255} />
              </label>
              <label>
                <span className="mb-1.5 block text-sm text-crema/80">Teléfono / WhatsApp</span>
                <input required type="tel" name="telefono" className={field} maxLength={20} />
              </label>
              <label className="sm:col-span-2">
                <span className="mb-1.5 block text-sm text-crema/80">Empresa (opcional)</span>
                <input name="empresa" className={field} maxLength={100} />
              </label>
              <label className="sm:col-span-2">
                <span className="mb-1.5 block text-sm text-crema/80">Tipo de evento</span>
                <select required name="tipo" defaultValue={defaultTipo} className={field}>
                  <option value="" disabled>Selecciona una opción</option>
                  {TIPOS_EVENTO.map((t) => <option key={t}>{t}</option>)}
                </select>
              </label>
              <label>
                <span className="mb-1.5 block text-sm text-crema/80">Número estimado de personas</span>
                <input required type="number" min={10} name="personas" className={field} />
              </label>
              <label>
                <span className="mb-1.5 block text-sm text-crema/80">Fecha estimada</span>
                <input required type="date" name="fecha" className={field} />
              </label>
              <button
                type="submit"
                className="mt-2 rounded-full bg-fuego px-6 py-4 text-base font-bold text-carbon transition-colors hover:bg-crema hover:text-carbon sm:col-span-2"
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
