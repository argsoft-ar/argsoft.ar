import { type LucideIcon } from "lucide-react";
import "./Button.css";

type ButtonAction =
  | { type: "scroll"; targetId: string }
  | { type: "modal"; onOpen: () => void }
  | { type: "link"; href: string }
  | { type: "custom"; onClick: () => void };

interface ButtonProps {
  text: string;
  action: ButtonAction;
  backgroundColor?: string;
  textColor?: string;
  icon?: LucideIcon;
  iconPosition?: "left" | "right";
  iconSize?: number;
  className?: string;
}

export default function Button({
  text,
  action,
  backgroundColor = "var(--secondary-color)",
  textColor = "var(--text-on-primary)",
  icon: Icon,
  iconPosition = "left",
  iconSize = 20,
  className = "",
}: ButtonProps) {
  const handleClick = () => {
    switch (action.type) {
      case "scroll":
        const element = document.getElementById(action.targetId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
        break;
      case "modal":
        action.onOpen();
        break;
      case "link":
        window.location.href = action.href;
        break;
      case "custom":
        action.onClick();
        break;
    }
  };

  return (
    <button
      className={`generic-btn ${className}`}
      onClick={handleClick}
      style={{
        backgroundColor,
        color: textColor,
      }}
    >
      {Icon && iconPosition === "left" && (
        <Icon size={iconSize} color={textColor} />
      )}
      <span>{text}</span>
      {Icon && iconPosition === "right" && (
        <Icon size={iconSize} color={textColor} />
      )}
    </button>
  );
}
