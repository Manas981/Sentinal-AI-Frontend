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

themeToggleButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const nextTheme = document.documentElement.dataset.theme === "light" ? "dark" : "light";
    localStorage.setItem("sentinel-theme", nextTheme);
    applyTheme(nextTheme);
  });
});
