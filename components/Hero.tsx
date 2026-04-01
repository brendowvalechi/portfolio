"use client";

import { motion } from "framer-motion";
import { ChevronDown, ArrowRight, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
});

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/brendowvalechi",
    icon: GithubIcon,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/brendow-henrique-valechi-ramos-1b47531a1/",
    icon: LinkedinIcon,
  },
  {
    label: "Email",
    href: "mailto:brendowvalechil@gmail.com",
    icon: Mail,
  },
];

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden"
      style={{ backgroundColor: "#0a0a0a" }}
    >
      {/* Background: radial gradient pulse */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute"
          style={{
            width: "70vw",
            height: "70vw",
            maxWidth: 800,
            maxHeight: 800,
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -55%)",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, #3b82f615 0%, #8b5cf608 50%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
        {/* Grid overlay */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(#ffffff06 1px, transparent 1px),
              linear-gradient(90deg, #ffffff06 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 sm:px-10 max-w-4xl mx-auto w-full">
        {/* "Olá, eu sou" */}
        <motion.p
          {...fadeUp(0.1)}
          className="text-sm font-mono tracking-[0.25em] uppercase mb-4"
          style={{ color: "#3b82f6" }}
        >
          Olá, eu sou
        </motion.p>

        {/* Nome */}
        <motion.h1
          {...fadeUp(0.25)}
          className="font-bold leading-tight mb-4"
          style={{
            fontSize: "clamp(2.5rem, 8vw, 5rem)",
            color: "#f5f5f5",
            letterSpacing: "-0.02em",
          }}
        >
          Brendow Valechi
        </motion.h1>

        {/* Subtítulo com gradiente */}
        <motion.h2
          {...fadeUp(0.4)}
          className="font-semibold mb-6"
          style={{
            fontSize: "clamp(1.1rem, 3.5vw, 1.6rem)",
            background: "linear-gradient(90deg, #3b82f6, #8b5cf6)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Python Backend Developer &amp; Data Analyst
        </motion.h2>

        {/* Frase descritiva */}
        <motion.p
          {...fadeUp(0.55)}
          className="max-w-xl mb-10 leading-relaxed"
          style={{
            color: "#a3a3a3",
            fontSize: "clamp(0.95rem, 2vw, 1.05rem)",
          }}
        >
          Construo APIs robustas e transformo dados brutos em decisões
          estratégicas.
        </motion.p>

        {/* CTAs */}
        <motion.div
          {...fadeUp(0.7)}
          className="flex flex-col sm:flex-row items-center gap-4 mb-10"
        >
          <button
            onClick={() => scrollTo("projetos")}
            className="group flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-white transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none w-full sm:w-auto justify-center"
            style={{
              background: "linear-gradient(135deg, #3b82f6, #6366f1)",
              boxShadow: "0 0 20px #3b82f630",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.boxShadow =
                "0 0 32px #3b82f650";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.boxShadow =
                "0 0 20px #3b82f630";
            }}
          >
            Ver Projetos
            <ArrowRight
              size={16}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </button>

          <button
            onClick={() => scrollTo("contato")}
            className="flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none w-full sm:w-auto justify-center whitespace-nowrap"
            style={{
              color: "#f5f5f5",
              border: "1px solid #3b82f640",
              backgroundColor: "transparent",
            }}
            onMouseEnter={(e) => {
              const btn = e.currentTarget as HTMLButtonElement;
              btn.style.borderColor = "#3b82f6";
              btn.style.backgroundColor = "#3b82f610";
            }}
            onMouseLeave={(e) => {
              const btn = e.currentTarget as HTMLButtonElement;
              btn.style.borderColor = "#3b82f640";
              btn.style.backgroundColor = "transparent";
            }}
          >
            Entrar em Contato
          </button>
        </motion.div>

        {/* Social links */}
        <motion.div
          {...fadeUp(0.85)}
          className="flex items-center gap-2"
        >
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              aria-label={label}
              className="flex items-center justify-center w-10 h-10 rounded-lg transition-all duration-200 hover:scale-110 focus:outline-none"
              style={{ color: "#a3a3a3", border: "1px solid #262626" }}
              onMouseEnter={(e) => {
                const a = e.currentTarget as HTMLAnchorElement;
                a.style.color = "#3b82f6";
                a.style.borderColor = "#3b82f640";
                a.style.backgroundColor = "#3b82f610";
              }}
              onMouseLeave={(e) => {
                const a = e.currentTarget as HTMLAnchorElement;
                a.style.color = "#a3a3a3";
                a.style.borderColor = "#262626";
                a.style.backgroundColor = "transparent";
              }}
            >
              <Icon size={18} />
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        onClick={() => scrollTo("sobre")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 focus:outline-none"
        aria-label="Rolar para baixo"
        style={{ color: "#a3a3a3" }}
      >
        <span className="text-xs font-mono tracking-widest uppercase" style={{ fontSize: "0.65rem" }}>
          scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={18} />
        </motion.div>
      </motion.button>
    </section>
  );
}
