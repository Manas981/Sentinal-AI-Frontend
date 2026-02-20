"use client";

import { useEffect, useMemo, useState } from "react";

const sliderGroups = [
  {
    title: "Risk thresholds",
    chip: "policy",
    fields: [
      ["warning-threshold", "Warning threshold", "Warn trigger point", 0.7],
      ["escalation-threshold", "Escalation threshold", "Escalation trigger point", 0.7],
      ["confidence-floor", "Confidence floor", "Minimum required confidence", 0.5]
    ]
  },
  {
    title: "Signal sensitivity",
    chip: "weights",
    fields: [
      ["prompt-anomaly", "Prompt anomaly", "Detect prompt drift", 0.71],
      ["jailbreak-attempt", "Jailbreak attempt", "Detect jailbreaks", 0.78],
      ["unsafe-output", "Unsafe output", "Detect unsafe output", 0.85]
    ]
  }
];

const defaultValues = Object.fromEntries(sliderGroups.flatMap((group) => group.fields.map(([key, , , value]) => [key, value])));

export default function SettingsPanel() {
  const [values, setValues] = useState(defaultValues);

  useEffect(() => {
    const storedValues = Object.keys(defaultValues).reduce((acc, key) => {
      const value = localStorage.getItem(`sentinel-settings-${key}`);
      acc[key] = value === null ? defaultValues[key] : Number(value);
      return acc;
    }, {});
    setValues(storedValues);
  }, []);

  const setSliderValue = (key, value) => {
    const nextValue = Number(value);
    setValues((prev) => ({ ...prev, [key]: nextValue }));
    localStorage.setItem(`sentinel-settings-${key}`, String(nextValue));
  };

  const sliderStyle = (value) => ({
    background: `linear-gradient(90deg, #6366f1 0%, #8b9bff ${value * 100}%, rgba(148, 163, 184, 0.3) ${value * 100}%, rgba(148, 163, 184, 0.3) 100%)`
  });

  const renderedGroups = useMemo(
    () =>
      sliderGroups.map((group) => (
        <div className="console-card large" key={group.title}>
          <div className="card-header">
            <h3>{group.title}</h3>
            <span className="chip">{group.chip}</span>
          </div>

          {group.fields.map(([key, label, helper]) => (
            <div className="setting-row" key={key}>
              <div>
                <strong>{label}</strong>
                <p>{helper}</p>
              </div>
              <div className="range-wrap">
                <input
                  data-setting={key}
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={values[key]}
                  style={sliderStyle(values[key])}
                  onChange={(event) => setSliderValue(key, event.target.value)}
                />
                <span>{values[key].toFixed(2)}</span>
              </div>
            </div>
          ))}
        </div>
      )),
    [values]
  );

  return (
    <section className="console-grid three-column">
      {renderedGroups}
      <div className="console-card large">
        <div className="card-header"><h3>Enforcement mode</h3><span className="chip">action</span></div>
        <div className="setting-row"><div><strong>Default action</strong><p>Block high-risk requests</p></div><span>Escalate</span></div>
        <div className="setting-row"><div><strong>Review policy</strong><p>Manual review required</p></div><span>Enabled</span></div>
      </div>
    </section>
  );
}
