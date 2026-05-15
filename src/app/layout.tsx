import "./globals.css";
import type { Metadata } from "next";
import { Inter, Caveat, JetBrains_Mono } from "next/font/google";
import Navbar from "@/components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import { ThemeProvider } from "../components/ThemeProvider";
import Cursor from "../components/cursor/Cursor";

export const metadata: Metadata = {
  title: {
    template: "%s | Bikalpa",
    default: "Bikalpa Paudel",
  },
  description: "Personal portfolio of Bikalpa Paudel — frontend developer.",
  keywords: ["Bikalpa Paudel", "bikalpa portfolio", "bikalpa website"],
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const caveat = Caveat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-hand",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${caveat.variable} ${mono.variable}`}
    >
      <body className="m-0 p-0 box-border font-sans bg-paper text-ink antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Cursor />
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
