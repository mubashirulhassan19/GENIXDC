import { Montserrat } from "next/font/google";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Stats } from "@/components/Stats";

import "./globals.css";

const monsterrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Genix MEP Design Consultant",
  description:
    "Genix MEP Design Consultant provides quality and comprehensive services for commercial and residential building mechanical, electrical and plumbing systems at affordable rates. ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${monsterrat.className} h-full`}>
        <Navbar />
        <main className="pt-20">{children}</main>
        <Stats />
        <Footer />
      </body>
    </html>
  );
}
