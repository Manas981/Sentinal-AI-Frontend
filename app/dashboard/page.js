import ConsoleLayout from "../../components/ConsoleLayout";

export default function DashboardPage() {
  return (
    <ConsoleLayout
      active="/dashboard"
      actions={
        <>
          <button className="ghost">Investigate logs</button>
          <button className="primary">Review baselines</button>
        </>
      }
    >
      <section className="console-hero">
        <div>
          <h1>AI Risk Overview</h1>
          <p>SentinelAI continuously captures AI decisions in production so engineering teams can audit safety, explain outcomes, and investigate risk quickly.</p>
          <div className="hero-status">Needs attention</div>
        </div>
        <div className="hero-badges">
          <div className="badge-card"><p>Risk posture</p><strong>Guarded</strong></div>
          <div className="badge-card"><p>Active models</p><strong>4</strong></div>
        </div>
      </section>

      <section className="console-grid">
        <div className="console-card"><p>Total observations</p><h3>8</h3><span>Captured decisions analyzed (last 7 days)</span></div>
        <div className="console-card highlight"><p>Critical alerts</p><h3>2</h3><span>Events with risk score ≥ 0.80</span></div>
        <div className="console-card"><p>Average risk score</p><h3>0.46</h3><span>Mean risk across captured events</span></div>
        <div className="console-card"><p>Events today</p><h3>0</h3><span>Decisions observed today (local time)</span></div>
      </section>

      <section className="console-split">
        <div className="console-card large">
          <div className="card-header"><h3>Risk score trend</h3><span className="chip">7d</span></div>
          <div className="chart-placeholder">
            <svg className="chart-svg" viewBox="0 0 480 200" preserveAspectRatio="none">
              <defs><linearGradient id="riskLine" x1="0" x2="1" y1="0" y2="0"><stop offset="0%" stopColor="#6366f1" /><stop offset="100%" stopColor="#8b5cf6" /></linearGradient></defs>
              <polyline fill="none" stroke="url(#riskLine)" strokeWidth="3" points="0,160 60,120 120,140 180,80 240,110 300,60 360,90 420,40 480,70" />
              <polyline fill="rgba(99, 102, 241, 0.12)" stroke="none" points="0,200 0,160 60,120 120,140 180,80 240,110 300,60 360,90 420,40 480,70 480,200" />
            </svg>
          </div>
        </div>
        <div className="console-card large"><div className="card-header"><h3>Top risk signals</h3><span className="chip">live</span></div><ul className="signal-list"><li><span className="signal-dot"></span>harmful_instructions <strong>2</strong></li><li><span className="signal-dot"></span>unsafe_output <strong>2</strong></li><li><span className="signal-dot"></span>violence <strong>1</strong></li></ul></div>
      </section>
    </ConsoleLayout>
  );
}
