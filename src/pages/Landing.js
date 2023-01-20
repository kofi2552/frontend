import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./css/landing.css";
// import Categories from "../components/categories/Categories";
import Navbar2 from "../components/navbar/Navbar2";
// import { Carousel } from "antd";
import { motion, useScroll, useTransform } from "framer-motion";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { CgTab } from "react-icons/cg";

// import bg1 from "../assets/Art1.jpg";
// import bg2 from "../assets/Art2.jpg";
// import bg3 from "../assets/Art3.jpg";
import hab from "../assets/hot_airB.png";
import prcimg from "../assets/price-image.png";
import mbag from "../assets/mbag.png";
import mbag2 from "../assets/mbg.png";
import mountian from "../assets/mountain.png";

// export const items = [
//   {
//     key: "1",
//     title: "The website for creators",
//     content: "Find and download the best high-quality photos and designs",
//     btntext: "Browse",
//     btntLink: "/store",
//     image: bg1,
//   },
//   {
//     key: "2",
//     title: "Best affordable pricing rates",
//     content: "Find and download the best high-quality photos and designs",
//     btntext: "View",
//     btntLink: "pricing",
//     image: bg2,
//   },
//   {
//     key: "3",
//     title: "Sell Your Content",
//     content: "Find and download the best high-quality photos and designs",
//     btntext: "Start",
//     btntLink: "sell",
//     image: bg3,
//   },
// ];

// const divStyle = (src) => ({
//   backgroundImage: "url(" + src + ")",
// });

