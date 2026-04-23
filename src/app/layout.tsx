import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Devendra Sonawane - Portfolio",
  description: "Web Developer and Android Enthusiast",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} min-h-screen bg-slate-900 text-slate-200 selection:bg-indigo-500/30`}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Navbar />
          <main>{children}</main>
          
          <footer className="mt-20 py-8 text-center border-t border-white/10 text-sm text-slate-400">
            <p>&copy; {new Date().getFullYear()} Devendra Sonawane</p>
            <p className="mt-2">
              Contact me at:{" "}
              <a href="mailto:dpsonawane789@gmail.com" className="text-amber-400 hover:text-amber-300 transition-colors">
                dpsonawane789@gmail.com
              </a>
            </p>
          </footer>
        </div>
      </body>
    </html>
  );
}