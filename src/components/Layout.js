import React from "react";
import { Outlet } from "react-router-dom";
// import { Footer } from "./footer/Footer";
import Header from "./Header";
import SimpleFoot from "../components/simplefoot/SimpleFoot";

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <SimpleFoot />
    </div>
  );
};

export default Layout;
