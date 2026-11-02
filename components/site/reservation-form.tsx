"use client"

import { useState } from "react"

export function ReservationForm() {
  const [help, setHelp] = useState(true)
  const [notice, setNotice] = useState(false)
  const control = "h-[34px] w-full rounded-[3px] border border-[#cbd3dc] px-3 text-sm text-[#454d59]"
  return (
    <section className="rounded-b-[3px] border border-[#ddd] px-4 pb-4 pt-8 text-sm text-[#404856]">
      <form onSubmit={e => { e.preventDefault(); setNotice(true) }} className="mx-auto max-w-[830px]">
        <div className="grid items-center gap-y-7 md:grid-cols-[190px_1fr_67px]">
          <label htmlFor="rut">RUT comensal:</label><input id="rut" className={`${control} bg-[#e9ecef]`} value="XX.XXX.XXX-X" disabled /><span className="hidden md:block" />
          <label htmlFor="name">Nombre:</label><input id="name" className={`${control} bg-[#e9ecef]`} value="ESTUDIANTE DE EJEMPLO" disabled /><span className="hidden md:block" />
          <label htmlFor="campus">Campus o Sede:</label><select id="campus" required defaultValue="" className={control}><option value="" disabled>Seleccione Campus o Sede:</option>{["Casa Central Valparaíso", "Vitacura", "Viña del Mar", "Concepción", "San Joaquín"].map(x => <option key={x}>{x}</option>)}</select><span className="hidden md:block" />
          <label htmlFor="menu">Menú:</label><select id="menu" required defaultValue="" className={control}><option value="" disabled>Seleccione Menú:</option><option>Vegetariano (ejemplo)</option><option>Hipocalórico (ejemplo)</option></select><span className="hidden md:block" />
          <label htmlFor="dates">Fechas a incluir:</label><input id="dates" className={`${control} bg-[#e9ecef]`} readOnly aria-describedby="date-note" /><button type="button" aria-label="Mostrar ayuda de fechas" aria-expanded={help} onClick={() => setHelp(!help)} className="h-[34px] w-[37px] rounded-[3px] bg-[#005087] text-white md:ml-[30px]"><span aria-hidden="true" className="inline-flex size-[14px] items-center justify-center rounded-full border border-white text-[10px] font-bold">?</span></button>
        </div>
        {help && <div id="date-note" className="relative mx-auto mb-7 mt-[42px] max-w-[762px] rounded-[3px] border border-[#bee5eb] bg-[#d1ecf1] px-[18px] py-3 text-[#0c5460] leading-[22px]"><button type="button" onClick={() => setHelp(false)} aria-label="Cerrar ayuda" className="absolute right-[18px] top-2 font-bold opacity-50">×</button><strong>En calendario:</strong><p>- Para seleccionar una sola fecha, pulse dos veces en el día solicitado.</p><p>- Para más de una fecha pulse en la de inicio y en la de término una vez.</p><p>- El plazo para realizar una reserva de menú vegetariano o hipocalórico, es hasta las 16:00 horas del día hábil anterior.</p></div>}
        <div className="mt-7 text-center"><button type="button" onClick={() => setNotice(true)} className="rounded-[3px] bg-[#005087] px-3 py-2 text-white hover:bg-[#003e69]">Ingresar reserva</button></div>
        {notice && <p role="status" className="mt-4 text-center text-xs">Maqueta visual: no se registran reservas. El calendario y el envío requieren referencias adicionales.</p>}
      </form>
    </section>
  )
}
