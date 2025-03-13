import React from "react";
import LocationMap from "../LocationMap/LocationMap";

function Contact() {
  return (
    <div className="h-full w-full px-8 py-6 space-y-6">
      {/* Heading Section */}
      <div className="text-3xl font-bold text-gray-100 relative w-fit">
        Contact
        <div className="h-1 w-1/2 bg-[#fce469] rounded-full mt-5 p-1"></div>
      </div>

      {/* Location Section */}
      <div className="mt-4 rounded-2xl overflow-hidden">
        <LocationMap />
      </div>
    </div>
  );
}

export default Contact;
