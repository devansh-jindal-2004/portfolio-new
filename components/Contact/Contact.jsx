"use client"
import React, { useEffect } from "react";
import LocationMap from "../LocationMap/LocationMap";
import ContactForm from "../ContactForm/ContactForm";

function Contact() {

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="h-full w-full px-4 md:px-8 py-6 space-y-6">
      {/* Heading Section */}
      <div className="text-3xl font-bold text-gray-100 relative w-fit">
        Contact
        <div className="h-1 w-1/2 bg-[#fce469] rounded-full mt-5 p-1"></div>
      </div>

      {/* Location Section */}
      <div className="mt-4 rounded-2xl overflow-hidden z-10 relative">
        <LocationMap />
      </div>
      <ContactForm />
    </div>
  );
}

export default Contact;
