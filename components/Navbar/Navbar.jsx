import React from "react";

function Navbar({ setSelected, selected }) {
  const links = ["About", "Resume", "Portfolio", "Contact"];

  return (
    <div className="fixed right-0 bottom-0 xl:top-0 bg-[#232323f2]/95 shadow-lg flex  xl:px-5 py-2 xl:py-3 rounded-t-2xl xl:rounded-t-none xl:rounded-se-3xl xl:rounded-es-3xl h-fit w-full xl:w-fit justify-center items-center z-50">
      <ul className="xl:space-y-0 xl:space-x-6 flex gap-5 py-2 px-10 pb-5 pt-3">
        {links.map((link, index) => (
          <li key={index}>
            <button
              onClick={() => setSelected(link)}
              className={`text-base font-medium transition duration-300 ${selected == link ? "text-[#fce469] xl:hover:text-[#fce469]/50" : "text-gray-300 hover:text-gray-300/50"
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
