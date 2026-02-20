// app/page.js
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* overlays used by your original CSS */}
      <div className="page-grid" />
      <div className="wave-band" />
      <div className="aurora" />
      <div className="orb-field" />

      <header className="site-header">
        <nav className="nav container">
          <a className="brand" href="/">
            <span className="brand-mark">S</span>
            <div>
              <p className="brand-name">SentinelAI</p>
              <p className="brand-sub">AI Risk Monitoring</p>
            </div>
          </a>

          <div className="nav-links">
            <a href="#how">How it works</a>
            <a href="#capabilities">Capabilities</a>
            <a href="#preview">Preview</a>
            <a href="#pricing">Pricing</a>
          </div>

          <div className="nav-actions">
            <button className="theme-toggle" type="button" data-theme-toggle aria-label="Toggle theme">🌙</button>
            <Link href="/logs" className="ghost">View logs</Link>
            <Link href="/onboarding" className="primary">Open console</Link>
          </div>
        </nav>
      </header>

      <main className="container">
        <section className="hero reveal">
          <div className="hero-left">
            <span className="pill">Production risk detected</span>

            <h1 className="hero-title">
              AI systems fail silently.
              <br />
              <span className="gradient-text">We surface risk before it ships.</span>
            </h1>

            <p className="hero-sub">
              SentinelAI is the observability and safety layer for LLM-powered systems. Track prompt shifts, flag unsafe outputs, and explain every decision with a unified risk score.
            </p>

            <div className="hero-cta">
              <Link href="/onboarding" className="primary large">Enter Command Center</Link>
              <a href="#how" className="ghost large">See how it works</a>
            </div>
          </div>

          <aside className="hero-right">
            <div className="panel-header">
              <div>
                <p className="muted">Investigation snapshot</p>
                <p className="small">One decision, fully traceable.</p>
              </div>
              <div className="risk-pill">risk 0.82</div>
            </div>

            <div className="panel-grid">
              <div className="panel-card">
                <p>Decision</p>
                <strong className="danger">block</strong>
              </div>
              <div className="panel-card">
                <p>Confidence</p>
                <strong>93%</strong>
              </div>
              <div className="panel-card">
                <p>Signals</p>
                <strong>3</strong>
              </div>
              <div className="panel-card">
                <p>Model</p>
                <strong>gpt-4x</strong>
              </div>
            </div>
          </aside>
        </section>

        <section id="how" className="section reveal">
          <h2>How it works</h2>
          <p className="section-sub">
            SentinelAI inspects prompts and outputs in real-time, aggregates signals, and assigns a single risk score so teams can act before incidents happen.
          </p>
        </section>

        <footer className="site-footer">
          <div className="container">
            <div>© {new Date().getFullYear()} SentinelAI</div>
            <div className="muted">Built for safe and explainable AI.</div>
          </div>
        </footer>
      </main>
    </>
  );
}