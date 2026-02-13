import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Grid Game",
  description: "Interactive 3x3 grid game with ripple effects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
