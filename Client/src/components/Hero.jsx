import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
   <section id="hero" className="min-h-screen flex items-center px-4">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-5xl font-bold leading-tight">
          Hi, I'm <span className="gradient-text">Himanshu Vindal</span>
        </h1>

        <p className="mt-4 text-zinc-400 max-w-xl">
          Full Stack Developer specialized in MERN stack, Tailwind CSS and modern
          UI development with animations.
        </p>

        <Link
          to="/projects"
          className="mt-8 inline-block bg-brand-600 hover:bg-brand-500 text-white px-6 py-3 rounded-xl shadow-glow"
        >
          View Projects
        </Link>
      </div>
    </section>
  )
}

export default Hero