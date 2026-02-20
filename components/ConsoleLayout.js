import Link from "next/link";
import BackgroundLayers from "./BackgroundLayers";

const items = [
  ["Dashboard", "/dashboard"],
  ["Risk Logs", "/logs"],
  ["Baselines", "/baselines"],
  ["Settings", "/settings"],
  ["API Keys", "/api-keys"]
];

const sideItems = [
  ["Dashboard", "/dashboard"],
  ["Analyze", "/analyze"],
  ["Risk Logs", "/logs"],
  ["Baselines", "/baselines"],
  ["Settings", "/settings"],
  ["API Keys", "/api-keys"]
];

export default function ConsoleLayout({ active, actions, children }) {
  return (
    <>
      <BackgroundLayers />
      <header className="console-header">
        <Link className="console-brand" href="/">
          <span className="brand-mark">S</span>
          <div>
            <p className="brand-name">SentinelAI</p>
            <p className="brand-tagline">Safety Console</p>
          </div>
        </Link>
        <nav className="console-topnav">
          {items.map(([label, href]) => (
            <Link key={href} className={active === href ? "active" : ""} href={href}>
              {label}
            </Link>
          ))}
        </nav>
        <div className="console-actions">
          <button className="theme-toggle" type="button" data-theme-toggle aria-label="Toggle theme">
            🌙
          </button>
          <div className="org-select">Select organization...</div>{actions}
        </div>
      </header>

      <div className="console-shell">
        <aside className="console-sidebar">
          <div className="sidebar-title">Safety Console</div>
          {sideItems.map(([label, href]) => (
            <Link key={href} className={active === href ? "active" : ""} href={href}>
              {label}
            </Link>
          ))}
        </aside>
        <main className="console-main">{children}</main>
      </div>
    </>
  );
}
