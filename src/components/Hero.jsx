import { motion } from "framer-motion";
import { Download, Mail } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { profile, roles, projects } from "../data";
import useTypewriter from "../hooks/useTypewriter";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.55, ease: "easeOut" },
  }),
};

const JSON_LINES = [
  { key: "name", value: `"${profile.name}"` },
  { key: "focus", value: '"MERN Stack"' },
  { key: "year", value: '"3rd / B.E. CSE"' },
  { key: "projects", value: String(projects.length), numeric: true },
  { key: "certifications", value: "5", numeric: true },
  { key: "status", value: '"available"' },
];

export default function Hero() {
  const typed = useTypewriter(roles);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-28 pb-16"
    >
      <div className="absolute inset-0 bg-violet-glow" />
      <div className="absolute inset-0 bg-mint-glow" />

      {/* ambient floating orbs */}
      <motion.div
        className="absolute left-[10%] top-[18%] h-3 w-3 rounded-full bg-mint/70"
        animate={{ y: [0, -18, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[8%] bottom-[15%] h-2 w-2 rounded-full bg-violet-soft/70"
        animate={{ y: [0, 16, 0] }}
        transition={{ repeat: Infinity, duration: 4.2, ease: "easeInOut" }}
      />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-16 lg:grid-cols-2">
        {/* Left: intro */}
        <div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-card/60 px-4 py-1.5 font-mono text-xs text-violet-soft"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-mint" />
            // open to internships
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
            className="font-display text-4xl font-bold leading-tight text-paper sm:text-5xl md:text-6xl"
          >
            Hi, I'm <span className="text-gradient">{profile.name}</span>
          </motion.h1>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
            className="mt-4 flex items-center font-mono text-lg text-mint sm:text-xl"
          >
            <span className="mr-2 text-violet-soft">{">"}</span>
            <span>{typed}</span>
            <span className="ml-0.5 inline-block h-5 w-[2px] animate-pulse bg-mint sm:h-6" />
          </motion.div>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={3}
            className="mt-6 max-w-lg font-body text-base leading-relaxed text-muted sm:text-lg"
          >
            {profile.summary.split(". Experienced")[0]}. I care about clean code,
            real REST APIs, and shipping things that actually work.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={4}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <button
              onClick={() =>
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
              }
              className="rounded-full bg-violet px-6 py-3 text-sm font-medium text-paper shadow-glow transition-transform hover:scale-105"
            >
              View Projects
            </button>
            <a
              href="/Iswarya_S_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-line px-6 py-3 text-sm font-medium text-paper transition-colors hover:border-mint hover:text-mint"
            >
              <Download size={15} /> Resume
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted transition-colors hover:text-mint"
              aria-label="GitHub profile"
            >
              <FaGithub size={20} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="text-muted transition-colors hover:text-mint"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </motion.div>
        </div>

        {/* Right: JSON code card */}
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="glass rounded-2xl p-6 shadow-glow font-mono text-sm">
            <div className="mb-4 flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
              <span className="ml-3 text-xs text-muted">about_me.json</span>
            </div>

            <p className="text-paper">{"{"}</p>
            {JSON_LINES.map((line, i) => (
              <motion.p
                key={line.key}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + i * 0.08, duration: 0.4 }}
                className="pl-4"
              >
                <span className="text-violet-soft">"{line.key}"</span>
                <span className="text-paper">: </span>
                <span className={line.numeric ? "text-ember" : "text-mint"}>
                  {line.value}
                </span>
                {i < JSON_LINES.length - 1 && <span className="text-paper">,</span>}
              </motion.p>
            ))}
            <p className="text-paper">{"}"}</p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.5 }}
            className="absolute -bottom-5 right-2 rounded-full border border-mint/40 bg-ink/90 px-4 py-2 font-mono text-xs text-mint shadow-glow sm:right-4"
          >
            git push origin main ✓
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
