import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import About from "./pages/AboutPage";
import Services from "./pages/Services"; 
import ScriptedMovies from "./pages/ScriptedMovies";
import Contact from "./pages/ContactPage";
import EgocentricContent from "./pages/EgocentricContent";
import EpisodicContent from "./pages/EpisodicContent";
import Animation from "./pages/Animation";
import Information from "./pages/Information";
import InteractiveAnimation from "./pages/InteractiveAnimation";
import ContentDistribution from "./pages/ContentDistribution";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path= "Services/ContentDistribution" element={<ContentDistribution/>} />
        <Route path="services/scriptedMovies" element={<ScriptedMovies />} />
         <Route path="services/episodicContent" element={<EpisodicContent />} />
         <Route path="services/animation" element={<Animation />} />
         <Route path="services/egocentricContent" element={<EgocentricContent />} />
         <Route path="services/information" element={<Information />} />
         <Route path="services/interactiveAnimation" element={<Animation />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;

