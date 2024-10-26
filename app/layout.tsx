import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cat Pics Waterfall",
  description: "Bringing cats your way with experimental CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
