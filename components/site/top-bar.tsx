"use client"

import { useEffect, useRef, useState } from "react"
import { minutaLinks } from "@/lib/site-data"

export function TopBar() {
  const [open, setOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const handlePointer = (event: PointerEvent) => {
      if (!menuRef.current?.contains(event.target as Node)) setOpen(false)
    }
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false)
    }
    document.addEventListener("pointerdown", handlePointer)
    document.addEventListener("keydown", handleKey)
    return () => {
      document.removeEventListener("pointerdown", handlePointer)
      document.removeEventListener("keydown", handleKey)
    }
  }, [open])

  return (
    <div className="bg-primary text-primary-foreground">
      <div className="container-usm flex h-10 items-center justify-between">
        <a href="https://usm.cl/" className="text-[11px] font-bold hover:underline">
          USM.cl
        </a>
        <div ref={menuRef} className="relative w-[272px] max-w-[50%] pl-[11px]">
          <button
            type="button"
            aria-expanded={open}
            aria-haspopup="menu"
            onClick={() => setOpen((value) => !value)}
            className="inline-flex items-center gap-1 text-[11px] font-semibold"
          >
            Minuta
            <span
              aria-hidden="true"
              className="inline-block h-0 w-0 border-x-[3px] border-t-[4px] border-x-transparent border-t-current"
            />
          </button>
          {open && (
            <ul
              role="menu"
              className="absolute left-0 top-full z-50 mt-2 min-w-48 rounded border border-black/15 bg-white py-2 text-sm text-foreground shadow-md"
            >
              {minutaLinks.map((link) => (
                <li key={link.label} role="none">
                  <a
                    role="menuitem"
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-1 hover:bg-muted"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}
