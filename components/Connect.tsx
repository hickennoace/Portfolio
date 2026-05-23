"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const contacts = [
  {
    Icon: Mail,
    label: "Email",
    display: "danielshaulov4@gmail.com",
    href: "mailto:danielshaulov4@gmail.com",
    external: false,
  },
  {
    Icon: Linkedin,
    label: "LinkedIn",
    display: "/in/danielshaulov",
    href: "https://www.linkedin.com/in/danielshaulov/",
    external: true,
  },
  {
    Icon: Github,
    label: "GitHub",
    display: "hickennoace",
    href: "https://github.com/hickennoace",
    external: true,
  },
];

export default function Connect() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="connect"
      ref={ref}
      className="py-28 sm:py-36 px-6 border-t border-white/[0.05]"
    >
      <div className="max-w-6xl mx-auto text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="block text-[11px] font-semibold text-blue-400 tracking-[0.22em] uppercase mb-6"
        >
          Connect
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.78, delay: 0.06, ease: EASE }}
          className="text-4xl sm:text-5xl lg:text-[3.8rem] font-bold tracking-tighter text-white mb-5"
        >
          Let&apos;s Connect.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.14 }}
          className="text-[17px] text-slate-400 font-light max-w-[400px] mx-auto mb-14 leading-relaxed"
        >
          Open to collaboration and junior analyst opportunities in data,
          finance, and tech.
        </motion.p>

        {/* Contact cards */}
        <div className="flex justify-center flex-wrap gap-4">
          {contacts.map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              target={c.external ? "_blank" : undefined}
              rel={c.external ? "noreferrer" : undefined}
              initial={{ opacity: 0, y: 22 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.2 + i * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2, ease: "easeOut" } }}
              className="group flex items-center gap-3.5 px-6 py-4 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-blue-500/35 hover:bg-blue-500/[0.06] transition-colors duration-300"
            >
              <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/20 transition-all duration-200">
                <c.Icon size={16} strokeWidth={1.5} className="text-blue-400" />
              </div>
              <div className="text-left">
                <p className="text-[10px] text-slate-500 font-semibold tracking-[0.16em] uppercase">
                  {c.label}
                </p>
                <p className="text-[13px] text-slate-300 group-hover:text-white transition-colors duration-200">
                  {c.display}
                </p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Footer line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.9, delay: 0.52 }}
          className="mt-20 pt-7 border-t border-white/[0.04]"
        >
          <p className="text-[11px] text-slate-600">
            © {new Date().getFullYear()} Daniel Shaulov · Built with Next.js ·
            Deployed on Wasmer Edge
          </p>
        </motion.div>
      </div>
    </section>
  );
}
