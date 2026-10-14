const CDN = "https://cdn.jsdelivr.net/gh/doloresmat-ops/amigo-fuego@main/public";
const tCasa = `${CDN}/tabla-quesos-embutidos-amigo-fuego.webp`;

/** Galería de tablas y charcutería: se muestra en /tablas. */
export const GALERIA_TABLAS = [
  { img: `${CDN}/tabla-charcuteria-higos-amigo-fuego.webp`, alt: "Tabla de charcutería con higos y quesos" },
  { img: `${CDN}/tabla-embutidos-quesos-amigo-fuego.webp`, alt: "Tabla de embutidos y quesos variados" },
  { img: `${CDN}/mesa-tomahawk-parrilla-amigo-fuego.webp`, alt: "Mesa servida con tomahawk y acompañamientos" },
] as const;

export const TABLA = {
  nombre: "Tabla de Picada",
  descripcion: "Embutidos, milanesas, quesos, aceitunas, nueces y dip de espinaca, con miel y baguettes de masa madre.",
  apoyo: "Cuando no hay evento pero sí ganas de mesa compartida. Tablas listas con embutidos, quesos y lo esencial para armar el momento.",
  img: tCasa,
};

export const TAMANOS = [
  { comen: 6, pican: 12, precio: "$750" },
  { comen: 8, pican: 16, precio: "$1,000" },
  { comen: 10, pican: 20, precio: "$1,250" },
  { comen: 12, pican: 24, precio: "$1,500" },
] as const;

export const INGREDIENTES = [
  { nombre: "Carnes y embutidos", items: ["Pamplona", "Jamón serrano", "Mortadela", "Jamón York", "Salami", "Milanesa de res", "Milanesa de pollo"] },
  { nombre: "Quesos", items: ["Queso Brie", "Queso azul", "Queso Chihuahua", "Parmesano"] },
  { nombre: "Acompañamientos", items: ["Aceitunas Kalamata", "Aceitunas verdes", "Jitomates cherry", "Nueces", "Dip de espinaca", "Miel"] },
  { nombre: "Pan", items: ["2 baguettes de masa madre"] },
] as const;

/** Aviso de tiempo de preparación: se muestra en /tablas. */
export const NOTA_ANTICIPACION = "Nota: Las tablas se piden con un día de anticipación";

/** Nota de venta cruzada de bebidas: se muestra bajo los precios en /tablas. */
export const NOTA_MARIDAJE = {
  inicio: "El maridaje perfecto:",
  cuerpo: "Pregunta por nuestra selección de vinos, fernet y cerveza Hércules al enviar tu mensaje.",
};
