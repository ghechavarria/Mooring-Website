import { motion } from "framer-motion";

const nav = [
  { label: "Platform", href: "#platform" },
  { label: "Workflow", href: "#workflow" },
  { label: "Results", href: "#results" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-ink-950/75 backdrop-blur-xl"
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#" className="group flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-tide to-glow shadow-lg shadow-tide/20 ring-1 ring-white/10 transition group-hover:shadow-tide/40">
            <span className="font-mono text-sm font-medium text-ink-950">CL</span>
          </span>
          <span className="text-sm font-semibold tracking-tight text-white">
            ClearLedger
          </span>
        </a>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative text-sm font-medium text-mist/70 transition hover:text-white"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-tide to-glow transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur transition hover:border-tide/40 hover:bg-white/10 sm:inline-flex"
          >
            Book a demo
          </a>
          <a
            href="#platform"
            className="inline-flex rounded-full bg-gradient-to-r from-tide to-cyan-400 px-4 py-2 text-sm font-semibold text-ink-950 shadow-lg shadow-tide/25 transition hover:brightness-110"
          >
            See platform
          </a>
        </div>
      </div>
    </motion.header>
  );
}
