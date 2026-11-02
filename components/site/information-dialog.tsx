"use client"
import { useEffect, useRef } from "react"

export function InformationDialog({ message, onClose, onConfirm }: { message: string; onClose: () => void; onConfirm?: () => void }) {
  const ref = useRef<HTMLDialogElement>(null)
  useEffect(() => { ref.current?.showModal() }, [])
  return <dialog ref={ref} onCancel={e => { e.preventDefault(); onClose() }} aria-labelledby="information-title" className="fixed inset-0 m-auto w-[500px] max-w-[calc(100%-32px)] rounded-[3px] border border-[#777] bg-white p-0 text-sm text-[#404856] backdrop:bg-black/50">
    <h2 id="information-title" className="border-b border-[#d9dfe7] p-[14px] font-semibold">Información</h2>
    <p className="border-b border-[#d9dfe7] p-[14px]">{message}</p>
    <div className="flex justify-end gap-2 p-[14px]">{onConfirm && <button className="rounded-[3px] bg-[#005087] px-3 py-2 text-white" onClick={onConfirm}>Si</button>}<button autoFocus className="rounded-[3px] bg-[#005087] px-3 py-2 text-white" onClick={onClose}>{onConfirm ? "No" : "Aceptar"}</button></div>
  </dialog>
}
