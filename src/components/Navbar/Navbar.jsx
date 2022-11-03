import React, { useState } from "react";
import "./Navbar.scss";
import Logo from "../../assets/Logo.png";
import { HiMenuAlt3 } from "react-icons/hi";

const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="navbar--wrapper">
      <div className="navbar--content">
        <div className="navbar--logo">
          <img src={Logo} alt="logo" />
          <h2>Code Geeks</h2>
        </div>
        <div className="navbar--items">
          <ul className="navbar--links">
            <li className="navbar--item">
              <a href="#tour">Tournaments</a>
            </li>
            <li className="navbar--item">
              <a href="#players">Players</a>
            </li>
            <li className="navbar--item">
              <a href="#games">Games</a>
            </li>
            <li className="navbar--item">
              <a href="#stadiums">Stadiums</a>
            </li>
            <li className="navbar--item">
              <a href="#media">Media</a>
            </li>
          </ul>
        </div>
        <HiMenuAlt3 className="menu" onClick={() => setShow((show) => !show)} />
        {show && (
          <div className="navbar--mobile-items">
            <ul className="navbar--mobile-links">
              <li className="navbar--item" onClick={() => setShow(false)}>
                <a href="#tour">Tournaments</a>
              </li>
              <li className="navbar--item" onClick={() => setShow(false)}>
                <a href="#players">Players</a>
              </li>
              <li className="navbar--item" onClick={() => setShow(false)}>
                <a href="#games">Games</a>
              </li>
              <li className="navbar--item" onClick={() => setShow(false)}>
                <a href="#stadiums">Stadiums</a>
              </li>
              <li className="navbar--item" onClick={() => setShow(false)}>
                <a href="#media">Media</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
