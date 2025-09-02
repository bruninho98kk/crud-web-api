import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Cervejas Bruno | Turma Next.js 15",
  description: "Projeto Next.js 15 - Escola de Desenvolvimento",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-br from-yellow-50 to-yellow-100 min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
