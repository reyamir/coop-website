import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Coop",
  description: "Chat Freely, Stay Private on Nostr.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head></head>
      <body>{children}</body>
    </html>
  );
}
