"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Mail, MapPin, Send, X, CheckCircle } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "brendowvalechil@gmail.com",
    href: "mailto:brendowvalechil@gmail.com",
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: "brendow-henrique-valechi-ramos",
    href: "https://www.linkedin.com/in/brendow-henrique-valechi-ramos-1b47531a1/",
  },
  {
    icon: GithubIcon,
    label: "GitHub",
    value: "brendowvalechi",
    href: "https://github.com/brendowvalechi",
  },
  {
    icon: MapPin,
    label: "Localização",
    value: "Uberlândia, MG — Brasil",
    href: null,
  },
];

function Toast({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 8, scale: 0.95 }}
      transition={{ duration: 0.25 }}
      className="fixed bottom-6 right-6 z-50 flex items-start gap-3 p-4 rounded-xl max-w-sm"
      style={{
        backgroundColor: "#111111",
        border: "1px solid #3b82f640",
        boxShadow: "0 8px 32px #00000060, 0 0 0 1px #3b82f615",
      }}
    >
      <CheckCircle size={18} style={{ color: "#3b82f6", flexShrink: 0, marginTop: 1 }} />
      <div className="flex-1">
        <p className="text-sm font-medium mb-0.5" style={{ color: "#f5f5f5" }}>
          Em breve!
        </p>
        <p className="text-xs leading-relaxed" style={{ color: "#a3a3a3" }}>
          Por enquanto, me contate pelos links ao lado.
        </p>
      </div>
      <button
        onClick={onClose}
        className="flex-shrink-0 focus:outline-none"
        style={{ color: "#525252" }}
        onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.color = "#a3a3a3")}
        onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.color = "#525252")}
      >
        <X size={14} />
      </button>
    </motion.div>
  );
}

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [toast, setToast] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setToast(true);
    setTimeout(() => setToast(false), 4000);
  };

  const inputStyle = (field: string) => ({
    backgroundColor: "#0a0a0a",
    border: `1px solid ${focused === field ? "#3b82f6" : "#262626"}`,
    color: "#f5f5f5",
    outline: "none",
    transition: "border-color 0.2s",
    boxShadow: focused === field ? "0 0 0 3px #3b82f615" : "none",
  });

  return (
    <>
      <section
        id="contato"
        ref={ref}
        className="relative py-28"
        style={{ backgroundColor: "#0a0a0a" }}
      >
        {/* Divider */}
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(90deg, transparent, #3b82f620, transparent)" }}
        />

        <div className="max-w-5xl mx-auto px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-5"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-3" style={{ color: "#f5f5f5" }}>
              Vamos Conversar?
            </h2>
            <div
              className="h-1 w-12 rounded-full"
              style={{ background: "linear-gradient(90deg, #3b82f6, #8b5cf6)" }}
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-base mb-14 max-w-xl"
            style={{ color: "#a3a3a3" }}
          >
            Estou buscando minha primeira oportunidade em backend ou análise de dados.
            Se você quer trocar uma ideia, é só chamar.
          </motion.p>

          {/* Two-column layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Left: contact links */}
            <motion.div
              initial={{ opacity: 0, x: -32 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="flex flex-col gap-3"
            >
              {contactLinks.map(({ icon: Icon, label, value, href }, i) => {
                const inner = (
                  <div
                    className="flex items-center gap-4 p-4 rounded-xl transition-all duration-200"
                    style={{
                      backgroundColor: "#111111",
                      border: "1px solid #1f1f1f",
                    }}
                    onMouseEnter={(e) => {
                      if (!href) return;
                      const el = e.currentTarget as HTMLDivElement;
                      el.style.borderColor = "#3b82f640";
                      el.style.backgroundColor = "#3b82f608";
                    }}
                    onMouseLeave={(e) => {
                      if (!href) return;
                      const el = e.currentTarget as HTMLDivElement;
                      el.style.borderColor = "#1f1f1f";
                      el.style.backgroundColor = "#111111";
                    }}
                  >
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{
                        backgroundColor: "#3b82f612",
                        border: "1px solid #3b82f625",
                      }}
                    >
                      <Icon size={18} style={{ color: "#3b82f6" }} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-mono mb-0.5" style={{ color: "#525252" }}>
                        {label}
                      </p>
                      <p
                        className="text-sm font-medium truncate"
                        style={{ color: href ? "#f5f5f5" : "#a3a3a3" }}
                      >
                        {value}
                      </p>
                    </div>
                  </div>
                );

                return (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, y: 12 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
                  >
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith("mailto") ? undefined : "_blank"}
                        rel="noopener noreferrer"
                        className="block focus:outline-none rounded-xl"
                      >
                        {inner}
                      </a>
                    ) : (
                      inner
                    )}
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Right: form */}
            <motion.div
              initial={{ opacity: 0, x: 32 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-4 p-6 rounded-2xl"
                style={{ backgroundColor: "#111111", border: "1px solid #1f1f1f" }}
              >
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-mono" style={{ color: "#525252" }}>
                    Nome
                  </label>
                  <input
                    type="text"
                    placeholder="Seu nome"
                    required
                    className="px-4 py-3 rounded-lg text-sm w-full"
                    style={inputStyle("nome")}
                    onFocus={() => setFocused("nome")}
                    onBlur={() => setFocused(null)}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-mono" style={{ color: "#525252" }}>
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="seu@email.com"
                    required
                    className="px-4 py-3 rounded-lg text-sm w-full"
                    style={inputStyle("email")}
                    onFocus={() => setFocused("email")}
                    onBlur={() => setFocused(null)}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-mono" style={{ color: "#525252" }}>
                    Mensagem
                  </label>
                  <textarea
                    placeholder="Sua mensagem..."
                    rows={5}
                    required
                    className="px-4 py-3 rounded-lg text-sm w-full resize-none"
                    style={inputStyle("mensagem")}
                    onFocus={() => setFocused("mensagem")}
                    onBlur={() => setFocused(null)}
                  />
                </div>

                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm text-white transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] focus:outline-none mt-1"
                  style={{
                    background: "linear-gradient(135deg, #3b82f6, #6366f1)",
                    boxShadow: "0 0 20px #3b82f630",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 0 32px #3b82f650";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 0 20px #3b82f630";
                  }}
                >
                  <Send size={15} />
                  Enviar Mensagem
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Toast */}
      <AnimatePresence>
        {toast && <Toast key="toast" onClose={() => setToast(false)} />}
      </AnimatePresence>
    </>
  );
}
