import { TopBar } from "./top-bar"

export function SiteHeader() {
  return (
    <header>
      <TopBar />
      <div className="container-usm flex flex-col gap-4 py-5 sm:h-[100px] sm:flex-row sm:items-center sm:justify-between sm:py-0">
        <a href="https://usm.cl/" className="shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/img/logo-usm.svg"
            alt="Universidad Técnica Federico Santa María"
            className="h-14 w-auto"
          />
        </a>
        <button
          type="button"
          className="h-8 w-full rounded bg-primary text-[13px] font-semibold text-primary-foreground transition-colors hover:bg-primary/90 sm:w-[272px]"
        >
          Acceso
        </button>
      </div>
    </header>
  )
}
