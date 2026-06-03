import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bet Ledger",
  description: "Personal betting tracker — control and performance analysis",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
