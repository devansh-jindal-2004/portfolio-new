import React from "react";
import { motion } from "framer-motion";

function Navbar({ setSelected, selected }) {
  const links = ["About", "Resume", "Portfolio", "Contact"];

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }} // Adjust speed with 'duration'
      className="fixed xl:absolute right-0 bottom-0 xl:top-0 
        bg-gradient-to-r from-[#0f0f0f] via-[#272727] to-[#0f0f0f] 
        xl:bg-gradient-to-bl xl:from-[#161616] xl:via-[#2a2a2a]/90 xl:to-[#1a1a1a] 
        backdrop-blur-md flex xl:px-5 py-2 xl:py-3 rounded-t-2xl xl:rounded-t-none 
        xl:rounded-se-2xl xl:rounded-es-3xl h-fit w-full xl:w-fit 
        justify-center items-center z-50 
        xl:shadow-[rgba(252,228,105,0.4)_-4px_4px_220px] 
        border border-gray-100/10 border-t-0 xl:border-t 
        shadow-[0px_-10px_50px_rgba(0,0,0,0.95)] transition-all duration-300"
    >
      <ul className="xl:space-y-0 xl:space-x-6 flex gap-5 py-2 px-10 pb-5 pt-3">
        {links.map((link, index) => (
          <li key={index}>
            <button
              onClick={() => setSelected(link)}
              className={`text-base font-medium transition duration-300 relative group ${
                selected === link
                  ? "text-[#fce469] xl:hover:text-[#fce469]/50"
                  : "text-gray-300 hover:text-gray-300/50"
              }`}
            >
              {link}
              {/* Underline effect on hover */}
              <span className="absolute left-0 bottom-[-2px] w-full h-[2px] bg-[#fce469] scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </button>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default Navbar;
