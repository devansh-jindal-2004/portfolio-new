"use client";
import React, { useEffect, useState } from "react";
import projects from "./projects";
import CategoryFilter from "./CategoryFilter";
import ProjectCard from "./ProjectCard";

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const categories = ["All", ...projects.map((p) => p.type)];

  // Filtering projects based on category selection
  const filteredProjects =
    selectedCategory === "All"
      ? projects.flatMap((p) => p.items)
      : projects.find((p) => p.type === selectedCategory)?.items || [];

  return (
    <div className="h-full w-full px-4 md:px-8 py-6 space-y-6">
      <div className="text-3xl font-bold text-gray-100 relative w-fit">
        Portfolio
        <div className="h-1 w-1/2 bg-[#fce469] rounded-full mt-5 p-1"></div>
      </div>

      {/* Category Filter */}
      <CategoryFilter selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} categories={categories} />

      {/* Projects Display */}
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredProjects.map((project, idx) => (
          <ProjectCard key={idx} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
