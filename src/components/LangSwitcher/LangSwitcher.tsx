import "./LangSwitcher.css";

type Lang = "es" | "en";

interface LangSwitcherProps {
  lang: Lang;
  onChange: () => void;
}

export default function LangSwitcher({ lang, onChange }: LangSwitcherProps) {
  return (
    <button className="navbar-lang-btn" onClick={onChange}>
      {lang === "es" ? "Es" : "En"}
      <img
        src={
          lang === "es"
            ? "https://upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_Argentina.svg"
            : "https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg"
        }
        alt={lang === "es" ? "Argentina" : "USA"}
        className="navbar-lang-flag"
      />
    </button>
  );
}
