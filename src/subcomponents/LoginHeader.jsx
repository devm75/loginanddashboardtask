import React from "react";
import logoImage from "../assets/images/powercozmologo.png";

export const LoginHeader = () => {
  return (
    <div className="login-header">
      <div className="logo-container">
        <img
          style={{ width: "200px", height: "40px" }}
          src={logoImage}
          alt="logo"
        />
      </div>
      <div className="navbar-container">
        <div className="nav-item">
          <p>Home</p>
        </div>
        <div className="nav-item">
          <p>About US</p>
        </div>
        <div className="nav-item">
          <p>Sell On PowerCozmo</p>
        </div>
        <div className="nav-item">
          <p>Categories</p>
        </div>
        <div className="nav-item">
          <p>Contact Us</p>
        </div>
        <div className="nav-item">
          <p>Our Products</p>
        </div>
        <div className="nav-item">
          <p>Blog</p>
        </div>
      </div>

      <div className="search-bar-container">
        <input
          className="header-search-box"
          type="text"
          placeholder="Enter a manufacturer ro a Model. Eg G"
        ></input>
      </div>
     
    </div>
  );
};
