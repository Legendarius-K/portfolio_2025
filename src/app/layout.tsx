import type { Metadata } from "next";
import { Cutive_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navigation";

const cutiveMono = Cutive_Mono({
  variable: "--font-cutive-mono",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "D.Kaya Portfolio",
  description: "The developer portfolio of Darius Kaya",
  icons: {
    icon: "./favicon.ico", 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cutiveMono.variable} h-[100vh]`}>
      <body className="box-border flex justify-center m-0 pt-28 md:pt-44 pb-24 px-1 min-h-full font-mono bg-[#fafaf8]">
        <Navigation />
        {children}
      </body>
    </html>
  );
}
