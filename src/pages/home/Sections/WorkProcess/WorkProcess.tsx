import { useState } from "react";
import "./WorkProcess.css";
import workProcessData from "../../../../data/workProcess.json";
import { useInView } from "../../../../hooks/useInView";

interface Step {
  id: number;
  number: string;
  title: string;
  description: string;
}

export default function WorkProcess() {
  const steps: Step[] = workProcessData.steps;
  const [activeStep, setActiveStep] = useState<number>(0);
  const [fadeClass, setFadeClass] = useState<string>("fade-in");
  const { ref, inView } = useInView();

  const handleDotClick = (index: number) => {
    if (index === activeStep) return;
    setFadeClass("fade-out");
    setTimeout(() => {
      setActiveStep(index);
      setFadeClass("fade-in");
    }, 300);
  };

  return (
    <section className="work-process-section" id="proceso">
      <div
        className="work-process-content"
        ref={ref as React.RefObject<HTMLDivElement>}
      >
        <span
          className={`work-process-label${inView ? " anim-fade-up anim-delay-1" : " anim-hidden"}`}
        >
          PROCESO
        </span>
        <h2
          className={`work-process-title${inView ? " anim-fade-up anim-delay-2" : " anim-hidden"}`}
        >
          Cómo Trabajamos
        </h2>
        <p
          className={`work-process-subtitle${inView ? " anim-fade-up anim-delay-3" : " anim-hidden"}`}
        >
          Un proceso simple y transparente para llevar tu producto de la idea al
          lanzamiento.
        </p>

        {/* Desktop: horizontal steps with connectors */}
        <div
          className={`work-process-steps-desktop${inView ? " anim-fade-up anim-delay-4" : " anim-hidden"}`}
        >
          {steps.map((step, index) => (
            <div key={step.id} className="work-process-step">
              <div className="step-number-container">
                <div className="step-number step-active">{step.number}</div>
                {index < steps.length - 1 && (
                  <div className="step-connector connector-active" />
                )}
              </div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Mobile: single step carousel with dot navigation */}
        <div
          className={`work-process-steps-mobile ${fadeClass}${inView ? " anim-fade-up anim-delay-4" : " anim-hidden"}`}
        >
          <div className="step-number-container">
            <div className="step-number step-active">
              {steps[activeStep].number}
            </div>
          </div>
          <h3 className="step-title">{steps[activeStep].title}</h3>
          <p className="step-description">{steps[activeStep].description}</p>
          <div className="process-dots">
            {steps.map((_, index) => (
              <button
                key={index}
                className={`process-dot${activeStep === index ? " active" : ""}`}
                onClick={() => handleDotClick(index)}
                aria-label={`Paso ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
