import React from "react";
import "./Contact.css";
import { contact_logo, github, linkin, twitter } from "../../index-export";
import { linksData } from "../../constants";
import Links from "../Links/Links";
import { useNavContext } from "../../Context/NavContext";

const Contact = () => {
  const { setOpen } = useNavContext();
  return (
    <section id="contact_section">
      <div className="information">
        <img src={contact_logo} alt="logo" />
        <div className="contact_details">
          <div className="number">+91 12345 09876</div>
          <div className="email">info@example.com</div>
          <ul className="icons">
            <li>
              <img src={twitter} alt="twitter" />
            </li>
            <li>
              <img src={linkin} alt="linkin" />
            </li>
            <li>
              <img src={github} alt="github" />
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="footer">
        <ul className="footer_line">
          {linksData.map((link) => (
            <Links
              link={link.link}
              text={link.text}
              onClick={() => setOpen(false)}
            />
          ))}
        </ul>
        <p className="copyright">
          Designed and built by <span id="special_text_1">Pavan MG</span> with{" "}
          <span className="special_text_2">Love</span> &{" "}
          <span className="special_text_2">Coffee</span>
        </p>
      </div>
    </section>
  );
};

export default Contact;
