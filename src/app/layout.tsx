import type { Metadata } from "next";
import { Footer, Navbar } from "../components";
import "./globals.css";

export const metadata: Metadata = {
  title: "CINEVERSE",
  description:
    "這裡是所有電影愛好者交流、互動和追蹤他們所熱愛的電影文化的完美場所。歡迎加入Cineverse，讓您的電影體驗更上一層樓！",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
