"use client"

import { es } from "react-day-picker/locale"
import { XIcon } from "lucide-react"
import { Calendar } from "@/components/ui/calendar"
import { Badge } from "@/components/ui/badge"
import { dateKey, formatShortDate } from "@/lib/menu-data"

export const formatDate = (date: Date) =>
  `${String(date.getDate()).padStart(2, "0")}-${String(date.getMonth() + 1).padStart(2, "0")}-${date.getFullYear()}`

export const FIRST_BOOKABLE_DAY = new Date(2026, 10, 3)

type Props = {
  selected: Date[]
  onSelectedChange: (dates: Date[]) => void
  onDayClick: (date: Date, nowSelected: boolean) => void
  onPreview: (date?: Date) => void
}

export function ReservationCalendar({ selected, onSelectedChange, onDayClick, onPreview }: Props) {
  const sorted = [...selected].sort((a, b) => +a - +b)

  return (
    <div className="flex flex-col gap-4">
      <div
        className="rounded-lg border border-[#d9dfe7] bg-white p-2 shadow-sm"
        onMouseLeave={() => onPreview(undefined)}
        onBlur={e => {
          if (!e.currentTarget.contains(e.relatedTarget as Node | null)) onPreview(undefined)
        }}
      >
        <Calendar
          aria-label="Fechas a incluir en la reserva"
          aria-describedby="date-selection-help"
          mode="multiple"
          locale={es}
          weekStartsOn={1}
          defaultMonth={FIRST_BOOKABLE_DAY}
          startMonth={new Date(2026, 10, 1)}
          endMonth={new Date(2027, 0, 1)}
          selected={selected}
          onSelect={dates => onSelectedChange(dates ?? [])}
          onDayClick={(date, modifiers) => {
            if (!modifiers.disabled) onDayClick(date, !modifiers.selected)
          }}
          onDayMouseEnter={(date, modifiers) => {
            if (!modifiers.disabled && !modifiers.outside) onPreview(date)
          }}
          onDayFocus={(date, modifiers) => {
            if (!modifiers.disabled) onPreview(date)
          }}
          disabled={[{ before: FIRST_BOOKABLE_DAY }, { dayOfWeek: [0, 6] }]}
          showOutsideDays={false}
          className="w-full bg-transparent [--cell-size:--spacing(10)] [&_button[data-selected-single=true]]:bg-primary [&_button[data-selected-single=true]]:text-primary-foreground [&_button[data-selected-single=true]:hover]:bg-primary [&_button[data-selected-single=true]:hover]:text-primary-foreground"
          classNames={{ root: "w-full", month: "flex w-full flex-col gap-4", caption_label: "text-sm font-semibold capitalize text-[#003a5d]" }}
        />
      </div>

      <div aria-live="polite">
        <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-[#5b6675]">
          {sorted.length ? `${sorted.length} ${sorted.length === 1 ? "día seleccionado" : "días seleccionados"}` : "Sin días seleccionados"}
        </p>
        {sorted.length === 0 && <p className="text-xs text-[#5b6675]">Los días que elijas aparecerán aquí como etiquetas que puedes quitar.</p>}
        {sorted.length > 0 && (
          <ul aria-label="Fechas seleccionadas" className="flex flex-wrap gap-2">
            {sorted.map(date => (
              <li key={dateKey(date)}>
                <Badge className="h-7 gap-1 rounded-full bg-[#e6f0f7] pl-3 pr-1 text-xs font-medium capitalize text-[#003a5d]">
                  {formatShortDate(date)}
                  <button
                    type="button"
                    aria-label={`Quitar ${formatShortDate(date)}`}
                    onClick={() => onSelectedChange(selected.filter(d => dateKey(d) !== dateKey(date)))}
                    className="flex size-5 items-center justify-center rounded-full text-[#003a5d] hover:bg-[#005e90] hover:text-white focus-visible:outline-2 focus-visible:outline-[#005e90]"
                  >
                    <XIcon className="size-3" aria-hidden="true" />
                  </button>
                </Badge>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
