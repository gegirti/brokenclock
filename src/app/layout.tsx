import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Broken Clock",
  description: "A clock that refuses to keep real time.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
