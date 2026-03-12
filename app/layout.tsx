"use client";

import { useState } from "react";
import { Montserrat } from "next/font/google";
import { FaFacebook, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import "@/styles/globals.css";

const montserrat = Montserrat({ 
  subsets: ["latin"], 
  weight: ['400', '500', '600', '700'] 
});
export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // 1. Definisikan fungsi di sini agar bisa dipakai di dalam scope RootLayout
  const getLinkStyle = (path: string) => {
    const isActive = pathname === path || (path === "/Product" && pathname.startsWith("/Product"));
    return {
      color: isActive ? '#FF3B30' : 'black',
      fontWeight: isActive ? '700' : '500',
    };
  };

  return (
    <html lang="en">
      <body className={montserrat.className}>
        <header className="main-header">
          <Link href="/">
            <Image src="/images/logo_perusahaan.png" alt="Logo" width={210} height={70} priority className="company-logo" />
          </Link>

          <nav className="desktop-nav">
            <ul className="nav-list">
              <li><Link href="/" style={getLinkStyle("/")}>Beranda</Link></li>
              <li><Link href="/About" style={getLinkStyle("/About")}>Tentang</Link></li>
              <li><Link href="/Product" style={getLinkStyle("/Product")}>Produk</Link></li>
              <li><Link href="/Contact" style={getLinkStyle("/Contact")}>Kontak</Link></li>
            </ul>
          </nav>

          <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {isMenuOpen && (
            <div className="mobile-menu-overlay">
              <ul className="mobile-nav-list"> {/* Tambahkan class ini */}
                <li onClick={() => setIsMenuOpen(false)}><Link href="/" style={getLinkStyle("/")}>Beranda</Link></li>
                <li onClick={() => setIsMenuOpen(false)}><Link href="/About" style={getLinkStyle("/About")}>Tentang</Link></li>
                <li onClick={() => setIsMenuOpen(false)}><Link href="/Product" style={getLinkStyle("/Product")}>Produk</Link></li>
                <li onClick={() => setIsMenuOpen(false)}><Link href="/Contact" style={getLinkStyle("/Contact")}>Kontak</Link></li>
              </ul>
            </div>
          )}
        </header>

        {children}

        <footer className="main-footer">
          <div className="footer-links-row">
            {/* Pakai getLinkStyle di sini juga aman karena masih dalam satu scope */}
            <Link href="/" style={getLinkStyle("/")}>Beranda</Link>
            <Link href="/About" style={getLinkStyle("/About")}>Tentang</Link>
            <Link href="/Product" style={getLinkStyle("/Product")}>Produk</Link>
            <Link href="/Contact" style={getLinkStyle("/Contact")}>Kontak</Link>
          </div>

          <div className="footer-main-content">
            <div className="footer-address">
              <h3>PT LAUTAN REJEKI</h3>
              <p>Jl. Meruya Ilir Raya No.1 4, RT.4/RW.1, Srengseng,<br />Kec. Kembangan, Jakarta Barat 11630</p>
            </div>
            
            <div className="footer-socials">
              {/* Link sosial media biasanya tidak butuh logika Active Link, jadi pakai plain Link saja */}
              <Link href="#"><FaWhatsapp size={35} color="black" /></Link>
              <Link href="#"><FaInstagram size={35} color="black" /></Link>
              <Link href="#"><FaFacebook size={35} color="black" /></Link>
              <Link href="#"><FaYoutube size={35} color="black" /></Link>
              <Link href="#"><AiFillTikTok size={35} color="black" /></Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}