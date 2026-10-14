# Fotos de Menú: la foto de las pizzas y el encuadre de Gabriel

## 1. La foto de las pizzas todavía no se puede poner

El enlace que me pasaste no existe: `barra-pizzas-amigo-fuego-lunfardo.webp` responde **404**, y revisando la lista completa de archivos del repositorio (rama main) ese archivo no está. La única foto de pizzas publicada hoy es `estacion-pizzas-amigo-fuego-evento.webp`, que es la que sigue en la sección.

Para poder ponerla, eliges una de las dos:

- **Subes la foto al repositorio** con exactamente ese nombre (`barra-pizzas-amigo-fuego-lunfardo.webp`) dentro de la carpeta `public` de la rama main. En cuanto esté, cambio la dirección de la foto y ya.
- **Me la pasas aquí en el chat** (adjunta la imagen) y yo la publico en el propio sitio y la pongo en la sección, sin depender del repositorio.

Mientras tanto la sección Barra de Pizza sigue con la foto actual.

## 2. El encuadre de Gabriel

La foto de Gabriel cortando carne es vertical (1600x2133) y su cabeza está pegada al borde superior. Hoy la sección la muestra en un marco apaisado y recorta el centro, por eso se le corta la cabeza.

**Solución:** darle a esa sección un marco vertical con la misma proporción que la foto, así no se recorta nada y la cabeza se ve completa. El espacio de la imagen se hace más alto, que es lo que me autorizaste a hacer.

**Propuesta:** la foto de la Choripaneada es vertical y del mismo tamaño exacto (1600x2133), así que sufre el mismo recorte. La propongo arreglada igual. Si prefieres dejarla como está, dímelo y solo toco la de Gabriel.

Las otras dos (Barra de Pizza y Barra de Bebidas) son apaisadas y se ven bien; la foto de Gabriel y Lolita en Historia también está bien encuadrada.

## 3. Cómo lo reviso

Capturas las secciones de Menú en el navegador y confirmo visualmente que la cabeza de Gabriel entra completa, que ninguna foto sale rota y que el título de la portada de Menú sigue leyéndose con su capa oscura al 60%.

## Detalles técnicos

- `src/routes/menu.tsx`: cada entrada de `SERVICIOS` gana un campo de proporción (`ratio`) y el `<img>` de la sección usa esa proporción en vez del `aspect-[4/3]` fijo de hoy.
- `parrilla` y `choripaneada` usan `aspect-[3/4]` (idéntico a la proporción real de sus fotos: 0.75, recorte cero). `pizza` y `bebidas` se quedan en `aspect-[4/3]`.
- Cuando la foto de pizzas exista en el CDN, `gPizzas` apunta a `barra-pizzas-amigo-fuego-lunfardo.webp`; si me la pasas por aquí, se sirve desde un asset del sitio y la constante cambia a esa dirección.
- Ningún otro archivo se toca: el diseño, los colores, los botones y el resto de las páginas quedan igual.
