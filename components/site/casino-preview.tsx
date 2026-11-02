"use client"

import Link from "next/link"
import { useState } from "react"
import { minutaLinks } from "@/lib/site-data"
import { ReservationForm, type DemoReservation } from "./reservation-form"
import { ReservationHistory } from "./reservation-history"

export function CasinoPreview() {
  const [tab, setTab] = useState("welcome")
  const [reservations, setReservations] = useState<DemoReservation[]>([])
  return <div className="flex min-h-screen flex-col bg-white">
    <header>
      <div className="bg-primary text-white"><div className="container-usm flex min-h-10 flex-wrap items-center justify-between gap-3 py-2 text-[11px] font-bold"><a href="https://usm.cl/">USM.cl</a><div className="flex items-center gap-5 text-[#b9d7e9]"><details className="relative"><summary className="cursor-pointer">Minuta</summary><ul className="absolute right-0 z-20 mt-2 w-56 rounded border bg-white py-2 text-primary shadow">{minutaLinks.map(link => <li key={link.label}><a className="block px-4 py-2 hover:bg-muted" href={link.href} target="_blank" rel="noopener noreferrer">{link.label}</a></li>)}</ul></details><span>ESTUDIANTE DE EJEMPLO</span><Link href="/" aria-label="Cerrar sesión — volver a portada de la maqueta">Cerrar sesión</Link></div></div></div>
      <div className="container-usm flex h-[114px] items-start pt-[22px]"><Link href="/" aria-label="Volver al inicio"><img src="/img/logo-usm.svg" alt="Universidad Técnica Federico Santa María" className="h-14 w-auto" /></Link></div>
    </header>
    <main className="container-usm flex-1 pb-10">
      <nav aria-label="Secciones del casino" className="flex border-b border-[#d9dfe7] text-sm text-[#0066a3]">{[["reserve", "Reserva de menú"], ["reservations", "Mis reservas"], ["consumption", "Mis consumos"]].map(([key,label]) => <button key={key} type="button" aria-current={tab === key ? "page" : undefined} onClick={() => setTab(key)} className={`-mb-px rounded-t-[3px] border px-[14px] py-2 ${tab === key ? "border-[#d9dfe7] border-b-white bg-white text-[#404856]" : "border-transparent hover:bg-[#f7f7f7]"}`}>{label}</button>)}</nav>
      {tab === "welcome" && <div className="mx-4 mt-[42px] rounded-[3px] border border-[#ddd] bg-[#f7f7f7] px-4 py-[14px] text-center text-xs text-[#404856] shadow-[0_1px_0_#ddd] sm:mx-[42px]">Bienvenidos al Sistema de Casino de Alimentación USM</div>}
      {tab === "reserve" && <ReservationForm onReserve={reservation => setReservations(previous => [reservation, ...previous])} />}
      {tab === "reservations" && <ReservationHistory reservations={reservations} onCancel={id => setReservations(previous => previous.filter(row => row.id !== id))} onUpdate={(id, changes) => setReservations(previous => previous.map(row => row.id === id ? { ...row, ...changes } : row))} />}
      {tab === "consumption" && <ReservationHistory consumption />}
    </main>
    <footer className="bg-[#191919] py-4 text-[11px] text-white"><div className="container-usm flex flex-wrap justify-between gap-2"><p>Sitio web administrado por <strong>Dirección General de Sistemas de Gestión</strong></p><p className="text-[#bbb]">Maqueta académica · Reservas simuladas, se borran al recargar · Sin conexión a USM</p></div></footer>
  </div>
}
