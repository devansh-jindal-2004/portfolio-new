"use client"
import React, { useEffect } from "react";
import { FaBookOpen, FaBriefcase } from "react-icons/fa";
import Section from "./Section";
import ResumeItem from "./ResumeItem";
import { resumeData } from "./resumeData";

const Resume = () => {

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="xl:px-5 py-6 text-white space-y-8">
      <div className="text-3xl font-bold text-gray-100 relative w-fit px-4 xl:p-0">
        Resume
        <div className="h-1 w-1/2 bg-[#fce469] rounded-full mt-5 px-4 xl:p-1"></div>
      </div>

      {/* Education Section */}
      <Section icon={<FaBookOpen className="text-[#fce469] text-2xl" />} title="Education">
        {resumeData.education.map((edu, index) => (
          <ResumeItem key={index} title={edu.title} subtitle={edu.degree} years={edu.years} />
        ))}
      </Section>

      {/* Experience Section */}
      <Section icon={<FaBriefcase className="text-[#fce469] text-2xl" />} title="Experience">
        {resumeData.experience.map((exp, index) => (
          <ResumeItem key={index} title={exp.title} subtitle={exp.company} years={exp.years} location={exp.location}>
            <ul className="list-disc list-inside text-gray-300 mt-2">
              {exp.tasks.map((task, i) => (
                <li key={i}>{task}</li>
              ))}
            </ul>
          </ResumeItem>
        ))}
      </Section>

      {/* <div>button</div> */}
    </div>
  );
};

export default Resume;
