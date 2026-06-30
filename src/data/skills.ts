import type { SkillGroup } from "./types";

export const skillsGroups: SkillGroup[] = [
  {
    label: "LANGUAGES",
    items: ["Python", "TypeScript / JS", "C / C++", "SQL"],
  },
  {
    label: "FRAMEWORKS & LIBRARIES",
    items: ["React", "Node · Express", "FastAPI", "Tailwind CSS"],
  },
  {
    label: "DATA & STORAGE",
    items: ["PostgreSQL", "MongoDB", "MS SQL Server", "SQLAlchemy"],
  },
  {
    label: "CLOUD & DEVOPS",
    items: ["AWS & Azure", "Docker · OpenShift", "Terraform", "Jenkins · Groovy", "CI/CD"],
  },
  {
    label: "AI, TESTING & TOOLS",
    items: [
      "Local LLM Serving (llama.cpp)",
      "MCP Integrations",
      "LLM evaluation & tuning",
      "Jest · Pytest",
      "Git · Linux",
    ],
  },
  {
    label: "CERTIFICATIONS",
    items: ["AZ-500", "AWS CCP"],
  },
];
