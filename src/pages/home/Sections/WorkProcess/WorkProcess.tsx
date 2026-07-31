import "./WorkProcess.css";
import workProcessData from "../../../../data/workProcess.json";
import { useInView } from "../../../../hooks/useInView";

interface Step {
  id: number;
  number: string;
  title: string;
  description: string;
}

const STEP_COLORS = [
  "#74acdf", // amber
  "#eab308", // yellow
  "#74acdf", // green
  "#eab308", // purple
  "#74acdf", // cyan
];

export default function WorkProcess() {
  const steps: Step[] = workProcessData.steps;
  const { ref, inView } = useInView();

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

        <div
          className={`work-process-timeline${inView ? " anim-fade-up anim-delay-4" : " anim-hidden"}`}
        >
          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`timeline-item timeline-item--${index % 2 === 0 ? "left" : "right"}`}
            >
              <div
                className="timeline-circle"
                style={{ borderColor: STEP_COLORS[index] }}
              >
                {step.number}
              </div>
              <div className="timeline-card">
                <h3 className="timeline-card__title">{step.title}</h3>
                <p className="timeline-card__description">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
