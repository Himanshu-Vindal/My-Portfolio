import React from 'react'
import { projects } from '../data/projects'
import { ExternalLink, Github } from 'lucide-react'

const Projects = () => {
  return (
    <section id="projects" className="px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold gradient-text">Projects</h2>

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          {projects.map((p, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-2xl p-4"
            >
              <img
                src={p.image}
                alt={p.title}
                className="rounded-xl h-40 w-full object-cover"
              />

              <h3 className="mt-4 text-xl font-semibold">{p.title}</h3>

              <p className="mt-2 text-zinc-400 text-sm">{p.description}</p>

              <div className="mt-4 flex gap-2 flex-wrap">
                {p.tech.map((t, i) => (
                  <span
                    key={`${p.title}-${i}`}
                    className="text-xs bg-black/30 px-3 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-4 flex gap-4 text-sm text-zinc-300">
                <a
                  href={p.live}
                  target="_blank"
                  className="flex items-center gap-1 hover:text-white"
                >
                  <ExternalLink size={14} /> Live
                </a>
                <a
                  href={p.code}
                  target="_blank"
                  className="flex items-center gap-1 hover:text-white"
                >
                  <Github size={14} /> Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
