import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-black/60 px-6 py-8">
      <div className="mx-auto max-w-6xl flex flex-col items-center gap-4">

        {/* SOCIAL LINKS */}
        <div className="flex items-center gap-5 text-zinc-400">
          <a
            href="https://github.com/Himanshu-Vindal"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>

          <a
            href="https://www.linkedin.com/in/himanshu-vindal-74629727b"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>

          <a
            href="mailto:himanshuvindal281@gmail.com"
            className="hover:text-white transition"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
        </div>

        {/* COPYRIGHT */}
        <p className="text-xs text-zinc-400 text-center">
          © {new Date().getFullYear()}{" "}
          <span className="text-white font-medium">Himanshu Vindal</span>.  
          All rights reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;
