import type { Metadata } from "next";
import "./globals.css";
import "feedback-evolution-widget-react/styles.css";
import Footer from "@/app/components/Footer";

import Providers from "./providers";
import GoogleAnalytics from "./analytics/GoogleAnalytics";

export const metadata: Metadata = {
  title: "Feedback Evolution - Customer Feedback Management Tool",
  description:
    "Easily collect, manage, and display customer feedback to improve your brand image. Enhance customer experience and drive product growth with cost-effective feedback solutions.",
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
const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <GoogleAnalytics />
      <body>
        <Providers>
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
