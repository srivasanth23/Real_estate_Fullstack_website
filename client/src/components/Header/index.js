import React, { useState } from "react";
import "./index.css";
import { IoMenu, IoClose } from "react-icons/io5";
import { Link, NavLink} from "react-router-dom";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <Link to="/">
          <img src="https://res.cloudinary.com/dlxjzmiig/image/upload/v1716013811/logo_jrzim0.png" alt="logo" className="h-image" width={100} />
        </Link>
        <input type="checkbox" id="sidebar-check" />
        <label
          htmlFor="sidebar-check"
          className="open-sidebar-button"
          onClick={() => setMenuOpened(!menuOpened)}
        >
          <IoMenu size={32} />
        </label>
        <div className="flexCenter h-menu">
          <label htmlFor="sidebar-check" className="close-sidebar-button">
            <IoClose size={32} />
          </label>
          <NavLink to="/properties"> Properties </NavLink>
          <a href="mailto:jammulasrivasanth@gmail.com">Contact</a>
          <button className="button">
              Login
          </button>
        </div>
      </div>
    </section>
  );
};

export default Header;
