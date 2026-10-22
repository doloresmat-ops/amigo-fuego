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

const CORREO_OK = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

type CampoRequerido = "nombre" | "email" | "telefono" | "tipo" | "personas" | "fecha";
type Errores = Partial<Record<CampoRequerido, string>>;

function validar(datos: FormData): Errores {
  const errores: Errores = {};
  const nombre = String(datos.get("nombre") ?? "").trim();
  const email = String(datos.get("email") ?? "").trim();
  const telefono = String(datos.get("telefono") ?? "").trim();
  const tipo = String(datos.get("tipo") ?? "").trim();
  const personas = String(datos.get("personas") ?? "").trim();
  const fecha = String(datos.get("fecha") ?? "").trim();

  if (!nombre) errores.nombre = "Escribe tu nombre completo.";
  if (!email) errores.email = "Escribe tu correo electrónico.";
  else if (!CORREO_OK.test(email))
    errores.email = "Escribe un correo válido, por ejemplo nombre@correo.com.";
  if (!telefono) errores.telefono = "Escribe tu teléfono o WhatsApp.";
  else if (telefono.replace(/\D/g, "").length < 5)
    errores.telefono = "Escribe un teléfono de al menos 5 dígitos.";
  if (!tipo) errores.tipo = "Elige el tipo de evento.";
  if (!personas) errores.personas = "Escribe el número estimado de personas.";
  else if (!/^\d+$/.test(personas) || Number(personas) < 10)
    errores.personas = "El número mínimo de personas es 10.";
  if (!fecha) errores.fecha = "Elige la fecha estimada.";
  return errores;
}

