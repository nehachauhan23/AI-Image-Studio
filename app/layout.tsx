import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./global.css";

import { cn } from "@/lib/utils";
import { ClerkProvider } from "@clerk/nextjs";
const IBMPlex = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  variable: '--font-ibm-plex'
});

export const metadata: Metadata = {

  title: "AI Image Studio ",
  description: "AI powered image generator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider afterSignOutUrl="/" appearance={{
      variables: { colorPrimary: '#0052DE'}
    }}>
    <html lang="en">
      <body
        className={cn("font-IBMPlex anti-aliased ", IBMPlex.variable)}>
        {children}
      </body>
    </html>
    </ClerkProvider>
  );
}

