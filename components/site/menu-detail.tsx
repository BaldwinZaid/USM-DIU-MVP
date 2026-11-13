import { CalendarDaysIcon, EyeIcon, PinIcon } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { MENU_TYPES, dateKey, formatLongDate, formatShortDate, getMenuForDate, mainDishFor } from "@/lib/menu-data"

type Props = {
  date?: Date
  mode: "preview" | "pinned"
  selected: Date[]
  menuType?: string
  dayMenus?: Record<string, string>
  onDayMenuChange?: (date: Date, menu: string) => void
}

export function MenuDetail({ date, mode, selected, menuType, dayMenus, onDayMenuChange }: Props) {
  const sorted = [...selected].sort((a, b) => +a - +b)
  const menu = date ? getMenuForDate(date) : undefined
  const activeKey = date ? dateKey(date) : undefined
  const isSelected = Boolean(activeKey && selected.some(d => dateKey(d) === activeKey))
  const effectiveMenuType = (activeKey && dayMenus?.[activeKey]) || menuType
  const rows = menu
    ? [
        { label: "Entrada", value: menu.entrada },
        { label: "Plato de fondo normal", value: menu.normal, type: "Normal" },
        { label: "Vegetariano", value: menu.vegetariano, type: "Vegetariano" },
        { label: "Hipocalórico", value: menu.hipocalorico, type: "Hipocalórico" },
        { label: "Postre", value: menu.postre },
      ]
    : []

  return (
    <aside aria-labelledby="menu-detail-title" className="flex h-full flex-col overflow-hidden rounded-lg border border-[#d9dfe7] bg-white shadow-sm">
      <header className="flex items-center justify-between gap-3 bg-[#003a5d] px-5 py-4 text-white">
        <div>
          <h2 id="menu-detail-title" className="text-base font-semibold">Detalle del Menú</h2>
          <p className="text-xs capitalize text-[#b9d7e9]" aria-live="polite">{date ? formatLongDate(date) : "Minuta diaria"}</p>
        </div>
        {date && (
          <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-2.5 py-1 text-[11px] font-medium">
            {mode === "pinned" ? <PinIcon className="size-3" aria-hidden="true" /> : <EyeIcon className="size-3" aria-hidden="true" />}
            {mode === "pinned" ? "Fijado" : "Vista previa"}
          </span>
        )}
      </header>

      {menu ? (
        <>
          {date && isSelected && onDayMenuChange && (
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#eef1f4] bg-[#f8fafc] px-5 py-3">
              <label htmlFor="day-menu-select" className="text-xs font-semibold text-[#003a5d]">
                Menú específico para este día:
              </label>
              <select
                id="day-menu-select"
                value={activeKey && dayMenus?.[activeKey] ? dayMenus[activeKey] : ""}
                onChange={e => onDayMenuChange(date, e.target.value)}
                className="h-[30px] rounded-[3px] border border-[#cbd3dc] bg-white px-2.5 text-xs text-[#454d59]"
              >
                <option value="">{menuType ? `Usar menú general (${menuType})` : "Usar menú general"}</option>
                {MENU_TYPES.map(type => <option key={type} value={type}>{type}</option>)}
              </select>
            </div>
          )}
          <dl className="flex-1 divide-y divide-[#eef1f4] px-5">
            {rows.map(row => {
              const highlighted = row.type && row.type === effectiveMenuType
              return (
                <div key={row.label} className={`flex flex-col gap-0.5 py-3 ${highlighted ? "-mx-5 border-l-4 border-[#005e90] bg-[#f2f7fb] px-4" : ""}`}>
                  <dt className="text-[11px] font-semibold uppercase tracking-wide text-[#5b6675]">
                    {row.label}
                    {highlighted && <span className="ml-2 normal-case tracking-normal text-[#005e90]">· Tu elección</span>}
                  </dt>
                  <dd className="text-sm font-medium text-[#1f2a37]">{row.value}</dd>
                </div>
              )
            })}
          </dl>
        </>
      ) : (
        <div className="flex flex-1 flex-col items-center justify-center gap-3 px-6 py-12 text-center">
          <span className="flex size-12 items-center justify-center rounded-full bg-[#e6f0f7] text-[#005e90]">
            <CalendarDaysIcon className="size-6" aria-hidden="true" />
          </span>
          <p className="max-w-[240px] text-sm text-[#5b6675]">Selecciona un día en el calendario para ver el menú</p>
        </div>
      )}

      {sorted.length > 1 && (
        <Accordion className="border-t border-[#d9dfe7] px-5">
          <AccordionItem value="summary">
            <AccordionTrigger className="text-sm font-semibold text-[#003a5d] hover:no-underline">
              {`Ver menús de los ${sorted.length} días seleccionados`}
            </AccordionTrigger>
            <AccordionContent>
              <ul className="flex max-h-60 flex-col divide-y divide-[#eef1f4] overflow-y-auto">
                {sorted.map(d => {
                  const dMenu = dayMenus?.[dateKey(d)] || menuType
                  return (
                    <li key={dateKey(d)} className="flex items-baseline justify-between gap-4 py-2 text-xs">
                      <span className="shrink-0 font-semibold capitalize text-[#003a5d]">{formatShortDate(d)}</span>
                      <span className="text-right text-[#404856]">{mainDishFor(getMenuForDate(d), dMenu)}</span>
                    </li>
                  )
                })}
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      )}
    </aside>
  )
}
