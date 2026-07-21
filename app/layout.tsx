import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "@/styles/globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "PT Lautan Rejeki",
    template: "%s | PT Lautan Rejeki",
  },
  description:
    "Distributor Pipa Terpercaya. Menyediakan produk berkualitas dari Rucika, Shuanglin, hingga Extrana untuk kebutuhan proyek Anda.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className={montserrat.className}>
        <Header />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}
