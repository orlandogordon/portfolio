import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { siteConfig } from "./config";
import { profile } from "./data/profile";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

// Console easter egg — for the curious who pop open DevTools.
console.log(
  "%cIt's not a bug, it's a surprise feature.",
  `font-size:15px;font-weight:700;color:${siteConfig.accent};`,
);
console.log(
  `%cPoking around the console? I like you already.\nLike what you see? Let's talk → ${profile.email}`,
  "font-size:12px;line-height:1.5;color:#9aa;",
);
