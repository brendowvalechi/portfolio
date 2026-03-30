import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Brendow Valechi — Python Backend Developer",
  description:
    "Python Backend Developer & Analista de Dados. Especialista em FastAPI, automação, dados e APIs de alta performance. Baseado em Uberlândia, MG.",
  keywords: [
    "Python",
    "Backend Developer",
    "FastAPI",
    "Analista de Dados",
    "Power BI",
    "Docker",
    "API REST",
    "Uberlândia",
    "Brendow Valechi",
  ],
  authors: [{ name: "Brendow Henrique Valechi Ramos" }],
  openGraph: {
    title: "Brendow Valechi — Python Backend Developer",
    description:
      "Python Backend Developer & Analista de Dados. Especialista em FastAPI, automação, dados e APIs de alta performance.",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Brendow Valechi — Python Backend Developer",
    description:
      "Python Backend Developer & Analista de Dados. Especialista em FastAPI, automação e APIs de alta performance.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${jetbrainsMono.variable} dark`}
    >
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
