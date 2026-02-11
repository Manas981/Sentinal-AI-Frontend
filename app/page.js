import Link from "next/link";
import BackgroundLayers from "../components/BackgroundLayers";

export default function HomePage() {
  return (
    <>
      <BackgroundLayers />
      <header className="site-header">
        <nav className="nav">
          <div className="brand">
            <span className="brand-mark">S</span>
            <div>
              <p className="brand-name">SentinelAI</p>
              <p className="brand-tagline">AI Safety Console</p>
            </div>
          </div>
          <div className="nav-links">
            <a href="#how">How it works</a>
            <a href="#capabilities">Capabilities</a>
            <a href="#preview">Product preview</a>
            <a href="#why">Why SentinelAI</a>
          </div>
          <div className="nav-actions">
            <button className="theme-toggle" type="button" data-theme-toggle aria-label="Toggle theme">
              🌙
            </button>
            <Link className="ghost button-like" href="/logs">
              View risk logs
            </Link>
            <Link className="primary button-like" href="/dashboard">
              Open console
            </Link>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <span className="pill">Production risk detected</span>
            <h1>
              AI systems fail silently.<br />
              <span className="gradient-text">We surface risk before it ships.</span>
            </h1>
            <p>
              SentinelAI is the observability and safety layer for LLM-powered systems. Track prompt
              shifts, flag unsafe outputs, and explain every decision with a unified risk score.
            </p>
            <div className="hero-actions">
              <Link className="primary button-like" href="/dashboard">
                Enter Command Center
              </Link>
              <a className="ghost button-like" href="#how">
                See how it works
              </a>
            </div>
            <div className="hero-stats">
              <div className="stat-card"><span className="stat-icon">◎</span><div><p>Real-time monitoring</p><span>Continuous AI observation</span></div></div>
              <div className="stat-card"><span className="stat-icon">↗</span><div><p>Risk intelligence</p><span>Explainable threat signals</span></div></div>
              <div className="stat-card"><span className="stat-icon">✓</span><div><p>Audit ready</p><span>Compliance friendly logs</span></div></div>
            </div>
          </div>
          <div className="hero-panel">
            <div className="panel-header"><div><p>Investigation snapshot</p><span>One decision, fully traceable.</span></div><span className="risk-pill">risk 0.82</span></div>
            <div className="panel-grid">
              <div className="panel-card"><p>Decision</p><strong className="danger">block</strong></div>
              <div className="panel-card"><p>Confidence</p><strong>93%</strong></div>
              <div className="panel-card"><p>Signals</p><strong>3</strong></div>
            </div>
            <div className="panel-card full"><p>Primary reason</p><strong>Detected high-risk content patterns and policy violations.</strong><span>Action taken to prevent unsafe response.</span></div>
            <div className="panel-grid">
              <div className="panel-card"><p>Prompt</p><div className="skeleton"></div><div className="skeleton short"></div></div>
              <div className="panel-card"><p>Response</p><div className="skeleton"></div><div className="skeleton short"></div></div>
            </div>
          </div>
        </section>

        <section id="how" className="section section-center reveal">
          <h2>How it works</h2>
          <p className="section-subtitle">Three steps to AI safety and observability.</p>
          <div className="flow">
            <div className="flow-card flow-input"><span className="flow-icon">➜</span><h3>Input</h3><p>Prompt and response events stream from your product.</p></div>
            <div className="flow-arrow">→</div>
            <div className="flow-card flow-detection"><span className="flow-icon">◈</span><h3>Detection</h3><p>Detectors analyze shifts, heuristics, and policy signals.</p></div>
            <div className="flow-arrow">→</div>
            <div className="flow-card flow-insight"><span className="flow-icon">▣</span><h3>Insight</h3><p>Aggregator scores risk and logs rationale for teams.</p></div>
          </div>
        </section>

        <section id="capabilities" className="section reveal"><div className="section-header"><h2>Core capabilities</h2><p>Built for engineering teams that need clarity, not hype.</p></div><div className="grid-2"><div className="feature-card"><h3>Risk scoring & decisions</h3><p>Consistent risk scores with clear actions (allow / warn / escalate / block).</p></div><div className="feature-card"><h3>Investigation-ready logs</h3><p>Every event becomes a report with signals, confidence, and rationale.</p></div><div className="feature-card"><h3>Triage and filtering</h3><p>Find what matters by risk, decision, flags, time, and model.</p></div><div className="feature-card"><h3>Trends and baselines</h3><p>Monitor drift over time and compare against defined baselines.</p></div></div></section>

        <section id="preview" className="section reveal">
          <div className="section-header"><h2>Product preview</h2><p>A safety console built for investigation workflows.</p></div>
          <div className="preview-grid">
            <div className="preview-card">
              <div className="preview-header"><h3>Dashboard</h3><span className="badge">overview</span></div>
              <p className="preview-sub">Answer: “Is my AI system safe right now?”</p>
              <div className="metric-grid"><div><p>Critical alerts</p><strong>2</strong></div><div><p>Avg risk</p><strong>0.46</strong></div></div>
              <div className="preview-chart">
                <svg className="preview-svg" viewBox="0 0 360 120" preserveAspectRatio="none">
                  <defs><linearGradient id="previewLine" x1="0" x2="1" y1="0" y2="0"><stop offset="0%" stopColor="#6366f1" /><stop offset="100%" stopColor="#8b5cf6" /></linearGradient></defs>
                  <polyline fill="none" stroke="url(#previewLine)" strokeWidth="3" points="0,90 45,70 90,78 135,50 180,65 225,40 270,55 315,30 360,45" />
                  <polyline fill="rgba(99, 102, 241, 0.15)" stroke="none" points="0,120 0,90 45,70 90,78 135,50 180,65 225,40 270,55 315,30 360,45 360,120" />
                </svg>
              </div>
            </div>
            <div className="preview-card"><div className="preview-header"><h3>Risk Logs</h3><span className="badge">logs</span></div><div className="log-list"><div className="log-item"><span className="dot danger"></span><div><strong>block</strong><p>2 min ago</p></div><span className="score">0.82</span></div><div className="log-item"><span className="dot warn"></span><div><strong>warn</strong><p>5 min ago</p></div><span className="score">0.45</span></div><div className="log-item"><span className="dot ok"></span><div><strong>allow</strong><p>8 min ago</p></div><span className="score">0.12</span></div></div></div>
          </div>
        </section>

        <section id="why" className="section section-center reveal"><h2>Why SentinelAI</h2><p className="section-subtitle">Trust comes from evidence: what happened, what signals were detected, and why an action was taken.</p><div className="grid-3"><div className="value-card"><h3>Explainability by default</h3><p>Pair decisions with plain-language rationale so teams can validate outcomes.</p></div><div className="value-card"><h3>Audit-ready exports</h3><p>Export structured JSON events for incident reviews and compliance workflows.</p></div><div className="value-card"><h3>Production workflow first</h3><p>Built for triage, filters, investigations, and prioritized action lists.</p></div></div></section>

        <section className="section cta reveal"><div><h2>Ship safer AI, faster.</h2><p>Plug SentinelAI into your pipeline with a single /api/analyze endpoint and start monitoring risk in minutes.</p></div><div className="cta-actions"><button className="primary">Book a demo</button><button className="ghost">Read API docs</button></div></section>
      </main>

      <footer className="footer"><div><p className="brand-name">SentinelAI</p><span>Observability and safety for LLM-powered systems.</span></div><div className="footer-links"><a href="#">Docs</a><a href="#">Security</a><a href="#">Status</a></div></footer>
    </>
  );
}
