import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/images/powercozmologo.png";
import { menubarData } from "../assets/staticData";

export const SidebarMobile = () => {
  const navigate = useNavigate();
  const [data, setData] = useState(menubarData);

  const handleMenuSelection = (menuItem) => {
    console.log(menuItem, "Enjoyw");
    const selectedId = menuItem?.id;

    setData((prev) =>
      prev.map((element) => {
        if (element?.id === selectedId) {
          return {
            ...element,
            selected: true,
          };
        } else {
          return {
            ...element,
            selected: false,
          };
        }
      })
    );

    // here we can implement navigation for going to particular page on clicking the menu item

    //   -----NAVIGATION-------
  };

  return (
    <div className="sidebar-container-mobile">
      <div className="sidebar-logo-container">
        <img
          style={{
            width: "190px",
            height: "40px",
          }}
          src={logo}
          alt="logo-sidebar"
        />
      </div>
      <div className="sidebar-menu-items-container">
        {data?.map((element) => {
          return (
            <div
              key={element?.id}
              onClick={() => {
                handleMenuSelection(element);
              }}
              className={`sidebar-menu-item ${
                element?.value === "Log Out" ? "logout-btn" : ""
              } ${element?.selected === true ? "selected-menu-item" : ""}`}
            >
              {element?.icon} {element?.value}
            </div>
          );
        })}
      </div>
    </div>
  );
};
