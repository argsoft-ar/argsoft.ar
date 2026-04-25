import "./TrustUs.css";
import logosData from "../../data/logos.json";
import { useInView } from "../../hooks/useInView";

interface Logo {
  id: number;
  name: string;
  src: string;
}

export default function TrustUs() {
  const logos: Logo[] = logosData.logos;
  const { ref, inView } = useInView();

  return (
    <section className="trust-us-section">
      <div
        className="trust-us-content"
        ref={ref as React.RefObject<HTMLDivElement>}
      >
        <p
          className={`trust-us-subtitle${inView ? " anim-fade-up anim-delay-1" : " anim-hidden"}`}
        >
          CON LA CONFIANZA DE LOS LÍDERES DE LA INDUSTRIA
        </p>

        <div
          className={`trust-us-marquee${inView ? " anim-fade-up anim-delay-2" : " anim-hidden"}`}
        >
          <div className="trust-us-marquee-track">
            {[...logos, ...logos].map((logo, i) => (
              <div key={i} className="trust-us-logo-item">
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="trust-us-logo-img"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
