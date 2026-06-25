import type { Project } from "./types";
import wanderNA from "../assets/wander-na.png";

export const projects: Project[] = [
  {
    number: "01",
    category: "FINTECH · FULL-STACK",
    title: "Pocket Watcher",
    description:
      "A private personal-finance app. Users upload bank statements — no third-party API access required — and get rich transaction detail, AI-assisted auto-categorization, and budget & net-worth tracking over time.",
    tags: ["Python", "FastAPI", "React", "TypeScript", "PostgreSQL"],
    // TODO(content): no public link yet — add when Pocket Watcher ships.
    liveUrl: "#",
    sourceUrl: "https://github.com/orlandogordon",
    imageCaption: "dashboard.png",
    image: null,
  },
  {
    number: "02",
    category: "MARKETPLACE · PAYMENTS",
    title: "Wander NA",
    description:
      "An online tour-booking platform for experiences across North America. Search and browse tours, create an account with securely encrypted credentials, book through Stripe, and leave editable comments on every tour.",
    tags: ["Node", "Express", "MongoDB", "React", "TypeScript", "Stripe"],
    // Known live URL from the previous site.
    liveUrl: "https://wander-xggp.onrender.com/",
    sourceUrl: "https://github.com/orlandogordon",
    imageCaption: "tours.png",
    image: wanderNA,
  },
  {
    number: "03",
    category: "DATA ANALYTICS",
    title: "Sharp Shooter",
    description:
      "A sports data-analytics and expected-value (EV) analysis tool — surfacing the edges hidden in the numbers and turning raw sports data into actionable, probability-driven insight.",
    tags: ["Python", "Data Analysis", "EV Modeling"],
    // TODO(content): no public link yet.
    liveUrl: "#",
    sourceUrl: "https://github.com/orlandogordon",
    imageCaption: "analysis.png",
    image: null,
  },
];
