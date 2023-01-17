import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
// import logo from "../../assets/images/logo.png";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="_navbar" id="home">
      <div className="navbar-links">
        <div className="navbar-links-logo">
          <Link to="/home" className="text-white">
            GetArt
          </Link>
        </div>
        <div className="navbar-links-container">
          <ul>
            <li>
              <Link to="/projects" className="nav-link nav-item">
                Assets
              </Link>
            </li>
            <li>
              <Link to="/projects" className="nav-link nav-item">
                Graphic Design
              </Link>
            </li>
            <li>
              <Link to="/team" className="nav-link nav-item">
                Video Editing
              </Link>
            </li>
            <li>
              <Link to="/contact" className="nav-link nav-item">
                Photos
              </Link>
            </li>
            <li>
              <Link to="/contact" className="nav-link nav-item">
                Web Ui/Ux
              </Link>
            </li>
            <li>
              <Link to="/contact" className="nav-link nav-item">
                Artistic
              </Link>
            </li>
            <li>
              <Link to="/contact" className="nav-link nav-item">
                African
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-sign">
        <ul>
          <li>
            <Link to="home/sell" className="nav-link nav-item2">
              Sell Here
            </Link>
          </li>
          <li>
            <Link to="home/pricing" className="nav-link nav-item2">
              Pricing
            </Link>
          </li>
          <li>
            <Link to="/login" className="nav-link button">
              Login
            </Link>
          </li>
          <li>
            <Link to="/signup" className="nav-link button2">
              Sign up
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-menu">
        <div className="menu-icon-container">
          {toggleMenu ? (
            <RiCloseLine
              color="#fff"
              size={30}
              className="close-menu-icon"
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <RiMenu3Line
              color="#fff"
              size={30}
              className="open-menu-icon"
              onClick={() => setToggleMenu(true)}
            />
          )}
        </div>
        <div
          className={toggleMenu ? "blur-shadow" : ""}
          onClick={() => setToggleMenu(false)}
        ></div>
        <div
          className={
            toggleMenu
              ? "navbar-menu-container active"
              : "navbar-menu-container"
          }
        >
          <RiCloseLine
            color="#fff"
            size={30}
            className="close-me"
            onClick={() => setToggleMenu(false)}
          />
          <div className="navmenu-links-container">
            <li>
              <Link to="/projects" className="nav-menu-link">
                Assets
              </Link>
            </li>
            <li>
              <Link to="/projects" className="nav-menu-link">
                Graphic Design
              </Link>
            </li>
            <li>
              <Link to="/team" className="nav-menu-link">
                Video Editing
              </Link>
            </li>
            <li>
              <Link to="/contact" className="nav-menu-link">
                Photos
              </Link>
            </li>
            <li>
              <Link to="/contact" className="nav-menu-link">
                Web Ui/Ux
              </Link>
            </li>
            <li>
              <Link to="/contact" className="nav-menu-link">
                Artistic
              </Link>
            </li>
            <li>
              <Link to="/contact" className="nav-menu-link">
                African
              </Link>
            </li>
          </div>
          <div className="navbar-menu-container-links-sign">
            <li>
              <Link to="/sell" className="nav-menu-link2 mb-3">
                Sell Here
              </Link>
            </li>
            <div className="mb-3">
              <Link to="/login" className="nav-menu-item button">
                Login
              </Link>
            </div>
            <div>
              <Link to="/signup" className="nav-menu-item button2">
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
