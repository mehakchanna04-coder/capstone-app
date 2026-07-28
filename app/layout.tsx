import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-display" });
const inter = Inter({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  title: "Mehak Channa — I ship working apps",
  description:
    "Portfolio of Mehak Channa: CS graduate, FlyRank intern. AI idea to working app — proven.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${fraunces.variable} ${inter.variable} bg-[#FBF7F0] font-[family-name:var(--font-body)] text-[#1C2433] antialiased`}
      >
        <header className="border-b-2 border-[#A3263B] bg-[#1C2A44] text-[#FBF7F0]">
          <nav className="mx-auto flex max-w-5xl flex-wrap items-center gap-x-6 gap-y-2 p-4">
            <a href="/" className="font-[family-name:var(--font-display)] text-lg font-semibold">
              Mehak Channa
            </a>
            <a href="/work" className="text-sm hover:text-[#E8B4BC]">Work</a>
            <a href="/case-study" className="text-sm hover:text-[#E8B4BC]">Case Study</a>
            <a href="/about" className="text-sm hover:text-[#E8B4BC]">About</a>
            <a href="/contact" className="text-sm hover:text-[#E8B4BC]">Contact</a>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}