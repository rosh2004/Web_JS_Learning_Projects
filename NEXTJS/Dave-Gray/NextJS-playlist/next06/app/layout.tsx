import type { Metadata } from "next";
import "./globals.css";
import { Inter } from 'next/font/google'
import Navbar from "./components/Navbar";
import MyProfilePic from "./components/MyProfilePic";

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
        <MyProfilePic />

        {children}
      </body>
    </html>
  );
}
