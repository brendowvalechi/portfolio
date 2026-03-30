"use client";

import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

const navLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Projetos", href: "#projetos" },
  { label: "Skills", href: "#skills" },
  { label: "Experiência", href: "#experiencia" },
  { label: "Contato", href: "#contato" },
];

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

function scrollTo(href: string) {
  const id = href.replace("#", "");
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#0d0d0d", borderTop: "1px solid #1a1a1a" }}>
      <div className="max-w-5xl mx-auto px-8 py-14">
        {/* Three-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-12">
          {/* Col 1: Brand */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <span
                className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold text-white"
                style={{ background: "linear-gradient(135deg, #3b82f6, #8b5cf6)" }}
              >
                BV
              </span>
              <span className="font-bold text-base" style={{ color: "#f5f5f5" }}>
                Brendow Valechi
              </span>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "#525252" }}>
              Python Backend Developer
              <br />& Data Analyst
            </p>
          </div>

          {/* Col 2: Quick links */}
          <div className="flex flex-col gap-3">
            <p className="text-xs font-mono font-semibold uppercase tracking-widest mb-1" style={{ color: "#3b3b3b" }}>
              Navegação
            </p>
            <ul className="flex flex-col gap-2">
              {navLinks.map(({ label, href }) => (
                <li key={label}>
                  <button
                    onClick={() => scrollTo(href)}
                    className="text-sm transition-colors duration-150 focus:outline-none text-left"
                    style={{ color: "#525252" }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLButtonElement).style.color = "#a3a3a3")
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLButtonElement).style.color = "#525252")
                    }
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Social */}
          <div className="flex flex-col gap-3">
            <p className="text-xs font-mono font-semibold uppercase tracking-widest mb-1" style={{ color: "#3b3b3b" }}>
              Contato
            </p>
            <div className="flex flex-col gap-3">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm transition-colors duration-150 focus:outline-none w-fit"
                  style={{ color: "#525252" }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLAnchorElement).style.color = "#3b82f6")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLAnchorElement).style.color = "#525252")
                  }
                >
                  <Icon size={15} />
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderTop: "1px solid #1a1a1a" }}
        >
          <p className="text-xs font-mono text-center sm:text-left" style={{ color: "#3b3b3b" }}>
            © 2026 Brendow Valechi. Feito com Next.js, TypeScript e muito café.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-xs font-mono transition-colors duration-150 focus:outline-none"
            style={{ color: "#3b3b3b" }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLButtonElement).style.color = "#3b82f6")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLButtonElement).style.color = "#3b3b3b")
            }
          >
            ↑ Voltar ao topo
          </button>
        </div>
      </div>
    </footer>
  );
}
