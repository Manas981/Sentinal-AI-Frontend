"use client";

import { useEffect } from "react";

export default function ClientEnhancements() {
  useEffect(() => {
    const themeToggleButtons = document.querySelectorAll("[data-theme-toggle]");

    const applyTheme = (theme) => {
      document.documentElement.dataset.theme = theme;
      const label = theme === "light" ? "🌞" : "🌙";
      themeToggleButtons.forEach((button) => {
        button.textContent = label;
        button.setAttribute(
          "aria-label",
          theme === "light" ? "Switch to dark mode" : "Switch to light mode"
        );
      });
    };

    const storedTheme = localStorage.getItem("sentinel-theme") || "dark";
    applyTheme(storedTheme);

    const toggleHandlers = [];
    themeToggleButtons.forEach((button) => {
      const handler = () => {
        const nextTheme = document.documentElement.dataset.theme === "light" ? "dark" : "light";
        localStorage.setItem("sentinel-theme", nextTheme);
        applyTheme(nextTheme);
      };
      toggleHandlers.push([button, handler]);
      button.addEventListener("click", handler);
    });

    const reveals = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          } else {
            entry.target.classList.remove("in-view");
          }
        });
      },
      { threshold: 0.2 }
    );

    reveals.forEach((section) => observer.observe(section));

    return () => {
      toggleHandlers.forEach(([button, handler]) => button.removeEventListener("click", handler));
      reveals.forEach((section) => observer.unobserve(section));
      observer.disconnect();
    };
  }, []);

  return null;
}
