import LottieAnimation from "../../../../components/LottieAnimation/LottieAnimation";
import animationData from "../../../../assets/animations/hero.json";
import "./Hero.css";
import Button from "../../../../components/Buttons/Button";
import { ArrowRight, Dot, User } from "lucide-react";
import { useInView } from "../../../../hooks/useInView";
import ElementBg from "../../../../components/ElementBg/ElementBg";

export default function Hero() {
  const { ref, inView } = useInView();

  return (
    <div className="container-hero-section" id="inicio">
      <ElementBg />
      <div
        className="hero-content"
        ref={ref as React.RefObject<HTMLDivElement>}
      >
        <div className="hero-container">
          <span
            className={`chip${inView ? " anim-fade-up anim-delay-1" : " anim-hidden"}`}
          >
            <Dot color="var(--border-color)" /> Disponibles para nuevos
            proyectos
          </span>
          <h2
            className={`hero-title${inView ? " anim-fade-up anim-delay-2" : " anim-hidden"}`}
          >
            Haciendo el futuro de la web hoy
          </h2>
          <p
            className={`hero-subtitle${inView ? " anim-fade-up anim-delay-3" : " anim-hidden"}`}
          >
            En ARGSOFT, transformamos ideas en experiencias digitales
            innovadoras.
          </p>
          <div
            className={`container-buttons${inView ? " anim-fade-up anim-delay-4" : " anim-hidden"}`}
          >
            <Button
              text="Ver proyectos"
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
          className={`hero-animation${inView ? " anim-fade-right anim-delay-2" : " anim-hidden"}`}
        >
          <div className="hero-animation-inner">
            <LottieAnimation
              animationData={animationData}
              width={"100%"}
              height={"100%"}
              loop={true}
              autoplay={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
