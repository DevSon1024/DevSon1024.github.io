import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import CursorFollower from "@/components/CursorFollower";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Devendra Sonawane (Devson1024) - Portfolio",
  description: "Web Developer and Android Enthusiast",
  verification: {
    google: "iuYF0W1QytrOB7WKPn_z3vef5AJIPVutp9M3IDh8Ugo",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'light') {
                    document.documentElement.classList.add('light');
                  } else {
                    document.documentElement.classList.remove('light');
                  }
                } catch (e) {}
              })();
            `
          }}
        />
      </head>
      <body className={`${inter.className} min-h-screen bg-brand-bg text-slate-200 selection:bg-indigo-500/30 relative antialiased`}>
        <CursorFollower />
        {/* Futuristic Astro-Terminal Background Design */}
        <div className="bg-grid-pattern" />
        <div className="bg-radial-glow -top-[200px] -right-[200px] bg-indigo-500/20" />
        <div className="bg-radial-glow -bottom-[200px] -left-[200px] bg-purple-500/20" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
          <Navbar />
          <main className="mt-4">{children}</main>
          
          <footer className="mt-24 py-12 text-center border-t border-white/5 text-sm text-slate-400 backdrop-blur-sm bg-slate-950/20 rounded-2xl p-6">
            <p className="font-mono text-xs tracking-wider text-slate-500">SYSTEM // Devendra Sonawane Portfolio</p>
            <p className="mt-2">&copy; {new Date().getFullYear()} Devendra Sonawane. All rights reserved.</p>
            <p className="mt-2">
              Get in touch:{" "}
              <a href="mailto:dpsonawane789@gmail.com" className="text-amber-400 hover:text-amber-300 font-medium transition-colors hover:underline">
                dpsonawane789@gmail.com
              </a>
            </p>
          </footer>
        </div>
      </body>
    </html>
  );
}