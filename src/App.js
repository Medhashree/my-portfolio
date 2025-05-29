import "./App.css";
import React from "react";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Education from "./pages/Education";
import Contact from "./pages/Contact";
import StarBackground from './components/StarBackground';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="relative bg-black text-white">
      <StarBackground />
      <Navbar />
      <div className="relative z-10 pt-20 space-y-24">
        <section id="home" className="pb-15"><Home /></section>
        <section id="skills" className="scroll-mt-24 pb-15"><Skills /></section>
        <section id="experience" className="scroll-mt-24 pb-20"><Experience /></section>
        <section id="projects" className="scroll-mt-18 pb-15"><Projects /></section>
        <section id="education" className="scroll-mt-24 pb-15"><Education /></section>
        <section id="contact" className="scroll-mt-15 pb-15"><Contact /></section>
      </div>
      <Footer />
    </div>
  );
}

export default App;
