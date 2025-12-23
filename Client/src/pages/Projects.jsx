import React from "react";
import { projects } from "../data/projects";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  return (
    <section
      id="projects"
      className="px-6 py-24 bg-black"
    >
      <div className="mx-auto max-w-6xl">

        {/* SECTION HEADER */}
        <h2 className="text-3xl md:text-4xl font-extrabold bg-linear-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">
          Projects
        </h2>

        <p className="mt-3 max-w-2xl text-zinc-400">
          Some of the real-world projects I’ve built using modern technologies
          and best practices.
        </p>

        {/* PROJECT GRID */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2">

          {projects.map((p, index) => (
            <div
              key={index}
              className="group rounded-2xl border border-white/10 bg-white/5 overflow-hidden transition hover:-translate-y-1 hover:border-sky-400/40 hover:shadow-lg hover:shadow-sky-500/10"
            >
              {/* IMAGE */}
              <div className="relative overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="h-44 w-full object-cover transition duration-500 group-hover:scale-105"
                />

                {/* IMAGE OVERLAY */}
                <div className="absolute inset-0 bg-black/40 opacity-0 transition group-hover:opacity-100" />
              </div>

              {/* CONTENT */}
              <div className="p-5">
                <h3 className="text-xl font-semibold text-white">
                  {p.title}
                </h3>

                <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                  {p.description}
                </p>

                {/* TECH STACK */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tech.map((t, i) => (
                    <span
                      key={`${p.title}-${i}`}
                      className="rounded-full bg-black/40 px-3 py-1 text-xs text-zinc-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* LINKS */}
                <div className="mt-5 flex items-center gap-4 text-sm">
                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-sky-400 hover:text-white transition"
                    >
                      <ExternalLink size={15} /> Live Demo
                    </a>
                  )}

                  {p.code && (
                    <a
                      href={p.code}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-zinc-300 hover:text-white transition"
                    >
                      <Github size={15} /> Source Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Projects;
