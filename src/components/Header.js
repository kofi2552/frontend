import { React, useState, Fragment } from "react";
import Navbar from "./navbar/Navbar";
import { BsSearch } from "react-icons/bs";
// import { NavLink, Link } from "react-router-dom";
import { Link } from "react-router-dom";
// import Categories from "./categories/Categories";

const Header = () => {
  const [searchbar, setSearchbar] = useState(false);

  const FixSearchbar = () => {
    if (window.scrollY >= 80) {
      setSearchbar(true);
    } else {
      setSearchbar(false);
    }
  };

  window.addEventListener("scroll", FixSearchbar);

  return (
    <Fragment>
      <Navbar />

      <header className={searchbar ? "header-fixed" : "header-upper"}>
        <div className="container-xxl">
          <div className="row">
            <div className="col-lg-12">
              <div className="head-bar">
                <div className="search-bar">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search for a resource..."
                      aria-label="Search for a resource..."
                      aria-describedby="basic-addon2"
                    />
                    <Link to="">
                      <span className="input-group-text p-3" id="basic-addon2">
                        <BsSearch className="fs-6 text-white" />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
