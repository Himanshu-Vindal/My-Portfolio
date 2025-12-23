import { skills } from "../data/skills";

const Skills = () => {
  return (
    <section
      id="skills"
      className="px-6 py-24 bg-black"
    >
      <div className="mx-auto max-w-6xl">

        {/* SECTION TITLE */}
        <h2 className="text-3xl md:text-4xl font-extrabold bg-linear-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">
          Skills
        </h2>

        <p className="mt-3 max-w-2xl text-zinc-400">
          Technologies and tools I use to build modern, scalable and
          high-performance applications.
        </p>

        {/* SKILLS GRID */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {skills.map((group, index) => (
            <div
              key={index}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-sky-400/40 hover:bg-white/10"
            >
              {/* CATEGORY TITLE */}
              <h3 className="text-lg font-semibold text-white">
                {group.title}
              </h3>

              {/* SKILL TAGS */}
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((skill, i) => (
                  <span
                    key={i}
                    className="rounded-lg bg-black/40 px-3 py-1.5 text-sm text-zinc-300 transition group-hover:text-white"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Skills;
