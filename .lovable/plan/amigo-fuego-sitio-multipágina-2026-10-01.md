# Amigo Fuego — sitio multipágina

Convertir el sitio actual de una sola página en 5 páginas independientes, cada una con su propio título y descripción para Google.

## Páginas
1. **Inicio (/)** — H1 "Catering de Asado Argentino y Parrilla a Domicilio", subtítulo del ritual, 3 bloques de acceso (Corporativo, Bodas, Menú), cintillo de confianza con logos de clientes, formulario de cotización.
2. **Corporativo (/corporativo)** — H1 de catering corporativo y producciones, copy de negocios y poder, ocasiones (fin de año, despachos, clientes internacionales, cierres de rodaje), formatos desde 10 personas, formulario B2B.
3. **Bodas (/bodas)** — H1 de bodas y tornabodas, copy de "mesa infinita", sección estelar "Tornaboda Amigo Fuego" (choripanes de madrugada), formulario.
4. **Menú (/menu)** — H1 del ritual, los 5 pasos en pestañas/acordeón interactivo, productos héroe (calabaza con humita, mini pizzas de masa madre), "Paquetes desde $550 MXN por persona".
5. **Historia (/historia)** — H1 "El Legado del Fuego", historia de Gabriel (Santa Fe, 25 años en México, Satélite, una a tres parrillas con su esposa), 4 valores: Hospitalidad, Generosidad, Autenticidad, Oficio.

## En todas las páginas
- Barra superior fija con logo, enlaces a las 5 páginas y botón "Cotizar" destacado (menú móvil).
- Botón flotante de WhatsApp abajo a la derecha con pulso suave.
- Formulario con: nombre, correo, teléfono/WhatsApp, empresa (opcional), tipo de evento (5 opciones del brief), número de personas, fecha. Estado de éxito sin envío real (igual que hoy).
- Pie de página con enlaces, aviso de privacidad y palabras clave locales (CDMX, empresas, banquetes corporativos).

## Estética
Cambio a fondo oscuro carbón #121212 con acentos terracota, óxido, crema y burdeos; botones en crema u oliva brillante; fotos con luz cálida. Se reutilizan las fotos y tipografías actuales.

## Pendiente de ti (sigue sin inventarse)
Número real de WhatsApp, logo, fotos reales, logos de clientes confirmados y texto del aviso de privacidad.

## Detalles técnicos
- Rutas: index.tsx, corporativo.tsx, bodas.tsx, menu.tsx, historia.tsx, cada una con head() propio (title, description, og:*, canonical relativo).
- Componentes compartidos en src/components/amigo/: SiteHeader, SiteFooter, WhatsAppFab, QuoteForm (prop de tipo de evento por defecto), PageHero. Header/footer/FAB montados en __root alrededor de Outlet.
- Tokens nuevos en styles.css (--background #121212, --burdeos, --oxido, --terracota); html lang="es".
- Ruta /aviso-de-privacidad simple con texto marcador a confirmar.
