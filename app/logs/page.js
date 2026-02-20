import ConsoleLayout from "../../components/ConsoleLayout";

export default function LogsPage() {
  return (
    <ConsoleLayout active="/logs" actions={<><button className="ghost">Export JSON</button><button className="primary">Create filter</button></>}>
      <section className="console-hero compact"><div><h1>Risk Logs</h1><p>Monitor and review AI safety decisions and risk assessments.</p></div><div className="hero-status">Investigation-ready</div></section>
      <section className="console-card wide"><div className="card-header"><h3>Control panel</h3><span className="chip">filters</span></div><div className="filter-grid"><div className="input-pill">Search prompts or responses</div><div className="input-pill">Date range</div><div className="input-pill">Decision</div><div className="input-pill">Flags</div></div><div className="range-pill">Risk score range: 0.00 — 1.00</div></section>
      <section className="console-card wide"><div className="card-header"><h3>Audit entries</h3><span className="chip">8 results</span></div><div className="log-table"><div className="log-row"><span className="log-chip danger">0.82</span><div><strong>block • Event #6</strong><p>violence · harmful_instructions · unsafe_output</p></div><span>02/06/2026 10:20</span></div><div className="log-row"><span className="log-chip warn">0.45</span><div><strong>warn • Event #5</strong><p>unsafe_output</p></div><span>02/06/2026 10:18</span></div><div className="log-row"><span className="log-chip ok">0.12</span><div><strong>allow • Event #4</strong><p>no issues</p></div><span>02/06/2026 10:12</span></div></div></section>
    </ConsoleLayout>
  );
}
