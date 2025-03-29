import React from "react";

const Section = ({ icon, title, children }) => (
  <div className="mb-10 relative">
    {/* Icon & Title Container */}
    <div className="flex items-center gap-3">
      {/* Icon Container */}
      <div className="p-3 bg-[#2b2b2b] rounded-lg relative z-10 flex items-center justify-center">
        {icon}
        {/* Vertical Line Starting from Middle of Icon */}
        <div className="absolute left-1/2 top-full w-[2px] h-[calc(100%+20px)] bg-gray-700 transform -translate-x-1/2"></div>
      </div>
      <h3 className="text-2xl font-semibold">{title}</h3>
    </div>

    {/* Resume Items with Vertical Timeline */}
    <div className="relative mt-6 ml-6 border-l-2 border-gray-700 pl-6 space-y-6">
      {children}
    </div>
  </div>
);

export default Section;
