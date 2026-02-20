import ConsoleLayout from "../../components/ConsoleLayout";
import SettingsPanel from "../../components/SettingsPanel";

export default function SettingsPage() {
  return (
    <ConsoleLayout active="/settings" actions={<><button className="ghost">Reset defaults</button><button className="primary">Save changes</button></>}>
      <section className="console-hero compact"><div><h1>Settings</h1><p>Configure SentinelAI risk assessment behavior.</p></div><div className="hero-status">Last updated 05/02/2026</div></section>
      <SettingsPanel />
    </ConsoleLayout>
  );
}
