import type { RefObject } from "react";
import { useInView } from "../../hooks/useInView";
import "./ProcessProgress.css";

export interface ProcessProgressItem {
  id: string;
  number: string;
  title: string;
}

export interface ProcessProgressProps {
  items: readonly ProcessProgressItem[];
  activeIndex: number;
  onSelect: (id: string) => void;
  ariaLabel?: string;
  className?: string;
}

function getItemStateClass(isActive: boolean, isDone: boolean): string {
  if (isActive) return " process-progress__item--active";
  if (isDone) return " process-progress__item--done";
  return "";
}

export default function ProcessProgress({
  items,
  activeIndex,
  onSelect,
  ariaLabel = "Pasos del proceso",
  className = "",
}: Readonly<ProcessProgressProps>) {
  const { ref, inView } = useInView();

  return (
    <nav
      ref={ref as RefObject<HTMLElement>}
      className={`process-progress${inView ? " anim-fade-right anim-delay-3" : " anim-hidden"} ${className}`.trim()}
      aria-label={ariaLabel}
    >
      <ol className="process-progress__list">
        {items.map((item, index) => {
          const isActive = index === activeIndex;
          const isDone = index < activeIndex;
          const state = getItemStateClass(isActive, isDone);

          return (
            <li key={item.id} className={`process-progress__item${state}`}>
              <button
                type="button"
                className="process-progress__button"
                aria-current={isActive ? "step" : undefined}
                onClick={() => onSelect(item.id)}
              >
                <span className="process-progress__number">{item.number}</span>
                <span className="process-progress__title">{item.title}</span>
              </button>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
