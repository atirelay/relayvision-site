import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RelayVision | Intelligence for the Physical World",
  description:
    "RelayVision is the AI operating layer for frontline work, delivering real-time guidance, workflow verification, and operational intelligence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}