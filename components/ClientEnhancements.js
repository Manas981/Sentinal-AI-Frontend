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

    const storedTheme = localStorage.getItem("sentinel-theme");
    if (storedTheme) {
      applyTheme(storedTheme);
    }

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

    const sliderKeyPrefix = "sentinel-settings-";
    const sliders = document.querySelectorAll("[data-setting]");
    const formatValue = (value) => Number(value).toFixed(2);

    const updateValue = (slider) => {
      const key = slider.dataset.setting;
      const label = document.querySelector(`[data-setting-value="${key}"]`);
      const min = Number(slider.min || 0);
      const max = Number(slider.max || 1);
      const percentage = ((slider.value - min) / (max - min)) * 100;
      slider.style.background = `linear-gradient(90deg, #6366f1 0%, #8b9bff ${percentage}%, rgba(148, 163, 184, 0.3) ${percentage}%, rgba(148, 163, 184, 0.3) 100%)`;
      if (label) label.textContent = formatValue(slider.value);
    };

    const sliderHandlers = [];
    sliders.forEach((slider) => {
      const key = slider.dataset.setting;
      const stored = localStorage.getItem(`${sliderKeyPrefix}${key}`);
      if (stored !== null) slider.value = stored;
      updateValue(slider);

      const handler = (event) => {
        const value = event.target.value;
        localStorage.setItem(`${sliderKeyPrefix}${key}`, value);
        updateValue(slider);
      };

      sliderHandlers.push([slider, handler]);
      slider.addEventListener("input", handler);
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
      sliderHandlers.forEach(([slider, handler]) => slider.removeEventListener("input", handler));
      reveals.forEach((section) => observer.unobserve(section));
      observer.disconnect();
    };
  }, []);

  return null;
}
