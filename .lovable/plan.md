# Reordenar Tablas y El Ritual + restaurar foto del banner

## Cambios (todo en `src/routes/index.tsx`)

### 1. Intercambiar el orden de las secciones en Inicio
Orden actual: … «Elige tu ocasión» → **Tablas Amigo Fuego** → **El Ritual (banner)** → formulario.

Orden nuevo: … «Elige tu ocasión» → **El Ritual (banner)** → **Tablas Amigo Fuego** → formulario.

Se mueve el bloque de la sección Tablas (fondo carbón, eyebrow «Para llevar», `TablaCard`) debajo del banner del Ritual, sin cambiar su contenido interno.

### 2. Mantener la cebra
Tras el intercambio quedarían dos bloques oscuros seguidos (banner del Ritual, que es foto con overlay carbón, y la sección Tablas en carbón). Para conservar la alternancia estricta crema/carbón del sitio:

- La sección de Tablas pasa a fondo crema (`bg-crema text-carbon`).
- La tarjeta (`TablaCard`) conserva su fondo crema pero gana un borde sutil (`border border-carbon/15`) para seguir destacando sobre fondo claro.

### 3. Restaurar la foto del banner El Ritual
- Hoy usa `/02_mesa_tomahawk.webp` (foto de la mesa/tabla).
- Se restaura la foto cinematográfica anterior: `src/assets/ritual-banner.jpg` (fuego/parrilla, edge-to-edge con parallax), importándola como asset del proyecto. La overlay carbón al 75%, el título y el botón «Ver el Menú Completo» no cambian.

## Verificación
- Build OK y revisión con Playwright de la home: orden Ritual → Tablas → formulario, foto del banner restaurada y contraste correcto de la tarjeta de Tablas en fondo claro.
