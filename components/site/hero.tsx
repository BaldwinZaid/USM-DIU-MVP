export function Hero() {
  return (
    <section
      className="flex h-[300px] items-center bg-cover bg-center md:h-[450px]"
      style={{
        backgroundImage: "linear-gradient(rgba(8, 32, 72, 0.35), rgba(8, 32, 72, 0.35)), url(/img/slide_limpia.png)",
      }}
    >
      <div className="container-usm">
        <h2 className="border-l-4 border-accent pl-[30px] text-2xl font-bold leading-tight text-white md:text-[30px] md:leading-[38px]">
          Bienvenidos al
          <br />
          Sistema de Casino de Alimentación USM
        </h2>
      </div>
    </section>
  )
}
