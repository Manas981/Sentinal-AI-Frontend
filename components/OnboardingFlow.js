"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import BackgroundLayers from "./BackgroundLayers";

const roles = [
  ["Developer", "Building AI applications", "</>"],
  ["Researcher", "AI/ML research", "◈"],
  ["Product Manager", "Managing AI products", "▥"],
  ["Other", "Something else", "◌"]
];

const useCases = [
  ["AI Safety Monitoring", "Monitor and detect unsafe AI behavior"],
  ["Compliance & Auditing", "Meet regulatory requirements"],
  ["Performance Monitoring", "Track model performance and drift"],
  ["Security & Threat Detection", "Detect prompt injection and attacks"]
];

const levels = ["Beginner", "Intermediate", "Expert"];

export default function OnboardingFlow() {
  const [mode, setMode] = useState(null);
  const [step, setStep] = useState(0);
  const [role, setRole] = useState("Developer");
  const [useCase, setUseCase] = useState("AI Safety Monitoring");
  const [level, setLevel] = useState("Intermediate");

  const progress = useMemo(() => (step + 1) * 33.33, [step]);

  if (!mode) {
    return (
      <>
        <BackgroundLayers />
        <main className="onboard-shell">
          <section className="onboard-intro">
            <h1>How do you want to use SentinelAI?</h1>
            <p>Choose your path. You can always create an organization later.</p>
            <div className="path-grid">
              <button className="path-card" onClick={() => setMode("individual")}>
                <span className="path-icon">◌</span>
                <h2>Continue as Individual</h2>
                <p>Perfect for solo developers, researchers, and small projects. Get started with personal AI monitoring.</p>
                <strong>Get Started →</strong>
              </button>
              <button className="path-card" onClick={() => setMode("org")}>
                <span className="path-icon success">▣</span>
                <h2>Create Organization</h2>
                <p>For teams and enterprises. Manage multiple projects, collaborate with team members, and centralize AI governance.</p>
                <strong>Get Started →</strong>
              </button>
            </div>
            <p className="signin-text">Already have an account? <a href="#">Sign in</a></p>
          </section>
        </main>
      </>
    );
  }

  return (
    <>
      <BackgroundLayers />
      <main className="onboard-shell">
        <section className="onboard-card">
          <header className="onboard-head">
            <h1>Welcome to SentinelAI</h1>
            <p>Let&apos;s personalize your experience</p>
          </header>

          {step === 0 && (
            <div>
              <h2>What&apos;s your role?</h2>
              <div className="onboard-grid">
                {roles.map(([title, text, icon]) => (
                  <button key={title} className={`choice-card ${role === title ? "active" : ""}`} onClick={() => setRole(title)}>
                    <span>{icon}</span>
                    <div>
                      <strong>{title}</strong>
                      <p>{text}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 1 && (
            <div>
              <h2>What brings you here?</h2>
              <div className="onboard-list">
                {useCases.map(([title, text]) => (
                  <button key={title} className={`choice-list ${useCase === title ? "active" : ""}`} onClick={() => setUseCase(title)}>
                    <strong>{title}</strong>
                    <p>{text}</p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <h2>Almost done!</h2>
              <label className="label">Company/Organization (optional)</label>
              <input className="text-input" defaultValue={mode === "org" ? "Acme Inc" : ""} placeholder="Acme Inc" />
              <label className="label">Experience Level</label>
              <div className="level-row">
                {levels.map((item) => (
                  <button key={item} className={`level-btn ${level === item ? "active" : ""}`} onClick={() => setLevel(item)}>{item}</button>
                ))}
              </div>
            </div>
          )}

          <div className="onboard-actions">
            {step > 0 ? <button className="ghost" onClick={() => setStep(step - 1)}>Back</button> : <span />}
            {step < 2 ? (
              <button className="primary" onClick={() => setStep(step + 1)}>Continue</button>
            ) : (
              <Link className="primary button-like" href="/dashboard">Complete →</Link>
            )}
          </div>

          <div className="progress-track"><span style={{ width: `${progress}%` }} /></div>
        </section>
      </main>
    </>
  );
}
