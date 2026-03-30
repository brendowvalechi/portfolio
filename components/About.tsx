"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface HighlightedTextProps {
  children: string;
  highlights: { word: string; color?: string }[];
}

function HighlightedText({ children, highlights }: HighlightedTextProps) {
  const result: React.ReactNode[] = [];

  let remaining = children;

  for (const { word, color } of highlights) {
    const idx = remaining.indexOf(word);
    if (idx === -1) continue;
    if (idx > 0) result.push(remaining.slice(0, idx));
    result.push(
      <strong key={word} style={{ color: color ?? "#3b82f6", fontWeight: 600 }}>
        {word}
      </strong>
    );
    remaining = remaining.slice(idx + word.length);
  }

  if (remaining) result.push(remaining);

  return <>{result}</>;
}

const paragraphs = [
  {
    text: "Minha jornada na tecnologia começou de um lugar inesperado: o campo. Formado em Engenharia Agronômica, descobri no trabalho com dados agrícolas que minha verdadeira paixão era transformar dados em decisões. Essa transição de carreira me deu uma perspectiva única — combino raciocínio analítico com a resiliência de quem já reinventou sua trajetória.",
    highlights: [
      { word: "Engenharia Agronômica" },
      { word: "transformar dados em decisões" },
      { word: "perspectiva única" },
    ],
  },
  {
    text: "Hoje, atuo como Analista de Dados na Prefeitura de Uberlândia, onde construo dashboards em Power BI e estruturo o tratamento de grandes volumes de dados públicos. Em paralelo, estou me especializando em Python Backend, construindo APIs com FastAPI, sistemas assíncronos e pipelines de dados.",
    highlights: [
      { word: "Analista de Dados" },
      { word: "Power BI" },
      { word: "Python Backend" },
      { word: "FastAPI" },
    ],
  },
  {
    text: "Uso IA de forma estratégica (Prompt Engineering) para acelerar entregas e resolver problemas complexos — não como muleta, mas como multiplicador de produtividade. Busco minha primeira oportunidade em desenvolvimento backend ou análise de dados.",
    highlights: [
      { word: "Prompt Engineering" },
      { word: "multiplicador de produtividade" },
      { word: "desenvolvimento backend" },
      { word: "análise de dados" },
    ],
  },
];

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="sobre"
      ref={ref}
      className="relative py-28"
      style={{ backgroundColor: "#0a0a0a" }}
    >
      {/* Subtle divider top */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, #3b82f620, transparent)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2
            className="text-3xl sm:text-4xl font-bold mb-3"
            style={{ color: "#f5f5f5" }}
          >
            Sobre Mim
          </h2>
          <div
            className="h-1 w-12 rounded-full"
            style={{
              background: "linear-gradient(90deg, #3b82f6, #8b5cf6)",
            }}
          />
        </motion.div>

        {/* Two-column layout */}
        <div className="flex flex-col-reverse md:flex-row items-center md:items-start gap-12 md:gap-16">
          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex-1 flex flex-col gap-6"
          >
            {paragraphs.map((p, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.25 + i * 0.12 }}
                className="leading-relaxed text-base sm:text-lg"
                style={{ color: "#a3a3a3" }}
              >
                <HighlightedText highlights={p.highlights}>
                  {p.text}
                </HighlightedText>
              </motion.p>
            ))}
          </motion.div>

          {/* Right: avatar */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex-shrink-0 flex flex-col items-center gap-4"
          >
            {/* Glow ring */}
            <div className="relative">
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
                  filter: "blur(20px)",
                  opacity: 0.35,
                  transform: "scale(1.15)",
                }}
              />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full"
                style={{
                  background:
                    "conic-gradient(from 0deg, #3b82f6, #8b5cf6, transparent, transparent, #3b82f6)",
                  padding: 2,
                  borderRadius: "50%",
                }}
              />
              <div
                className="relative flex items-center justify-center rounded-full"
                style={{
                  width: 200,
                  height: 200,
                  background: "linear-gradient(135deg, #1a1a2e, #16213e, #0f3460)",
                  border: "2px solid #3b82f630",
                  zIndex: 1,
                }}
              >
                <span
                  className="font-bold select-none"
                  style={{
                    fontSize: "4rem",
                    background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    lineHeight: 1,
                  }}
                >
                  BV
                </span>
              </div>
            </div>

            {/* Name & role below avatar */}
            <div className="text-center">
              <p
                className="font-semibold text-base"
                style={{ color: "#f5f5f5" }}
              >
                Brendow Valechi
              </p>
              <p
                className="text-sm font-mono mt-1"
                style={{ color: "#a3a3a3" }}
              >
                Python Backend · Data
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
