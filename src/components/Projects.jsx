import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { projects } from "../data";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

function ProjectCard({ project, index }) {
  const isLive = project.type === "live";

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      transition={{ delay: (index % 3) * 0.1 }}
      whileHover={{ y: -6 }}
      className="glass group flex flex-col overflow-hidden rounded-2xl transition-shadow hover:shadow-glow"
    >
      <div className="relative h-40 overflow-hidden bg-gradient-to-br from-violet-dim via-surface to-card">
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-display text-2xl font-bold text-paper/15">
            {project.title.split(" ").map((w) => w[0]).join("")}
          </span>
        </div>
        <div className="absolute right-3 top-3 rounded-full border border-line bg-ink/70 px-3 py-1 font-mono text-[11px] text-mint">
          {isLive ? "live demo" : "source code"}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-lg font-semibold text-paper">
          {project.title}
        </h3>
        <p className="mt-2 flex-1 font-body text-sm leading-relaxed text-muted">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-ember/10 px-3 py-1 font-mono text-[11px] text-ember"
            >
              {tech}
            </span>
          ))}
        </div>

        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 flex items-center justify-center gap-2 rounded-full bg-violet/90 px-4 py-2.5 text-sm font-medium text-paper transition-all hover:bg-violet hover:scale-[1.02]"
        >
          {isLive ? <ExternalLink size={15} /> : <FaGithub size={15} />}
          View Project
        </a>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-14 text-center"
        >
          <p className="mb-3 font-mono text-sm uppercase tracking-[0.25em] text-mint">
            Projects
          </p>
          <h2 className="font-display text-3xl font-bold text-paper sm:text-4xl">
            Selected work
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-body text-sm text-muted sm:text-base">
            Deployed projects open a live demo. Others link to source on GitHub.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard project={project} index={i} key={project.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
