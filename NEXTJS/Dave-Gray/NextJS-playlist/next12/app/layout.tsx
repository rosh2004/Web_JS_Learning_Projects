import type { Metadata } from "next";
import "./globals.css";
import { Inter } from 'next/font/google'
import Navbar from "./components/Navbar";

const inter = Inter({
  subsets: ['latin'],
});


export const metadata: Metadata = {
  title: "Rosh's Blog",
  description: "Created By Rosh",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased dark:bg-slate-800`}
      >
        <Navbar />
        <main className="px-4 md:px-6 prose prose-xl prose-slate dark:prose-invert mx-auto">
          {children}
        </main>
      </body>
    </html>
  );
}
