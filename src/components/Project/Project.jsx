import React from "react";
import "./Project.css";
import link_chain from "../../image/projects/link-chain.svg";
import { github } from "../../index-export";

const Project = (src, alt, title, text, stack, preview, code_link) => {
  return (
    <li className="project_block">
      <img src={src} alt={alt} />
      <div className="text-block">
        <h3 className="project_title">{title}</h3>
        <p className="project_text">{text}</p>
        <div className="stack">
          Tech stack: <span>{stack}</span>
        </div>
        <div className="links_block">
          <div>
            <img src={link_chain} alt="link chain" />
            <a href={preview}>Live Preview</a>
          </div>
          <div>
            <img src={github} alt="github" />
            <a href={code_link}>View code</a>
          </div>
        </div>
      </div>
    </li>
  );
};

export default Project;
