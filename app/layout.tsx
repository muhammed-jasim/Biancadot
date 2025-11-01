import type React from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { LayoutTransitionWrapper } from "@/components/layout/LayoutTransitionWrapper";
import { CustomCursor } from "@/components/CustomCursor";
import { ClientRootWrapper } from "./ClientRoute";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LayoutTransitionWrapper>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <ClientRootWrapper>
            <div className="2xl:max-w-[1920px] mx-auto">
              <Header />
              {children}
              <Footer />
            </div>
          </ClientRootWrapper>
        </body>
      </html>
    </LayoutTransitionWrapper>
  );
}
