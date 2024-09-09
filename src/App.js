import "./App.css";
import Contact from "./components/Contact/Contact";
import HeroSection from "./components/HeroSection/HeroSection";
import NavBar from "./components/NavBar/NavBar";

import ProjectsSection from "./components/ProjectsSection/ProjectsSection";
import SkillSection from "./components/SkillSection/SkillSection";

function App() {
  return (
    <div className="container">
      <NavBar />
      <HeroSection />
      <SkillSection />
      <ProjectsSection />
      <Contact />
    </div>
  );
}

export default App;
