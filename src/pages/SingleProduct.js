import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { RiVipCrownLine } from "react-icons/ri";
import {
  AiOutlineHeart,
  AiOutlineFileUnknown,
  AiOutlineDownload,
} from "react-icons/ai";
import { TbPremiumRights } from "react-icons/tb";
import { GrLicense } from "react-icons/gr";

const SingleProduct = () => {
  return (
    <div>
      <section className="product-section-wrapper">
        <div className="container-xxl">
          <div className="product-container">
            <div className="detail-container">
              <div className="overlay">
                <div className="p-left-content">
                  <div className="gallery-photo">
                    <img
                      src="https://artist.com/art-recognition-and-education/wp-content/themes/artist-blog/media-files/2016/05/abstract-6.jpg"
                      alt=""
                    />
                  </div>

                  <RiVipCrownLine size={40} className="prod-icon" />
                </div>
              </div>
              <div className="p-right-content">
                <div className="asset-details">
                  <div className="top-details">
                    <p className="free-paid">
                      <TbPremiumRights size={25} />
                      &nbsp;<strong>Paid Asset</strong>
                    </p>
                    <div className="notice-content">
                      <p className="asset-notice mb-3">
                        Unlock this file by clicking on download button.{" "}
                        <br></br> Do you have an account already?
                      </p>
                      <span className="premium">Premium Content</span>

                      <p className="mt-3 mb-2">
                        <Link>Log in</Link> or <Link>Sign up</Link> now.
                      </p>
                    </div>
                  </div>
                  <br></br>
                  <div className="middle-details">
                    <p className="topic-des-asset mb-2">Description</p>
                    <p className="asset-description mb-2">
                      The Company may, at any moment, and without incurring in
                      any responsibility towards the User, modify the content of
                      the Website or the Services, limit or modify the
                      conditions or cease to provide some or all the Services
                      and features available or deactivate and delete.
                    </p>
                    <Link to="/checkout" className="btn-download">
                      <AiOutlineDownload size={20} />
                      &nbsp;Download
                    </Link>
                  </div>
                  <div className="bottom-details">
                    <p className="lincensed-ornot mb-0">
                      <GrLicense className="license-color" size={12} />
                      &nbsp;Commercial License
                    </p>
                    <p className="type-of-asset mb-0">
                      <AiOutlineFileUnknown size={13} />
                      &nbsp;File format: JPG
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="title-text">
              <h3 className="asset-name m-0">
                Simple white background with smooth lines in light colors
              </h3>
              <p className="prod-icon2 m-0">
                <AiOutlineHeart size={20} />
                &nbsp;Like
              </p>
            </div>
            <div className="related-content">
              <h5>You may also like</h5>
              <div className="card-list">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SingleProduct;
