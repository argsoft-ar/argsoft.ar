import "./TrustUs.css";
import logosData from "../../data/logos.json";
import { useInView } from "../../hooks/useInView";
import { optimizeImageUrl } from "../../utils/cloudinary";

interface Logo {
  id: number;
  name: string;
  src: string;
}

export default function TrustUs() {
  const logos: Logo[] = logosData.logos;
  const { ref, inView } = useInView();

  return (
    <section className="trust-us-section" aria-labelledby="clientes-title">
      <div
        className="trust-us-content"
        ref={ref as React.RefObject<HTMLDivElement>}
      >
        <h2
          id="clientes-title"
          className={`trust-us-subtitle${inView ? " anim-fade-up anim-delay-1" : " anim-hidden"}`}
        >
          NUESTROS CLIENTES{" "}
        </h2>

        <div
          className={`trust-us-marquee${inView ? " anim-fade-up anim-delay-2" : " anim-hidden"}`}
        >
          <div className="trust-us-marquee-track">
            {[...logos, ...logos].map((logo, i) => (
              <div
                key={`${logo.id}-${i}`}
                className="trust-us-logo-item"
                aria-hidden={i >= logos.length ? true : undefined}
              >
                <img
                  src={optimizeImageUrl(logo.src, 320)}
                  alt={i >= logos.length ? "" : `Logo de ${logo.name}`}
                  className="trust-us-logo-img"
                  width={160}
                  height={80}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
