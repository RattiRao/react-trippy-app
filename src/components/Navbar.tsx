import React, { useState } from "react";
import "./NavbarStyles.css";
import { MenuItems } from "./MenuItems";

const Navbar = () => {
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  return (
    <nav className="NavbarItems">
      <h1 className="navbar-logo">Trippy</h1>
      <div
        className="menu-icons"
        onClick={() => {
          setIsMenuClicked(!isMenuClicked);
        }}
      >
        <i className={isMenuClicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={"nav-menu" + (isMenuClicked ? " active" : "")}>
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <a className={item.cName} href="/">
                <i className={item.icon}></i> {item.title}
              </a>
            </li>
          );
        })}
        <button>Sign Up</button>
      </ul>
    </nav>
  );
};

export default Navbar;
