// src/components/Layout.jsx
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Navbar />
      <main style={{ flex: 1, width: "100%" }}>
        <Outlet />   {/* This is where HomePage/About/Contact will render */}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;


