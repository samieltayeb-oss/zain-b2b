import type { Metadata } from "next";
import "@fontsource/manrope/400.css";
import "@fontsource/manrope/500.css";
import "@fontsource/manrope/600.css";
import "@fontsource/manrope/700.css";
import "@fontsource/manrope/800.css";
import "@fontsource/ibm-plex-sans-arabic/400.css";
import "@fontsource/ibm-plex-sans-arabic/500.css";
import "@fontsource/ibm-plex-sans-arabic/600.css";
import "@fontsource/ibm-plex-sans-arabic/700.css";
import "./globals.css";
import { Shell } from "@/components/shell";
import { LocaleProvider } from "@/components/locale-provider";

export const metadata: Metadata = {
  title: {
    default: "Zain Sudan Business — Sudan B2B Market Opportunity",
    template: "%s | Zain Sudan Business",
  },
  description:
    "What Zain can offer Sudan's businesses and institutions, who to serve first, why it will work, and why Zain is the right operator to lead. Prepared by Franco Pinto.",
  robots: { index: false, follow: false },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <LocaleProvider>
          <Shell>{children}</Shell>
        </LocaleProvider>
      </body>
    </html>
  );
}
