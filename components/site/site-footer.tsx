/* eslint-disable @next/next/no-img-element */
import { footerColumns, partnerLogos, socialLinks } from "@/lib/site-data"

export function SiteFooter() {
  return (
    <footer>
      <div className="bg-primary pb-[72px] pt-[60px] text-primary-foreground">
        <div className="container-usm">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-[302px_302px_1fr_auto] lg:gap-0">
            {footerColumns.map((column, index) => (
              <div key={index} className="flex flex-col gap-8 lg:pr-[30px]">
                {column.map((group) => (
                  <nav key={group.title} aria-label={group.title}>
                    <h4 className="mb-5 text-lg font-semibold uppercase">{group.title}</h4>
                    <ul className="flex flex-col">
                      {group.links.map((link) => (
                        <li key={link.label}>
                          <a
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm/[21px] tracking-wide hover:underline"
                          >
                            {link.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </nav>
                ))}
              </div>
            ))}
            <div className="flex lg:justify-end">
              <a href="https://usm.cl/universidad/acreditacion/" target="_blank" rel="noopener noreferrer">
                <img
                  src="/img/footer/logo-acreditacion_blanco.svg"
                  alt="Universidad acreditada por 6 años, Comisión Nacional de Acreditación"
                  className="mt-1 w-[190px]"
                />
              </a>
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <div className="flex flex-col gap-2 pl-[7px]">
              <a href="https://usm.cl/" target="_blank" rel="noopener noreferrer">
                <img src="/img/footer/usm_cl.svg" alt="USM" className="w-[186px]" />
              </a>
              <ul className="flex gap-[10px]">
                {socialLinks.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex size-[29px] items-center justify-center rounded-full bg-white transition-opacity hover:opacity-80"
                    >
                      <span className="sr-only">{social.label}</span>
                      <span
                        aria-hidden="true"
                        className="size-[14px] bg-primary"
                        style={{
                          mask: `url(${social.icon}) center / contain no-repeat`,
                          WebkitMask: `url(${social.icon}) center / contain no-repeat`,
                        }}
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <img
              src="/img/footer/logo-90anios_blanco.svg"
              alt="90 años desde 1931"
              className="w-[186px] sm:mr-[7px]"
            />
          </div>
        </div>
      </div>

      <div className="bg-[#333]">
        <ul className="container-usm flex flex-wrap items-center justify-center gap-x-12 gap-y-6 py-10 lg:justify-between lg:px-[75px]">
          {partnerLogos.map((logo) => (
            <li key={logo.src}>
              <a href={logo.href} target="_blank" rel="noopener noreferrer">
                <img src={logo.src} alt={logo.alt} className="h-14 w-auto max-w-[120px] object-contain" />
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-[#191919] py-4 text-white">
        <p className="container-usm text-[11px]">
          Sitio web administrado por <strong className="font-bold">Dirección General de Sistemas de Gestión</strong>
        </p>
      </div>
    </footer>
  )
}
