import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Splash({ onDone }) {
  const [stage, setStage] = useState(0); // 0: initials, 1: name reveal, 2: wipe out
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setStage(1), 700);
    const t2 = setTimeout(() => setStage(2), 1900);
    const t3 = setTimeout(() => setExiting(true), 2500);
    const t4 = setTimeout(onDone, 3150);
    return () => [t1, t2, t3, t4].forEach(clearTimeout);
  }, [onDone]);

  const letters = "Iswarya S".split("");

  return (
    <AnimatePresence>
      {!exiting && (
        <motion.div
          className="fixed inset-0 z-[100] overflow-hidden bg-ink"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* two curtain panels that wipe apart on exit */}
          <motion.div
            className="absolute inset-y-0 left-0 w-1/2 bg-ink"
            animate={stage === 2 ? { x: "-100%" } : { x: 0 }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          />
          <motion.div
            className="absolute inset-y-0 right-0 w-1/2 bg-ink"
            animate={stage === 2 ? { x: "100%" } : { x: 0 }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          />

          <div className="absolute inset-0 bg-violet-glow" />
          <div className="absolute inset-0 bg-mint-glow" />

          <div className="relative flex h-full w-full flex-col items-center justify-center">
            <AnimatePresence mode="wait">
              {stage === 0 ? (
                <motion.div
                  key="initials"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.15, filter: "blur(8px)" }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  className="font-display text-7xl font-bold text-gradient sm:text-8xl"
                >
                  IS
                </motion.div>
              ) : (
                <motion.div
                  key="name"
                  className="flex flex-col items-center"
                >
                  <div className="flex overflow-hidden font-display text-4xl font-bold text-paper sm:text-6xl">
                    {letters.map((ch, i) => (
                      <motion.span
                        key={i}
                        initial={{ y: "110%" }}
                        animate={{ y: "0%" }}
                        transition={{
                          delay: i * 0.045,
                          duration: 0.55,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                        className={ch === " " ? "w-3 sm:w-4" : ""}
                      >
                        {ch === " " ? "\u00A0" : ch}
                      </motion.span>
                    ))}
                  </div>

                  <motion.p
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.55, duration: 0.5 }}
                    className="mt-3 font-mono text-xs uppercase tracking-[0.3em] text-mint sm:text-sm"
                  >
                    Full-Stack Developer
                  </motion.p>

                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                    className="mt-5 h-px max-w-[140px] bg-gradient-to-r from-transparent via-violet-soft to-transparent"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
