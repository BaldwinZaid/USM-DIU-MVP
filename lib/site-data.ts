export type NavLink = { label: string; href: string }

export const minutaLinks: NavLink[] = [
  {
    label: "Casa Central Valparaíso",
    href: "https://usmcl.sharepoint.com/:u:/s/MinutaCampusCasaCentralValparaso/ES9oNWkyhtxHjuM10QXxqokBlRIi4FBmmSrFa2GSIItKgg?e=xNnWej",
  },
  {
    label: "Vitacura",
    href: "https://usmcl.sharepoint.com/:u:/s/MinutaCampusVitacura/ES9oNWkyhtxHjuM10QXxqokBKhTGvprQGsA7q0Mv0TejMw?e=HhVxJS",
  },
  {
    label: "Viña del Mar",
    href: "https://usmcl.sharepoint.com/:u:/s/MinutaSedeViadelMar/ES9oNWkyhtxHjuM10QXxqokBPIJG9j3_7H4OW0V6je8rQA?e=mkSIa6",
  },
  {
    label: "Concepción",
    href: "https://usmcl.sharepoint.com/:u:/s/MinutaConcepcin/ES9oNWkyhtxHjuM10QXxqokBp0N6L5rOrJk-aEFFL4F3-A?e=ZiHiP2",
  },
  {
    label: "San Joaquín",
    href: "https://usmcl.sharepoint.com/:u:/s/MinutaCampusSanJoaqun/ES9oNWkyhtxHjuM10QXxqokB6mcCKQkXVmYMItLtNZqlWg?e=Kdmonk",
  },
]

export const featuredCards = [
  {
    src: "/img/caluga-vrea-600x400.jpg",
    alt: "Vicerrectoría de Asuntos Económicos y Administrativos",
    href: "http://www.vrea.usm.cl/",
  },
  {
    src: "/img/banner-coronavirus.jpg",
    alt: "Informativo especial Coronavirus COVID-19",
    href: "https://noticias.usm.cl/informativo_usm/covid-19/",
  },
  {
    src: "/img/card_protocolo_covid-19.jpg",
    alt: "Protocolo Coronavirus COVID-19, versión actualizada",
    href: "https://noticias.usm.cl/wp-content//uploads/2021/06/Protocolo-Covid-reactivaci%C3%B3n-de-las-actividades-presenciales-Segunda-versi%C3%B3n-2.pdf",
  },
  {
    src: "/img/caluga-protocolo-600x400-2.jpg",
    alt: "Protocolo de Seguridad Sanitaria Laboral COVID-19",
    href: "https://www.usm.cl/descargas/PROTOCOLO_DE_SEGURIDAD_SANITARIA_LABORAL_COVID-19.pdf",
  },
]

export const footerColumns: { title: string; links: NavLink[] }[][] = [
  [
    {
      title: "Universidad",
      links: [
        { label: "Nuestra Historia", href: "https://usm.cl/universidad/nuestra-historia/" },
        { label: "Federico Santa María", href: "https://usm.cl/universidad/federico-santa-maria/" },
        { label: "Definiciones Estratégicas", href: "https://usm.cl/universidad/definiciones-estrategicas/" },
        { label: "Modelo Educativo", href: "https://usm.cl/universidad/modelo-educativo/" },
        { label: "Organización", href: "https://usm.cl/universidad/organizacion/" },
        { label: "Información Estadística USM", href: "https://usm.cl/universidad/informacion-estadistica/" },
      ],
    },
    {
      title: "Campus y Sedes",
      links: [
        { label: "Información Campus y Sedes", href: "https://usm.cl/campus-y-sedes/" },
        { label: "Tour Virtual", href: "https://usm.cl/tour-virtual/" },
      ],
    },
  ],
  [
    {
      title: "Extensión y Cultura",
      links: [
        { label: "Dirección General de Comunicaciones", href: "https://www.dgc.usm.cl/" },
        { label: "Dirección de Vinculación con el Medio", href: "https://vinculacion.usm.cl/" },
        { label: "Oficina de Asuntos Internacionales", href: "https://oai.usm.cl/" },
        { label: "Red de Ex-Alumnos", href: "https://exalumnos.usm.cl/" },
        { label: "Noticias USM", href: "https://noticias.usm.cl/" },
        { label: "Eventos USM", href: "https://eventos.usm.cl/" },
        { label: "Radio USM", href: "https://radio.usm.cl/" },
        { label: "Temporada Artística", href: "https://www.cultura.usm.cl/" },
      ],
    },
  ],
  [
    {
      title: "Servicios",
      links: [
        { label: "Aula USM", href: "https://aula.usm.cl/" },
        { label: "Biblioteca USM", href: "https://biblioteca.usm.cl/" },
        { label: "Portal de Autoservicio Institucional", href: "https://pai.usm.cl/" },
        { label: "Dirección de Tecnologías de la Información", href: "https://dti.usm.cl/" },
        { label: "Portal de Reportes UDAI", href: "https://udai.usm.cl/" },
        { label: "Sistema de Información de Gestión Académica", href: "https://siga.usm.cl/" },
        { label: "Sistema Integrado de Información Financiera", href: "https://siif.usm.cl/" },
        { label: "Sistema de Informe de Remuneraciones", href: "https://sir.usm.cl/" },
        { label: "Directorio USM", href: "https://directorio.usm.cl/" },
        { label: "Trabaja con Nosotros", href: "https://usm.cl/trabaja-con-nosotros/" },
      ],
    },
  ],
]

export const socialLinks = [
  { label: "Facebook", icon: "/img/social/facebook.svg", href: "https://www.facebook.com/usantamaria" },
  { label: "Twitter", icon: "/img/social/x.svg", href: "https://twitter.com/usantamaria" },
  { label: "YouTube", icon: "/img/social/youtube.svg", href: "https://www.youtube.com/channel/UCr5rEvayXIC0YnJxDAWuWtQ" },
  { label: "Instagram", icon: "/img/social/instagram.svg", href: "https://instagram.com/usantamaria/" },
  { label: "LinkedIn", icon: "/img/social/linkedin.svg", href: "https://www.linkedin.com/school/usantamaria/" },
]

export const partnerLogos = [
  { src: "/img/footer/logo_acceso.svg", alt: "Acceso Educación Superior", href: "https://acceso.mineduc.cl/" },
  { src: "/img/footer/logo_consejorectores.svg", alt: "Consejo de Rectores", href: "https://www.consejoderectores.cl/" },
  { src: "/img/footer/logo_g9.svg", alt: "Red G9 Universidades Públicas no Estatales", href: "https://redg9.cl/" },
  { src: "/img/footer/logo_aur.svg", alt: "Agrupación de Universidades Regionales", href: "https://www.auregionales.cl/" },
  { src: "/img/footer/LOGO-CRUV-BLANCO.svg", alt: "Consejo de Rectores de Valparaíso", href: "https://consejoderectoresvalparaiso.cl/" },
  { src: "/img/footer/logo_reuna.svg", alt: "REUNA", href: "https://www.reuna.cl/" },
  { src: "/img/footer/logo_universia.svg", alt: "Universia", href: "https://www.universia.net/cl/home.html" },
]
