import { motion } from "framer-motion";
import { Code2, Database, Layers } from "lucide-react";
import { profile } from "../data";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const highlights = [
  {
    icon: Layers,
    title: "MERN Stack",
    text: "React.js, Node.js, Express.js, and MongoDB Atlas for full-stack web apps.",
  },
  {
    icon: Database,
    title: "Databases",
    text: "Designing and querying relational and NoSQL databases for real-world apps.",
  },
  {
    icon: Code2,
    title: "Clean Code",
    text: "REST API design, Git/GitHub workflows, and readable, maintainable code.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative px-6 py-28">
      <div className="mx-auto max-w-5xl">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-14 text-center"
        >
          <p className="mb-3 font-mono text-sm uppercase tracking-[0.25em] text-mint">
            About me
          </p>
          <h2 className="font-display text-3xl font-bold text-paper sm:text-4xl">
            What I bring to the table
          </h2>
        </motion.div>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto max-w-3xl text-center font-body text-base leading-relaxed text-muted sm:text-lg"
        >
          {profile.summary}
        </motion.p>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {highlights.map((h, i) => (
            <motion.div
              key={h.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.1 }}
              className="glass group rounded-2xl p-6 transition-transform hover:-translate-y-1.5 hover:shadow-glow"
            >
              <div className="mb-4 inline-flex rounded-xl bg-violet/15 p-3 text-violet-soft transition-colors group-hover:bg-mint/15 group-hover:text-mint">
                <h.icon size={22} />
              </div>
              <h3 className="font-display text-lg font-semibold text-paper">
                {h.title}
              </h3>
              <p className="mt-2 font-body text-sm text-muted">{h.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
