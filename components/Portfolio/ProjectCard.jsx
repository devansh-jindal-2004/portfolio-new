import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-[#2b2b2b] p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105">
      <img src={project.image} alt={project.title} className="w-full h-40 object-cover rounded-md mb-3" />
      <h3 className="text-xl font-bold text-white">{project.title}</h3>
      <p className="text-gray-300">{project.description}</p>
      <div className="mt-2 flex flex-wrap gap-2">
        {project.technologies.map((tech, i) => (
          <span key={i} className="bg-[#fce469] text-gray-900 px-2 py-1 text-xs font-semibold rounded">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
