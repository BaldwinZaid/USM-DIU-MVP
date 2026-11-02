"use client"

import { useState } from "react"
import { ReservationCalendar, type DateRange } from "./reservation-calendar"
import { InformationDialog } from "./information-dialog"

export type DemoReservation = { id: string; registered: string; campus: string; menu: string; dates: DateRange }

export function ReservationForm({ onReserve }: { onReserve: (reservation: DemoReservation) => void }) {
  const [dates, setDates] = useState<DateRange>()
  const [error, setError] = useState("")
  const [help, setHelp] = useState(true)
  const [notice, setNotice] = useState(false)
  const control = "h-[34px] w-full rounded-[3px] border border-[#cbd3dc] px-3 text-sm text-[#454d59]"
  return (
    <section className="rounded-b-[3px] border border-[#ddd] px-4 pb-4 pt-8 text-sm text-[#404856]">
      <form onSubmit={e => { e.preventDefault(); if (!dates) { setError("Seleccione las fechas a incluir."); return }; const data = new FormData(e.currentTarget); onReserve({ id: crypto.randomUUID(), registered: new Date().toLocaleString("es-CL"), campus: String(data.get("campus")), menu: String(data.get("menu")), dates }); setError(""); setNotice(true) }} className="mx-auto max-w-[830px]">
        <div className="grid items-center gap-y-7 md:grid-cols-[190px_1fr_67px]">
          <label htmlFor="rut">RUT comensal:</label><input id="rut" className={`${control} bg-[#e9ecef]`} value="XX.XXX.XXX-X" disabled /><span className="hidden md:block" />
          <label htmlFor="name">Nombre:</label><input id="name" className={`${control} bg-[#e9ecef]`} value="ESTUDIANTE DE EJEMPLO" disabled /><span className="hidden md:block" />
          <label htmlFor="campus">Campus o Sede:</label><select id="campus" name="campus" required defaultValue="" className={control}><option value="" disabled>Seleccione Campus o Sede:</option>{["Casa Central Valparaíso", "Vitacura", "Viña del Mar", "Concepción", "San Joaquín"].map(x => <option key={x}>{x}</option>)}</select><span className="hidden md:block" />
          <label htmlFor="menu">Menú:</label><select id="menu" name="menu" required defaultValue="" className={control}><option value="" disabled>Seleccione Menú:</option><option>Hipocalórico</option><option>Vegetariano</option></select><span className="hidden md:block" />
          <label htmlFor="dates">Fechas a incluir:</label><ReservationCalendar value={dates} onChange={range => { setDates(range); setError("") }} /><button type="button" aria-label="Mostrar ayuda de fechas" aria-expanded={help} onClick={() => setHelp(!help)} className="h-[34px] w-[37px] rounded-[3px] bg-[#005087] text-white md:ml-[30px]"><span aria-hidden="true" className="inline-flex size-[14px] items-center justify-center rounded-full border border-white text-[10px] font-bold">?</span></button>
        </div>
        {help && <div id="date-note" className="relative mx-auto mb-7 mt-[42px] max-w-[762px] rounded-[3px] border border-[#bee5eb] bg-[#d1ecf1] px-[18px] py-3 text-[#0c5460] leading-[22px]"><button type="button" onClick={() => setHelp(false)} aria-label="Cerrar ayuda" className="absolute right-[18px] top-2 font-bold opacity-50">×</button><strong>En calendario:</strong><p>- Para seleccionar una sola fecha, pulse dos veces en el día solicitado.</p><p>- Para más de una fecha pulse en la de inicio y en la de término una vez.</p><p>- El plazo para realizar una reserva de menú vegetariano o hipocalórico, es hasta las 16:00 horas del día hábil anterior.</p></div>}
        <div className="mt-7 text-center"><button type="submit" className="rounded-[3px] bg-[#005087] px-3 py-2 text-white hover:bg-[#003e69]">Ingresar reserva</button></div>
        {error && <p role="alert" className="mt-4 text-center text-red-700">{error}</p>}
        {notice && <InformationDialog message="Se ha registrado correctamente la reserva" onClose={() => { setNotice(false); setDates(undefined) }} />}
      </form>
    </section>
  )
}
