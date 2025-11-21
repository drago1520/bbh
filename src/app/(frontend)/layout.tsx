import type { Metadata } from "next";

import { cn } from "@/lib";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import React from "react";
import { GoogleAnalytics } from "@next/third-parties/google";

// import { Footer } from '@/payload/globals/Footer/Component';
import { InitTheme } from "@/components/ThemeProvider/Theme/InitTheme";
import { mergeOpenGraph } from "@/lib/utils/mergeOpenGraph";

import { getServerSideURL } from "@/lib/utils/getURL";
import "./globals.css";
import { Providers } from "./providers";
export const dynamic = "force-dynamic";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      className={cn(GeistSans.variable, GeistMono.variable)}
      lang="en"
      suppressHydrationWarning
    >
      <head>
        <InitTheme />
        <link href="/favicon.ico" rel="icon" sizes="32x32" />
        <link href="/favicon.svg" rel="icon" type="image/svg+xml" />
      </head>
      <body>
        <Providers>
          {/* <Header /> */}
          {children}
          {/* <Footer /> */}
        </Providers>
      </body>
      <GoogleAnalytics gaId="G-T0E763GTQM" />
    </html>
  );
}

export const metadata: Metadata = {
  metadataBase: new URL(getServerSideURL()),
  robots: {
    index: false,
    follow: false,
  },
  openGraph: mergeOpenGraph(),
  twitter: {
    card: "summary_large_image",
    creator: "@payloadcms",
  },
};
