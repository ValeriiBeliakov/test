import React from "react";
import "./HeroSection.css";
import { person } from "../../index-export";

const HeroSection = () => {
  return (
    <section id="hero-section">
      <p className="hero_section_text">
        Hi 👋,
        <br /> My name is
        <br />
        <span class="special_text" data-text="Pavan MG">
          Pavan MG
        </span>
        <br />I build things for web
      </p>
      <img src={person} alt="person" className="hero_section_img" />
    </section>
  );
};

export default HeroSection;
