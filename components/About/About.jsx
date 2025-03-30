"use client";
import React, { useEffect, Suspense } from "react";
import dynamic from "next/dynamic";

// Load heavy components dynamically (reduces initial load time)
const ServicesGrid = dynamic(() => import("../ServiceCards/ServiceCards"), { ssr: false });
const SkillsScroll = dynamic(() => import("../Skills/Skills"), { ssr: false });

function About() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="h-full w-full xl:px-5 py-6 space-y-8">
      {/* About Me Section */}
      <div className="text-3xl font-bold text-gray-100 relative w-fit px-4 xl:p-0">
        About Me
        <div className="h-1 w-1/2 bg-[#fce469] rounded-full mt-5 px-4 xl:p-1"></div>
      </div>

      <span className="flex flex-col gap-5 text-gray-300 text-base px-4 xl:p-0">
        <p>
        I am a Full Stack Web and React Native developer with experience in building websites and mobile apps. I work on both the front-end (what users see) and the back-end (how things work behind the scenes). I can integrate APIs, manage databases, and ensure smooth performance for applications.
        </p>
        <p>
        I focus on writing clean and efficient code to create fast and reliable applications. If you need a developer who can turn your ideas into a working website or mobile app, feel free to reach out. Let's build something great together!
        </p>
      </span>

      {/* Services Section - Lazy Loaded */}
      <div>
        <div className="text-2xl font-bold text-gray-100 relative w-fit px-3 xl:p-0">
          What I'm Doing
        </div>
        <Suspense fallback={<div className="text-gray-400">Loading Services...</div>}>
          <ServicesGrid />
        </Suspense>
      </div>

      {/* Skills Section - Lazy Loaded */}
      <div>
        <div className="text-2xl font-bold text-gray-100 relative w-fit px-3 xl:p-0">
          Skills
        </div>
        <Suspense fallback={<div className="text-gray-400">Loading Skills...</div>}>
          <SkillsScroll />
        </Suspense>
      </div>
    </div>
  );
}

export default About;
