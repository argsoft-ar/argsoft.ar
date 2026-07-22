import "./Footer.css";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import logo from "../../assets/brand/as.svg";

const navLinks = [
  { label: "Servicios", id: "servicios" },
  { label: "Proyectos", id: "proyectos" },
  { label: "Proceso", id: "proceso" },
  { label: "Contacto", id: "contacto" },
];

const socialLinks = [
  {
    label: "Instagram",
    href: "https://instagram.com/argsoft.ar",
    Icon: FaInstagram,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/argsoft-ar/",
    Icon: FaLinkedinIn,
  },
  { label: "GitHub", href: "https://github.com/argsoft-ar", Icon: FaGithub },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-accent-bar" />

      <p className="footer-wordmark">ARGSOFT</p>
      <p className="footer-tagline">
        Transformando ideas en experiencias digitales.
      </p>

      <img src={logo} alt="Logo" className="footer-logo" />

      <div className="footer-grid">
        <div>
          <p className="footer-col-label">Navegación</p>
          <ul className="footer-col-links">
            {navLinks.map(({ label, id }) => (
              <li key={id}>
                <a href={`#${id}`} className="footer-col-link">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="footer-col-label">Contacto</p>
          <ul className="footer-col-links">
            <li>
              <a href="mailto:argsoft.ar@gmail.com" className="footer-col-link">
                argsoft.ar@gmail.com
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="footer-col-label">Síguenos</p>
          <ul className="footer-col-links">
            {socialLinks.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link"
                >
                  <Icon size={20} />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <span className="footer-copy">
          © 2026 ARGSOFT. Todos los derechos reservados.
        </span>
        <span className="footer-made">Hecho con ♥ en Argentina 🇦🇷</span>
      </div>
    </footer>
  );
}
