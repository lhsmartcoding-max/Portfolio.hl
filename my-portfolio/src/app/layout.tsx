import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Navbar from "../../compoments/Navbar";
import Footer from "../../compoments/Footer";
import { ThemeProvider } from "next-themes";

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
    <html lang="ja" suppressHydrationWarning>
      <body className={`${notoSansJP.variable} font-sans`}>
        <ThemeProvider attribute="class">
          {/* Flex container to push footer down */}
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1 pt-16">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
