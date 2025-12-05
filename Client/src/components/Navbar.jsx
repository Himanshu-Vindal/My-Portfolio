import { Link2, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const links = [
  "hero",
  "about",
  "skills",
  "projects",
  "experience",
  "contact"
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-black/50 border-b border-white/10">
      <nav className="mx-auto max-w-6xl flex items-center justify-between px-4 py-4">
        <Link to="/" className="text-xl font-bold gradient-text">
          Himanshu
        </Link>

        <button
          className="md:hidden p-2 border border-white/20 rounded-lg"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>

        <ul
          className={`${
            open ? "flex" : "hidden"
          } md:flex flex-col md:flex-row gap-6 text-zinc-300 text-sm`}
        >
          {links.map((l) => (
            <li key={l}>
              <Link
                to={`#${l}`}
                className="hover:text-white"
                onClick={() => setOpen(false)}
              >
                {l.charAt(0).toUpperCase() + l.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
