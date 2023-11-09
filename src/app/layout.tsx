import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/app/components/navbar/Navbar";
import Footer from "./components/footer/Footer";

export const metadata: Metadata = {
  title: {
    template: "%s | Bikalpa",
    default: "Home | Bikalpa",
  },
  description: "This website is a personal portfolio website of Bikalpa Paudel",
  keywords: ["Bikalpa Paudel", "bikalpa portfolio", "bikalpa website"],
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="m-0 p-0 box-border">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
