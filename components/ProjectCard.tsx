"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Database,
  Zap,
  Shield,
  ExternalLink,
  X,
  Star,
} from "lucide-react";
import { GithubIcon } from "@/components/icons";
import type { Project } from "@/data/projects";

const iconMap = {
  database: Database,
  zap: Zap,
  shield: Shield,
} as const;

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const Icon = iconMap[project.icon];

  return (
    <>
      {/* Card */}
      <motion.article
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          delay: index * 0.12,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
        onClick={() => setModalOpen(true)}
        className="group relative flex flex-col cursor-pointer rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.02]"
        style={{
          background:
            "linear-gradient(135deg, #111111 0%, #131313 100%)",
          border: "1px solid #1f1f1f",
          boxShadow: "0 4px 24px #00000040",
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget;
          el.style.border = "1px solid #3b82f640";
          el.style.boxShadow =
            "0 0 0 1px #3b82f620, 0 8px 40px #3b82f615, 0 4px 24px #00000060";
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget;
          el.style.border = "1px solid #1f1f1f";
          el.style.boxShadow = "0 4px 24px #00000040";
        }}
        role="button"
        tabIndex={0}
        aria-label={`Abrir detalhes de ${project.title}`}
        onKeyDown={(e) => e.key === "Enter" && setModalOpen(true)}
      >
        {/* Featured badge */}
        {project.featured && (
          <div
            className="absolute top-4 right-4 flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold z-10"
            style={{
              background: "linear-gradient(135deg, #3b82f620, #8b5cf620)",
              border: "1px solid #3b82f640",
              color: "#60a5fa",
            }}
          >
            <Star size={10} fill="#60a5fa" />
            Destaque
          </div>
        )}

        <div className="flex flex-col flex-1 p-6">
          {/* Icon */}
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
            style={{
              background: "linear-gradient(135deg, #3b82f620, #8b5cf615)",
              border: "1px solid #3b82f630",
            }}
          >
            <Icon size={22} style={{ color: "#3b82f6" }} />
          </div>

          {/* Title */}
          <h3
            className="font-bold text-lg mb-1 leading-snug"
            style={{ color: "#f5f5f5" }}
          >
            {project.title}
          </h3>

          {/* Narrative */}
          <p
            className="text-xs font-mono italic mb-3"
            style={{ color: "#8b5cf6" }}
          >
            {project.narrative}
          </p>

          {/* Description */}
          <p
            className="text-sm leading-relaxed mb-5 flex-1"
            style={{ color: "#a3a3a3" }}
          >
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-5">
            {project.tags.slice(0, 5).map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 rounded-full text-xs font-mono font-medium"
                style={{
                  backgroundColor: "#1a1a1a",
                  color: "#60a5fa",
                  border: "1px solid #3b82f620",
                }}
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 5 && (
              <span
                className="px-2 py-0.5 rounded-full text-xs font-mono"
                style={{ color: "#525252" }}
              >
                +{project.tags.length - 5}
              </span>
            )}
          </div>

          {/* GitHub link */}
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-2 text-sm font-medium transition-colors duration-200 w-fit"
            style={{ color: "#a3a3a3" }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.color = "#3b82f6")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.color = "#a3a3a3")
            }
          >
            <GithubIcon width={14} height={14} />
            Ver no GitHub
            <ExternalLink size={12} />
          </a>
        </div>

        {/* Bottom glow line */}
        <div
          className="h-px w-0 group-hover:w-full transition-all duration-500"
          style={{
            background: "linear-gradient(90deg, transparent, #3b82f6, transparent)",
          }}
        />
      </motion.article>

      {/* Modal */}
      <AnimatePresence>
        {modalOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50"
              style={{ backgroundColor: "#00000090", backdropFilter: "blur(8px)" }}
              onClick={() => setModalOpen(false)}
            />

            {/* Modal panel */}
            <motion.div
              key="modal"
              initial={{ opacity: 0, scale: 0.92, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 24 }}
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="fixed z-50 inset-0 flex items-center justify-center p-4 pointer-events-none"
            >
              <div
                className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl pointer-events-auto"
                style={{
                  background: "#111111",
                  border: "1px solid #3b82f640",
                  boxShadow: "0 0 0 1px #3b82f615, 0 24px 80px #00000080",
                }}
              >
                {/* Close button */}
                <button
                  onClick={() => setModalOpen(false)}
                  className="absolute top-4 right-4 w-8 h-8 rounded-lg flex items-center justify-center transition-colors duration-200 focus:outline-none z-10"
                  style={{ color: "#a3a3a3", backgroundColor: "#1a1a1a" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.color = "#f5f5f5";
                    (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#262626";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.color = "#a3a3a3";
                    (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#1a1a1a";
                  }}
                  aria-label="Fechar"
                >
                  <X size={16} />
                </button>

                <div className="p-8">
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{
                        background: "linear-gradient(135deg, #3b82f625, #8b5cf615)",
                        border: "1px solid #3b82f630",
                      }}
                    >
                      <Icon size={26} style={{ color: "#3b82f6" }} />
                    </div>
                    <div>
                      <h3
                        className="font-bold text-2xl leading-tight mb-1"
                        style={{ color: "#f5f5f5" }}
                      >
                        {project.title}
                      </h3>
                      <p
                        className="text-sm font-mono italic"
                        style={{ color: "#8b5cf6" }}
                      >
                        {project.narrative}
                      </p>
                    </div>
                  </div>

                  {/* Long description */}
                  <p
                    className="text-sm leading-relaxed mb-6"
                    style={{ color: "#a3a3a3", lineHeight: "1.8" }}
                  >
                    {project.longDescription}
                  </p>

                  {/* Tech stack */}
                  <div className="mb-8">
                    <h4
                      className="text-xs font-mono font-semibold uppercase tracking-widest mb-3"
                      style={{ color: "#525252" }}
                    >
                      Tecnologias
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full text-xs font-mono font-medium"
                          style={{
                            backgroundColor: "#1a1a1a",
                            color: "#60a5fa",
                            border: "1px solid #3b82f625",
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* GitHub CTA */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none"
                    style={{
                      background: "linear-gradient(135deg, #3b82f6, #6366f1)",
                      color: "#ffffff",
                      boxShadow: "0 0 20px #3b82f630",
                    }}
                  >
                    <GithubIcon width={16} height={16} />
                    Ver repositório no GitHub
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
