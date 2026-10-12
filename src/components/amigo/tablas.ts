import type { Tabla } from "./TablaCard";
import tQuesos from "@/assets/tabla-quesos.jpg";
import tEmbutidos from "@/assets/tabla-embutidos.jpg";
import tCasa from "@/assets/tabla-casa.jpg";

/** Catálogo de tablas para llevar. Precios y fotos reales pendientes. */
export const TABLAS: readonly Tabla[] = [
  { nombre: "Tabla de Quesos", descripcion: "Quesos curados y untuosos con uvas, nueces, miel y pan de masa madre recién cortado.", precio: "Consultar", img: tQuesos },
  { nombre: "Tabla de Embutidos", descripcion: "Jamones, salames y fiambres cortados al momento, con pepinillos, mostaza, higos y aceitunas.", precio: "Consultar", img: tEmbutidos },
  { nombre: "Tabla de la Casa", descripcion: "Embutidos y quesos juntos en una sola mesa: almendras, membrillo, grissinis y uvas para compartir.", precio: "Consultar", img: tCasa },
  { nombre: "Tabla Picada Argentina", descripcion: "La picada de siempre: salame, queso en cubos, aceitunas, maní y pan para la sobremesa.", precio: "Consultar", img: tEmbutidos },
  { nombre: "Tabla para Dos", descripcion: "Una selección íntima de quesos y fiambres, con frutos secos y mermelada, pensada para dos.", precio: "Consultar", img: tQuesos },
  { nombre: "Tabla Gran Reunión", descripcion: "Abundancia para muchos: variedad de quesos, embutidos, panes y acompañamientos para compartir.", precio: "Consultar", img: tCasa },
];
