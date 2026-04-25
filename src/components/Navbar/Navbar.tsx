import { useState, type MouseEvent } from "react";
import "./Navbar.css";
import { Menu, PhoneIcon, X } from "lucide-react";
import Button from "../Buttons/Button";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";

interface NavLink {
  id: string;
  label: string;
}

const navLinks: NavLink[] = [
  { id: "servicios", label: "servicios" },
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
    <nav className="navbar">
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
                gap: "0.5rem",
              }}
            >
              <h1 className="navbar-logo-text">Argsoft</h1>
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
          <ThemeSwitcher />
          <Button
            text="Contactános"
            icon={PhoneIcon}
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
              style={{ textDecoration: "none" }}
            >
              <h1 className="navbar-logo-text-mobile">ARGSOFT</h1>
            </a>
          </div>
          <button
            className="navbar-burger"
            onClick={() => setMenuOpen(!menuOpen)}
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

        <div className={`navbar-mobile-menu${menuOpen ? " open" : ""}`}>
          <div className="navbar-mobile-menu-bg">
            <button
              className="navbar-mobile-close"
              onClick={() => setMenuOpen(false)}
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
        </div>
      </div>
    </nav>
  );
}
