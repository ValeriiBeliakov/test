import "./NavBar.css";
import logo from "../../image/navbar-images/logo.svg";
import menu from "../../image/menu.svg";
import close from "../../image/close.svg";
import { twitter, linkin, github } from "../../index-export";
import { linksData } from "../../constants";
import Links from "../Links/Links";
import { useNavContext } from "../../Context/NavContext";
const NavBar = () => {
  const { open, setOpen } = useNavContext();

  return (
    <header className="header">
      <img src={logo} alt="logo" className="logo" />
      <div className={`header_content ${open ? "nav-open" : ""}`}>
        <ul className="line">
          {linksData.map((link, text) => (
            <Links
              link={link.link}
              text={link.text}
              onClick={() => setOpen(false)}
            />
          ))}
        </ul>
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
      <button
        className={`btn-mobile-nav ${open ? "nav-open" : ""}`}
        onClick={() => setOpen(!open)}
      >
        <img
          src={menu}
          className="icon-mobile-nav"
          name="menu-outline"
          alt="menu"
        ></img>
        <img
          src={close}
          className="icon-mobile-nav"
          name="close-outline"
          alt="close"
        ></img>
      </button>
    </header>
  );
};

export default NavBar;
