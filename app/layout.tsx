import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zenin AI | AI Automation Agency",
  description:
    "We build AI automation systems that save businesses 20+ hours per week. Lead generation, chatbots, workflows — built for you in 2 weeks.",
  icons: {
    icon: "/zeninai_logo.png",
    shortcut: "/zeninai_logo.png",
    apple: "/zeninai_logo.png",
  },
  keywords: [
    "AI automation agency",
    "business automation",
    "AI chatbot",
    "lead generation automation",
    "workflow automation",
  ],
  openGraph: {
    title: "Zenin AI | AI Automation Agency",
    description:
      "We build AI automation systems that save businesses 20+ hours per week. Lead generation, chatbots, workflows — built for you in 2 weeks.",
    type: "website",
    url: "https://your-website.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zenin AI | AI Automation Agency",
    description:
      "We build AI automation systems that save businesses 20+ hours per week. Lead generation, chatbots, workflows — built for you in 2 weeks.",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
