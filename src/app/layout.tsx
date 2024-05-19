import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AiPractice",
  description: "面向海外地区汉语学习者的练习平台",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
