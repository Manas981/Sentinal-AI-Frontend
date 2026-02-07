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
  if (label) {
    label.textContent = formatValue(slider.value);
  }
};

sliders.forEach((slider) => {
  const key = slider.dataset.setting;
  const stored = localStorage.getItem(`${sliderKeyPrefix}${key}`);
  if (stored !== null) {
    slider.value = stored;
  }
  updateValue(slider);

  slider.addEventListener("input", (event) => {
    const value = event.target.value;
    localStorage.setItem(`${sliderKeyPrefix}${key}`, value);
    updateValue(slider);
  });
});
