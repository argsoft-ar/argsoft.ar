import type { ComponentType } from "react";
import "./Button.css";

// Compatible con iconos de lucide-react y react-icons
type ButtonIcon = ComponentType<{ size?: number; color?: string }>;

type ButtonAction =
  | { type: "scroll"; targetId: string }
  | { type: "modal"; onOpen: () => void }
  | { type: "link"; href: string }
  | { type: "custom"; onClick: () => void };

interface ButtonProps {
  text?: string;
  ariaLabel?: string;
  action: ButtonAction;
  backgroundColor?: string;
  textColor?: string;
  icon?: ButtonIcon;
  iconPosition?: "left" | "right";
  iconSize?: number;
  className?: string;
}

export default function Button({
  text,
  ariaLabel,
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
      type="button"
      className={`generic-btn ${className}`}
      aria-label={ariaLabel}
      onClick={handleClick}
      style={{
        backgroundColor,
        color: textColor,
      }}
    >
      {Icon && iconPosition === "left" && (
        <Icon size={iconSize} color={textColor} />
      )}
      {text && <span>{text}</span>}
      {Icon && iconPosition === "right" && (
        <Icon size={iconSize} color={textColor} />
      )}
    </button>
  );
}
