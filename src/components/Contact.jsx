import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { profile } from "../data";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name || "a visitor"}`);
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name} (${form.email})`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="relative px-6 py-28">
      <div className="mx-auto max-w-5xl">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-14 text-center"
        >
          <p className="mb-3 font-mono text-sm uppercase tracking-[0.25em] text-mint">
            Contact
          </p>
          <h2 className="font-display text-3xl font-bold text-paper sm:text-4xl">
            Let's build something together
          </h2>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-5">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-5 lg:col-span-2"
          >
            <a
              href={`mailto:${profile.email}`}
              className="glass flex items-center gap-4 rounded-xl p-4 transition-colors hover:border-mint/40"
            >
              <span className="rounded-lg bg-violet/15 p-2.5 text-violet-soft">
                <Mail size={18} />
              </span>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-wide text-muted">Email</p>
                <p className="font-body text-sm text-paper">{profile.email}</p>
              </div>
            </a>

            <a
              href={`tel:${profile.phone.replace(/\s/g, "")}`}
              className="glass flex items-center gap-4 rounded-xl p-4 transition-colors hover:border-mint/40"
            >
              <span className="rounded-lg bg-violet/15 p-2.5 text-violet-soft">
                <Phone size={18} />
              </span>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-wide text-muted">Phone</p>
                <p className="font-body text-sm text-paper">{profile.phone}</p>
              </div>
            </a>

            <div className="glass flex items-center gap-4 rounded-xl p-4">
              <span className="rounded-lg bg-violet/15 p-2.5 text-violet-soft">
                <MapPin size={18} />
              </span>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-wide text-muted">Location</p>
                <p className="font-body text-sm text-paper">{profile.location}</p>
              </div>
            </div>
          </motion.div>

          <motion.form
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            onSubmit={handleSubmit}
            className="glass space-y-4 rounded-2xl p-6 lg:col-span-3"
          >
            <div>
              <label className="mb-1.5 block font-mono text-[11px] uppercase tracking-wide text-muted">
                Name
              </label>
              <input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full rounded-lg border border-line bg-surface px-4 py-2.5 font-body text-sm text-paper outline-none transition-colors focus:border-mint"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="mb-1.5 block font-mono text-[11px] uppercase tracking-wide text-muted">
                Email
              </label>
              <input
                required
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full rounded-lg border border-line bg-surface px-4 py-2.5 font-body text-sm text-paper outline-none transition-colors focus:border-mint"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="mb-1.5 block font-mono text-[11px] uppercase tracking-wide text-muted">
                Message
              </label>
              <textarea
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full resize-none rounded-lg border border-line bg-surface px-4 py-2.5 font-body text-sm text-paper outline-none transition-colors focus:border-mint"
                placeholder="Tell me about your project or opportunity…"
              />
            </div>
            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-full bg-violet px-5 py-3 font-medium text-paper shadow-glow transition-transform hover:scale-[1.02]"
            >
              <Send size={16} /> Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
