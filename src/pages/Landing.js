import React from "react";
import { Link } from "react-router-dom";
// import Categories from "../components/categories/Categories";
import Navbar2 from "../components/navbar/Navbar2";
import { Carousel } from "antd";

import bg1 from "../assets/Art1.jpg";
import bg2 from "../assets/Art2.jpg";
import bg3 from "../assets/Art3.jpg";

export const items = [
  {
    key: "1",
    title: "The website for creators",
    content: "Find and download the best high-quality photos and designs",
    btntext: "Browse",
    btntLink: "/",
    image: bg1,
  },
  {
    key: "2",
    title: "Best affordable pricing rates",
    content: "Find and download the best high-quality photos and designs",
    btntext: "View",
    btntLink: "/home/pricing",
    image: bg2,
  },
  {
    key: "3",
    title: "Sell Your Content",
    content: "Find and download the best high-quality photos and designs",
    btntext: "Start",
    btntLink: "/home/sell",
    image: bg3,
  },
];

// const divStyle = (src) => ({
//   backgroundImage: "url(" + src + ")",
// });

const Landing = () => {
  return (
    <div>
      <Navbar2 />
      <section className="home-page-wrapper">
        <div className="welcome-content">
          <Carousel autoplay dots={false} draggable pauseOnHover={false}>
            {items.map((item, index) => {
              return (
                <div key={index}>
                  <div className="content">
                    <img
                      className="image-fluid"
                      src={item.image}
                      alt=""
                      style={{
                        width: "100%",
                        height: "80vh",
                      }}
                      loading="lazy"
                    />
                    <div className="darken-layer"></div>
                    <div className="slide">
                      <h3 className="text-white --big-headings">
                        {item.title}
                      </h3>
                      <p className="text-white --subtitle">{item.content}</p>
                      <Link
                        to={item.btntLink}
                        className="text-center text-white --normal-button header-top-strip"
                      >
                        {item.btntext}
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </Carousel>
        </div>
      </section>
    </div>
  );
};

export default Landing;
