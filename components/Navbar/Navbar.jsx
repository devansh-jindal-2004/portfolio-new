import React from "react";

function Navbar({ setSelected, selected }) {
  const links = ["About", "Resume", "Portfolio", "Contact"];

  return (
    <div className="absolute right-0 bottom-0 xl:top-0 bg-[#1E1E1E] shadow-lg flex  px-5 py-3 rounded-t-2xl xl:rounded-t-none xl:rounded-se-xl xl:rounded-es-xl bg-gray-100/5 h-fit w-full xl:w-fit justify-center items-center">
      <ul className="space-y-4 xl:space-y-0 xl:space-x-6 flex gap-5 py-2 px-10">
        {links.map((link, index) => (
          <li key={index}>
            <button
              onClick={() => setSelected(link)}
              className={`text-gray-300 hover:text-gray-300/50 text-base font-medium transition duration-300 ${selected == link && "text-[#fce469] hover:text-[#fce469] xl:hover:text-[#fce469]"}`}
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
