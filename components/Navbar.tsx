"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

interface NavLink {
  label: string;
  href: string;
}

const links: NavLink[] = [
  { label: "Sobre", href: "#sobre" },
  { label: "Projetos", href: "#projetos" },
  { label: "Skills", href: "#skills" },
  { label: "Experiência", href: "#experiencia" },
  { label: "Contato", href: "#contato" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sectionIds = links.map((l) => l.href.replace("#", ""));
      let current = "";
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100) current = id;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5 shadow-lg shadow-black/20"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-5xl mx-auto px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group flex items-center gap-2 focus:outline-none"
            aria-label="Voltar ao topo"
          >
            <span
              className="w-9 h-9 rounded-lg flex items-center justify-center text-sm font-bold text-white transition-all duration-200 group-hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
              }}
            >
              BV
            </span>
            <span
              className="font-mono text-sm font-medium hidden sm:block transition-colors duration-200"
              style={{ color: "#a3a3a3" }}
            >
              brendow.dev
            </span>
          </button>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-2">
            {links.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 focus:outline-none ${
                      isActive
                        ? "text-[#3b82f6]"
                        : "text-[#a3a3a3] hover:text-[#f5f5f5]"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="active-nav"
                        className="absolute inset-0 rounded-lg"
                        style={{ backgroundColor: "#3b82f620" }}
                        transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                      />
                    )}
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg transition-colors duration-200 text-[#a3a3a3] hover:text-[#f5f5f5] hover:bg-white/5 focus:outline-none"
            aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden"
            style={{ backgroundColor: "#0a0a0aee", backdropFilter: "blur(12px)" }}
          >
            <motion.ul
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.25, delay: 0.05 }}
              className="flex flex-col items-center justify-center gap-2 h-full"
            >
              {links.map((link, i) => {
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.08 + i * 0.06 }}
                  >
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className={`text-2xl font-semibold px-8 py-3 rounded-xl transition-all duration-200 focus:outline-none ${
                        isActive
                          ? "text-[#3b82f6]"
                          : "text-[#f5f5f5] hover:text-[#3b82f6]"
                      }`}
                    >
                      {link.label}
                    </button>
                  </motion.li>
                );
              })}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
