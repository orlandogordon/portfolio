import type { ExperienceEntry } from "./types";

export const experience: ExperienceEntry[] = [
  {
    date: "2024 — Now",
    title: "Software Engineer",
    company: "PNC Bank · Cloud Security",
    description:
      "As a member of the Cloud Security team, I build automation that measures PNC's AWS and Azure environments against internal security policies and NIST standards, wired into a CI/CD deployment pipeline so problems surface at build and deployment time. I also helped design and build a cloud security reporting database that pulls data from across our cloud services and rolls it up into the aggregate views senior stakeholders rely on to track security health over time.",
  },
  {
    date: "2023",
    title: "Software Engineer",
    company: "Microsoft Leap · Azure Datacenter Firmware",
    description:
      "Leap is Microsoft's apprenticeship for engineers from non-traditional backgrounds, pairing classroom training with a full-time placement on a product team. As a member of the Datacenter Firmware team, I worked on low-level C drivers used to configure and monitor server hardware remotely, and wrote an XML config parser from scratch that consolidated server configuration into a single deployable manifest, standardizing settings and cutting the time to push config changes.",
  },
  {
    date: "2020 — 2023",
    title: "Associate Broker",
    company: "Willis Towers Watson · Cyber Risk Management",
    description:
      "I worked in WTW's cyber risk practice helping clients understand how their security posture compared to their peers. I built Excel tools to pull together and visualize 5,000+ data points for that benchmarking, and ran internal trainings to get the rest of the team using them.",
  },
  {
    date: "2016 — 2020",
    title: "B.S. Economics, Minor in Statistics",
    company: "Rutgers University · New Brunswick, NJ",
    description:
      "Bachelor of Science in Economics with a minor in Statistics.",
  },
];
