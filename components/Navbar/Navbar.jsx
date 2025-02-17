"use client"
import React, { useState, useEffect } from "react";
import Logo from "../Logo/Logo";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled || navOpen ? "bg-white shadow-lg py-3" : "bg-transparent shadow-none py-4"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-6 lg:px-10">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Logo navOpen={navOpen} />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-lg">
          {["Home", "About", "Services", "Skills", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`relative group font-medium transition-all duration-300 text-gray-700 hover:text-blue-600`}
            >
              {item}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* CV Button */}
        <div className="hidden lg:block">
          <a
            href="/resume.pdf"
            download
            className="bg-blue-600 text-white px-6 py-2 rounded-full text-lg font-medium shadow-md hover:bg-blue-700 transition-all duration-300"
          >
            Download CV
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setNavOpen(!navOpen)}
        >
          {navOpen ? <FaTimes /> : <FaBars className="text-white sm:text-gray-700" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {navOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 transition-all duration-300">
          {["Home", "About", "Services", "Skills", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block text-center py-2 text-lg text-gray-700 hover:bg-blue-100 transition-all duration-300"
              onClick={() => setNavOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;

