import React from "react";
import "./index.css";

const Header = () => {
  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <img src="./logo.png" alt="logo" className="h-image" width={100} />
        <div className="flexCenter h-menu">
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
