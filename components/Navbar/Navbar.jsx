import React from "react";
import { motion } from "framer-motion";

function Navbar({ setSelected, selected }) {
  const links = ["About", "Resume", "Portfolio", "Contact"];

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed xl:absolute right-0 bottom-0 xl:top-0 
        bg-gradient-to-r from-[#fce469] via-[#e6c157] to-[#b89a40] 
        xl:bg-gradient-to-bl xl:from-[#161616] xl:via-[#2a2a2a]/90 xl:to-[#1a1a1a] 
        backdrop-blur-md flex xl:px-5 py-2 xl:py-3 rounded-t-2xl xl:rounded-t-none 
        xl:rounded-se-2xl xl:rounded-es-3xl h-fit w-full xl:w-fit 
        justify-center items-center z-50 
        xl:shadow-[rgba(252,228,105,0.4)_-4px_4px_220px] 
        border border-yellow-200/10 border-t-0 xl:border-t 
        shadow-[0px_-10px_50px_rgba(252,228,105,0.3)] transition-all duration-300"
    >
      <ul className="xl:space-y-0 xl:space-x-6 flex gap-5 py-2 px-10 pb-5 pt-3">
        {links.map((link, index) => (
          <li key={index}>
            <button
              onClick={() => setSelected(link)}
              className={`text-base font-medium transition duration-300 relative group 
                xl:hover:text-[#fce469]/50
                ${
                  selected === link
                    ? "text-white xl:text-[#fce469]" // White text for small screens, yellow for xl
                    : "text-gray-800 xl:text-gray-300 hover:text-gray-700 xl:hover:text-gray-300/50"
                }`}
            >
              {link}
              {/* Underline effect */}
              <span
                className={`absolute left-0 bottom-[-2px] w-full transition-transform duration-300 
                  ${
                    selected === link
                      ? "h-[3px] bg-white scale-x-100 xl:h-[2px] xl:bg-[#fce469]" // Thicker for small screens, normal for xl
                      : "h-[2px] bg-black scale-x-0 group-hover:scale-x-100 xl:bg-[#fce469]" // Normal effect for xl
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
