import "./globals.css";

import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import { Suspense } from "react";

import Providers from "./providers";

const urbanist = Urbanist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-urbanist",
});

export const metadata: Metadata = {
  title: "Stable++",
  description: "Built on RGB++. Powered by Nervos. For the Bitcoin Ecosystem.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${urbanist.variable}`}>
      <body>
        <Suspense fallback={null}>
          <Providers>{children}</Providers>
        </Suspense>
      </body>
    </html>
  );
}
