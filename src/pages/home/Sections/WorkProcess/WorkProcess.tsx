import "./WorkProcess.css";
import {
  ArrowRight,
  Code,
  LifeBuoy,
  PenTool,
  Rocket,
  Search,
  type LucideIcon,
} from "lucide-react";
import type { RefObject } from "react";
import workProcessData from "../../../../data/workProcess.json";
import type { WorkProcessData } from "../../../../data/workProcess.types";
import { useInView } from "../../../../hooks/useInView";
import { useActiveStep } from "../../../../hooks/useActiveStep";
import Button from "../../../../components/Buttons/Button";
import ProcessStep from "../../../../components/ProcessStep/ProcessStep";
import ProcessProgress from "../../../../components/ProcessProgress/ProcessProgress";

const PROCESS_ICONS: Readonly<Partial<Record<string, LucideIcon>>> = {
  Search,
  PenTool,
  Code,
  Rocket,
  LifeBuoy,
};

const { steps }: WorkProcessData = workProcessData;

const getStepDomId = (id: number): string => `proceso-paso-${id}`;

const stepIds: readonly string[] = steps.map((step) => getStepDomId(step.id));

const progressItems = steps.map((step) => ({
  id: getStepDomId(step.id),
  number: step.number,
  title: step.title,
}));

const scrollToStep = (domId: string): void => {
  document
    .getElementById(domId)
    ?.scrollIntoView({ behavior: "smooth", block: "start" });
};

export default function WorkProcess() {
  const { ref: headerRef, inView: headerInView } = useInView();
  const { ref: ctaRef, inView: ctaInView } = useInView();
  const activeIndex = useActiveStep(stepIds);

  return (
    <section
      className="work-process-section"
      id="proceso"
      aria-labelledby="proceso-title"
    >
      <div className="work-process-content">
        <header
          className="work-process-header"
          ref={headerRef as RefObject<HTMLElement>}
        >
          <span
            className={`work-process-label${headerInView ? " anim-fade-up anim-delay-1" : " anim-hidden"}`}
          >
            PROCESO
          </span>
          <h2
            id="proceso-title"
            className={`work-process-title${headerInView ? " anim-fade-up anim-delay-2" : " anim-hidden"}`}
          >
            Cómo armamos tu proyecto
          </h2>
          <p
            className={`work-process-subtitle${headerInView ? " anim-fade-up anim-delay-3" : " anim-hidden"}`}
          >
            Cinco etapas claras, con entregables concretos y una demo en cada
            avance.
          </p>
        </header>

        <div className="work-process-layout">
          <ProcessProgress
            items={progressItems}
            activeIndex={activeIndex}
            onSelect={scrollToStep}
            ariaLabel="Pasos del proceso"
          />
          <ol className="work-process-steps">
            {steps.map((step, index) => (
              <ProcessStep
                key={step.id}
                id={getStepDomId(step.id)}
                number={step.number}
                title={step.title}
                summary={step.summary}
                duration={step.duration}
                details={step.details}
                deliverables={step.deliverables}
                icon={PROCESS_ICONS[step.icon]}
                isActive={index === activeIndex}
                animation="fade-left"
                delay={index % 2 === 0 ? 1 : 2}
              />
            ))}
          </ol>
        </div>

        <div
          className={`work-process-cta${ctaInView ? " anim-fade-up anim-delay-1" : " anim-hidden"}`}
          ref={ctaRef as RefObject<HTMLDivElement>}
        >
          <Button
            text="Empecemos tu proyecto"
            action={{ type: "scroll", targetId: "contacto" }}
            icon={ArrowRight}
            iconPosition="right"
          />
        </div>
      </div>
    </section>
  );
}
