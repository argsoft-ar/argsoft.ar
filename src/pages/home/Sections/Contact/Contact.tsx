import { useState } from "react";
import type { FormEvent } from "react";
import "./Contact.css";
import { useInView } from "../../../../hooks/useInView";

export default function Contact() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const { ref: cardRef, inView } = useInView();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!name || !message) return;

    const text = `¡Hola! Soy ${name}. ${message} Me gustaría obtener una consulta gratuita y un presupuesto para mi proyecto. ¿Podemos hablar?`;
    const encoded = encodeURIComponent(text);
    window.open(
      `https://wa.me/5491173643037?text=${encoded}`,
      "_blank",
      "noopener,noreferrer",
    );

    setName("");
    setMessage("");
  };

  return (
    <section className="contact-section" id="contacto">
      <div className="contact-bg-text" aria-hidden="true">
        CONTACTO
      </div>
      <div
        className={`contact-card${inView ? " anim-scale-in" : " anim-hidden"}`}
        ref={cardRef as React.RefObject<HTMLDivElement>}
      >
        <div className="contact-info">
          <span
            className={`contact-label${inView ? " anim-fade-up anim-delay-1" : " anim-hidden"}`}
          >
            HABLEMOS
          </span>
          <h2
            className={`contact-title${inView ? " anim-fade-up anim-delay-2" : " anim-hidden"}`}
          >
            ¿Listo para escalar tu negocio?
          </h2>
          <p
            className={`contact-subtitle${inView ? " anim-fade-up anim-delay-3" : " anim-hidden"}`}
          >
            Cuéntanos tu idea y te respondemos por WhatsApp con una consulta
            gratuita.
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className={`contact-form${inView ? " anim-fade-up anim-delay-3" : " anim-hidden"}`}
        >
          <div className="contact-input-group">
            <div className="contact-field">
              <label htmlFor="contact-name" className="contact-field-label">
                Tu nombre
              </label>
              <input
                id="contact-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Tu nombre"
                className="contact-input"
                required
              />
            </div>
            <div className="contact-field">
              <label htmlFor="contact-message" className="contact-field-label">
                ¿En qué podemos ayudarte?
              </label>
              <textarea
                id="contact-message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="¿En qué podemos ayudarte?"
                className="contact-textarea"
                required
              />
            </div>
            <button type="submit" className="contact-button">
              Escribinos por WhatsApp
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
