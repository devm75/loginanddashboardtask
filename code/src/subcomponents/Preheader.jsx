import React from "react";
import { GrFacebookOption } from "react-icons/gr";
import { BsTwitter } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { AiFillPhone } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";

export const Preheader = () => {
  return (
    <div className="login-page-preheader">
      <div className="left-content-container">
        <div className="social-icons-container">
          <GrFacebookOption />
          <BsTwitter />
          <FaInstagram />
        </div>
        <div className="contact-container">
          <AiFillPhone />
          <span>+962787000500</span>
        </div>
        <div className="email-container">
          <MdOutlineMailOutline />
          <span>info@powercozmo.com</span>
        </div>
      </div>
      <div className="right-content-container">
        <div>
          <span>LOGIN</span>
        </div>
        <div>SIGN UP</div>
        <div>
          <AiFillHeart />
        </div>
        <div>
          <span>Manage My free Listing</span>
        </div>
      </div>
    </div>
  );
};
