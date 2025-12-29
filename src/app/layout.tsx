// src/app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';
import '../styles/base.css';
import '../styles/layout.css';
import '../styles/components.css';
import '../styles/changeLog.css';
import { satoshi } from './fonts';

export const metadata: Metadata = {
  title: 'Cavan Gary',
  description: 'Personal site',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={satoshi.variable}>
      <body>
        <header>
          <nav className="nav-bar">
            <a href="/change-log">Change Log</a>
          </nav>
        </header>

        <main>{children}</main>
      </body>
    </html>
  );
}
