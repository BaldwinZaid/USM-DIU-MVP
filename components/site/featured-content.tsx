import { featuredCards } from "@/lib/site-data"

export function FeaturedContent() {
  return (
    <section className="container-usm mb-[108px] mt-10" aria-labelledby="contenido-interes">
      <h2
        id="contenido-interes"
        className="-ml-[5px] mb-8 border-l-[3px] border-accent pl-[10px] text-[30px] font-semibold leading-10 text-[#333]"
      >
        Contenido de interés
      </h2>
      <ul className="grid grid-cols-1 gap-[30px] sm:grid-cols-2 lg:grid-cols-4">
        {featuredCards.map((card) => (
          <li key={card.src}>
            <a
              href={card.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block overflow-hidden rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.15)] transition-shadow hover:shadow-[0_4px_16px_rgba(0,0,0,0.25)]"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={card.src} alt={card.alt} className="aspect-[3/2] w-full object-cover" />
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
