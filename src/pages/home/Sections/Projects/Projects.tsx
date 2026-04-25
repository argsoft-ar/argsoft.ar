import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import portfolioData from "../../../../data/portfolioData.json";
import "./Projects.css";
import { useInView } from "../../../../hooks/useInView";

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
  const { ref, inView } = useInView();

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
            <a
              key={project.id}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`project-card project-card--${index + 1}${
                hoveredId === project.id ? " project-card--active" : ""
              }${
                hoveredId !== null && hoveredId !== project.id
                  ? " project-card--dimmed"
                  : ""
              }`}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              aria-label={`Ver proyecto: ${project.title}`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="project-card__img"
              />
              <div className="project-card__overlay" />
              <span className="project-card__number">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="project-card__content">
                <div className="project-card__tech-row">
                  {project.technologies.slice(0, 3).map((tech, i) => (
                    <span key={i} className="project-card__tech">
                      {tech}
                    </span>
                  ))}
                </div>
                <h3 className="project-card__title">{project.title}</h3>
                <p className="project-card__desc">{project.description}</p>
                <span className="project-card__link">
                  Ver proyecto <ArrowUpRight size={14} />
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Mobile: vertical stack */}
        <div
          className={`projects-mobile${inView ? " anim-fade-up anim-delay-2" : " anim-hidden"}`}
        >
          {projects.map((project, index) => (
            <a
              key={project.id}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card-mobile"
              aria-label={`Ver proyecto: ${project.title}`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="project-card__img"
              />
              <div className="project-card__overlay" />
              <span className="project-card__number">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="project-card__content">
                <div className="project-card__tech-row">
                  {project.technologies.slice(0, 3).map((tech, i) => (
                    <span key={i} className="project-card__tech">
                      {tech}
                    </span>
                  ))}
                </div>
                <h3 className="project-card__title">{project.title}</h3>
                <p className="project-card__desc">{project.description}</p>
                <span className="project-card__link">
                  Ver proyecto <ArrowUpRight size={14} />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
