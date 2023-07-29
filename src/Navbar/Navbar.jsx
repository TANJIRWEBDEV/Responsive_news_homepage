import "./navbar.css";
import Logo from "../assets/logo.svg";
import imenu from "../assets/imenu.svg";
import mClose from "../assets/menu-close.svg";
import { useWindowSize } from "@uidotdev/usehooks";
import { useEffect, useState } from "react";
const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);

  const res = useWindowSize();

  const links = ["Home", "New", "Popular", "Trending", "Categories"];

  useEffect(() => {
    if (res.width > 600) {
      setSidebar(false);
    }
    document.addEventListener("keydown", hPress);

    return () => {
      document.removeEventListener("keydown", hPress);
    };
  }, [res.width]);

  function hPress(e) {
    if (e.keyCode === 27) {
      setSidebar(false);
    }
  }

  return (
    <nav className="nav">
      <div>
        <img src={Logo} alt="logo" />
      </div>
      <div className="nav__items2">
        {res.width > 670 ? (
          <ul>
            {links.map((v, i) => {
              return (
                <li key={i}>
                  <a href={`#${v}`}>{v}</a>
                </li>
              );
            })}
          </ul>
        ) : (
          <span
            onClick={() => {
              setSidebar((p) => !p);
            }}
          >
            <img src={imenu} alt="menu-icon" />
          </span>
        )}
      </div>

      <div
        className="modal"
        style={{ display: sidebar ? "block" : "none" }}
      ></div>
      <div className={sidebar ? "sidebar__items sActive" : "sidebar__items "}>
        <div className="sidebar__items1">
          <ul>
            {links.map((v, i) => {
              return (
                <li key={i}>
                  <a href={`#${v}`}>{v}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <div
          className="sidebar__item2"
          onClick={() => {
            setSidebar(false);
          }}
        >
          <img src={mClose} alt="close_sidebar" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
