import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
// import logo from "../../assets/images/logo.png";

// import logo from "../../assets/getarts.png";
// import logow from "../../assets/getarts2.png";
import logow from "../../assets/logo_ga.png";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div id="store">
      <div className="_navbar" id="home">
        <div className="navbar-links">
          <div className="navbar-links-logo">
            <Link to="/" className="text-white">
              <img src={logow} alt="" width="80%" />
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
        </div>
      </div>
      <div className="position-relative nv-mobile-slider">
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
          <div className="navmenu-links-container">
            <li>
              <Link to="/projects" className="nav-menu-link">
                Assets
              </Link>
            </li>
            <li>
              <Link to="/projects" className="nav-menu-link">
                Design
              </Link>
            </li>
            <li>
              <Link to="/team" className="nav-menu-link">
                Editing
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
            <div className="d-flex justify-content-center flex-column mb-3">
              <li>
                <Link to="/sell" className="nav-menu-link2 ">
                  Sell Here
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="nav-menu-link2">
                  Pricing
                </Link>
              </li>
            </div>
            <div className="d-flex flex-column gap-2">
              <Link to="/login" className="nav-menu-item button text-center">
                Login
              </Link>

              <Link to="/signup" className="nav-menu-item button2 text-center">
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
