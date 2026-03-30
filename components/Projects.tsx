"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

const pipelineSteps = [
  { label: "Coleta", color: "#8b5cf6" },
  { label: "API", color: "#3b82f6" },
  { label: "Proteção", color: "#06b6d4" },
];

export default function Projects() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="projetos"
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

      <div className="max-w-5xl mx-auto px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-5"
        >
          <h2
            className="text-3xl sm:text-4xl font-bold mb-3"
            style={{ color: "#f5f5f5" }}
          >
            Projetos
          </h2>
          <div
            className="h-1 w-12 rounded-full"
            style={{
              background: "linear-gradient(90deg, #3b82f6, #8b5cf6)",
            }}
          />
        </motion.div>

        {/* Subtitle with pipeline */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col sm:flex-row sm:items-center gap-3 mb-14"
        >
          <p className="text-sm sm:text-base" style={{ color: "#a3a3a3" }}>
            Cada projeto faz parte de um pipeline completo:
          </p>
          <div className="flex items-center gap-2">
            {pipelineSteps.map((step, i) => (
              <div key={step.label} className="flex items-center gap-2">
                <span
                  className="text-sm font-mono font-semibold px-2 py-0.5 rounded"
                  style={{
                    color: step.color,
                    backgroundColor: `${step.color}15`,
                    border: `1px solid ${step.color}30`,
                  }}
                >
                  {step.label}
                </span>
                {i < pipelineSteps.length - 1 && (
                  <ArrowRight size={14} style={{ color: "#3b3b3b" }} />
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center text-sm mt-12 font-mono"
          style={{ color: "#404040" }}
        >
          Clique em qualquer card para ver mais detalhes
        </motion.p>
      </div>
    </section>
  );
}
