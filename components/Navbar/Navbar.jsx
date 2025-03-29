import React from "react";

function Navbar({ setSelected, selected }) {
  const links = ["About", "Resume", "Portfolio", "Contact"];

  return (
    <div className="fixed xl:absolute right-0 bottom-0 xl:top-0 bg-[#232323f2]/95 flex xl:px-5 py-2 xl:py-3 rounded-t-2xl xl:rounded-t-none xl:rounded-se-2xl xl:rounded-es-3xl h-fit w-full xl:w-fit justify-center items-center z-50 
        xl:shadow-[rgba(252,228,105,0.3)_-4px_4px_200px] border-[0.5px] border-b-0 xl:border-b border-gray-100/10">
      <ul className="xl:space-y-0 xl:space-x-6 flex gap-5 py-2 px-10 pb-5 pt-3">
        {links.map((link, index) => (
          <li key={index}>
            <button
              onClick={() => setSelected(link)}
              className={`text-base font-medium transition duration-300 ${
                selected === link
                  ? "text-[#fce469] xl:hover:text-[#fce469]/50"
                  : "text-gray-300 hover:text-gray-300/50"
              }`}
            >
              {link}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Navbar;
