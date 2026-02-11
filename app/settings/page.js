import ConsoleLayout from "../../components/ConsoleLayout";

export default function SettingsPage() {
  return (
    <ConsoleLayout active="/settings" actions={<><button className="ghost">Reset defaults</button><button className="primary">Save changes</button></>}>
      <section className="console-hero compact"><div><h1>Settings</h1><p>Configure SentinelAI risk assessment behavior.</p></div><div className="hero-status">Last updated 05/02/2026</div></section>
      <section className="console-grid three-column">
        <div className="console-card large"><div className="card-header"><h3>Risk thresholds</h3><span className="chip">policy</span></div>
          <div className="setting-row"><div><strong>Warning threshold</strong><p>Warn trigger point</p></div><div className="range-wrap"><input data-setting="warning-threshold" type="range" min="0" max="1" step="0.01" defaultValue="0.7"/><span data-setting-value="warning-threshold">0.70</span></div></div>
          <div className="setting-row"><div><strong>Escalation threshold</strong><p>Escalation trigger point</p></div><div className="range-wrap"><input data-setting="escalation-threshold" type="range" min="0" max="1" step="0.01" defaultValue="0.7"/><span data-setting-value="escalation-threshold">0.70</span></div></div>
          <div className="setting-row"><div><strong>Confidence floor</strong><p>Minimum required confidence</p></div><div className="range-wrap"><input data-setting="confidence-floor" type="range" min="0" max="1" step="0.01" defaultValue="0.5"/><span data-setting-value="confidence-floor">0.50</span></div></div>
        </div>
        <div className="console-card large"><div className="card-header"><h3>Signal sensitivity</h3><span className="chip">weights</span></div>
          <div className="setting-row"><div><strong>Prompt anomaly</strong><p>Detect prompt drift</p></div><div className="range-wrap"><input data-setting="prompt-anomaly" type="range" min="0" max="1" step="0.01" defaultValue="0.71"/><span data-setting-value="prompt-anomaly">0.71</span></div></div>
          <div className="setting-row"><div><strong>Jailbreak attempt</strong><p>Detect jailbreaks</p></div><div className="range-wrap"><input data-setting="jailbreak-attempt" type="range" min="0" max="1" step="0.01" defaultValue="0.78"/><span data-setting-value="jailbreak-attempt">0.78</span></div></div>
          <div className="setting-row"><div><strong>Unsafe output</strong><p>Detect unsafe output</p></div><div className="range-wrap"><input data-setting="unsafe-output" type="range" min="0" max="1" step="0.01" defaultValue="0.85"/><span data-setting-value="unsafe-output">0.85</span></div></div>
        </div>
        <div className="console-card large"><div className="card-header"><h3>Enforcement mode</h3><span className="chip">action</span></div><div className="setting-row"><div><strong>Default action</strong><p>Block high-risk requests</p></div><span>Escalate</span></div><div className="setting-row"><div><strong>Review policy</strong><p>Manual review required</p></div><span>Enabled</span></div></div>
      </section>
    </ConsoleLayout>
  );
}
