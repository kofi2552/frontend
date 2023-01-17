import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { RiVipCrownLine } from "react-icons/ri";
import {
  AiOutlineHeart,
  AiOutlineFileUnknown,
  AiOutlineDownload,
} from "react-icons/ai";
// import { TbPremiumRights } from "react-icons/tb";
import { GrLicense } from "react-icons/gr";

const SingleProduct = () => {
  return (
    <div>
      <section className="product-section-wrapper">
        <div className="container-fluid">
          <div className="detail-container">
            <div className="p-left-content">
              <img
                src="https://images.unsplash.com/photo-1598770220477-cec551a23f53?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXJ0aXN0aWN8ZW58MHx8MHx8&w=1000&q=80"
                alt=""
                loading="lazy"
              />
              <div className="title-text">
                <h3 className="asset-name m-0">
                  Simple white background with smooth lines in light colors
                </h3>
                <p className="prod-icon2 m-0">
                  <AiOutlineHeart size={20} />
                  &nbsp;Like
                </p>
              </div>
            </div>
            <div className="mobile-like">
              <p className="prod-icon2 m-0">
                <AiOutlineHeart size={20} />
                &nbsp;Like
              </p>
            </div>

            <div className="p-right-content">
              <div className="asset-details">
                <div className="top-details">
                  <p className="free-paid">
                    <RiVipCrownLine className="mr-1" size={22} />
                    &nbsp;<strong>Paid Asset</strong>
                  </p>
                  <div className="notice-content">
                    <p className="asset-notice">
                      Access this file by clicking<br></br>on the download
                      button.
                      <br></br>
                    </p>

                    <Link to="" className="premium">
                      Explore More
                    </Link>

                    <div className="cta-Links">
                      <Link>Single file Purchase</Link> or&nbsp;
                      <Link>Subscribtion</Link>
                    </div>
                  </div>
                </div>
                <div className="btm-details">
                  <div className="middle-details">
                    <Link to="/checkout" className="btn-download">
                      <AiOutlineDownload size={20} />
                      &nbsp;Download
                    </Link>
                    <Link to="/checkout" className="btn-download2">
                      <AiOutlineDownload size={20} />
                      &nbsp;Contact Creator
                    </Link>
                  </div>
                  <div className="bottom-details">
                    <p className="lincensed-ornot mb-2">
                      <GrLicense className="license-color" size={16} />
                      &nbsp;Commercial License
                    </p>
                    <p className="type-of-asset mb-0">
                      <AiOutlineFileUnknown
                        className="license-color"
                        size={18}
                      />
                      &nbsp;File format: JPG
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="middle-content">
            <p className="topic-des pt-3 mb-1">Description</p>
            <p className="asset-description">
              The Company may, at any moment, and without incurring in any
              responsibility towards the User, modify the content of the Website
              or the Services, limit or modify the conditions or cease to
              provide some or all the Services and features available or
              deactivate and delete.
            </p>
          </div>
          <div className="related-content">
            <h5 className="mb-3">You may also like</h5>
            <div className="card-list">
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SingleProduct;
