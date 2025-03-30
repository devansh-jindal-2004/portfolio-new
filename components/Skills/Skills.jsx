import React from "react";

// Skills Data
const skills = [
    { name: "Next Js", img: "./Skills/next-js.webp" },
    { name: "React Native", img: "./Skills/react-native-1.png" },
    { name: "Android Studio", img: "./Skills/android-studio.svg" },
    { name: "Xcode", img: "./Skills/iosStudio.png" },
    { name: "TypeScript", img: "./Skills/Typescript_logo.png" },
    { name: "MongoDB", img: "./Skills/mongodb.png" },
    { name: "Express", img: "./Skills/express-js.webp" },
    { name: "React", img: "./Skills/React-icon.svg.png" },
    { name: "GitHub", img: "./Skills/github.png" },
    { name: "Postman", img: "./Skills/postman.png" },
    { name: "Git", img: "./Skills/git.png" },
    { name: "JavaScript", img: "./Skills/js.webp" },
    { name: "NPM", img: "./Skills/Npm-logo.png" },
    { name: "MySQL", img: "./Skills/SQL.png" },
    { name: "Tailwind", img: "./Skills/tailwind.png" },
    { name: "C++", img: "./Skills/cpp.svg" },
    { name: "C Language", img: "./Skills/c.png" },
    { name: "HTML", img: "./Skills/html.png" },
    { name: "CSS", img: "./Skills/css.svg" },
];

function SkillsScroll() {
  return (
    <div className="w-full xl:max-w-[55vw] mx-auto px-5 mt-10">
      <div className="overflow-x-auto whitespace-nowrap custom-scrollbar">
        <div className="flex gap-12 py-5 w-max pb-10">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center rounded-[2rem] shadow-lg flex-shrink-0 bg-gray-800 overflow-hidden p-4"
            >
                <img src={skill.img} alt={skill.name} className="w-32 h-32" />
                <p className="mt-2 text-gray-300 text-lg font-medium">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SkillsScroll;
