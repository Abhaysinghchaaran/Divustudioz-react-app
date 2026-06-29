import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import About from "./pages/AboutPage";
import Services from "./pages/Services"; 
import ScriptedMovies from "./pages/ScriptedMovies";
import Contact from "./pages/ContactPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="services/scriptedMovies" element={<ScriptedMovies />} />
        <Route path="services/ui-ux-design" element={<div>UI/UX Design Service</div>} />
        <Route path="services/security-audit" element={<div>Security Audit Service</div>} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;

