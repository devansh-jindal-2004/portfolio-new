import React from "react";

const ResumeItem = ({ title, subtitle, years, location, children }) => (
  <div className="relative">
    {/* Timeline Dot */}
    <div className="absolute -left-[2.18rem] top-2 w-5 h-5 bg-gray-50/10 rounded-full z-50 flex justify-center items-center">
      <div className="w-[0.5rem] h-[0.5rem] bg-[#fce469] rounded-full"></div>
    </div>

    <h4 className="text-lg font-semibold text-white">{title}</h4>
    <p className="text-gray-400">{subtitle}</p>
    <p className="text-sm text-[#fce469]">{years}</p>
    {location && <p className="italic text-gray-300">{location}</p>}
    {children}
  </div>
);

export default ResumeItem;
