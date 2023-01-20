import React from "react";
import { Outlet } from "react-router-dom";
// import { Footer } from "../components/footer/Footer";
import SimpleFoot from "../components/simplefoot/SimpleFoot";

const LandMain = () => {
  return (
    <div>
      <Outlet />
      <SimpleFoot />
    </div>
  );
};

export default LandMain;
