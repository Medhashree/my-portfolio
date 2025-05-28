import React, { useState, useEffect } from "react";

const sections = ["home", "experience", "skills", "projects", "education", "contact"];

export default function Navbar() {
  const [active, setActive] = useState("home");

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
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-90 z-50 flex items-center justify-between px-6 py-4 shadow-md">
      <div className="text-xl font-bold text-white">My <span className="text-purple-400">Portfolio</span></div>
      <div className="flex space-x-6">
        {sections.map((sec) => (
          <button
            key={sec}
            onClick={() => handleClick(sec)}
            className={`capitalize text-white transition hover:text-purple-400 ${
              active === sec ? "border-b-2 border-purple-400 text-purple-400": ""
            }`}
          >
            {sec}
          </button>
        ))}
      </div>
    </nav>
  );
}
