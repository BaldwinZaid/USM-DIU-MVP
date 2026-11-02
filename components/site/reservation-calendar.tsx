"use client"
import { useEffect, useRef, useState } from "react"
export type DateRange = { from: Date; to: Date }
export const formatDate = (date: Date) => `${String(date.getDate()).padStart(2, "0")}-${String(date.getMonth() + 1).padStart(2, "0")}-${date.getFullYear()}`

export function ReservationCalendar({ value, onChange }: { value?: DateRange; onChange: (range: DateRange) => void }) {
  const [open, setOpen] = useState(false)
  const [month, setMonth] = useState(() => new Date(2026, 10, 1))
  const [start, setStart] = useState<Date>()
  const root = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (!open) return
    const close = (event: PointerEvent) => { if (!root.current?.contains(event.target as Node)) setOpen(false) }
    document.addEventListener("pointerdown", close)
    return () => document.removeEventListener("pointerdown", close)
  }, [open])
  function choose(date: Date) {
    if (!start) { setStart(date); return }
    onChange(date < start ? { from: date, to: start } : { from: start, to: date }); setStart(undefined); setOpen(false)
  }
  return <div ref={root} className="relative" onKeyDown={e => { if (e.key === "Escape") { setOpen(false); setStart(undefined) } }}>
    <button id="dates" type="button" aria-haspopup="dialog" aria-expanded={open} aria-label="Fechas a incluir" onClick={() => { setOpen(!open); setStart(undefined) }} className="h-[34px] w-full border border-[#cbd3dc] bg-[#e9ecef] px-3 text-left text-sm focus:outline-none focus:ring-[3px] focus:ring-[#b3d7ff]">{value ? `${formatDate(value.from)} - ${formatDate(value.to)}` : ""}</button>
    {open && <div role="dialog" aria-label="Seleccionar fechas" className="absolute left-0 top-[40px] z-30 flex w-[486px] max-w-[calc(100vw-64px)] flex-wrap rounded-[3px] border border-[#ddd] bg-white p-[10px] shadow-sm sm:flex-nowrap" style={{ fontFamily: "Arial, sans-serif" }}>
      {[0, 1].map(offset => {
        const current = new Date(month.getFullYear(), month.getMonth() + offset, 1)
        const first = (current.getDay() + 6) % 7
        return <div key={offset} className="w-full min-w-0 sm:w-1/2">
          <div className="flex h-7 items-center justify-between px-2 text-xs font-bold"><button type="button" aria-label={offset ? "Mes siguiente" : "Mes anterior"} onClick={() => setMonth(new Date(month.getFullYear(), month.getMonth() + (offset ? 1 : -1), 1))} className={offset ? "order-2" : ""}>{offset ? "›" : "‹"}</button><span className="mx-auto capitalize">{current.toLocaleDateString("es-CL", { month: "long", year: "numeric" }).replace(" de ", " ")}</span></div>
          <div className="grid grid-cols-7 text-center text-xs">{["Lu", "Ma", "Mi", "Ju", "Vi", "Sa", "Do"].map(d => <span key={d} className="py-2 font-bold">{d}</span>)}{Array.from({ length: 42 }, (_, index) => {
            const day = new Date(current.getFullYear(), current.getMonth(), index - first + 1)
            const disabled = day.getMonth() !== current.getMonth() || [0, 6].includes(day.getDay()) || day < new Date(2026, 10, 3)
            const selected = start ? +day === +start : value && day >= value.from && day <= value.to
            return <button key={index} type="button" disabled={disabled} aria-label={formatDate(day)} aria-pressed={!!selected} onClick={() => choose(day)} className={`h-[27px] text-xs ${disabled ? "text-[#999] line-through" : selected ? "bg-[#357ebd] text-white" : "hover:bg-[#eee]"}`}>{day.getDate()}</button>
          })}</div>
        </div>
      })}
    </div>}
  </div>
}
