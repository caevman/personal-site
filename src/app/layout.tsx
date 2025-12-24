// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { satoshi } from "./fonts";

export const metadata: Metadata = {
  title: "Patrick Gary",
  description: "Personal site",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={satoshi.variable}>{children}</body>
    </html>
  );
}
