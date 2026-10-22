import { useState, type FormEvent } from "react";
import { useServerFn } from "@tanstack/react-start";
import { Button } from "@/components/ui/button";
import { waLink } from "@/components/amigo/site";
import { enviarCotizacion } from "@/lib/quote-form.functions";

export const TIPOS_EVENTO = [
  "Cena de Fin de Año",
  "Evento Corporativo / Empresa",
  "Producción / Rodaje",
  "Evento Social / Celebración",
  "Menú de Madrugada / Tornafiesta",
  "Otro",
] as const;

export const QUE_COTIZAR = [
  "Parrilla Argentina",
  "Barra de Pizza",
  "Barra de Bebida",
  "Choripaneada",
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
  const [sending, setSending] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const enviarFn = useServerFn(enviarCotizacion);
  void tone;
  const dark = false; // la sección del formulario siempre es crema

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) return;
    if (servicios.length === 0) {
      setServiciosError(true);
      return;
    }
    if (sending) return;
    const datos = new FormData(form);
    setSending(true);
    setSubmitError(false);
    try {
      const res = await enviarFn({
        data: {
          nombre: String(datos.get("nombre") ?? ""),
          email: String(datos.get("email") ?? ""),
          telefono: String(datos.get("telefono") ?? ""),
          empresa: String(datos.get("empresa") ?? ""),
          tipo: String(datos.get("tipo") ?? ""),
          servicios,
          personas: String(datos.get("personas") ?? ""),
          fecha: String(datos.get("fecha") ?? ""),
          origen: typeof window !== "undefined" ? window.location.pathname : "",
        },
      });
      if (res.ok) setSent(true);
      else setSubmitError(true);
    } catch {
      setSubmitError(true);
    } finally {
      setSending(false);
    }
  }

  function toggleServicio(s: string) {
    setServicios((prev) => {
      const next = prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s];
      if (next.length > 0) setServiciosError(false);
      return next;
    });
  }

  return (
    <section
      id="cotizar"
      className={`relative ${dark ? "border-t border-crema/15 bg-carbon text-crema" : "border-t border-carbon/15 bg-crema text-carbon"}`}
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-5 md:px-10 md:py-28">
        <div className="md:col-span-2">
           <p className="eyebrow text-tierra">Cotización</p>
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
                <span className="mb-1.5 block text-sm text-crema">Nombre completo</span>
                <input required name="nombre" className={field} maxLength={100} />
              </label>
              <label>
                <span className="mb-1.5 block text-sm text-crema">Correo electrónico</span>
                <input required type="email" name="email" className={field} maxLength={255} />
              </label>
              <label>
                <span className="mb-1.5 block text-sm text-crema">Teléfono / WhatsApp</span>
                <input required type="tel" name="telefono" className={field} maxLength={20} />
              </label>
              <label className="sm:col-span-2">
                <span className="mb-1.5 block text-sm text-crema">Empresa (opcional)</span>
                <input name="empresa" className={field} maxLength={100} />
              </label>
              <label className="sm:col-span-2">
                <span className="mb-1.5 block text-sm text-crema">Tipo de evento</span>
                <select required name="tipo" defaultValue={defaultTipo} className={field}>
                  <option value="" disabled>Selecciona una opción</option>
                  {TIPOS_EVENTO.map((t) => <option key={t}>{t}</option>)}
                </select>
              </label>
              <fieldset className="sm:col-span-2">
                <legend className="mb-1.5 block text-sm text-crema">
                  ¿Qué quieres cotizar? <span className="text-crema/60">(puedes elegir varias)</span>
                </legend>
                <div className="grid gap-2 sm:grid-cols-2">
                  {QUE_COTIZAR.map((s) => (
                    <label
                      key={s}
                      className={`flex min-h-12 cursor-pointer items-center gap-3 rounded-md border px-4 py-2.5 text-sm transition-colors ${
                        servicios.includes(s)
                          ? "border-fuego/70 bg-crema/10 text-crema"
                          : "border-crema/25 bg-crema/5 text-crema/85 hover:border-crema/50"
                      }`}
                    >
                      <input
                        type="checkbox"
                        name="servicios"
                        value={s}
                        checked={servicios.includes(s)}
                        onChange={() => toggleServicio(s)}
                        className="size-4 accent-fuego"
                      />
                      {s}
                    </label>
                  ))}
                </div>
                {serviciosError && (
                  <p role="alert" className="mt-2 text-sm text-fuego">
                    Elige al menos una opción.
                  </p>
                )}
              </fieldset>
              <label>
                <span className="mb-1.5 block text-sm text-crema">Número estimado de personas</span>
                <input required type="number" min={10} name="personas" className={field} />
              </label>
              <label>
                <span className="mb-1.5 block text-sm text-crema">Fecha estimada</span>
                <input required type="date" name="fecha" className={field} />
              </label>
              <Button
                type="submit"
                variant="conversion"
                size="conversion"
                className="mt-2 sm:col-span-2"
              >
                Quiero mi cotización
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
