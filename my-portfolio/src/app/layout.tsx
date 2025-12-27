import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Navbar from "../../compoments/Navbar";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-noto-sans-jp",
});

export const metadata: Metadata = {
  title: "Hakimi Luqman Portfolio",
  description: "Webエンジニア ハキミ・ルクマンのポートフォリオ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${notoSansJP.variable} font-sans`}>
        <Navbar />
        <main className="pt-16">{children}</main>
      </body>
    </html>
  );
}