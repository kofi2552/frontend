import React from "react";
import Banner from "../components/Banner";
import Nav2Home from "../components/navbar/Nav2Home";
// import { Link } from "react-router-dom";
// import Container from "../components/Container";

const Pricing = () => {
  return (
    <div>
      <Nav2Home />
      <section className="pricing-wrapper">
        <Banner />
        <div className="pricing-body"></div>
      </section>
    </div>
  );
};

export default Pricing;
