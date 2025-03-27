import type { Metadata } from "next";
import "@/components/Navbar"
import "./globals.css";
import Navbar from "@/components/Navbar";



export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        <main className="contaier mx-auto h-[calc(100vh-7rem)] flex justify-center items-center">
        {children}
        </main>
      </body>
    </html>
  );
}
