import "./Hero.css";
import Button from "../../../../components/Buttons/Button";
import { ArrowRight, User } from "lucide-react";
import { useInView } from "../../../../hooks/useInView";
import { useTilt } from "../../../../hooks/useTilt";
import ElementBg from "../../../../components/ElementBg/ElementBg";
import logo from "../../../../assets/logo.png";

const HERO_POINTS: readonly string[] = [
  "Software a medida",
  "Desarrollo web y mobile",
  "Te acompañamos en cada etapa",
];

export default function Hero() {
  const { ref, inView } = useInView();
  const { ref: logoRef, handlers: logoHandlers } = useTilt<HTMLDivElement>();

  return (
    <section
      className="container-hero-section"
      id="inicio"
      aria-labelledby="hero-title"
    >
      <ElementBg />
      <div
        className="hero-content"
        ref={ref as React.RefObject<HTMLDivElement>}
      >
        <div className="hero-main">
          <h1
            id="hero-title"
            className={`hero-title${inView ? " anim-fade-left anim-delay-1" : " anim-hidden"}`}
          >
            Desarrollo de <span className="hero-title-accent">software</span>
          </h1>
          <p
            className={`hero-lead${inView ? " anim-fade-left anim-delay-2" : " anim-hidden"}`}
          >
            Agencia de desarrollo de software: sitios web a medida, aplicaciones
            móviles, sistemas de turnos y chatbots con IA para WhatsApp.
          </p>
          <div
            className={`container-buttons${inView ? " anim-fade-left anim-delay-3" : " anim-hidden"}`}
          >
            <Button
              text="proyectos"
              action={{ type: "scroll", targetId: "proyectos" }}
              icon={ArrowRight}
              backgroundColor="var(--secondary-color)"
            />
            <Button
              text="Contáctanos"
              action={{ type: "scroll", targetId: "contacto" }}
              icon={User}
              backgroundColor="var(--background-secondary)"
              textColor="var(--text-color)"
            />
          </div>
        </div>
        <div
          ref={logoRef}
          className={`hero-logo${inView ? " anim-scale-in anim-delay-2" : " anim-hidden"}`}
          {...logoHandlers}
        >
          <div className="hero-logo-float">
            <img
              className="hero-logo-img"
              src={logo}
              alt="Logo de ARGSOFT, agencia de desarrollo de software"
              width={600}
              height={600}
              fetchPriority="high"
              decoding="async"
              draggable={false}
            />
          </div>
        </div>
        <ul
          className={`hero-points${inView ? " anim-fade-right anim-delay-4" : " anim-hidden"}`}
        >
          {HERO_POINTS.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </div>
      <a
        href="#servicios"
        className={`hero-scroll${inView ? " anim-fade-in anim-delay-6" : " anim-hidden"}`}
        aria-label="Ir a la siguiente sección"
      >
        <span className="hero-scroll-line" />
      </a>
    </section>
  );
}
