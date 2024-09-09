import React from "react";
import "./SkillSection.css";
import { skills } from "../../constants";

const SkillSection = () => {
  return (
    <section id="skills-section">
      <h1 className="title">My Tech Stack</h1>
      <h3 className="text"> Technologies I’ve been working with recently</h3>

      <div className="skills-block">
        {skills.map(({ img, name }) => (
          <img src={img} alt={name} key={img} className="skill_img" />
        ))}
      </div>
    </section>
  );
};

export default SkillSection;