function campoCls(error?: string) {
  if (!error) return field;
  return "w-full rounded-md border-0 bg-blanco px-4 py-3 text-carbon placeholder:text-carbon/50 focus:outline-none focus:ring-2 focus:ring-fuego ring-2 ring-fuego";
}

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
  const [servicios, setServicios] = useState<string[]>([]);
  const [serviciosError, setServiciosError] = useState(false);
  const [errores, setErrores] = useState<Errores>({});
  const enviarFn = useServerFn(enviarCotizacion);
  void tone;
  const dark = false; // la sección del formulario siempre es crema

  function limpiarError(campo: CampoRequerido) {
    setErrores((prev) => (prev[campo] ? { ...prev, [campo]: undefined } : prev));
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const datos = new FormData(form);
    const nuevosErrores = validar(datos);
    setErrores(nuevosErrores);
    if (servicios.length === 0) setServiciosError(true);

    const primerError = (Object.keys(nuevosErrores) as CampoRequerido[])[0];
    if (primerError || servicios.length === 0) {
      const destino = primerError
        ? (form.elements.namedItem(primerError) as HTMLElement | null)
        : (form.querySelector('input[name="servicios"]') as HTMLElement | null);
      destino?.focus();
      return;
    }
    if (sending) return;
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
            <form onSubmit={onSubmit} noValidate className="grid gap-4 sm:grid-cols-2">
              <p className="text-xs text-crema/80 sm:col-span-2">
                Los campos marcados con <span aria-hidden="true" className="text-tierra">*</span> son
                obligatorios.
              </p>
              <label className="sm:col-span-2">
                <span className="mb-1.5 block text-sm text-crema">
                  Nombre completo <span aria-hidden="true" className="text-tierra">*</span>
                </span>
                <input
                  required
                  aria-required="true"
                  name="nombre"
                  onChange={() => limpiarError("nombre")}
                  aria-invalid={errores.nombre ? true : undefined}
                  aria-describedby={errores.nombre ? "error-nombre" : undefined}
                  className={campoCls(errores.nombre)}
                  maxLength={100}
                />
                {errores.nombre && (
                  <p id="error-nombre" role="alert" className="mt-1.5 text-sm text-fuego">
                    {errores.nombre}
                  </p>
                )}
              </label>
              <label>
                <span className="mb-1.5 block text-sm text-crema">
                  Correo electrónico <span aria-hidden="true" className="text-tierra">*</span>
                </span>
                <input
                  required
                  aria-required="true"
                  type="email"
                  name="email"
                  onChange={() => limpiarError("email")}
                  aria-invalid={errores.email ? true : undefined}
                  aria-describedby={errores.email ? "error-email" : undefined}
                  className={campoCls(errores.email)}
                  maxLength={255}
                />
                {errores.email && (
                  <p id="error-email" role="alert" className="mt-1.5 text-sm text-fuego">
                    {errores.email}
                  </p>
                )}
              </label>
              <label>
                <span className="mb-1.5 block text-sm text-crema">
                  Teléfono / WhatsApp <span aria-hidden="true" className="text-tierra">*</span>
                </span>
                <input
                  required
                  aria-required="true"
                  type="tel"
                  name="telefono"
                  onChange={() => limpiarError("telefono")}
                  aria-invalid={errores.telefono ? true : undefined}
                  aria-describedby={errores.telefono ? "error-telefono" : undefined}
                  className={campoCls(errores.telefono)}
                  maxLength={20}
                />
                {errores.telefono && (
                  <p id="error-telefono" role="alert" className="mt-1.5 text-sm text-fuego">
                    {errores.telefono}
                  </p>
                )}
              </label>
              <label className="sm:col-span-2">
                <span className="mb-1.5 block text-sm text-crema">Empresa (opcional)</span>
                <input name="empresa" className={field} maxLength={100} />
              </label>
              <label className="sm:col-span-2">
                <span className="mb-1.5 block text-sm text-crema">
                  Tipo de evento <span aria-hidden="true" className="text-tierra">*</span>
                </span>
                <select
                  required
                  aria-required="true"
                  name="tipo"
                  defaultValue={defaultTipo}
                  onChange={() => limpiarError("tipo")}
                  aria-invalid={errores.tipo ? true : undefined}
                  aria-describedby={errores.tipo ? "error-tipo" : undefined}
                  className={campoCls(errores.tipo)}
                >
                  <option value="" disabled>Selecciona una opción</option>
                  {TIPOS_EVENTO.map((t) => <option key={t}>{t}</option>)}
                </select>
                {errores.tipo && (
                  <p id="error-tipo" role="alert" className="mt-1.5 text-sm text-fuego">
                    {errores.tipo}
                  </p>
                )}
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
                          : serviciosError
                            ? "border-fuego/60 bg-crema/5 text-crema/85 hover:border-crema/50"
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
                <span className="mb-1.5 block text-sm text-crema">
                  Número estimado de personas <span aria-hidden="true" className="text-tierra">*</span>
                </span>
                <input
                  required
                  aria-required="true"
                  type="number"
                  min={10}
                  name="personas"
                  onChange={() => limpiarError("personas")}
                  aria-invalid={errores.personas ? true : undefined}
                  aria-describedby={errores.personas ? "error-personas" : undefined}
                  className={campoCls(errores.personas)}
                />
                {errores.personas && (
                  <p id="error-personas" role="alert" className="mt-1.5 text-sm text-fuego">
                    {errores.personas}
                  </p>
                )}
              </label>
              <label>
                <span className="mb-1.5 block text-sm text-crema">
                  Fecha estimada <span aria-hidden="true" className="text-tierra">*</span>
                </span>
                <input
                  required
                  aria-required="true"
                  type="date"
                  name="fecha"
                  onChange={() => limpiarError("fecha")}
                  aria-invalid={errores.fecha ? true : undefined}
                  aria-describedby={errores.fecha ? "error-fecha" : undefined}
                  className={campoCls(errores.fecha)}
                />
                {errores.fecha && (
                  <p id="error-fecha" role="alert" className="mt-1.5 text-sm text-fuego">
                    {errores.fecha}
                  </p>
                )}
              </label>
              <Button
                type="submit"
                variant="conversion"
                size="conversion"
                className="mt-2 sm:col-span-2"
                disabled={sending}
              >
                {sending ? (
                  <span className="inline-flex items-center gap-2">
                    <span
                      aria-hidden="true"
                      className="size-4 animate-spin rounded-full border-2 border-crema/40 border-t-crema"
                    />
                    Enviando…
                  </span>
                ) : (
                  "Quiero mi cotización"
                )}
              </Button>
              {submitError && (
                <p role="alert" className="text-sm text-fuego sm:col-span-2">
                  No pudimos enviar tu solicitud. Intenta de nuevo o{" "}
                  <a
                    href={waLink("Hola, quiero cotizar un evento con Amigo Fuego.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-2"
                  >
                    escríbenos por WhatsApp
                  </a>
                  .
                </p>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
