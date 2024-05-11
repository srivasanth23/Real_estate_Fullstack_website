import React, { useState } from "react";
import "./index.css";
import { IoMenu, IoClose } from "react-icons/io5";


const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <img src="./logo.png" alt="logo" className="h-image" width={100} />
        <input type="checkbox" id="sidebar-check" />
        <label htmlFor="sidebar-check" className="open-sidebar-button" onClick={() => setMenuOpened(!menuOpened)}>
          <IoMenu size={32} />
        </label>
        <div className="flexCenter h-menu">
          <label htmlFor="sidebar-check" className="close-sidebar-button">
            <IoClose size={32} />
          </label>
          <a href="#residencies"> Residencies </a>
          <a href="value"> Our Value </a>
          <a href="contact-us"> Contact Us </a>
          <a href="get-started">Get Started</a>
          <button className="button">
            <a href="mailto:jammulasrivasanth@gmail.com">Contact</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Header;
