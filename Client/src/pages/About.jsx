import React from "react";

const About = () => {
  return (
    <section id="about" className="px-6 py-24 bg-black">
      <div className="mx-auto max-w-5xl">

        {/* TITLE */}
        <h2 className="text-3xl md:text-4xl font-extrabold bg-linear-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">
          About Me
        </h2>

        {/* CONTENT */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* LEFT */}
          <div>
            <p className="text-zinc-300 leading-relaxed">
              I’m a <span className="text-white font-semibold">Full Stack Developer</span> who enjoys building
              production-ready web applications with clean architecture,
              premium UI, and smooth user experience.
            </p>

            <p className="mt-4 text-zinc-400 leading-relaxed">
              My primary focus is on the <span className="text-white">MERN stack</span>,
              where I design scalable frontends, robust backends, and
              real-world features like authentication, dashboards, and payments.
            </p>
          </div>

          {/* RIGHT */}
          <div>
            <p className="text-zinc-400 leading-relaxed">
              I care deeply about <span className="text-white">performance</span>,
              <span className="text-white"> maintainability</span>, and
              <span className="text-white"> user experience</span>.
              Whether it’s a freelance project, startup idea, or client work,
              I aim to deliver solutions that are reliable and easy to scale.
            </p>

            <p className="mt-4 text-zinc-400 leading-relaxed">
              Currently, I’m open to <span className="text-white">full-time roles</span>,
              <span className="text-white"> freelance projects</span>, and
              <span className="text-white"> collaborations</span> where I can
              create real impact through code.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
