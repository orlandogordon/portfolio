import type { Project } from "./types";
import pocketWatcher from "../assets/pocket-watcher.webp";
import wanderNA from "../assets/wander-na.webp";
import evoGym from "../assets/evo-gym.webp";

export const projects: Project[] = [
  {
    number: "01",
    category: "FINTECH · FULL-STACK",
    title: "Pocket Watcher",
    description:
      "A private personal-finance app. Users upload their own bank statements, with no third-party API access required, and get rich transaction detail, AI-assisted auto-categorization, and budget & net-worth tracking over time.",
    tags: ["Python", "FastAPI", "React", "TypeScript", "PostgreSQL"],
    liveUrl: "https://pocketwatcher.orlandogordon.com/",
    sourceUrl: "https://github.com/orlandogordon/pocket-watcher-api",
    sources: [
      { label: "API", url: "https://github.com/orlandogordon/pocket-watcher-api" },
      { label: "UI", url: "https://github.com/orlandogordon/pocket-watcher-ui" },
    ],
    image: pocketWatcher,
  },
  {
    number: "02",
    category: "MARKETPLACE · PAYMENTS",
    title: "Wander NA",
    description:
      "An online tour-booking platform for experiences across North America. Search and browse tours, create an account with securely encrypted credentials, book through Stripe, and leave editable comments on every tour.",
    tags: ["Node", "Express", "MongoDB", "React", "TypeScript", "Stripe"],
    liveUrl: "https://wanderna.orlandogordon.com/",
    sourceUrl: "https://github.com/orlandogordon/wander-na-backend",
    sources: [
      { label: "Frontend", url: "https://github.com/orlandogordon/wander-na-frontend" },
      { label: "Backend", url: "https://github.com/orlandogordon/wander-na-backend" },
    ],
    imageCaption: "tours.png",
    image: wanderNA,
  },
  {
    number: "03",
    category: "FRONTEND · MOTION & UI",
    title: "EvoGym",
    description:
      "A marketing site for a fictional fitness brand, built to sharpen modern styling and animation patterns with strict typing throughout. Smooth scroll-driven section reveals, a fully responsive layout, and custom graphics designed in Canva.",
    tags: ["React", "TypeScript", "Tailwind"],
    liveUrl: "https://main--evo-gym-nj.netlify.app/",
    sourceUrl: "https://github.com/orlandogordon/evo-gym",
    imageCaption: "home.png",
    image: evoGym,
  },
];
