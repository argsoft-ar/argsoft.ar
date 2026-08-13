import { Check, type LucideIcon } from "lucide-react";
import "./PlanCard.css";

interface PlanCardProps {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  variant?: "default" | "featured" | "premium";
  ctaText?: string;
  onCtaClick?: () => void;
  className?: string;
}

export default function PlanCard({
  icon: Icon,
  title,
  subtitle,
  description,
  features,
  variant = "default",
  ctaText = "Consultar",
  onCtaClick,
  className = "",
}: PlanCardProps) {
  return (
    <article className={`plan-card plan-card--${variant} ${className}`.trim()}>
      <header className="plan-card__header">
        <div className="plan-card__icon">
          <Icon size={28} />
        </div>
        <span className="plan-card__subtitle">{subtitle}</span>
        <h3 className="plan-card__title">{title}</h3>
      </header>

      <p className="plan-card__description">{description}</p>

      <ul className="plan-card__features">
        {features.map((feature, index) => (
          <li key={index} className="plan-card__feature">
            <span className="plan-card__feature-icon">
              <Check size={16} />
            </span>
            <span className="plan-card__feature-text">{feature}</span>
          </li>
        ))}
      </ul>

      <footer className="plan-card__footer">
        <button type="button" className="plan-card__cta" onClick={onCtaClick}>
          {ctaText}
        </button>
      </footer>
    </article>
  );
}
