// app/layout.js
import "./globals.css";
import "../styles.css"; // ← MUST point to your project's styles.css
import ClientEnhancements from "../components/ClientEnhancements";

export const metadata = {
  title: "SentinelAI",
  description: "SentinelAI frontend",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(){ try {
                const saved = localStorage.getItem('sentinel-theme');
                if (saved) { document.documentElement.dataset.theme = saved; }
                else { document.documentElement.dataset.theme = 'light'; /* default light */ }
              } catch(e){} })();
            `,
          }}
        />
      </head>
      <body>
        {children}
        <ClientEnhancements />
      </body>
    </html>
  );
}