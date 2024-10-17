import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/app/components/NavBar";

import Providers from "./providers";

export const metadata: Metadata = {
  title: "Feedback Evolution",
  description: "Collect, manage and showcase feedback from your customers",
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
        </Providers>
      </body>
    </html>
  );
}
