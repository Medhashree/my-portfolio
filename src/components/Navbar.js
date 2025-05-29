import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Menu icons

const sections = ["home", "skills", "experience", "projects", "education", "contact"];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offsets = sections.map((id) => {
        const el = document.getElementById(id);
        return {
          id,
          offset: el ? Math.abs(el.getBoundingClientRect().top) : Infinity
        };
      });

      const current = offsets.reduce((min, curr) => (curr.offset < min.offset ? curr : min), offsets[0]);
      setActive(current.id);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    setActive(id);
    setIsMobileOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-90 z-50 px-6 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-xl font-bold text-white">
          My <span className="text-purple-400">Portfolio</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {sections.map((sec) => (
            <button
              key={sec}
              onClick={() => handleClick(sec)}
              className={`capitalize text-white transition hover:text-purple-400 ${
                active === sec ? "border-b-2 border-purple-400 text-purple-400" : ""
              }`}
            >
              {sec}
            </button>
          ))}
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileOpen(!isMobileOpen)} className="text-white text-2xl">
            {isMobileOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className="md:hidden mt-4 flex flex-col items-start space-y-4 px-6">
          {sections.map((sec) => (
            <button
              key={sec}
              onClick={() => handleClick(sec)}
              className={`capitalize text-white transition hover:text-purple-400 w-full text-left ${
                active === sec ? "text-purple-400" : ""
              }`}
            >
              {sec}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
