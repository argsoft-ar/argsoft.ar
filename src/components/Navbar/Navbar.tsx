import { useState, type MouseEvent } from "react";
import "./Navbar.css";
import { Menu, PhoneIcon, X } from "lucide-react";
import Button from "../Buttons/Button";
import logo from "../../assets/logo.png";

interface NavLink {
  id: string;
  label: string;
}

const navLinks: NavLink[] = [
  { id: "servicios", label: "servicios" },
  { id: "planes", label: "planes" },
  { id: "nosotros", label: "nosotros" },
  { id: "proyectos", label: "proyectos" },
  { id: "proceso", label: "proceso" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const handleLinkClick = (
    e: MouseEvent<HTMLAnchorElement>,
    id: string,
  ): void => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="navbar" aria-label="Navegación principal">
      <div className="navbar-desktop">
        <div className="navbar-links-bg anim-fade-down">
          <div className="navbar-logo">
            <a
              href="#inicio"
              onClick={(e) => handleLinkClick(e, "inicio")}
              style={{
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              <img
                className="navbar-logo-img"
                src={logo}
                alt=""
                width={45}
                height={45}
                decoding="async"
              />
              <span className="navbar-logo-text">Argsoft</span>
            </a>
          </div>
          <div className="link-container">
            {navLinks.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={(e) => handleLinkClick(e, id)}
                className="navbar-link"
              >
                {label}
              </a>
            ))}
          </div>
          <Button
            text="Contactános"
            icon={PhoneIcon}
            className="navbar-cta"
            action={{ type: "scroll", targetId: "contacto" }}
          />
        </div>
      </div>
      <div className="navbar-mobile">
        <div className="navbar-mobile-container anim-fade-down">
          <div className="navbar-logo-mobile-container">
            <a
              href="#inicio"
              onClick={(e) => handleLinkClick(e, "inicio")}
              className="navbar-logo-mobile-link"
            >
              <img
                className="navbar-logo-mobile-img"
                src={logo}
                alt=""
                width={40}
                height={40}
                decoding="async"
              />
              <span className="navbar-logo-text-mobile">ARGSOFT</span>
            </a>
          </div>
          <button
            type="button"
            className="navbar-burger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menú"
            aria-expanded={menuOpen}
            aria-controls="navbar-mobile-menu"
          >
            <Menu size={30} />
          </button>
        </div>

        {menuOpen && (
          <div
            className="navbar-mobile-overlay"
            onClick={() => setMenuOpen(false)}
          />
        )}

        <div
          id="navbar-mobile-menu"
          className={`navbar-mobile-menu${menuOpen ? " open" : ""}`}
          inert={!menuOpen}
        >
          <div className="navbar-mobile-menu-header">
            <button
              type="button"
              className="navbar-mobile-close"
              onClick={() => setMenuOpen(false)}
              aria-label="Cerrar menú"
            >
              <X size={25} />
            </button>
          </div>
          <div className="navbar-mobile-links">
            {navLinks.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={(e) => handleLinkClick(e, id)}
                className="navbar-mobile-link"
              >
                {label}
              </a>
            ))}
          </div>
          <div className="navbar-mobile-menu-footer">
            <Button
              text="Contactános"
              icon={PhoneIcon}
              className="navbar-mobile-cta"
              action={{
                type: "custom",
                onClick: () => {
                  setMenuOpen(false);
                  const el = document.getElementById("contacto");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                },
              }}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
