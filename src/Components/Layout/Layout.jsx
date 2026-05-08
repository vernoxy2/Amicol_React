import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FloatingWhatsApp from "../UI/FloatingWhatsApp";

const Layout = ({ children }) => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <main className="min-h-screen">{children}</main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Layout;
