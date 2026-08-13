import { Globe, Calendar, Bot, type LucideIcon, DotIcon } from "lucide-react";
import "./Cards.css";

const iconMap: Record<string, LucideIcon> = {
  Globe,
  Calendar,
  Bot,
};

interface CardsProps {
  icon: string;
  title: string;
  description: string;
  items?: string[];
  buttonText?: string;
}

export default function Cards({
  icon,
  title,
  description,
  items,
  buttonText,
}: CardsProps) {
  const IconComponent = iconMap[icon];

  const scrollToPlans = () => {
    const plansSection = document.getElementById("planes");
    if (plansSection) {
      plansSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="card">
      <div className="card-icon">
        {IconComponent && <IconComponent size={30} color="#000" />}
      </div>
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
      {items && items.length > 0 && (
        <ul className="card-items">
          {items.map((item) => (
            <li className="item" key={item}>
              <DotIcon /> {item}
            </li>
          ))}
        </ul>
      )}
      {buttonText && (
        <div className="card-button">
          <button className="card-button-text" onClick={scrollToPlans}>
            {buttonText}
          </button>
        </div>
      )}
    </div>
  );
}
