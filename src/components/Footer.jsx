import { Mail } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { profile } from "../data";

export default function Footer() {
  return (
    <footer className="border-t border-line px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="font-mono text-xs text-muted">
          © {new Date().getFullYear()} {profile.name}. Built with React &amp; Tailwind.
        </p>
        <div className="flex items-center gap-4">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted transition-colors hover:text-mint"
            aria-label="GitHub"
          >
            <FaGithub size={18} />
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="text-muted transition-colors hover:text-mint"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
