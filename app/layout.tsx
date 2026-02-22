import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NasAlert - Nasarawa State Alert System",
  description:
    "NasAlert helps citizens report incidents quickly while authorities verify, respond, and keep communities updated across Nasarawa State.",
  openGraph: {
    title: "NasAlert - Nasarawa State Alert System",
    description:
      "Fast community alerts for a safer Nasarawa. Citizens report incidents, authorities verify and respond.",
    url: "https://nasalert.com",
    siteName: "NasAlert",
    locale: "en_NG",
    type: "website"
  },
  icons: {
    icon: "/icon.png"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
