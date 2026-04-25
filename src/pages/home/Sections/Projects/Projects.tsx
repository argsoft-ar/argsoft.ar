import { useState } from "react";
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

        {/* Mobile: vertical stack */}
        <div
          className={`projects-mobile${inView ? " anim-fade-up anim-delay-2" : " anim-hidden"}`}
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              {...project}
              index={index}
              className="project-card-mobile"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
