import type { RefObject } from "react";
import { Check, type LucideIcon } from "lucide-react";
import { useInView } from "../../hooks/useInView";
import "./ProcessStep.css";

export type ProcessStepAnimation = "fade-up" | "fade-left";
export type ProcessStepDelay = 1 | 2 | 3 | 4 | 5 | 6;

export interface ProcessStepProps {
  id: string;
  number: string;
  title: string;
  summary: string;
  duration: string;
  details: readonly string[];
  deliverables: readonly string[];
  icon?: LucideIcon;
  isActive?: boolean;
  animation?: ProcessStepAnimation;
  delay?: ProcessStepDelay;
  durationLabel?: string;
  detailsLabel?: string;
  deliverablesLabel?: string;
}

export default function ProcessStep({
  id,
  number,
  title,
  summary,
  duration,
  details,
  deliverables,
  icon: Icon,
  isActive = false,
  animation = "fade-up",
  delay = 1,
  durationLabel = "Duración",
  detailsLabel = "Qué hacemos",
  deliverablesLabel = "Entregables",
}: Readonly<ProcessStepProps>) {
  const { ref, inView } = useInView();
  const activeClass = isActive ? " process-step--active" : "";
  const animationClass = inView
    ? ` anim-${animation} anim-delay-${delay}`
    : " anim-hidden";

  return (
    <li
      id={id}
      ref={ref as RefObject<HTMLLIElement>}
      className={`process-step${activeClass}${animationClass}`}
    >
      <span className="process-step__marker" aria-hidden="true">
        {number}
      </span>
      <article className="process-step__card">
        <header className="process-step__header">
          <span className="process-step__number" aria-hidden="true">
            {number}
          </span>
          <div className="process-step__heading">
            <h3 className="process-step__title">{title}</h3>
            <span className="process-step__chip">
              <span className="process-step__chip-label">{durationLabel}</span>
              {duration}
            </span>
          </div>
          {Icon && (
            <span className="process-step__icon" aria-hidden="true">
              <Icon size={22} />
            </span>
          )}
        </header>

        <p className="process-step__summary">{summary}</p>

        <div className="process-step__columns">
          <section className="process-step__block">
            <h4 className="process-step__block-title">{detailsLabel}</h4>
            <ul className="process-step__list process-step__list--details">
              {details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
          </section>
          <section className="process-step__block">
            <h4 className="process-step__block-title">{deliverablesLabel}</h4>
            <ul className="process-step__list process-step__list--deliverables">
              {deliverables.map((deliverable) => (
                <li key={deliverable}>
                  <Check
                    className="process-step__check"
                    size={16}
                    aria-hidden="true"
                  />
                  {deliverable}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </article>
    </li>
  );
}
