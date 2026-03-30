"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  GraduationCap,
  Sprout,
  Users,
  BarChart3,
  Rocket,
} from "lucide-react";

interface TimelineItem {
  year: string;
  title: string;
  description: string;
  icon: React.ElementType;
  color: string;
  current?: boolean;
}

const items: TimelineItem[] = [
  {
    year: "2020",
    title: "Engenharia Agronômica — IFTM",
    description:
      "Graduação concluída. Onde tudo começou: o contato com dados agrícolas despertou o interesse por tecnologia.",
    icon: GraduationCap,
    color: "#10b981",
  },
  {
    year: "2021 – 2023",
    title: "Operações Agronômicas & Transição",
    description:
      "Atuação em Semeali, Advanta, AgiAgro e Qualiteste. Resolução de problemas e adaptabilidade em campo — habilidades que trouxe para a tech.",
    icon: Sprout,
    color: "#eab308",
  },
  {
    year: "2023",
    title: "Líder de Equipe — Kuhlmann",
    description:
      "Gestão operacional, liderança de equipe e acompanhamento de auditorias.",
    icon: Users,
    color: "#f97316",
  },
  {
    year: "2024 – Atual",
    title: "Analista de Dados — Prefeitura de Uberlândia",
    description:
      "Coleta e tratamento de grandes volumes de dados públicos. Dashboards gerenciais em Power BI. Automações para fluxo de informações.",
    icon: BarChart3,
    color: "#3b82f6",
    current: true,
  },
  {
    year: "Atual",
    title: "Backend Developer em Formação",
    description:
      "Cursando ADS na Unicesumar. Construindo portfólio sólido em Python Backend com FastAPI, asyncio, Docker e CI/CD.",
    icon: Rocket,
    color: "#8b5cf6",
    current: true,
  },
];

interface TimelineItemProps {
  item: TimelineItem;
  index: number;
  inView: boolean;
}

function TimelineEntry({ item, index, inView }: TimelineItemProps) {
  const isLeft = index % 2 === 0;
  const Icon = item.icon;

  const cardVariants = {
    hidden: { opacity: 0, x: isLeft ? -40 : 40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        delay: 0.1 + index * 0.13,
        ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
      },
    },
  };

  const dotVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, delay: 0.05 + index * 0.13 },
    },
  };

  return (
    <div className="relative flex items-center">
      {/* ── DESKTOP layout (alternating sides) ─────────────────────── */}
      <div className="hidden md:grid w-full grid-cols-[1fr_auto_1fr] gap-x-8 items-center">
        {/* Left slot */}
        <div className={isLeft ? "flex justify-end" : ""}>
          {isLeft && (
            <motion.div
              variants={cardVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="max-w-sm w-full"
            >
              <Card item={item} />
            </motion.div>
          )}
        </div>

        {/* Center dot */}
        <motion.div
          variants={dotVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-col items-center"
        >
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center z-10 flex-shrink-0"
            style={{
              background: `${item.color}18`,
              border: `2px solid ${item.color}`,
              boxShadow: `0 0 16px ${item.color}30`,
            }}
          >
            <Icon size={20} style={{ color: item.color }} />
          </div>
        </motion.div>

        {/* Right slot */}
        <div className={!isLeft ? "" : ""}>
          {!isLeft && (
            <motion.div
              variants={cardVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="max-w-sm w-full"
            >
              <Card item={item} />
            </motion.div>
          )}
        </div>
      </div>

      {/* ── MOBILE layout (all left-aligned) ───────────────────────── */}
      <div className="flex md:hidden w-full gap-4 items-start">
        {/* Dot */}
        <motion.div
          variants={dotVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex-shrink-0 mt-4"
        >
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center z-10"
            style={{
              background: `${item.color}18`,
              border: `2px solid ${item.color}`,
              boxShadow: `0 0 12px ${item.color}25`,
            }}
          >
            <Icon size={16} style={{ color: item.color }} />
          </div>
        </motion.div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{
            duration: 0.6,
            delay: 0.1 + index * 0.13,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="flex-1 pb-2"
        >
          <Card item={item} />
        </motion.div>
      </div>
    </div>
  );
}

function Card({ item }: { item: TimelineItem }) {
  return (
    <div
      className="rounded-xl p-5 transition-all duration-200 hover:scale-[1.01]"
      style={{
        backgroundColor: "#111111",
        border: `1px solid ${item.color}20`,
      }}
    >
      {/* Year badge */}
      <span
        className="inline-block text-xs font-mono font-semibold px-2 py-0.5 rounded mb-3"
        style={{
          color: item.color,
          backgroundColor: `${item.color}12`,
          border: `1px solid ${item.color}25`,
        }}
      >
        {item.current && (
          <span
            className="inline-block w-1.5 h-1.5 rounded-full mr-1.5 align-middle"
            style={{ backgroundColor: item.color }}
          />
        )}
        {item.year}
      </span>

      <h3 className="font-semibold text-base mb-2" style={{ color: "#f5f5f5" }}>
        {item.title}
      </h3>
      <p className="text-sm leading-relaxed" style={{ color: "#a3a3a3" }}>
        {item.description}
      </p>
    </div>
  );
}

export default function Experience() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="experiencia"
      ref={ref}
      className="relative py-28"
      style={{ backgroundColor: "#0a0a0a" }}
    >
      {/* Divider */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: "linear-gradient(90deg, transparent, #3b82f620, transparent)",
        }}
      />

      <div className="max-w-5xl mx-auto px-8">
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
            Trajetória
          </h2>
          <div
            className="h-1 w-12 rounded-full"
            style={{ background: "linear-gradient(90deg, #3b82f6, #8b5cf6)" }}
          />
        </motion.div>

        {/* Timeline wrapper */}
        <div className="relative">
          {/* Vertical line — desktop */}
          <div
            className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
            style={{
              background:
                "linear-gradient(to bottom, transparent, #3b82f630 10%, #3b82f630 90%, transparent)",
            }}
          />

          {/* Vertical line — mobile */}
          <div
            className="md:hidden absolute left-5 top-0 bottom-0 w-px"
            style={{
              background:
                "linear-gradient(to bottom, transparent, #3b82f630 10%, #3b82f630 90%, transparent)",
            }}
          />

          {/* Items */}
          <div className="flex flex-col gap-10 md:gap-14">
            {items.map((item, i) => (
              <TimelineEntry key={i} item={item} index={i} inView={inView} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
