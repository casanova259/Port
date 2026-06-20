import type { Metadata } from "next";
import { GeistMono } from "geist/font/mono";
import "@fontsource/silkscreen/400.css";
import "@fontsource/silkscreen/700.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Manik Sharma — Portfolio",
  description: "Software developer portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistMono.variable} h-full antialiased dark`}>
      <body className="min-h-full bg-bg text-fg">{children}</body>
    </html>
  );
}
