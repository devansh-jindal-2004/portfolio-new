"use client"
import { FaLinkedin, FaInstagram, FaWhatsapp, FaGithub, FaChevronUp, FaChevronDown, FaGoogle } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { CiLocationOn, CiMail, CiPhone } from "react-icons/ci";
import { useState } from "react";

function SideBar() {

    const [isvisible, setisvisible] = useState(false);

    return (
        <div className="bg-[#1E1E1E] relative text-white p-2 sm:p-5 flex flex-col justify-center items-center rounded-xl border border-gray-100/10 shadow-md flex-shrink-0 h-fit" onClick={() => setisvisible(!isvisible)} >

            {/* Toggle Button */}
            <button 
                className={`absolute top-0 right-0 px-4 py-2 bg-[#272727] rounded-tr-xl rounded-bl-xl shadow-md hover:bg-gray-700 transition xl:hidden text-[#FCE469] bg-gradient-to-br from-[rgba(252,228,105,0.6)] to-[#272727]  `}
            >
                {isvisible ? <FaChevronUp className="text-white" /> : <FaChevronDown className="text-white" />}
            </button>

            {/* Profile Section */}
            <div className="w-full flex xl:flex-col items-center gap-4 p-4 rounded-xl shadow-lg relative">
                {/* Image Container */}
                <div className="relative bg-gray-200/20 w-20 sm:w-32 md:w-28 xl:w-40 aspect-square rounded-2xl flex items-center justify-center shadow-md">
                    <Image
                        src={"/my-avatar.png"}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-2xl"
                        alt="Devansh Jindal"
                    />

                    {/* Blinking Green Dot */}
                    <div className="absolute bottom-2 right-2">
                        <div className="w-3 h-3 bg-[#39ff14] rounded-full absolute animate-custom-ping"></div>
                        <div className="w-3 h-3 bg-[#39ff14] rounded-full"></div>
                    </div>
                </div>

                <style>
                    {`
                        @keyframes custom-ping {
                            0% { transform: scale(1); opacity: 1; }
                            50% { opacity: 0.5; }
                            100% { transform: scale(3); opacity: 0; }
                        }
                        .animate-custom-ping {
                            animation: custom-ping 1.6s infinite ease-in-out;
                        }
                    `}
                </style>

                {/* Name & Role */}
                <div className="flex flex-col items-start xl:items-center gap-1 ml-5 xl:ml-0">
                    <div className="text-lg sm:text-3xl md:text-4xl xl:text-2xl font-semibold text-gray-100">Devansh Jindal</div>
                    <div className="text-xs text-gray-200 rounded-xl bg-gray-100/10 px-3 py-1">
                        Full-Stack Developer
                    </div>
                </div>
            </div>


            <div className={`w-full ${isvisible ? "block" : "hidden"} xl:block`}>
            <div className="border-t border-gray-200/10 w-full my-4"></div>

            {/* Contact Information */}
            <div className="w-full space-y-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-x-6 gap-y-6 px-4 xl:px-0 xl:mt-8">
                {[
                    { icon: CiMail, label: "EMAIL", value: "devanshjindal31@gmail.com" },
                    { icon: CiPhone, label: "PHONE", value: "+91 88473 04008" },
                    { icon: CiLocationOn, label: "LOCATION", value: "Bathinda, Punjab" },
                ].map(({ icon: Icon, label, value }, idx) => (
                    <div key={idx} className="flex items-center gap-4 w-full">
                        <div className="bg-[#272727] sm:w-10 sm:h-10 rounded-lg flex items-center justify-center shadow-[-1px_-1px_2px_rgba(255,255,255,0.2)] p-2">
                            <Icon className="text-[#FCE469] text-lg stroke-[1.2]" />
                        </div>
                        <div className="text-white text-sm">
                            <div className="text-gray-400 tracking-wide text-xs">{label}</div>
                            <div className="text-gray-200 text-sm">{value}</div>
                        </div>
                    </div>
                ))}
            </div>

            {/* <div className="border-t border-gray-200/10 w-full my-4"></div> */}

            {/* Social Media Links */}
            <div className="flex gap-3 justify-center mt-10">
                {[
                    { icon: FaGithub, href: "https://github.com/devansh-jindal-2004", hover: "hover:text-white" },
                    { icon: FaLinkedin, href: "https://www.linkedin.com/in/devansh-agaarwal/", hover: "hover:text-[#0077b5]" },
                    { icon: FaGoogle, href: "https://g.dev/DevanshJindal", hover: "hover:text-[#EA4335]" },
                    { icon: FaWhatsapp, href: "https://wa.me/918847304008", hover: "hover:text-[#25D366]" },
                ].map(({ icon: Icon, href, hover }, idx) => (
                    <a
                        key={idx}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center justify-center text-gray-400 hover:scale-110 ${hover}`}
                    >
                        <Icon className="text-xl" />
                    </a>
                ))}
            </div>
            </div>
        </div>
    );
}

export default SideBar;
