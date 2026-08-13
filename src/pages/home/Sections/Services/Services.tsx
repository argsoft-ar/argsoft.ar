import "./Services.css";
import Cards from "../../../../components/Cards/Cards";
import servicesData from "../../../../data/services.json";
import { useInView } from "../../../../hooks/useInView";

export default function Services() {
  const { ref, inView } = useInView();

  return (
    <div className="services-container" id="servicios">
      <div
        className="services-content"
        ref={ref as React.RefObject<HTMLDivElement>}
      >
        <div
          className={`introduction-container${inView ? " anim-fade-up anim-delay-1" : " anim-hidden"}`}
        >
          <span className="services-introduction">Nuestros Servicios</span>
          <h2 className="services-title">Expertise y Calidad</h2>
          <p className="services-text">
            Nos centramos en brindar soluciones eficientes y rápidas para
            satisfacer las necesidades de nuestros clientes.
          </p>
        </div>
        <div className="cards-container">
          {servicesData.services.map((service, index) => (
            <div
              key={service.title}
              className={
                inView
                  ? `anim-scale-in anim-delay-${Math.min(index + 1, 5)}`
                  : "anim-hidden"
              }
            >
              <Cards
                icon={service.icon}
                title={service.title}
                description={service.description}
                items={service.items}
                buttonText={"Ver paquetes"}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
