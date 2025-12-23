import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import DevGif from "../assets/gifs/Coding.gif";
import ProfilePic from "../assets/images/profile.jpg";

const Hero = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        "Full Stack Developer",
        "MERN Stack Developer",
        "React & Tailwind Expert",
        "Freelancer",
      ],
      typeSpeed: 55,
      backSpeed: 35,
      backDelay: 1200,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView();
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 px-6"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white">
            Hi, I’m <br />
            <span className="bg-linear-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">
              Himanshu Vindal
            </span>
          </h1>

          <h2 className="mt-4 text-xl md:text-2xl font-semibold text-sky-400 min-h-8">
            <span ref={typedRef}></span>
          </h2>

          <p className="mt-6 text-slate-400 max-w-xl">
            I build modern, scalable and high-performance web applications using
            the MERN stack with clean UI and real-world logic.
          </p>

          <div className="mt-8 flex gap-4 flex-wrap">
            <button
              onClick={scrollToProjects}
              className="px-6 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-semibold transition"
            >
              View Projects
            </button>

            <a
              href="/My-Portfolio/Himanshu_Vindal_Resume.pdf"
              download
              className="px-6 py-3 rounded-xl border border-sky-400 text-sky-400 hover:bg-sky-400 hover:text-black font-semibold transition"
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative flex justify-center items-center">

          {/* PROFILE PHOTO */}
          <img
            src={ProfilePic}
            alt="Himanshu Vindal"
            loading="lazy"
            className="        
            relative z-10 
            w-56 h-56 md:w-72 md:h-72 
            rounded-full 
            object-contain 
           bg-slate-900 
            border-4 border-sky-400 
            shadow-xl
          "
          />

          {/* BACKGROUND GIF */}
          <img
            loading="lazy"
            src={DevGif}
            alt="Coding animation"
            className="absolute w-80 md:w-96 opacity-25"    
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;
