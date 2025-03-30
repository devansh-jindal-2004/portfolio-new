import React from "react";
import { motion } from "framer-motion";

function Navbar({ setSelected, selected }) {
  const links = ["About", "Resume", "Portfolio", "Contact"];

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed lg:absolute right-0 bottom-0 lg:top-0 
        bg-[radial-gradient(circle_at_center,_#fde47d_10%,_#f8c963_40%,_#e9a640_80%)]  
        lg:bg-gradient-to-bl lg:from-[#161616] lg:via-[#2a2a2a]/90 lg:to-[#1a1a1a] 
        backdrop-blur-md flex lg:px-5 py-2 lg:py-3 rounded-t-2xl lg:rounded-t-none 
        lg:rounded-se-2xl lg:rounded-es-3xl h-fit w-full lg:w-fit 
        justify-center items-center z-50 
        lg:shadow-[rgba(252,228,105,0.4)_-4px_4px_220px] 
        border border-yellow-200/10 border-t-0 lg:border-t 
        shadow-[0px_-10px_50px_rgba(252,228,105,0.3)] transition-all duration-300"
    >
      <ul className="lg:space-y-0 lg:space-x-6 flex gap-5 py-2 px-10 pb-5 pt-3">
        {links.map((link, index) => (
          <li key={index}>
            <button
              onClick={() => setSelected(link)}
              className={`text-base font-medium transition duration-300 relative group 
                lg:hover:text-[#fce469]/50
                ${
                  selected === link
                    ? "text-white lg:text-[#fce469]" // White for small screens, yellow for lg
                    : "text-gray-900 lg:text-gray-300 hover:text-gray-800 lg:hover:text-gray-300/50"
                }`}
            >
              {link}
              {/* Underline effect */}
              <span
                className={`absolute left-0 bottom-[-2px] w-full transition-transform duration-300 
                  ${
                    selected === link
                      ? "h-[3px] bg-white scale-x-100 lg:h-[2px] lg:bg-[#fce469]" // Thicker on mobile
                      : "h-[2px] bg-[#e9a640] scale-x-0 group-hover:scale-x-100 lg:bg-[#fce469]" // Goldish hover
                  }`}
              ></span>
            </button>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default Navbar;
