import React from "react";
import "./Categories.css";
import { Link } from "react-router-dom";
import { BiImages } from "react-icons/bi";
import {
  MdOutlineCategory,
  MdOutlineVideoLibrary,
  MdOutlineDraw,
} from "react-icons/md";
import { CgDesignmodo } from "react-icons/cg";
import { HiOutlineTemplate } from "react-icons/hi";
import { RiPaintLine } from "react-icons/ri";

const Categories = () => {
  return (
    <div className="tags-container">
      <div className="mainfilterbox">
        <ul className="tag-list">
          <li>
            <Link className="item" to="/home">
              <BiImages className="icon" />
              All images
            </Link>
          </li>
          <li>
            <Link className="item" to="/product-type/assets">
              <MdOutlineCategory className="icon" />
              Creative Assets
            </Link>
          </li>
          <li>
            <Link className="item" to="/product-type/video">
              <MdOutlineVideoLibrary className="icon" />
              Video Presets & luts
            </Link>
          </li>
          <li>
            <Link className="item" to="/product-type/graphics">
              <CgDesignmodo className="icon" />
              Graphics Design Resources
            </Link>
          </li>
          <li>
            <Link className="item" to="/product-type/ui">
              <HiOutlineTemplate className="icon" />
              Ui/Ux Templates
            </Link>
          </li>
          <li>
            <Link className="item" to="/product-type/craft">
              <RiPaintLine className="icon" />
              Artistic Paintings
            </Link>
          </li>
          <li>
            <Link className="item" to="/product-type/african">
              <MdOutlineDraw className="icon" />
              African Assets
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Categories;
