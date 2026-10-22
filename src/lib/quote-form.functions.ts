import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const QUE_COTIZAR = ["Parrilla Argentina", "Barra de Pizza", "Barra de Bebida", "Choripaneada"] as const;

const cotizacionSchema = z.object({
  nombre: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  telefono: z.string().trim().min(5).max(20),
  empresa: z.string().trim().max(100).optional().default(""),
  tipo: z.string().trim().min(1).max(80),
  servicios: z.array(z.enum(QUE_COTIZAR)).min(1).max(4),
  personas: z.coerce.number().int().min(10).max(10000),
  fecha: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  origen: z.string().max(120).optional().default(""),
});

export type CotizacionInput = z.input<typeof cotizacionSchema>;

export type CotizacionResultado = { ok: true } | { ok: false };

export const enviarCotizacion = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => cotizacionSchema.parse(data))
  .handler(async ({ data }): Promise<CotizacionResultado> => {
    const url = process.env["MAKE_WEBHOOK_URL"];
    if (!url) {
      console.error("MAKE_WEBHOOK_URL no está configurado");
      return { ok: false };
    }
    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          enviadoEl: new Date().toISOString(),
        }),
      });
      if (!res.ok) {
        console.error("El webhook rechazó el envío con estado", res.status);
        return { ok: false };
      }
      return { ok: true };
    } catch (err) {
      console.error("Fallo el envío al webhook", err);
      return { ok: false };
    }
  });
