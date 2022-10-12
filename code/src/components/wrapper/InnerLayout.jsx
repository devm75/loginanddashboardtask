import React from "react";
import { Sidebar } from "../../subcomponents/Sidebar";
import { Topbar } from "../../subcomponents/Topbar";

export const InnerLayout = ({ children }) => {
  return (
    <div>
      <div>
        <Sidebar />
        <Topbar />

        <div className="inner-layout-content-container">{children}</div>
      </div>
    </div>
  );
};
