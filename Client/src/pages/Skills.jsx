import { skills } from "../data/skills";

const Skills = () => {
    return (
        <section id="skills" className="px-4 py-20">
            <div className="mx-auto max-w-5xl">
                <h2 className="text-3xl font-bold gradient-text">Skills</h2>

                <div className="mt-6 flex flex-wrap gap-3">
                    {skills.map((s, index) => (
                        <span
                            key={index}
                            className="px-4 py-2 bg-white/10 border border-white/10 rounded-xl text-sm text-zinc-200"
                        >
                            {typeof s === "object" ? s.name : s}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills;
