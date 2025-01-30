import React, { useState } from "react";
import { Link } from "react-router-dom";
import {HiOutlineMenuAlt3} from "react-icons/hi"

import "./Navbar.scss";
import logoImg from "../../img/logo.png";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  const handleToggle = () => setToggleMenu(!toggleMenu)

  return (
    <nav className="navbar">
      <div className="container">
        <div className="site-logo">
          <Link to="/">
            <img src={logoImg} alt="Site logo" />
          </Link>
          <button onClick={handleToggle}>
            <HiOutlineMenuAlt3 size={40} style={{ color: `${toggleMenu ? "#fff" : "#010101"}`}}/>
          </button>
        </div>

        <div className={toggleMenu ? "navbar-collapse show-navbar-collapse" : "navbar-collapse"}>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/">Home</Link>
            </li>

            <li className="nav-item">
              <Link to="about">About</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
