import { ArrowUpRight } from "lucide-react";
import { optimizeImageUrl } from "../../../../utils/cloudinary";

interface ProjectCardProps {
  readonly title: string;
  readonly description: string;
  readonly technologies: readonly string[];
  readonly image: string;
  readonly url: string;
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
      aria-label={`Ver proyecto ${title} (se abre en una pestaña nueva)`}
    >
      <img
        src={optimizeImageUrl(image, 900)}
        alt={`Captura del sitio web de ${title}`}
        className="project-card__img"
        width={900}
        height={600}
        loading="lazy"
        decoding="async"
      />
      <div className="project-card__overlay" />
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
