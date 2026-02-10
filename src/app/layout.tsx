import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Florida Restoration Services | Fire, Water, Mold & Roofing | FloridaRestorePros",
  description: "Full-service property restoration in Florida. Fire damage, water damage, mold remediation, and roofing repair. Licensed, insured, and available 24/7. Call now!",
  keywords: "restoration services, fire damage, water damage, mold remediation, roofing repair, Florida, emergency restoration, storm damage",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <script src="https://crm.llgai.app/chatbot-widget.js" data-widget-id="f20e62ca-fc2a-4a63-9f6b-82c558aab6c2" async></script>
      </body>
    </html>
  );
}
