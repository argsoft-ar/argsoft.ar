import { ArrowUp } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Button from "../Buttons/Button";
import { useOutOfView } from "../../hooks/useOutOfView";
import { getWhatsAppUrl } from "../../data/contact";
import "./FloatingActions.css";

const WHATSAPP_MESSAGE = "¡Hola! Me gustaría obtener una consulta gratuita.";

export default function FloatingActions() {
  const showScrollTop = useOutOfView("inicio");

  return (
    <div className="floating-actions">
      <div
        className={`floating-actions__item floating-actions__scroll-top${showScrollTop ? " visible" : ""}`}
        aria-hidden={!showScrollTop}
        inert={!showScrollTop}
      >
        <Button
          className="floating-actions__btn"
          ariaLabel="Volver arriba"
          action={{ type: "scroll", targetId: "inicio" }}
          icon={ArrowUp}
          iconSize={24}
          backgroundColor="var(--background-secondary)"
          textColor="var(--text-color)"
        />
      </div>
      <div className="floating-actions__item">
        <Button
          className="floating-actions__btn"
          ariaLabel="Contactar por WhatsApp"
          action={{
            type: "custom",
            onClick: () =>
              window.open(
                getWhatsAppUrl(WHATSAPP_MESSAGE),
                "_blank",
                "noopener,noreferrer",
              ),
          }}
          icon={FaWhatsapp}
          iconSize={28}
          backgroundColor="var(--whatsapp-green)"
          textColor="var(--text-on-primary)"
        />
      </div>
    </div>
  );
}
