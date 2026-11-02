export type DailyMenu = {
  entrada: string
  normal: string
  vegetariano: string
  hipocalorico: string
  postre: string
}

export const MENU_TYPES = ["Normal", "Vegetariano", "Hipocalórico"] as const
export type MenuType = (typeof MENU_TYPES)[number]

const entradas = [
  "Ensalada chilena",
  "Crema de zapallo",
  "Ensalada de betarraga y huevo",
  "Consomé de verduras",
  "Ensalada de repollo y zanahoria",
  "Palta reina vegetal",
  "Ensalada de porotos verdes",
  "Sopa de lentejas rojas",
  "Ensalada mixta con choclo",
  "Crema de espárragos",
]

const platosNormales = [
  "Pollo arvejado con arroz",
  "Charquicán con huevo frito",
  "Pastel de choclo",
  "Lomo saltado con papas fritas",
  "Porotos con riendas",
  "Pescado frito con puré",
  "Carbonada de vacuno",
  "Cazuela de ave",
  "Tallarines con salsa boloñesa",
  "Pollo al jugo con papas doradas",
]

const platosVegetarianos = [
  "Lasaña de verduras",
  "Charquicán de verduras con huevo",
  "Pastel de choclo vegetariano",
  "Salteado de tofu con arroz",
  "Porotos granados",
  "Hamburguesa de lentejas con puré",
  "Risotto de champiñones",
  "Cazuela de verduras",
  "Tallarines al pesto",
  "Budín de zapallo italiano",
]

const platosHipocaloricos = [
  "Pechuga a la plancha con ensalada",
  "Merluza al vapor con verduras",
  "Pavo grillado con quinoa",
  "Salmón al horno con brócoli",
  "Omelette de claras con espinaca",
  "Pollo al limón con arroz integral",
  "Atún sellado con ensalada verde",
  "Reineta a la plancha con zapallo",
  "Wok de pollo y verduras",
  "Filete de pavo con puré de coliflor",
]

const postres = [
  "Fruta de la estación",
  "Jalea de frambuesa",
  "Leche asada",
  "Manzana asada",
  "Mote con huesillo",
  "Yogur natural",
  "Arroz con leche",
  "Macedonia de frutas",
  "Sémola con leche",
  "Durazno en conserva",
]

const dayIndex = (date: Date) => {
  const start = new Date(date.getFullYear(), 0, 1)
  return Math.floor((+date - +start) / 86_400_000)
}

export function getMenuForDate(date: Date): DailyMenu {
  const i = dayIndex(date)
  return {
    entrada: entradas[i % entradas.length],
    normal: platosNormales[(i * 3) % platosNormales.length],
    vegetariano: platosVegetarianos[(i * 7) % platosVegetarianos.length],
    hipocalorico: platosHipocaloricos[(i * 3 + 1) % platosHipocaloricos.length],
    postre: postres[(i * 7 + 2) % postres.length],
  }
}

export function mainDishFor(menu: DailyMenu, type?: string) {
  if (type === "Vegetariano") return menu.vegetariano
  if (type === "Hipocalórico") return menu.hipocalorico
  return menu.normal
}

export const dateKey = (date: Date) =>
  `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`

export const formatLongDate = (date: Date) =>
  date.toLocaleDateString("es-CL", { weekday: "long", day: "numeric", month: "long" })

export const formatShortDate = (date: Date) =>
  date.toLocaleDateString("es-CL", { weekday: "short", day: "numeric", month: "short" }).replace(/\./g, "")
