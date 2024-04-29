import type { Metadata } from "next";
import { pixelify } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ryan Dunn - Developer",
  description: "Personal web-based projects by Ryan Dunn",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${pixelify.className} line-bg-med`}>{children}</body>
    </html>
  );
}
