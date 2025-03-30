"use client";
import React, { useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa"; // Import dropdown icon

const projects = [
  {
    type: "Web Development",
    items: [
      {
        title: "SoloCorp",
        description: "A fully responsive website built for a startup.",
        technologies: ["Next.js", "Tailwind CSS", "MongoDB", "Express.js"],
        image: "./projects/solocorp.png",
      },
      {
        title: "MTTF Hub",
        description: "A fully functional website for an NGO showing their work and their services including payment gateways and many more",
        technologies: ["React", "Next.js", "MongoDB"],
        image: "/projects/MTTFHUB.png",
      },
    ],
  },
  // {
  //   type: "Mobile Apps",
  //   items: [
  //     {
  //       title: "Task Manager App",
  //       description: "A cross-platform task management app with real-time syncing.",
  //       technologies: ["React Native", "Expo", "MongoDB"],
  //       image: "/projects/task-manager.jpg",
  //     },
  //   ],
  // },
];

// Extracting unique categories
const categories = ["All", ...projects.map((p) => p.type)];

function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // Filtering projects based on category selection
  const filteredProjects =
    selectedCategory === "All"
      ? projects.flatMap((p) => p.items) // Flatten projects for "All"
      : projects.find((p) => p.type === selectedCategory)?.items || [];

  return (
    <div className="h-full w-full px-4 md:px-8 py-6 space-y-6">
      <div className="text-3xl font-bold text-gray-100 relative w-fit">
        Portfolio
        <div className="h-1 w-1/2 bg-[#fce469] rounded-full mt-5 p-1"></div>
      </div>

      {/* Category Filter */}
      <div className="relative">
        {/* Dropdown for Small Screens */}
        <div className="md:hidden">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center justify-between w-full bg-gray-900 text-gray-300 py-2 px-4 rounded-lg border border-gray-700"
          >
            {selectedCategory}
            <FaChevronDown
              className={`ml-2 transition-transform ${
                dropdownOpen ? "rotate-180" : "rotate-0"
              }`}
            />
          </button>
          {dropdownOpen && (
            <ul className="absolute left-0 w-full bg-gray-800 border border-gray-700 rounded-lg mt-2 z-10">
              {categories.map((category, index) => (
                <li
                  key={index}
                  onClick={() => {
                    setSelectedCategory(category);
                    setDropdownOpen(false);
                  }}
                  className={`px-4 py-2 cursor-pointer transition-colors ${
                    selectedCategory === category
                      ? "bg-[#fce469] text-gray-900 font-semibold"
                      : "hover:bg-gray-700 text-gray-300"
                  }`}
                >
                  {category}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Text-based navigation for Large Screens */}
        <div className="hidden md:flex space-x-6 overflow-x-auto custom-scrollbar py-2 text-lg font-medium text-gray-400">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setSelectedCategory(category)}
              className={`relative transition-all duration-300 
                ${
                  selectedCategory === category
                    ? "text-[#fce469] after:w-full" // Highlighted
                    : "hover:text-gray-300 after:w-0" // Default
                } 
                after:block after:h-[2px] after:bg-[#fce469] after:mt-1 after:transition-all after:duration-300`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Display */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, idx) => (
          <div
            key={idx}
            className="bg-[#2b2b2b] p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-40 object-cover rounded-md mb-3"
            />
            <h3 className="text-xl font-bold text-white">{project.title}</h3>
            <p className="text-gray-300">{project.description}</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="bg-[#fce469] text-gray-900 px-2 py-1 text-xs font-semibold rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
