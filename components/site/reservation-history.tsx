"use client"
import { useState } from "react"
import type { DemoReservation } from "./reservation-form"
import { formatDate } from "./reservation-calendar"
import { InformationDialog } from "./information-dialog"
import { EditReservationDialog } from "./edit-reservation-dialog"

type Props = {
  consumption?: boolean
  reservations?: DemoReservation[]
  onCancel?: (id: string) => void
  onUpdate?: (id: string, changes: Pick<DemoReservation, "menu" | "notes">) => void
}

export function ReservationHistory({ consumption = false, reservations = [], onCancel, onUpdate }: Props) {
  const [cancelId, setCancelId] = useState<string>()
  const [editId, setEditId] = useState<string>()
  const editing = reservations.find(row => row.id === editId)
  const columns = consumption ? ["N°", "Fecha", "Hora", "Tipo consumo", "Campus/Sede consumo", "Comedor", "Menú"] : ["Acción", "Fecha registro", "Código reserva", "Fecha desde", "Fecha hasta", "Días", "Menú", "Notas", "Campus/Sede reserva"]
  return <section className="rounded-b-[3px] border border-[#ddd] px-4 pb-[42px] pt-8 text-sm">
    <div className="mb-7 grid gap-6 md:grid-cols-[27%_1fr] md:pr-9">
      <div className="text-center"><h2 className="mb-2 font-semibold text-[#404856]">Disponibles</h2><div className="flex justify-center gap-[3px]">{["Almuerzos", "Cenas"].map(label => <div key={label} className="flex h-[76px] w-[90px] flex-col justify-center rounded-[5px] border border-[#bee5eb] bg-[#d1ecf1] text-[#0c5460] shadow-[0_1px_9px_#0002]"><span className="text-xs">{label}</span><strong className="text-2xl leading-7">0</strong></div>)}</div></div>
      <div className={`min-h-[123px] rounded-[3px] border border-[#bee5eb] bg-[#d1ecf1] px-[18px] py-3 leading-[21px] text-[#0c5460] ${consumption ? "text-center" : ""}`}><strong>Información</strong>{consumption ? <p>Se muestran los consumos de los últimos <strong>90</strong> días.</p> : <><p>- El plazo para anular o editar una reserva, es hasta las 16:00 horas del día anterior a su consumo, si la reserva tiene días consumidos, la fecha de término será actualizada.</p><p>- Si anula una reserva, puede volver a generarla en pestaña reserva de menú.</p></>}</div>
    </div>
    <div className="overflow-x-auto"><table className="w-full min-w-[960px] border-collapse text-center"><caption className="sr-only">{consumption ? "Mis consumos" : "Mis reservas"}</caption><thead><tr>{columns.map(col => <th scope="col" className="border border-[#d9dfe7] px-4 py-[10px] font-bold" key={col}>{col}</th>)}</tr></thead><tbody>{!consumption && reservations.length ? reservations.map(row => <tr key={row.id}>
      <td className="border border-[#d9dfe7] p-2"><div className="flex justify-center gap-2">
        <button type="button" onClick={() => setEditId(row.id)} className="rounded-[3px] bg-[#005087] px-3 py-2 font-medium text-white hover:bg-[#003e69]">Editar</button>
        <button type="button" onClick={() => setCancelId(row.id)} className="rounded-[3px] border border-[#005087] bg-white px-3 py-2 text-[#005087] hover:bg-[#e6f0f7]">Anular</button>
      </div></td>
      {[row.registered, row.id.slice(0, 6).toUpperCase(), formatDate(row.dates[0]), formatDate(row.dates[row.dates.length - 1]), row.dates.length, row.menu, row.notes || "—", row.campus === "San Joaquín" || row.campus === "Vitacura" ? `Santiago ${row.campus}` : row.campus].map((cell, i) => <td key={i} className={`border border-[#d9dfe7] px-3 py-2 ${i === 6 ? "max-w-[200px] truncate" : ""}`} title={i === 6 && row.notes ? row.notes : undefined}>{cell}</td>)}
    </tr>) : <tr><td colSpan={columns.length} className="border border-[#d9dfe7] py-2">{consumption ? "No cuenta con información de consumo." : "No existen solicitudes"}</td></tr>}</tbody></table></div>
    {cancelId && <InformationDialog message="¿Está seguro de anular la reserva seleccionada?" onClose={() => setCancelId(undefined)} onConfirm={() => { onCancel?.(cancelId); setCancelId(undefined) }} />}
    {editing && <EditReservationDialog key={editing.id} reservation={editing} onClose={() => setEditId(undefined)} onSave={changes => { onUpdate?.(editing.id, changes); setEditId(undefined) }} />}
  </section>
}
