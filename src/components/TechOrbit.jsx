import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaGitAlt,
  FaDatabase,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss, SiJavascript } from "react-icons/si";

const NODES = [
  { Icon: FaReact, color: "#61DAFB", size: 30, top: "6%", left: "48%" },
  { Icon: SiMongodb, color: "#33E1B8", size: 28, top: "20%", left: "78%" },
  { Icon: FaNodeJs, color: "#7C5CFC", size: 28, top: "42%", left: "92%" },
  { Icon: SiExpress, color: "#E8E6F5", size: 24, top: "68%", left: "82%" },
  { Icon: FaPython, color: "#FF8A4C", size: 28, top: "86%", left: "58%" },
  { Icon: FaJava, color: "#9B82FF", size: 26, top: "86%", left: "30%" },
  { Icon: SiJavascript, color: "#F7DF1E", size: 26, top: "68%", left: "8%" },
  { Icon: FaGitAlt, color: "#FF8A4C", size: 24, top: "42%", left: "0%" },
  { Icon: FaHtml5, color: "#E8E6F5", size: 24, top: "20%", left: "12%" },
  { Icon: SiTailwindcss, color: "#33E1B8", size: 24, top: "8%", left: "30%" },
];

export default function TechOrbit() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-md">
      {/* connecting ring */}
      <div className="absolute left-1/2 top-1/2 h-[78%] w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-line/70" />
      <div className="absolute left-1/2 top-1/2 h-[46%] w-[46%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-line/40" />

      {/* center glow */}
      <div className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet/30 blur-2xl" />

      {NODES.map(({ Icon, color, size, top, left }, i) => (
        <motion.div
          key={i}
          className="absolute flex items-center justify-center rounded-2xl border border-line bg-card/80 p-3 shadow-glass"
          style={{ top, left, transform: "translate(-50%, -50%)" }}
          animate={{ y: [0, i % 2 === 0 ? -8 : 8, 0] }}
          transition={{
            repeat: Infinity,
            duration: 3.5 + (i % 4) * 0.5,
            ease: "easeInOut",
            delay: i * 0.15,
          }}
          whileHover={{ scale: 1.15 }}
        >
          <Icon size={size} color={color} />
        </motion.div>
      ))}
    </div>
  );
}
