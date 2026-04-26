import { useState, useRef, useEffect, useCallback } from "react";
import portfolioData from "../../../../data/portfolioData.json";
import "./Projects.css";
import { useInView } from "../../../../hooks/useInView";
import ProjectCard from "./ProjectCard";

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  url: string;
}

export default function Projects() {
  const projects: Project[] = portfolioData.es;
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const { ref, inView } = useInView();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const setCardRef = useCallback(
    (index: number) => (el: HTMLDivElement | null) => {
      cardRefs.current[index] = el;
    },
    [],
  );

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const cards = cardRefs.current.filter(Boolean) as HTMLDivElement[];
    if (cards.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = cards.indexOf(entry.target as HTMLDivElement);
            if (idx !== -1) {
              setActiveIndex(idx);
            }
          }
        });
      },
      {
        root: container,
        threshold: 0.6,
      },
    );

    cards.forEach((card) => observer.observe(card));

    return () => {
      cards.forEach((card) => observer.unobserve(card));
    };
  }, [projects.length]);

  const scrollToCard = (index: number) => {
    const card = cardRefs.current[index];
    if (card) {
      card.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  };

  return (
    <section className="projects-section" id="proyectos">
      <div
        className="projects-inner"
        ref={ref as React.RefObject<HTMLDivElement>}
      >
        <div
          className={`projects-header${inView ? " anim-fade-up anim-delay-1" : " anim-hidden"}`}
        >
          <span className="projects-label">Nuestro Trabajo</span>
          <div className="projects-header-row">
            <h2 className="projects-title">Proyectos Destacados</h2>
            <p className="projects-subtitle">
              Soluciones digitales que transforman ideas en experiencias reales.
            </p>
          </div>
        </div>

        {/* Desktop bento grid */}
        <div
          className={`projects-bento${inView ? " anim-fade-up anim-delay-2" : " anim-hidden"}`}
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              {...project}
              index={index}
              className={`project-card project-card--${index + 1}${
                hoveredId === project.id ? " project-card--active" : ""
              }${
                hoveredId !== null && hoveredId !== project.id
                  ? " project-card--dimmed"
                  : ""
              }`}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            />
          ))}
        </div>

        {/* Mobile: horizontal snap carousel */}
        <div
          className={`projects-mobile${inView ? " anim-fade-up anim-delay-2" : " anim-hidden"}`}
        >
          <div className="projects-carousel" ref={scrollContainerRef}>
            {projects.map((project, index) => (
              <div
                key={project.id}
                ref={setCardRef(index)}
                className={`projects-carousel__item${
                  activeIndex === index
                    ? " projects-carousel__item--active"
                    : ""
                }`}
              >
                <ProjectCard
                  {...project}
                  index={index}
                  className="project-card-mobile"
                />
              </div>
            ))}
          </div>

          <div className="projects-pagination">
            <span className="projects-counter">
              {String(activeIndex + 1).padStart(2, "0")} /{" "}
              {String(projects.length).padStart(2, "0")}
            </span>
            <div className="projects-dots">
              {projects.map((project, index) => (
                <button
                  key={project.id}
                  type="button"
                  className={`projects-dot${activeIndex === index ? " projects-dot--active" : ""}`}
                  onClick={() => scrollToCard(index)}
                  aria-label={`Ir al proyecto ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
