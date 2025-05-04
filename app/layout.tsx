import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Best Budget",
  description: "A simple, mighty, budgeting app.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="grid grid-cols-1 w-10/11 place-items-center text-center">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={300}
            height={300}
          />
          <span className="text-4xl font-bold">Welcome to your favourite budgeting app.</span>
        </div>
        {children}
      </body>
    </html>
  );
}
