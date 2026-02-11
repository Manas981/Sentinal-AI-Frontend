import ConsoleLayout from "../../components/ConsoleLayout";

export default function BaselinesPage() {
  return (
    <ConsoleLayout active="/baselines" actions={<><button className="ghost">Review baselines</button><button className="primary">Add baseline</button></>}>
      <section className="console-hero compact"><div><h1>Risk Baselines</h1><p>Configure the brain of your AI safety system.</p></div><div className="hero-status">Defaults ready</div></section>
      <section className="console-grid"><div className="console-card"><p>Active baselines</p><h3>1</h3><span>Primary baseline applied</span></div><div className="console-card"><p>Total baselines</p><h3>1</h3><span>Stored in workspace</span></div><div className="console-card"><p>Avg threshold</p><h3>—</h3><span>Awaiting calibration</span></div><div className="console-card"><p>Defaults</p><h3>Ready</h3><span>Preset guardrails enabled</span></div></section>
      <section className="console-card wide"><div className="card-header"><h3>Baseline prompts</h3><span className="chip">active</span></div><div className="baseline-row"><div><strong>You are a customer support answering bot?</strong><p>Active · last updated 02/05/2026</p></div><div className="row-actions"><button className="ghost">Edit</button><button className="ghost">Disable</button></div></div></section>
    </ConsoleLayout>
  );
}
