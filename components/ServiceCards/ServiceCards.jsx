import React from "react";
import { FaMobileAlt, FaCode, FaServer, FaCloud } from "react-icons/fa"; // Icons for the services

const services = [
  { icon: FaMobileAlt, title: "Mobile Apps", description: "Professional development of applications for Android and iOS." },
  { icon: FaCode, title: "Web Development", description: "High-quality development of sites at the professional level." },
  { icon: FaServer, title: "Backend Development", description: "High-performance backend services designed for scalability and seamless user experience." },
  { icon: FaCloud, title: "Cloud Services", description: "Reliable and scalable cloud infrastructure for modern applications." }
];

export default function ServicesGrid() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full max-w-4xl mx-auto mt-10 px-4">
      {services.map((service, index) => (
        <div 
          key={index} 
          className="bg-[#1E1E1E] border border-gray-800 p-6 rounded-xl shadow-md flex flex-col md:flex-row items-center md:items-start gap-4 hover:shadow-lg transition duration-300"
        >
          {/* Icon */}
          <div className="text-[#fce469] flex items-center justify-center text-4xl w-full md:w-auto">
            {React.createElement(service.icon, { className: "w-12 h-12" })} 
          </div>

          {/* Text Content */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-white">{service.title}</h3>
            <p className="text-gray-400 text-sm">{service.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
