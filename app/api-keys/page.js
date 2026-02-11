import ConsoleLayout from "../../components/ConsoleLayout";

export default function ApiKeysPage() {
  return (
    <ConsoleLayout active="/api-keys" actions={<><button className="ghost">Refresh</button><button className="primary">Generate key</button></>}>
      <section className="console-hero compact"><div><h1>API Keys</h1><p>Generate and revoke SDK keys. Keep keys secret and store them in environment variables.</p></div><div className="hero-status">Active keys: 4</div></section>
      <section className="console-card wide"><div className="card-header"><h3>Create a key</h3><span className="chip">production</span></div><div className="filter-grid"><div className="input-pill">Key name (e.g. production-chatbot)</div><button className="primary">Generate key</button></div></section>
      <section className="console-card wide"><div className="card-header"><h3>Your keys</h3><span className="chip">4 active</span></div><div className="log-table"><div className="log-row key-row"><strong>chatbot-key</strong><span>sk_sentinel_</span><span className="status-pill success">Active</span><span>06/02/2026</span><button className="ghost">Revoke</button></div><div className="log-row key-row"><strong>voice-chatbot</strong><span>sk_sentinel_</span><span className="status-pill success">Active</span><span>06/02/2026</span><button className="ghost">Revoke</button></div><div className="log-row key-row"><strong>customer-support-bot</strong><span>sk_sentinel_</span><span className="status-pill warn">Revoked</span><span>05/02/2026</span><button className="ghost">Revoke</button></div></div></section>
    </ConsoleLayout>
  );
}
