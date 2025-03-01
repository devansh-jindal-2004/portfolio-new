"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import heroImage from "@/public/heroImage.png";

function HeroSection() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 640);
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <section
            className="relative flex flex-col sm:flex-row flex-wrap justify-between items-center px-10 sm:px-10 lg:px-16 xl:px-24 pt-40 sm:pt-32 pb-20"
            style={{
                backgroundImage: isMobile
                    ? "url('/heroImage.png')"
                    : "linear-gradient(135deg, #0d1117, #1e293b, #3b4252)", // Enhanced Modern Dark Gradient
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {/* Overlay for better text visibility */}
            <div className="absolute inset-0 bg-black/40 sm:hidden backdrop-blur-lg"></div>

            {/* Left Content */}
            <div className="relative text-center sm:text-left w-full sm:w-1/2 z-10 text-gray-100">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400">
                    Full-Stack Developer & Mobile App Expert
                </h1>
                <p className="text-sm sm:text-lg lg:text-xl xl:text-2xl mt-3 leading-relaxed text-gray-300">
                    Crafting seamless digital experiences across web and mobile platforms.
                </p>

                {/* Buttons */}
                <div className="flex gap-6 mt-5 justify-center sm:justify-start">
                    <button className="bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 text-white px-6 py-3 rounded-full text-base xl:text-xl font-semibold shadow-lg hover:scale-105 transition-all duration-300">
                        Hire Me
                    </button>
                    <button className="border-2 border-gray-600 text-gray-300 px-6 py-3 rounded-full text-base xl:text-xl font-semibold shadow-lg hover:bg-gray-700 hover:text-white transition-all duration-300">
                        View Work
                    </button>
                </div>
            </div>

            {/* Right Image (Hidden in Mobile View) */}
            <div className="hidden sm:flex mt-10 sm:mt-0 w-full sm:w-1/2 justify-center">
                <Image
                    src={heroImage}
                    alt="Illustration of a developer working"
                    width={450}
                    height={450}
                    className="w-auto h-auto rounded-3xl shadow-2xl border border-gray-600 backdrop-blur-xl"
                    priority
                />
            </div>
        </section>
    );
}

export default HeroSection;
