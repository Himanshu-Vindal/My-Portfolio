import React from "react";
import { experience } from "../data/experience";

const Experience = () => {
  return (
    <section
      id="experience"
      className="px-6 py-24 bg-black"
    >
      <div className="mx-auto max-w-5xl">

        {/* SECTION HEADER */}
        <h2 className="text-3xl md:text-4xl font-extrabold bg-linear-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">
          Experience
        </h2>

        <p className="mt-3 max-w-2xl text-zinc-400">
          My professional journey and hands-on experience working on real-world
          projects and teams.
        </p>

        {/* TIMELINE */}
        <div className="mt-12 relative border-l border-white/10 pl-6 space-y-10">

          {experience.map((e, index) => (
            <div key={index} className="relative">

              {/* DOT */}
              <span className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full bg-sky-400" />

              {/* CARD */}
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-sky-400/40">
                <h3 className="text-lg font-semibold text-white">
                  {e.role}
                </h3>

                <p className="mt-1 text-sm text-zinc-400">
                  {e.company} • {e.duration}
                </p>

                <p className="mt-3 text-sm text-zinc-300 leading-relaxed">
                  {e.description}
                </p>

                {/* OPTIONAL BULLETS */}
                {e.points && (
                  <ul className="mt-4 list-disc list-inside space-y-1 text-sm text-zinc-300">
                    {e.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Experience;