const Landing = () => {
  const [move, setMove] = useState(false);
  const [tab, setTab] = useState(1);

  const ToggleTab = (index) => {
    setTab(index);
  };

  const ScrollLineAnime = () => {
    if (window.scrollY > 400) {
      setMove(true);
    } else {
      setMove(!move);
    }
  };

  window.addEventListener("scroll", ScrollLineAnime);

  const ContVariants = {
    hidden: {
      opacity: 0,
      y: "-2vh",
    },
    visible: {
      opacity: 1,
      y: "0",
    },
  };

  let ref = useRef(null);
  let { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  let y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div>
      <Navbar2 />
      <section className="home-page-wrapper">
        <div className="main-content-container">
          <div className="home-side-content">
            <div className="left-home">
              <motion.div
                variants={ContVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 1, delay: 0.2, type: "spring" }}
              >
                <h3 className="heading-text">
                  Best Quality and <span>Affordable</span> Assets
                </h3>
                <p className="sub-text">Curated for creatives like you.</p>
                <Link
                  to="/store"
                  className="text-center text-white --normal-button header-top-strip"
                >
                  Get Started
                </Link>
              </motion.div>
            </div>
            <div className="right-home">
              <div>
                <img src={hab} alt="" />
              </div>
            </div>
            <div className="clouds">
              <motion.svg
                width="738"
                height="485"
                viewBox="0 0 738 485"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.path
                  initial={{ x: 200 }}
                  animate={{ x: 0 }}
                  transition={{ duration: 2, type: "spring" }}
                  d="M394.314 484.868H99.196C44.4531 484.868 0 440.415 0 385.672C0 334.222 39.5137 291.827 89.7291 286.888C89.3175 283.183 88.906 279.891 88.906 276.186C88.906 196.335 153.939 131.714 233.378 131.714C263.013 131.714 291.825 140.769 315.698 157.645C320.226 160.938 321.461 167.523 318.168 172.051C314.875 176.579 308.289 177.813 303.762 174.521C283.182 160.115 258.486 152.294 232.966 152.294C164.641 152.294 109.074 207.86 109.074 276.186C109.074 282.772 109.898 288.946 111.132 295.12L112.779 306.233L98.7843 307.056C55.1546 307.056 20.1687 342.454 20.1687 385.672C20.1687 428.89 55.5662 464.288 98.7843 464.288H394.314C448.645 464.288 492.687 420.247 492.687 365.915C492.687 359.33 491.863 352.744 490.628 346.158C489.394 340.808 493.098 335.045 498.861 334.222C504.212 333.399 509.974 336.692 510.797 342.454C512.444 350.274 513.267 358.506 513.267 366.327C513.267 431.771 459.759 484.868 394.314 484.868Z"
                  fill="#44BFDE"
                  fill-opacity="0.24"
                />
                <motion.path
                  initial={{ x: 200 }}
                  animate={{ x: 0 }}
                  transition={{ duration: 2, type: "spring" }}
                  d="M619.047 353.154H323.929C269.186 353.154 224.733 308.701 224.733 253.958C224.733 202.508 264.247 160.113 314.462 155.174C314.051 151.469 313.639 148.176 313.639 144.472C313.639 64.6214 378.261 0 458.111 0C528.084 0 586.943 49.8038 599.291 117.718C606.288 116.483 612.462 115.66 619.047 115.66C684.492 115.66 738 168.756 738 234.613C738 300.469 684.492 353.154 619.047 353.154ZM458.111 20.5801C389.786 20.5801 334.219 76.1462 334.219 144.472C334.219 151.058 335.042 157.232 336.277 163.406L337.924 174.519L323.929 175.342C280.3 175.342 245.313 210.74 245.313 253.958C245.313 297.176 280.711 332.574 323.929 332.574H619.047C673.379 332.574 717.42 288.532 717.42 234.201C717.42 179.87 673.379 135.828 619.047 135.828C611.227 135.828 602.995 137.063 593.528 139.533L582.003 142.826L580.768 130.889C574.183 67.9142 521.498 20.5801 458.111 20.5801Z"
                  fill="#44BFDE"
                  fill-opacity="0.24"
                />
              </motion.svg>
            </div>
            <div className="sunshine">
              <motion.svg
                width="103"
                height="205"
                viewBox="0 0 203 205"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.path
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 5, delay: 4, type: "tween" }}
                  d="M65.7627 55.7801C64.6974 56.601 63.1568 56.3328 62.3946 55.3435L55.7284 46.5333C54.9075 45.4679 55.0996 43.9858 56.165 43.1648C57.2303 42.3439 58.7708 42.6121 59.533 43.6014L66.1993 52.4116C66.9615 53.4009 66.7519 55.0178 65.7627 55.7801Z"
                  fill="#8BE8FF"
                  fill-opacity="0.2"
                  stroke="#D2F6FF"
                  stroke-opacity="0.2"
                  stroke-width="4"
                />
                <motion.path
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 5, delay: 3.5, type: "tween" }}
                  d="M44.4755 86.859C43.8667 87.3281 43.0235 87.4928 42.3087 87.1947L31.7754 83.9114C30.5218 83.5434 29.812 82.1499 30.18 80.896C30.548 79.6422 31.9413 78.9323 33.195 79.3003L43.7282 82.5836C45.0405 83.0277 45.6917 84.3451 45.3237 85.5989C45.1778 86.1965 44.8559 86.5658 44.4755 86.859Z"
                  fill="#8BE8FF"
                  fill-opacity="0.2"
                  stroke="#D2F6FF"
                  stroke-opacity="0.2"
                  stroke-width="4"
                />
                <motion.path
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 5, delay: 3.1, type: "tween" }}
                  d="M45.5595 124.47C45.3312 124.646 45.179 124.763 44.8921 124.863L34.4288 128.439C33.2051 128.897 31.793 128.166 31.3352 126.942C30.8774 125.718 31.6084 124.306 32.8321 123.848L43.2954 120.272C44.5192 119.814 45.9312 120.545 46.389 121.769C46.7296 122.841 46.3965 123.825 45.5595 124.47Z"
                  fill="#8BE8FF"
                  fill-opacity="0.2"
                  stroke="#D2F6FF"
                  stroke-opacity="0.2"
                  stroke-width="4"
                />
                <motion.path
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 5, delay: 2.6, type: "tween" }}
                  d="M62.2421 163.281C61.4051 163.926 60.2338 163.979 59.3606 163.318C58.2941 162.563 58.0059 161.088 58.7606 160.021L65.1374 150.983C65.9681 149.858 67.3677 149.628 68.4343 150.383C69.5008 151.138 69.789 152.614 69.0343 153.68L62.6575 162.718C62.6226 162.987 62.3943 163.163 62.2421 163.281Z"
                  fill="#8BE8FF"
                  fill-opacity="0.2"
                  stroke="#D2F6FF"
                  stroke-opacity="0.2"
                  stroke-width="4"
                />
                <motion.path
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 5, delay: 2.4, type: "tween" }}
                  d="M104.925 175.869C104.544 176.162 104.047 176.303 103.49 176.368C102.184 176.404 101.094 175.304 101.058 173.998L100.914 162.951C100.878 161.644 101.978 160.554 103.285 160.518C104.591 160.482 105.681 161.582 105.717 162.888L105.86 173.935C105.89 174.761 105.458 175.459 104.925 175.869Z"
                  fill="#8BE8FF"
                  fill-opacity="0.2"
                  stroke="#D2F6FF"
                  stroke-opacity="0.2"
                  stroke-width="4"
                />
                <motion.path
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 5, delay: 2.1, type: "tween" }}
                  d="M146.848 161.027C146.848 161.027 146.772 161.086 146.848 161.027C145.783 161.848 144.242 161.58 143.48 160.591L136.814 151.781C135.993 150.715 136.185 149.233 137.25 148.412C138.316 147.591 139.856 147.859 140.618 148.849L147.285 157.659C148.029 158.783 147.837 160.265 146.848 161.027Z"
                  fill="#8BE8FF"
                  fill-opacity="0.2"
                  stroke="#D2F6FF"
                  stroke-opacity="0.2"
                  stroke-width="4"
                />
                <motion.path
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 5, delay: 1.7, type: "tween" }}
                  d="M171.944 124.345C171.336 124.814 170.492 124.978 169.778 124.68L159.244 121.397C157.991 121.029 157.281 119.635 157.649 118.382C158.017 117.128 159.41 116.418 160.664 116.786L171.197 120.069C172.451 120.437 173.161 121.831 172.793 123.085C172.588 123.606 172.325 124.051 171.944 124.345Z"
                  fill="#8BE8FF"
                  fill-opacity="0.2"
                  stroke="#D2F6FF"
                  stroke-opacity="0.2"
                  stroke-width="4"
                />
                <motion.path
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 5, delay: 1.4, type: "tween" }}
                  d="M170.714 79.9333C170.486 80.1092 170.333 80.2265 170.046 80.3263L159.583 83.9021C158.359 84.36 156.947 83.629 156.489 82.4052C156.032 81.1813 156.763 79.7691 157.986 79.3112L168.45 75.7353C169.673 75.2774 171.085 76.0084 171.543 77.2323C171.901 78.1692 171.551 79.2883 170.714 79.9333Z"
                  fill="#8BE8FF"
                  fill-opacity="0.2"
                  stroke="#D2F6FF"
                  stroke-opacity="0.2"
                  stroke-width="4"
                />
                <motion.path
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 5, delay: 1, type: "tween" }}
                  d="M137.268 53.6774C136.431 54.3224 135.259 54.3761 134.386 53.7149C133.32 52.9601 133.032 51.4843 133.786 50.4176L140.163 41.38C140.994 40.2547 142.393 40.0251 143.46 40.7798C144.526 41.5346 144.815 43.0104 144.06 44.0771L137.683 53.1147C137.648 53.3842 137.496 53.5014 137.268 53.6774Z"
                  fill="#8BE8FF"
                  fill-opacity="0.2"
                  stroke="#D2F6FF"
                  stroke-opacity="0.2"
                  stroke-width="4"
                />
                <motion.path
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 5, delay: 0.5, type: "tween" }}
                  d="M101.18 43.0405C100.8 43.3337 100.302 43.4747 99.7455 43.5396C98.4395 43.5758 97.3492 42.4755 97.313 41.1693L97.1696 30.1221C97.1334 28.8158 98.2336 27.7254 99.5397 27.6892C100.846 27.653 101.936 28.7533 101.972 30.0595L102.116 41.1068C102.146 41.9327 101.713 42.6301 101.18 43.0405Z"
                  fill="#8BE8FF"
                  fill-opacity="0.2"
                  stroke="#D2F6FF"
                  stroke-opacity="0.2"
                  stroke-width="4"
                />
                <motion.path
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 5, type: "tween" }}
                  d="M129.904 139.033C109.587 154.69 80.2176 150.883 64.5637 130.564C48.9098 110.246 52.7169 80.8729 73.0336 65.2165C93.3503 49.5601 122.72 53.3667 138.374 73.6854C154.028 94.0041 150.297 123.318 129.904 139.033ZM75.965 69.0215C57.7028 83.0946 54.2974 109.369 68.3683 127.633C82.4393 145.897 108.71 149.302 126.972 135.228C145.234 121.155 148.64 94.8813 134.569 76.6173C120.574 58.2947 94.2273 54.9483 75.965 69.0215Z"
                  fill="#8BE8FF"
                  fill-opacity="0.2"
                  stroke="#D2F6FF"
                  stroke-opacity="0.2"
                  stroke-width="4"
                />
              </motion.svg>
            </div>
          </div>
        </div>
        <motion.img src={mountian} alt="" style={y} className="mount-img" />
      </section>
      <section>
        <div className="right-side-content">
          <div className="center-content">
            <div className="content">
              <p className="quote-title">Creative Assets curated for you</p>
              <div className="quote-container">
                <div className="text-info">
                  Design adds value faster<br></br>than it adds costs
                </div>
                <p className="author">
                  -- Joel Spolsky, Creator of <b>Trello</b>&nbsp;
                </p>
              </div>
            </div>
          </div>
          <div className="text-line">
            <motion.svg
              width="100%"
              height="132"
              viewBox="0 0 1440 132"
              fill="none"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.path
                initial={{ pathLength: 0 }}
                animate={{ pathLength: move ? 1 : 0 }}
                transition={{ duration: 10, type: "tween" }}
                d="M0 66.175L3.60902 63.199L7.21805 60.2297L10.8271 57.2736L14.4361 54.3372L18.0451 51.4271L21.6541 48.5497L25.2632 45.7115L28.8722 42.9187L32.4812 40.1776L36.0902 37.4941L39.6992 34.8744L43.3083 32.3241L46.9173 29.849L50.5263 27.4546L54.1353 25.1461L57.7444 22.9287L61.3534 20.8074L64.9624 18.7867L68.5714 16.8713L72.1805 15.0653L75.7895 13.3729L79.3985 11.7976L83.0075 10.3431L86.6165 9.01255L90.2256 7.80892L93.8346 6.73485L97.4436 5.79278L101.053 4.98476L104.662 4.3126L108.271 3.77779L111.88 3.38152L115.489 3.12467L119.098 3.00779L122.707 3.03118L126.316 3.19474L129.925 3.49816L133.534 3.94072L137.143 4.52147L140.752 5.23908L144.361 6.092L147.97 7.07832L151.579 8.19585L155.188 9.44211L158.797 10.8143L162.406 12.3095L166.015 13.9242L169.624 15.6549L173.233 17.4978L176.842 19.4488L180.451 21.5035L184.06 23.6574L187.669 25.9057L191.278 28.2435L194.887 30.6654L198.496 33.1662L202.105 35.7402L205.714 38.3819L209.323 41.0852L212.932 43.8442L216.541 46.6528L220.15 49.5048L223.759 52.3938L227.368 55.3134L230.977 58.2571L234.586 61.2183L238.195 64.1906L241.805 67.1673L245.414 70.1418L249.023 73.1075L252.632 76.0577L256.241 78.9861L259.85 81.886L263.459 84.751L267.068 87.5748L270.677 90.351L274.286 93.0736L277.895 95.7365L281.504 98.3337L285.113 100.86L288.722 103.308L292.331 105.675L295.94 107.953L299.549 110.139L303.158 112.228L306.767 114.214L310.376 116.093L313.985 117.862L317.594 119.515L321.203 121.051L324.812 122.464L328.421 123.753L332.03 124.914L335.639 125.944L339.248 126.842L342.857 127.604L346.466 128.231L350.075 128.72L353.684 129.07L357.293 129.28L360.902 129.35L364.511 129.28L368.12 129.07L371.729 128.72L375.338 128.231L378.947 127.604L382.556 126.842L386.165 125.944L389.774 124.914L393.383 123.753L396.992 122.464L400.602 121.051L404.211 119.515L407.82 117.862L411.429 116.093L415.038 114.214L418.647 112.228L422.256 110.139L425.865 107.953L429.474 105.675L433.083 103.308L436.692 100.86L440.301 98.3337L443.91 95.7365L447.519 93.0736L451.128 90.351L454.737 87.5748L458.346 84.751L461.955 81.886L465.564 78.9861L469.173 76.0577L472.782 73.1075L476.391 70.1418L480 67.1673L483.609 64.1906L487.218 61.2183L490.827 58.2571L494.436 55.3134L498.045 52.3938L501.654 49.5048L505.263 46.6528L508.872 43.8442L512.481 41.0852L516.09 38.3819L519.699 35.7402L523.308 33.1662L526.917 30.6654L530.526 28.2435L534.135 25.9057L537.744 23.6574L541.353 21.5035L544.962 19.4488L548.571 17.4978L552.18 15.6549L555.789 13.9242L559.399 12.3095L563.008 10.8143L566.617 9.44211L570.226 8.19585L573.835 7.07832L577.444 6.092L581.053 5.23908L584.662 4.52147L588.271 3.94072L591.88 3.49816L595.489 3.19474L599.098 3.03118L602.707 3.00779L606.316 3.12467L609.925 3.38152L613.534 3.77779L617.143 4.3126L620.752 4.98476L624.361 5.79278L627.97 6.73485L631.579 7.80892L635.188 9.01255L638.797 10.3431L642.406 11.7976L646.015 13.3729L649.624 15.0653L653.233 16.8713L656.842 18.7867L660.451 20.8074L664.06 22.9287L667.669 25.1461L671.278 27.4546L674.887 29.849L678.496 32.3241L682.105 34.8744L685.714 37.4941L689.323 40.1776L692.932 42.9187L696.541 45.7115L700.15 48.5497L703.759 51.4271L707.368 54.3372L710.977 57.2736L714.586 60.2297L718.196 63.199L721.805 66.175L725.414 69.151L729.023 72.1203L732.632 75.0764L736.241 78.0128L739.85 80.9229L743.459 83.8003L747.068 86.6385L750.677 89.4313L754.286 92.1724L757.895 94.8558L761.504 97.4756L765.113 100.026L768.722 102.501L772.331 104.895L775.94 107.204L779.549 109.421L783.158 111.543L786.767 113.563L790.376 115.479L793.985 117.285L797.594 118.977L801.203 120.552L804.812 122.007L808.421 123.337L812.03 124.541L815.639 125.615L819.248 126.557L822.857 127.365L826.466 128.037L830.075 128.572L833.684 128.968L837.293 129.225L840.902 129.342L844.511 129.319L848.12 129.155L851.729 128.852L855.338 128.409L858.947 127.829L862.556 127.111L866.165 126.258L869.774 125.272L873.383 124.154L876.992 122.908L880.602 121.536L884.211 120.041L887.82 118.426L891.429 116.695L895.038 114.852L898.647 112.901L902.256 110.846L905.865 108.693L909.474 106.444L913.083 104.107L916.692 101.685L920.301 99.1838L923.91 96.6098L927.519 93.9681L931.128 91.2648L934.737 88.5058L938.346 85.6971L941.955 82.8452L945.564 79.9562L949.173 77.0366L952.782 74.0929L956.391 71.1317L960 68.1594L963.609 65.1827L967.218 62.2082L970.827 59.2425L974.436 56.2923L978.045 53.3639L981.654 50.464L985.263 47.599L988.872 44.7752L992.481 41.999L996.09 39.2764L999.699 36.6135L1003.31 34.0163L1006.92 31.4905L1010.53 29.0417L1014.14 26.6753L1017.74 24.3966L1021.35 22.2107L1024.96 20.1224L1028.57 18.1364L1032.18 16.257L1035.79 14.4884L1039.4 12.8346L1043.01 11.2992L1046.62 9.88567L1050.23 8.5971L1053.83 7.43637L1057.44 6.40605L1061.05 5.50844L1064.66 4.74552L1068.27 4.11901L1071.88 3.63026L1075.49 3.28037L1079.1 3.07014L1082.71 3L1086.32 3.07014L1089.92 3.28037L1093.53 3.63026L1097.14 4.11901L1100.75 4.74552L1104.36 5.50844L1107.97 6.40605L1111.58 7.43637L1115.19 8.5971L1118.8 9.88567L1122.41 11.2992L1126.02 12.8346L1129.62 14.4884L1133.23 16.257L1136.84 18.1364L1140.45 20.1224L1144.06 22.2107L1147.67 24.3966L1151.28 26.6753L1154.89 29.0417L1158.5 31.4905L1162.11 34.0163L1165.71 36.6135L1169.32 39.2764L1172.93 41.999L1176.54 44.7752L1180.15 47.599L1183.76 50.464L1187.37 53.3639L1190.98 56.2923L1194.59 59.2425L1198.2 62.2082L1201.8 65.1827L1205.41 68.1594L1209.02 71.1317L1212.63 74.0929L1216.24 77.0366L1219.85 79.9562L1223.46 82.8452L1227.07 85.6971L1230.68 88.5058L1234.29 91.2648L1237.89 93.9681L1241.5 96.6098L1245.11 99.1838L1248.72 101.685L1252.33 104.107L1255.94 106.444L1259.55 108.693L1263.16 110.846L1266.77 112.901L1270.38 114.852L1273.98 116.695L1277.59 118.426L1281.2 120.041L1284.81 121.536L1288.42 122.908L1292.03 124.154L1295.64 125.272L1299.25 126.258L1302.86 127.111L1306.47 127.829L1310.08 128.409L1313.68 128.852L1317.29 129.155L1320.9 129.319L1324.51 129.342L1328.12 129.225L1331.73 128.968L1335.34 128.572L1338.95 128.037L1342.56 127.365L1346.17 126.557L1349.77 125.615L1353.38 124.541L1356.99 123.337L1360.6 122.007L1364.21 120.552L1367.82 118.977L1371.43 117.285L1375.04 115.479L1378.65 113.563L1382.26 111.543L1385.86 109.421L1389.47 107.204L1393.08 104.895L1396.69 102.501L1400.3 100.026L1403.91 97.4756L1407.52 94.8558L1411.13 92.1724L1414.74 89.4313L1418.35 86.6385L1421.95 83.8003L1425.56 80.9229L1429.17 78.0128L1432.78 75.0764L1436.39 72.1203L1440 69.151"
                stroke="#4b8fa0"
                stroke-width="4"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </motion.svg>
          </div>
        </div>
        <section className="section-1">
          <div className="center-content">
            <div className="section-1-cont">
              <div className="circle">
                <div>
                  <h2>Sell Your Creative Assets Here</h2>
                  <p>
                    Ipsum passages, and more recently with desktop publishing
                    software like Aldus PageMaker including versions of Lorem
                    Ipsum.
                  </p>
                  <Link to="/signup">
                    Start by signing up&nbsp;
                    <BsArrowRightCircleFill size={20} />
                  </Link>
                </div>
              </div>
            </div>
            <div className="section-2-cont">
              <div className="price-image">
                <img src={prcimg} alt="" />
              </div>
            </div>
          </div>
        </section>
        <section className="about-section">
          <div className="section-2">
            <p className="text-center page-small-text">
              Great Design, A Great Business
            </p>
            <div className="first-container">
              <h2 className="text-center">
                High Quality Creative Assets for Less
              </h2>
              <div className="tabs-container">
                <div className="t-button">
                  <Link
                    to=""
                    className={tab === 1 ? "active" : ""}
                    id="Per"
                    onClick={() => ToggleTab(1)}
                  >
                    <CgTab size={23} />
                    &nbsp;Pay Per Asset
                  </Link>
                  <Link
                    to=""
                    className={tab === 2 ? "active" : ""}
                    id="Once"
                    onClick={() => ToggleTab(2)}
                  >
                    <CgTab size={23} />
                    &nbsp;Subscription
                  </Link>
                </div>
                <div className="tabs-content-box">
                  <div
                    className={
                      tab === 1 ? "package-1 activate-package" : "package-1"
                    }
                  >
                    <div>
                      <h3>Pay for each Asset you download</h3>
                      <p>
                        Created for all those teams who want access to unlimited
                        creative assets. Designed to facilitate collaborative
                        work and an inexhaustible source of inspiration with the
                        easiest management structure. All the benefits of a
                        Premium plan A single administrator account to manage
                        everything from it Personalized plan according to your
                        needs Technical and legal advice The greater number of
                        seats, the greater the discount
                      </p>
                    </div>
                    <img src={mbag} alt="" />
                  </div>

                  <div
                    className={
                      tab === 2 ? "package-2 activate-package" : "package-2"
                    }
                  >
                    <div>
                      <h3>Subscribe and Pay Monthly</h3>
                      <p>
                        Created for all those teams who want access to unlimited
                        creative assets. Designed to facilitate collaborative
                        work and an inexhaustible source of inspiration with the
                        easiest management structure.
                        <div className="d-flex align-items-center">
                          <div className="pt-4">
                            <ul>
                              <li>
                                <p>&#x2713;</p>&nbsp;Premium vectors
                              </li>
                              <li>
                                <p>&#x2713;</p>&nbsp;HD stock photos
                              </li>
                            </ul>
                            <ul>
                              <li>
                                <p>&#x2713;</p>&nbsp;Premium PSD files
                              </li>
                              <li>
                                <p>&#x2713;</p>&nbsp;Presets and LUTs
                              </li>
                            </ul>
                          </div>
                          <div className="pt-4 mx-auto">
                            <h5 className="d-flex align-items-center">
                              <p className="star-icon m-0">&#x272A;</p>
                              &nbsp;Unlimited Downloads
                            </h5>
                          </div>
                        </div>
                      </p>
                    </div>
                    <img src={mbag2} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Landing;
