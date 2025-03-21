import type { Metadata } from "next";
import { Cutive_Mono } from "next/font/google";
import "./globals.css";

const cutiveMono = Cutive_Mono({
  variable: "--font-cutive-mono",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "D.Kaya Portfolio",
  description: "The developer portfolio of Darius Kaya",
  icons: {
    icon: "./favicon.png", 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cutiveMono.variable} h-[100vh]`}>
      <body className="box-border m-0 p-0 h-full font-mono">{children}</body>
    </html>
  );
}
