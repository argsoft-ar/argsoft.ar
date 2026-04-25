import Hero from "./Sections/Hero/Hero";
import TrustUs from "../../components/TrustUs/TrustUs";
import Services from "./Sections/Services/Services";
import WorkProcess from "./Sections/WorkProcess/WorkProcess";
import Projects from "./Sections/Projects/Projects";
import Contact from "./Sections/Contact/Contact";

export default function Home() {
  return (
    <div className="home-page">
      <Hero />
      <TrustUs />
      <Services />
      <Projects />
      <WorkProcess />
      <Contact />
    </div>
  );
}
