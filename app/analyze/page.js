import ConsoleLayout from "../../components/ConsoleLayout";

export default function AnalyzePage() {
  return (
    <ConsoleLayout active="/analyze" actions={<><button className="ghost">View API docs</button><button className="primary">Run analysis</button></>}>
      <section className="console-hero compact"><div><h1>Analyze</h1><p>Submit a prompt and model response to SentinelAI and view the risk assessment.</p></div><div className="hero-status">/api/analyze</div></section>
      <section className="console-grid two-column">
        <div className="console-card large"><div className="card-header"><h3>Prompt</h3><span className="chip">required</span></div><textarea className="input-field" placeholder="Paste the user prompt here"></textarea></div>
        <div className="console-card large"><div className="card-header"><h3>Response</h3><span className="chip">required</span></div><textarea className="input-field" placeholder="Paste the model response here"></textarea></div>
      </section>
      <section className="console-card wide"><div className="card-header"><h3>Signal summary</h3><span className="chip">preview</span></div><div className="signal-grid"><div><p>Prompt anomaly</p><strong>0.71</strong></div><div><p>Jailbreak attempt</p><strong>0.78</strong></div><div><p>Unsafe output</p><strong>0.85</strong></div></div></section>
    </ConsoleLayout>
  );
}
