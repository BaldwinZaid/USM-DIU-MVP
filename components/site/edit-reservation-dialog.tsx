"use client"

import { useState } from "react"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { MENU_TYPES } from "@/lib/menu-data"
import type { DemoReservation } from "./reservation-form"

type Props = {
  reservation: DemoReservation
  onClose: () => void
  onSave: (changes: Pick<DemoReservation, "menu" | "notes">) => void
}

export function EditReservationDialog({ reservation, onClose, onSave }: Props) {
  const [menu, setMenu] = useState(reservation.menu)
  const [notes, setNotes] = useState(reservation.notes ?? "")

  return (
    <Dialog open onOpenChange={open => { if (!open) onClose() }}>
      <DialogContent className="bg-white text-[#1f2a37] sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-[#003a5d]">Editar reserva</DialogTitle>
          <DialogDescription>
            {`Código ${reservation.id.slice(0, 6).toUpperCase()} · ${reservation.dates.length} ${reservation.dates.length === 1 ? "día" : "días"}`}
          </DialogDescription>
        </DialogHeader>
        <form
          id="edit-reservation"
          className="flex flex-col gap-5"
          onSubmit={e => { e.preventDefault(); onSave({ menu, notes: notes.trim() }) }}
        >
          <div className="flex flex-col gap-2">
            <Label htmlFor="edit-menu">Tipo de Menú</Label>
            <Select value={menu} onValueChange={value => { if (value) setMenu(value) }}>
              <SelectTrigger id="edit-menu" className="w-full">
                <SelectValue placeholder="Seleccione menú" />
              </SelectTrigger>
              <SelectContent>
                {MENU_TYPES.map(type => <SelectItem key={type} value={type}>{type}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="edit-notes">Exclusiones o Notas</Label>
            <Textarea
              id="edit-notes"
              value={notes}
              onChange={e => setNotes(e.target.value)}
              placeholder="Ej.: Sin mariscos, sin tomate"
              maxLength={250}
              rows={4}
            />
            <p className="text-right text-xs text-[#5b6675]">{`${notes.length}/250`}</p>
          </div>
        </form>
        <DialogFooter>
          <DialogClose render={<button type="button" className="rounded-[3px] border border-[#cbd3dc] bg-white px-4 py-2 text-sm text-[#404856] hover:bg-[#f2f4f7]" />}>
            Cancelar
          </DialogClose>
          <button type="submit" form="edit-reservation" className="rounded-[3px] bg-[#005087] px-4 py-2 text-sm font-medium text-white hover:bg-[#003e69]">
            Guardar Cambios
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
