import "./ImageCard.css";

interface ImageCardProps {
  image: string;
  title: string;
  description: string;
  technologies: string[];
  url: string;
}

export default function ImageCard({
  image,
  title,
  description,
  technologies,
  url,
}: ImageCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="image-card"
    >
      <img src={image} alt={title} className="image-card-img" />
      <div className="image-card-overlay">
        <h3 className="image-card-title">{title}</h3>
        <p className="image-card-description">{description}</p>
        <div className="image-card-technologies">
          {technologies.slice(0, 4).map((tech) => (
            <span key={tech} className="image-card-tech">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}
