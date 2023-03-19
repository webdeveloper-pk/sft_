import React from "react";
import Navbar from "./common/Navbar";
import Footer from "./common/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="bg-medium-gray px-6 md:px-8 lg:px-16 layout-bg">
        {children}
      </div>
      <Footer />
    </>
  );
};

export default Layout;
