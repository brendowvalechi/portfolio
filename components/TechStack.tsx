"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface Tech {
  name: string;
  emoji: string;
}

interface Category {
  title: string;
  color: string;
  techs: Tech[];
}

const categories: Category[] = [
  {
    title: "Backend",
    color: "#3b82f6",
    techs: [
      { name: "Python", emoji: "🐍" },
      { name: "FastAPI", emoji: "⚡" },
      { name: "Pydantic", emoji: "🔷" },
      { name: "SQLAlchemy", emoji: "🗄️" },
      { name: "asyncio", emoji: "🔄" },
    ],
  },
  {
    title: "Data & BI",
    color: "#8b5cf6",
    techs: [
      { name: "Power BI", emoji: "📊" },
      { name: "PostgreSQL", emoji: "🐘" },
      { name: "SQLite", emoji: "💾" },
      { name: "Redis", emoji: "🔴" },
      { name: "Estatística", emoji: "📈" },
    ],
  },
  {
    title: "DevOps & Tools",
    color: "#06b6d4",
    techs: [
      { name: "Docker", emoji: "🐳" },
      { name: "GitHub Actions", emoji: "⚙️" },
      { name: "AWS EC2", emoji: "☁️" },
      { name: "nginx", emoji: "🌐" },
      { name: "Git", emoji: "🌿" },
    ],
  },
  {
    title: "Testes & Qualidade",
    color: "#10b981",
    techs: [
      { name: "pytest", emoji: "✅" },
      { name: "httpx", emoji: "🔗" },
    ],
  },
];

interface TechBadgeProps {
  tech: Tech;
  color: string;
  delay: number;
  inView: boolean;
}

function TechBadge({ tech, color, delay, inView }: TechBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85, y: 12 }}
      animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group flex flex-col items-center gap-2 p-4 rounded-xl cursor-default transition-all duration-200 hover:scale-105"
      style={{
        backgroundColor: "#111111",
        border: "1px solid #1f1f1f",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.borderColor = `${color}50`;
        el.style.backgroundColor = `${color}08`;
        el.style.boxShadow = `0 0 16px ${color}15`;
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.borderColor = "#1f1f1f";
        el.style.backgroundColor = "#111111";
        el.style.boxShadow = "none";
      }}
    >
      <span className="text-2xl leading-none select-none">{tech.emoji}</span>
      <span
        className="text-xs font-medium text-center leading-tight"
        style={{ color: "#a3a3a3" }}
      >
        {tech.name}
      </span>
    </motion.div>
  );
}

export default function TechStack() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  // Compute a global stagger offset per badge
  let globalIndex = 0;

  return (
    <section
      id="skills"
      ref={ref}
      className="relative py-28"
      style={{ backgroundColor: "#0a0a0a" }}
    >
      {/* Divider */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, #3b82f620, transparent)",
        }}
      />

      <div className="max-w-4xl mx-auto px-6 sm:px-10">
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
            Tech Stack
          </h2>
          <div
            className="h-1 w-12 rounded-full"
            style={{
              background: "linear-gradient(90deg, #3b82f6, #8b5cf6)",
            }}
          />
        </motion.div>

        {/* Categories */}
        <div className="flex flex-col gap-12">
          {categories.map((category, catIdx) => {
            const categoryStartIndex = globalIndex;
            globalIndex += category.techs.length;

            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: catIdx * 0.08 }}
              >
                {/* Category label */}
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="text-xs font-mono font-semibold uppercase tracking-widest px-2 py-1 rounded"
                    style={{
                      color: category.color,
                      backgroundColor: `${category.color}12`,
                      border: `1px solid ${category.color}25`,
                    }}
                  >
                    {category.title}
                  </span>
                  <div
                    className="flex-1 h-px"
                    style={{ backgroundColor: "#1f1f1f" }}
                  />
                </div>

                {/* Badges grid */}
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3">
                  {category.techs.map((tech, techIdx) => (
                    <TechBadge
                      key={tech.name}
                      tech={tech}
                      color={category.color}
                      delay={0.1 + (categoryStartIndex + techIdx) * 0.05}
                      inView={inView}
                    />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
