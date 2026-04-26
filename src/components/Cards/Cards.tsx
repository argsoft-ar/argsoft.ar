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
}

export default function Cards({ icon, title, description, items }: CardsProps) {
  const IconComponent = iconMap[icon];

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
    </div>
  );
}
