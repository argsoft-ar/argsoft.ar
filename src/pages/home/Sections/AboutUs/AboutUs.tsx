import { GraduationCap, Clock, Handshake, Ruler } from "lucide-react";
import { useInView } from "../../../../hooks/useInView";
import "./AboutUs.css";

const teamMembers = [
  {
    name: "Miguel Miguez",
    role: "Desarrollador Full-Stack",
    description:
      "Especialista en la creación de interfaces de alto rendimiento, aplicaciones móviles y arquitecturas escalables. Con un fuerte enfoque en el ecosistema React, React Native, TypeScript, JavaScript y Node.js, Miguel diseña sistemas modulares y aplica principios de código limpio que garantizan un software robusto y fácil de mantener. Su experiencia abarca desde la construcción de librerías de componentes corporativas hasta el desarrollo de plataformas complejas de gestión y la automatización de procesos. Su prioridad es fusionar un diseño minimalista y elegante con una experiencia de usuario impecable.",
    initials: "MM",
  },
  {
    name: "Rodrigo Podoba",
    role: "Desarrollador Full-Stack & Educador",
    description:
      "Con más de 5 años de trayectoria creando soluciones digitales integrales, Rodrigo combina una sólida base analítica con una capacidad excepcional para resolver problemas arquitectónicos. Además de su rol en el desarrollo de software, se desempeña como profesor de Matemática e Informática en diversos centros de formación. Esta vocación docente le otorga una claridad única para entender las necesidades del negocio, desglosar procesos complejos y traducirlos en código eficiente y seguro. Su enfoque garantiza que toda la lógica detrás de escena funcione con precisión matemática, entregando plataformas estables y de alto rendimiento.",
    initials: "RP",
  },
];

const whyChooseUs = [
  {
    icon: GraduationCap,
    title: "Respaldo Académico",
    description:
      "Profesionales graduados de la UNAB y educadores en el área tecnológica.",
  },
  {
    icon: Clock,
    title: "+5 Años de Experiencia",
    description:
      "Trayectoria comprobable en el mercado desarrollando para diversas marcas.",
  },
  {
    icon: Handshake,
    title: "Trato Personalizado y Claro",
    description:
      "Hablas directamente con los creadores de tu plataforma, asegurando una comunicación transparente y sin tecnicismos innecesarios.",
  },
  {
    icon: Ruler,
    title: "Calidad y Detalle",
    description:
      "Entregamos productos pulidos, testeados y diseñados para escalar junto a tu empresa.",
  },
];

export default function AboutUs() {
  const { ref, inView } = useInView();

  return (
    <section className="about-container" id="nosotros">
      <div
        className="about-content"
        ref={ref as React.RefObject<HTMLDivElement>}
      >
        {/* Header */}
        <header
          className={`about-header${inView ? " anim-fade-up anim-delay-1" : " anim-hidden"}`}
        >
          <span className="about-tag">Sobre Nosotros</span>
          <h2 className="about-title">
            Ingeniería, diseño y atención al detalle para impulsar tu negocio.
          </h2>
        </header>

        {/* Philosophy */}
        <div
          className={`about-philosophy${inView ? " anim-fade-up anim-delay-2" : " anim-hidden"}`}
        >
          <p className="about-philosophy__text">
            Somos un equipo de desarrolladores de software graduados de la{" "}
            <strong>Universidad Nacional Almirante Brown (UNAB)</strong>, con
            más de 5 años de experiencia creando soluciones digitales para
            diversas marcas y empresas.
          </p>
          <p className="about-philosophy__text">
            Nuestra filosofía es simple:{" "}
            <strong>la prioridad siempre es el cliente</strong>. No nos
            limitamos a escribir código; nos enfocamos en entender tu negocio
            para entregar productos que superen tus expectativas. Cuidamos cada
            detalle, desde la primera línea de código hasta la experiencia del
            usuario final, asegurando que cada proyecto sea escalable, moderno y
            cumpla su objetivo comercial.
          </p>
        </div>

        {/* Team */}
        <div
          className={`about-team${inView ? " anim-fade-up anim-delay-3" : " anim-hidden"}`}
        >
          <h3 className="about-team__title">Conoce al Equipo</h3>
          <div className="about-team__grid">
            {teamMembers.map((member) => (
              <article key={member.name} className="team-card">
                <div className="team-card__avatar">{member.initials}</div>
                <div className="team-card__info">
                  <h4 className="team-card__name">{member.name}</h4>
                  <span className="team-card__role">{member.role}</span>
                  <p className="team-card__description">{member.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div
          className={`about-why${inView ? " anim-fade-up anim-delay-4" : " anim-hidden"}`}
        >
          <h3 className="about-why__title">¿Por qué elegirnos?</h3>
          <div className="about-why__grid">
            {whyChooseUs.map((item) => (
              <div key={item.title} className="why-card">
                <div className="why-card__icon">
                  <item.icon size={24} />
                </div>
                <div className="why-card__content">
                  <h4 className="why-card__title">{item.title}</h4>
                  <p className="why-card__description">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
