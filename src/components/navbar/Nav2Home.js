import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { RiCloseLine } from "react-icons/ri";

const Nav2Home = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="nav-home-2">
      <div className="nav-bar">
        <div className="nav-logo">
          <h3>
            <Link to="/">
              <strong>GetArt</strong>
            </Link>
          </h3>
        </div>
        <div className="nav-menu">
          <ul>
            <li>
              <NavLink to="/home/sell">Sell Here</NavLink>
            </li>
            <li>
              <NavLink to="/home/pricing">Pricing</NavLink>
            </li>
            <li>
              <NavLink to="/login">Log in</NavLink>
            </li>
            <li>
              <NavLink className="signup-btn" to="/signup">
                Sign up
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="menu-icon">
          {toggleMenu ? (
            <RiCloseLine
              color={"#3e8588"}
              size={30}
              className="close-menu-icon"
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <AiOutlineMenu
              className="menu-open"
              size={25}
              color={"#3e8588"}
              onClick={() => setToggleMenu(true)}
            />
          )}
        </div>
      </div>
      {toggleMenu ? (
        <div className="mobile-nav-menu">
          <ul>
            <li>
              <NavLink to="/home/sell">Sell Here</NavLink>
            </li>
            <li>
              <NavLink to="/home/pricing">Pricing</NavLink>
            </li>
            <li>
              <NavLink className="login-btn" to="/login">
                Log in
              </NavLink>
            </li>
            <li>
              <NavLink className="signup-btn" to="/signup">
                Sign up
              </NavLink>
            </li>
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default Nav2Home;
