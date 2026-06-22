import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Mail } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { profile } from "../data";

const LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "border-b border-line/70 bg-ink/80 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <button
          onClick={() => go("home")}
          className="font-display text-lg font-semibold tracking-tight text-paper"
        >
          Iswarya<span className="text-mint">.</span>
        </button>

        <ul className="hidden items-center gap-8 font-body text-sm text-muted md:flex">
          {LINKS.map((l) => (
            <li key={l.id}>
              <button
                onClick={() => go(l.id)}
                className="transition-colors hover:text-mint"
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-line p-2 text-paper transition-colors hover:border-mint hover:text-mint"
            aria-label="GitHub profile"
          >
            <FaGithub size={17} />
          </a>
          <button
            onClick={() => go("contact")}
            className="rounded-full bg-violet px-4 py-2 text-sm font-medium text-paper shadow-glow transition-transform hover:scale-105"
          >
            Let's talk
          </button>
        </div>

        <button
          className="text-paper md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="border-t border-line bg-ink/95 px-6 py-4 md:hidden"
        >
          <ul className="flex flex-col gap-4 font-body text-base text-paper">
            {LINKS.map((l) => (
              <li key={l.id}>
                <button onClick={() => go(l.id)}>{l.label}</button>
              </li>
            ))}
            <li className="flex items-center gap-2 pt-2 text-mint">
              <Mail size={16} />
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </li>
          </ul>
        </motion.div>
      )}
    </header>
  );
}
