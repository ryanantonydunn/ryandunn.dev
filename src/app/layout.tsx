import type { Metadata } from "next";
import { pixelify } from "./fonts";
import "./globals.css";
import Head from "next/head";

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
      <Head>
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/png"
          sizes="32x32"
        />
      </Head>
      <body className={`${pixelify.className} line-bg-med`}>{children}</body>
    </html>
  );
}
