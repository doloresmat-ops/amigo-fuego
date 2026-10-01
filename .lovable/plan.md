# Botones azul cielo + WhatsApp verde y banner de precio en Inicio

## 1. Botones CTA "Cotizar" en azul con letras blancas

El azul autorizado de la paleta es **cielo `#3F96B4`** (único azul en el sistema). Cambios:

- `src/components/amigo/site.tsx`
  - `CtaLink`: la variante usada por los CTAs "Cotizar" (hoy `oliva`, que pinta naranja fuego) pasa a fondo `cielo` con texto blanco y hover más claro.
  - Botón "Cotizar" del header fijo: fondo `cielo`, letras blancas.
- `src/components/amigo/QuoteForm.tsx`
  - Botón "Quiero mi cotización": fondo `cielo`, letras blancas.
- Esto cubre todos los CTAs de Inicio, Corporativo, Bodas, Menú e Historia (usan `CtaLink variant="oliva"`).

Detalle técnico: se agregan tokens `--color-cielo` ya existente y `--blanco: #ffffff` en `src/styles.css` (`@theme inline`) para las letras blancas sin hardcodear utilidades.

## 2. Botón de WhatsApp verde y más grande

- Color oficial de WhatsApp: se agrega token `--wa: #25D366` en `src/styles.css`.
- `WhatsAppFab` en `site.tsx`: pasa de 56px (`h-14 w-14`) a **64px** (`h-16 w-16 md:h-[72px] md:w-[72px]`), icono más grande, fondo verde WhatsApp, icono blanco.
- La animación de latido (`soft-pulse`) cambia de naranja a verde WhatsApp.

## 3. Banner de precio en Inicio

Banner igual al bloque de precio de la página Menú ("Paquetes desde $550 MXN por persona"), insertado en `src/routes/index.tsx` después de la tira de confianza de clientes:

- Texto: "Paquetes desde **$550 MXN** por persona" (destacado en color, mismo estilo del Menú).
- Dos botones:
  - "Ver el menú" → enlace a `/menu`
  - "Cotizar ahora" → baja al formulario de cotización (`#cotizar`), en azul cielo con letras blancas.

## Fuera de alcance

- No se cambia el número de WhatsApp (sigue pendiente el real), logo, fotos ni textos.
- Los CTAs que no son de cotización ("Ver el menú", "Agregar la tornaboda", "Llevar el fuego a mi evento") conservan su estilo actual.
