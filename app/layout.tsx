import type { Metadata } from "next";

import { AppProvider } from "./_components/UIcontext";

import "./globals.css";

export const metadata: Metadata = {
  title: "Socket chat",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="overflow-hidden">
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
