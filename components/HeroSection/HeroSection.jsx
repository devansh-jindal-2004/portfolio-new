import React from "react";
import Image from "next/image";
import heroImage from "@/public/heroImage.png";

function HeroSection() {
  return (
    <section 
      className="relative flex flex-col md:flex-row flex-wrap justify-between items-center px-10 md:px-20 lg:px-24 pt-40 pb-20
      bg-gradient-to-b from-[#f5f5f5] to-[#e0e0e0] 
      bg-[url('/heroImage.png')] bg-cover bg-center sm:bg-none">
      
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/50 sm:hidden"></div>

      {/* Left Content */}
      <div className="relative text-center md:text-left w-full md:w-1/2 z-10 text-white sm:text-gray-900">
        <h1 className="text-3xl md:text-5xl xl:text-6xl font-bold leading-tight shadow-lg">
          Full-Stack Developer & Mobile App Expert
        </h1>
        <p className="text-sm md:text-xl xl:text-2xl mt-3 leading-relaxed shadow-lg">
          Crafting seamless digital experiences across web and mobile platforms.
        </p>

        {/* Buttons */}
        <div className="flex gap-6 mt-5 justify-center md:justify-start">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-full text-base font-semibold shadow-lg hover:bg-blue-700 hover:scale-105 transition-all duration-300">
            Hire Me
          </button>
          <button className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-full text-base font-semibold shadow-lg hover:bg-blue-600 hover:text-white hover:scale-105 transition-all duration-300">
            View Work
          </button>
        </div>
      </div>

      {/* Right Image (Hidden in Mobile View) */}
      <div className="hidden sm:flex mt-10 md:mt-0 w-full md:w-1/2 justify-center">
        <div className="rounded-3xl shadow-2xl overflow-hidden">
          <Image
            src={heroImage}
            alt="Illustration of a developer working"
            width={450} 
            height={450} 
            className="w-auto h-auto rounded-3xl"
            priority
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
