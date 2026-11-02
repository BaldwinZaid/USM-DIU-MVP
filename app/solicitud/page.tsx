import type { Metadata } from "next"
import { CasinoPreview } from "@/components/site/casino-preview"

export const metadata: Metadata = {
  title: "Casino de Alimentación | Maqueta académica",
  description: "Réplica visual académica de las pantallas de reservas y consumos. Sin conexión al sistema institucional.",
  robots: { index: false, follow: false },
}

export default function SolicitudPage() {
  return <CasinoPreview />
}
