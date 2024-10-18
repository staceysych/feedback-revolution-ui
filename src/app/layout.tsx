import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/app/components/NavBar";
import Footer from "@/app/components/Footer";

import Providers from "./providers";
import { URL } from "url";

export const metadata: Metadata = {
  title: "Feedback Evolution",
  description:
    "Efficiently collect, manage, and showcase customer feedback with ease. Enhance your business image while keeping costs low.",
  openGraph: {
    title: "Feedback Evolution: The Ultimate Feedback Tool for Startups",
    description:
      "Efficiently collect, manage, and showcase customer feedback with ease. Enhance your business image while keeping costs low.",
    type: "website",
    locale: "en_UK",
    url: "https://www.feedback-evolution.com/",
    siteName: "FeedbackEvolution",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <NavBar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
