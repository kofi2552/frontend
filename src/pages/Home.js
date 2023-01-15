import React, { useState } from "react";
import Meta from "../components/Meta";
import ProductCard from "../components/ProductCard";
import { BsFilterSquare } from "react-icons/bs";

import Categories from "../components/categories/Categories";
import { MdArrowBackIos } from "react-icons/md";
import { Sidebar } from "./Sidebar";

const Home = () => {
  const [ToggleSideBar, setToggleSideBar] = useState(false);
  const [filterhead, setFilterhead] = useState(false);

  const FixFilterheader = () => {
    if (window.scrollY >= 80) {
      setFilterhead(true);
    } else {
      setFilterhead(false);
    }
  };
  window.addEventListener("scroll", FixFilterheader);

  return (
    <div>
      <Meta title="Collections" />
      <section
        className={
          filterhead ? "filter-header-sticky" : "content-filter-header"
        }
      >
        <div className="page-topbar">
          <div className="btns-container">
            {ToggleSideBar ? (
              <div className="filter-header">
                <div className="header-content">
                  <p className="fw-Bold">Filters</p>
                  <MdArrowBackIos
                    className="filter-card-icon-close"
                    size={30}
                    onClick={() => setToggleSideBar(false)}
                  />
                </div>
              </div>
            ) : (
              <div className="main-btn">
                <button
                  type="button"
                  className="filter-button"
                  onClick={() => setToggleSideBar(true)}
                >
                  <BsFilterSquare className="filter-icon-open" size={23} />
                  <span>Filters</span>
                </button>
              </div>
            )}
          </div>
          <div className="header-bottom">
            <Categories />
          </div>
        </div>
      </section>
      <section className="home-wrapper">
        <div className="container-fluid">
          <div className="display-products">
            <div className={ToggleSideBar ? "side-toggled" : "collapsed"}>
              <div
                className={ToggleSideBar ? "sidebar-opened" : "side-collapsed"}
              >
                <Sidebar />
              </div>
              <div className="product-card-lists">
                <h3 className="text-center section-heading">All Assets</h3>
                <div className="card-list">
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
