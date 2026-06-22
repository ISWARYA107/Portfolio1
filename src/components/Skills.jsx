import { motion } from "framer-motion";
import { languages, skillGroups } from "../data";
import TechOrbit from "./TechOrbit";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Skills() {
  return (
    <section id="skills" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-14 text-center"
        >
          <p className="mb-3 font-mono text-sm uppercase tracking-[0.25em] text-mint">
            Skills
          </p>
          <h2 className="font-display text-3xl font-bold text-paper sm:text-4xl">
            Languages &amp; technologies
          </h2>
        </motion.div>

        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Left: languages stacked above the icon image, then skill groups */}
          <div>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="glass rounded-2xl p-6"
            >
              <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-violet-soft">
                Programming Languages
              </h3>
              <div className="flex flex-wrap gap-3">
                {languages.map((lang) => (
                  <span
                    key={lang}
                    className="rounded-full border border-line bg-surface px-4 py-1.5 font-body text-sm text-paper transition-colors hover:border-mint hover:text-mint"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </motion.div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {skillGroups.map((group, i) => (
                <motion.div
                  key={group.label}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: i * 0.08 }}
                  className="rounded-xl border border-line bg-card/60 p-4 transition-colors hover:border-violet/60"
                >
                  <h4 className="mb-2 font-display text-sm font-semibold text-mint">
                    {group.label}
                  </h4>
                  <ul className="space-y-1 font-body text-sm text-muted">
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: animated tech orbit image */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <TechOrbit />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
