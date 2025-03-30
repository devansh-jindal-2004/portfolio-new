import React, { useState, useRef, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";

const CategoryFilter = ({ selectedCategory, setSelectedCategory, categories }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Dropdown for Small Screens */}
      <div className="md:hidden relative">
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="flex items-center justify-between w-full bg-[#2b2b2b] text-gray-300 py-2 px-4 rounded-lg border border-gray-700 focus:outline-none"
        >
          {selectedCategory}
          <FaChevronDown className={`ml-2 transition-transform ${dropdownOpen ? "rotate-180" : "rotate-0"}`} />
        </button>
        <ul
          className={`absolute left-0 w-full bg-gray-800 border border-gray-700 rounded-lg mt-2 z-10 transition-all duration-300 origin-top ${
            dropdownOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
          }`}
        >
          {categories.map((category, index) => (
            <li
              key={index}
              onClick={() => {
                setSelectedCategory(category);
                setDropdownOpen(false);
              }}
              className={`px-4 py-2 cursor-pointer transition-colors ${
                selectedCategory === category ? "bg-[#fce469] text-gray-900 font-semibold" : "hover:bg-gray-700 text-gray-300"
              }`}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>

      {/* Text-based navigation for Large Screens */}
      <div className="hidden md:flex space-x-6 overflow-x-auto custom-scrollbar py-2 text-lg font-medium text-gray-400">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => setSelectedCategory(category)}
            className={`relative transition-all duration-300 ${
              selectedCategory === category ? "text-[#fce469] after:w-full" : "hover:text-gray-300 after:w-0"
            } after:block after:h-[2px] after:bg-[#fce469] after:mt-1 after:transition-all after:duration-300`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
