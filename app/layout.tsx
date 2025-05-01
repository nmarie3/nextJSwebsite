import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Footer from "@/global_components/Footer";
import NaviDesktop from "./(home)/components/Navi/NaviDesktop";
import NaviMobile from "./(home)/components/Navi/NaviMobile";

const font = Open_Sans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Portfolio",
  description: "My works",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
          <NaviDesktop/>
          <NaviMobile/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
