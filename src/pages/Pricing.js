import React from "react";
import Nav2Home from "../components/navbar/Nav2Home";
// import { Link } from "react-router-dom";
// import Container from "../components/Container";

const Pricing = () => {
  return (
    <div>
      <Nav2Home />
      <section className="pricing-wrapper">
        <div className="header-banner">
          <div className="main-content">
            <div className="banner-details">
              <h5>
                <b>New year, better projects</b>
              </h5>
              <h3>
                <div>
                  Download fresh, quality assets every day&nbsp;
                  <b className="inline-block m-x-0">30% OFF</b>
                </div>
              </h3>
              <p>Offer valid until January 15</p>
            </div>

            <picture className="banner-image">
              <img
                src="https://static-gcp.freepikcompany.com/freepik/fresh-start-2023/banners/right.png"
                alt="GetArtBanner"
              />
            </picture>
          </div>
        </div>
        <div className="pricing-body">
        
        </div>
      </section>
    </div>
  );
};

export default Pricing;
