import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  readonly title: string;
  readonly description: string;
  readonly technologies: readonly string[];
  readonly image: string;
  readonly url: string;
  readonly index: number;
  readonly className?: string;
  readonly onMouseEnter?: () => void;
  readonly onMouseLeave?: () => void;
}

export default function ProjectCard({
  title,
  description,
  technologies,
  image,
  url,
  index,
  className = "",
  onMouseEnter,
  onMouseLeave,
}: ProjectCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      aria-label={`Ver proyecto: ${title}`}
    >
      <img src={image} alt={title} className="project-card__img" />
      <div className="project-card__overlay" />
      <span className="project-card__number">
        {String(index + 1).padStart(2, "0")}
      </span>
      <div className="project-card__content">
        <div className="project-card__tech-row">
          {technologies.slice(0, 3).map((tech) => (
            <span key={tech} className="project-card__tech">
              {tech}
            </span>
          ))}
        </div>
        <h3 className="project-card__title">{title}</h3>
        <p className="project-card__desc">{description}</p>
        <span className="project-card__link">
          Ver proyecto <ArrowUpRight size={14} />
        </span>
      </div>
    </a>
  );
}
