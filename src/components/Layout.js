import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import AdvertisementBar from "./AdvertisementBar";

const Layout = ({ children }) => {
  const location = useLocation();

  // Hide sidebars when in sign-in or sign-up
  const hideBars =
    location.pathname === "/signin" || location.pathname === "/signup";

  return (
    <div className="layout-container">
      <Navbar />
      <div className="d-flex" style={{ minHeight: "calc(100vh - 56px)" }}>
        {!hideBars && <Sidebar />}
        <div
          className="flex-grow-1 d-flex justify-content-center align-items-center p-4 bg-light"
          style={{ minHeight: "calc(100vh - 56px)" }}
        >
          {children}
        </div>
        {!hideBars && <AdvertisementBar />}
      </div>
    </div>
  );
};

export default Layout;
