import React from "react";
import "./ProjectsSection.css";
import { projects } from "../../constants";
import Project from "../Project/Project";
const ProjectsSection = () => {
  return (
    <section id="projects-section">
      <h1 className="projects_title">Projects</h1>
      <h3 className="projects_text">Things I’ve built so far</h3>
      <ul className="projects_block">
        {projects.map((project) =>
          Project(
            project.src,
            project.alt,
            project.title,
            project.text,
            project.stack,
            project.preview,
            project.code_link
          )
        )}
      </ul>
    </section>
  );
};

export default ProjectsSection;
