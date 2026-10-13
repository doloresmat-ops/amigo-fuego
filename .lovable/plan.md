# Formulario de cotización: tipo de evento y "¿Qué quieres cotizar?"

Cambios solo en `src/components/amigo/QuoteForm.tsx` (el formulario compartido que usan Inicio, Empresas, Bodas, Menú e Historia).

## 1. Tipo de evento
- Quitar la opción "Barra de bebida" de la lista `TIPOS_EVENTO`.
- La lista queda: Cena de Fin de Año, Evento Corporativo / Empresa, Producción / Rodaje, Evento Social / Celebración, Menú de Madrugada / Tornafiesta, Otro.

## 2. Nuevo campo "¿Qué quieres cotizar?"
- Debajo del campo "Tipo de evento", un grupo de casillas de verificación (checkboxes) que permiten elegir varias opciones a la vez:
  - Parrilla Argentina
  - Barra de Pizza
  - Barra de Bebida
  - Choripaneada
- Obligatorio elegir al menos una; si no, el formulario avisa antes de enviar.
- Estilo consistente con el formulario actual: casillas con acento fuego #FF4713, texto crema sobre el panel carbón.
- Al enviar, se muestra el mismo estado de éxito actual (sin envío real, igual que hoy).

## Verificación
- Probar en el navegador el formulario de Inicio y de Menú: seleccionar varias casillas, enviar y ver el mensaje de éxito; comprobar que "Barra de bebida" ya no aparece en Tipo de evento.
