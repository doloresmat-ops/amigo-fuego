const tCasa = "/06_tabla_embutidos.webp";

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
