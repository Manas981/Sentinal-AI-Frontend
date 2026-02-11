import "./globals.css";
import { Inter } from "next/font/google";
import ClientEnhancements from "../components/ClientEnhancements";

const inter = Inter({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700", "800"] });

export const metadata = {
  title: "SentinelAI",
  description: "SentinelAI frontend"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(() => { const savedTheme = localStorage.getItem('sentinel-theme'); if (savedTheme) document.documentElement.dataset.theme = savedTheme; })();`
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
        <ClientEnhancements />
      </body>
    </html>
  );
}
