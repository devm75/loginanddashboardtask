import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { HiUserCircle } from "react-icons/hi";
import { VscThreeBars } from "react-icons/vsc";
import { SidebarMobile } from "./SidebarMobile";

export const Topbar = () => {
  const [showDropdownMenu, setShowDropDownMenu] = useState(false);
  return (
    <div className="inner-layout-topbar-container">
      <VscThreeBars
        className="dropdown-mobile-bar"
        onClick={() => setShowDropDownMenu(!showDropdownMenu)}
      />
      {showDropdownMenu && <SidebarMobile />}
      <div className="searchbar-and-btn-container">
        <div className="topbar-searchbar-container">
          <input
            className="topbar-input-element"
            type="text"
            placeholder="Enter a manufacturer or a Model. Eg Gas compressor, Generator"
          ></input>
          <span className="topbar-search-icon">
            <AiOutlineSearch style={{ height: "25px", paddingTop: "10px" }} />
          </span>
        </div>
        <div className="topbar-btn-container">
          <button className="topbar-add-listing-btn">Add Listing</button>
          <button className="topbar-verify-btn">Verify</button>
        </div>
      </div>
      <div className="notification-and-profile-container">
        <span className="topbar-icon-container">
          <MdOutlineNotificationsActive style={{ fontSize: "20px" }} />
        </span>
        <span className="topbar-user-icon">
          <HiUserCircle style={{ fontSize: "40px" }} />
        </span>
      </div>
    </div>
  );
};
