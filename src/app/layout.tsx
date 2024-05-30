import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import { ThemeProvider } from "../components/ThemeProvider";

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
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
