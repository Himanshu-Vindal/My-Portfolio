import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  { name: "Home", id: "hero" },
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Experience", id: "experience" },
  { name: "Contact", id: "contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("hero");

  // 🔹 Active section tracking
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -55% 0px",
      }
    );

    links.forEach((link) => {
      const section = document.getElementById(link.id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    section?.scrollIntoView();
    setOpen(false);
  };

  return (
    <header className="fixed top-0 z-50 w-full backdrop-blur-md bg-black/60 border-b border-white/10">
      <nav className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4">

        {/* LOGO */}
        <button
          onClick={() => handleScroll("hero")}
          className="text-xl font-extrabold bg-linear-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent"
        >
          Himanshu
        </button>

        {/* DESKTOP */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-300">
          {links.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => handleScroll(link.id)}
                className={`relative transition cursor-pointer ${
                  active === link.id
                    ? "text-white"
                    : "hover:text-white"
                }`}
              >
                {link.name}

                {active === link.id && (
                  <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-sky-400 rounded-full" />
                )}
              </button>
            </li>
          ))}
        </ul>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-lg border border-white/20 text-white"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-black/90 border-t border-white/10">
          <ul className="flex flex-col gap-4 px-6 py-4 text-zinc-300 text-sm">
            {links.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => handleScroll(link.id)}
                  className={`block cursor-pointer w-full text-left ${
                    active === link.id
                      ? "text-white"
                      : "hover:text-white"
                  }`}
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
