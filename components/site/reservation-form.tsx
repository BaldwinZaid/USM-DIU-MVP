"use client"

import { useState } from "react"
import { ReservationCalendar } from "./reservation-calendar"
import { MenuDetail } from "./menu-detail"
import { InformationDialog } from "./information-dialog"
import { MENU_TYPES, dateKey } from "@/lib/menu-data"

export type DemoReservation = { id: string; registered: string; campus: string; menu: string; dates: Date[]; notes?: string }

export function ReservationForm({ onReserve }: { onReserve: (reservation: DemoReservation) => void }) {
  const [dates, setDates] = useState<Date[]>([])
  const [pinned, setPinned] = useState<Date>()
  const [hovered, setHovered] = useState<Date>()
  const [menuType, setMenuType] = useState("")
  const [error, setError] = useState("")
  const [help, setHelp] = useState(true)
  const [notice, setNotice] = useState(false)
  const control = "h-[34px] w-full rounded-[3px] border border-[#cbd3dc] px-3 text-sm text-[#454d59]"

  const pinnedIsSelected = pinned && dates.some(d => dateKey(d) === dateKey(pinned))
  const fallback = dates.length ? dates[dates.length - 1] : undefined
  const pinnedDate = pinnedIsSelected ? pinned : fallback
  const activeDate = hovered ?? pinnedDate

  function updateDates(next: Date[]) {
    setDates(next)
    if (next.length) setError("")
  }

  return (
    <section className="rounded-b-[3px] border border-[#ddd] px-4 pb-6 pt-8 text-sm text-[#404856]">
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!dates.length) { setError("Seleccione al menos un día en el calendario."); return }
          const data = new FormData(e.currentTarget)
          onReserve({
            id: crypto.randomUUID(),
            registered: new Date().toLocaleString("es-CL"),
            campus: String(data.get("campus")),
            menu: menuType,
            dates: [...dates].sort((a, b) => +a - +b),
          })
          setError("")
          setNotice(true)
        }}
        className="mx-auto max-w-[1040px]"
      >
        <div className="mx-auto grid max-w-[830px] items-center gap-y-5 md:grid-cols-[190px_1fr] md:gap-y-6">
          <label htmlFor="rut">RUT comensal:</label><input id="rut" className={`${control} bg-[#e9ecef]`} value="XX.XXX.XXX-X" disabled />
          <label htmlFor="name">Nombre:</label><input id="name" className={`${control} bg-[#e9ecef]`} value="ESTUDIANTE DE EJEMPLO" disabled />
          <label htmlFor="campus">Campus o Sede:</label><select id="campus" name="campus" required defaultValue="" className={control}><option value="" disabled>Seleccione Campus o Sede:</option>{["Casa Central Valparaíso", "Vitacura", "Viña del Mar", "Concepción", "San Joaquín"].map(x => <option key={x}>{x}</option>)}</select>
          <label htmlFor="menu">Menú:</label><select id="menu" name="menu" required value={menuType} onChange={e => setMenuType(e.target.value)} className={control}><option value="" disabled>Seleccione Menú:</option>{MENU_TYPES.map(type => <option key={type}>{type}</option>)}</select>
        </div>

        <div className="mt-8 flex items-center justify-between gap-3 border-b border-[#d9dfe7] pb-3">
          <div>
            <h2 className="text-base font-semibold text-[#003a5d]">Fechas a incluir</h2>
            <p className="text-xs text-[#5b6675]">Haz clic en los días que necesites. Pueden ser días sueltos y no consecutivos.</p>
          </div>
          <button type="button" aria-label="Mostrar ayuda de fechas" aria-expanded={help} onClick={() => setHelp(!help)} className="flex h-[34px] w-[37px] shrink-0 items-center justify-center rounded-[3px] bg-[#005087] text-white hover:bg-[#003e69]"><span aria-hidden="true" className="inline-flex size-[14px] items-center justify-center rounded-full border border-white text-[10px] font-bold">?</span></button>
        </div>

        {help && <div id="date-note" className="relative mt-4 rounded-[3px] border border-[#bee5eb] bg-[#d1ecf1] px-[18px] py-3 leading-[22px] text-[#0c5460]"><button type="button" onClick={() => setHelp(false)} aria-label="Cerrar ayuda" className="absolute right-[18px] top-2 font-bold opacity-50">×</button><strong>En calendario:</strong><p>- Pulse un día para agregarlo o quitarlo de la reserva. Puede elegir tantos días como necesite.</p><p>- Pase el cursor sobre cualquier día para ver su minuta en el panel lateral.</p><p>- El plazo para realizar una reserva de menú vegetariano o hipocalórico, es hasta las 16:00 horas del día hábil anterior.</p></div>}

        <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <ReservationCalendar
            selected={dates}
            onSelectedChange={updateDates}
            onDayClick={date => setPinned(date)}
            onPreview={setHovered}
          />
          <MenuDetail date={activeDate} mode={hovered ? "preview" : "pinned"} selected={dates} menuType={menuType} />
        </div>

        <div className="mt-8 text-center"><button type="submit" className="rounded-[3px] bg-[#005087] px-5 py-2 font-medium text-white hover:bg-[#003e69]">Ingresar reserva</button></div>
        {error && <p role="alert" className="mt-4 text-center text-red-700">{error}</p>}
        {notice && <InformationDialog message="Se ha registrado correctamente la reserva" onClose={() => { setNotice(false); setDates([]); setPinned(undefined) }} />}
      </form>
    </section>
  )
}
