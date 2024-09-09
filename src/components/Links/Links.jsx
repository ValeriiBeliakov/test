import React from "react";
import "./Links.css";

const Links = ({ link, text, onClick }) => {
  return (
    <li className="links">
      <a href={link} onClick={onClick}>
        {text}
      </a>
    </li>
  );
};

export default Links;
