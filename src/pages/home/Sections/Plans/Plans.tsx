import { Rocket, Building2, Cog, Check, type LucideIcon } from "lucide-react";
import PlanCard from "../../../../components/PlanCard/PlanCard";
import plansData from "../../../../data/plans.json";
import { useInView } from "../../../../hooks/useInView";
import "./Plans.css";

const iconMap: Record<string, LucideIcon> = {
  Rocket,
  Building2,
  Cog,
};

type PlanVariant = "default" | "featured" | "premium";

export default function Plans() {
  const { ref, inView } = useInView();

  const scrollToContact = () => {
    const contactSection = document.getElementById("contacto");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="plans-container" id="planes">
      <div
        className="plans-content"
        ref={ref as React.RefObject<HTMLDivElement>}
      >
        {/* Section Header */}
        <header
          className={`plans-header${inView ? " anim-fade-up anim-delay-1" : " anim-hidden"}`}
        >
          <span className="plans-tag">Nuestros Planes</span>
          <h2 className="plans-title">Soluciones para cada etapa</h2>
          <p className="plans-subtitle">
            Elegí el plan que mejor se adapte a tu negocio. Todos incluyen
            diseño profesional, velocidad y soporte continuo.
          </p>
        </header>

        {/* Global Features */}
        <div
          className={`global-features${inView ? " anim-fade-up anim-delay-2" : " anim-hidden"}`}
        >
          <h3 className="global-features__title">
            {plansData.globalFeatures.title}
          </h3>
          <p className="global-features__subtitle">
            {plansData.globalFeatures.subtitle}
          </p>
          <ul className="global-features__list">
            {plansData.globalFeatures.items.map((item, index) => (
              <li key={index} className="global-features__item">
                <span className="global-features__icon">
                  <Check size={18} />
                </span>
                <div className="global-features__text">
                  <strong>{item.title}:</strong> {item.description}
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Plans Grid */}
        <div className="plans-grid">
          {plansData.plans.map((plan, index) => {
            const IconComponent = iconMap[plan.icon];
            return (
              <div
                key={plan.id}
                className={
                  inView
                    ? `anim-scale-in anim-delay-${Math.min(index + 3, 5)}`
                    : "anim-hidden"
                }
              >
                <PlanCard
                  icon={IconComponent}
                  title={plan.title}
                  subtitle={plan.subtitle}
                  description={plan.description}
                  features={plan.features}
                  variant={plan.variant as PlanVariant}
                  ctaText="Consultar Plan"
                  onCtaClick={scrollToContact}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
