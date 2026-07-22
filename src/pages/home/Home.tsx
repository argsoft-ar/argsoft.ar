import Hero from "./Sections/Hero/Hero";
import TrustUs from "../../components/TrustUs/TrustUs";
import Services from "./Sections/Services/Services";
import Plans from "./Sections/Plans/Plans";
import AboutUs from "./Sections/AboutUs/AboutUs";
import WorkProcess from "./Sections/WorkProcess/WorkProcess";
import Projects from "./Sections/Projects/Projects";
import Contact from "./Sections/Contact/Contact";

export default function Home() {
  return (
    <div className="home-page">
      <Hero />
      <TrustUs />
      <Services />
      <Plans />
      <AboutUs />
      <Projects />
      <WorkProcess />
      <Contact />
    </div>
  );
}
