"use client";

import { useState } from "react";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { FaFacebook, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const montserrat = Montserrat({ 
  subsets: ["latin"], 
  weight: ['400', '500', '600', '700'] 
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Helper function untuk menentukan style link secara dinamis
  const getLinkStyle = (path: string) => {
    // Logika Active: 
    // 1. Cek apakah path sama persis (misal: "/")
    // 2. Khusus Produk, cek apakah URL dimulai dengan /Product (agar detail page tetap merah)
    const isActive = 
      pathname === path || 
      (path === "/Product" && pathname.startsWith("/Product"));

    return {
      textDecoration: 'none',
      color: isActive ? '#FF3B30' : 'black',
      fontWeight: isActive ? '700' : '500',
      transition: 'all 0.3s ease'
    };
  };

  return (
    <html lang="en">
      <body className={montserrat.className}>
        {/* --- HEADER --- */}
        <header style={{ 
          display: 'flex', justifyContent: 'space-between', alignItems: 'center', 
          padding: '1rem 5%', borderBottom: '1px solid #eee', backgroundColor: 'white',
          position: 'sticky', top: 0, zIndex: 100, height: '80px'
        }}>
          <Link href="/">
            <Image src="/images/logo_perusahaan.png" alt="Logo" width={240} height={90} priority />
          </Link>

          {/* Navigasi Desktop */}
          <nav className="desktop-nav">
            <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none', margin: 0, padding: 0 }}>
              <li><Link href="/" style={getLinkStyle("/")}>Beranda</Link></li>
              <li><Link href="/About" style={getLinkStyle("/About")}>Tentang</Link></li>
              <li><Link href="/Product" style={getLinkStyle("/Product")}>Produk</Link></li>
              <li><Link href="/Contact" style={getLinkStyle("/Contact")}>Kontak</Link></li>
            </ul>
          </nav>

          {/* Ikon Menu Mobile */}
          <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Overlay Menu Mobile */}
          {isMenuOpen && (
            <div className="mobile-menu-overlay">
               <ul style={{ listStyle: 'none', padding: 0, textAlign: 'center' }}>
                  <li onClick={() => setIsMenuOpen(false)} style={{ padding: '15px 0' }}>
                    <Link href="/" style={getLinkStyle("/")}>Beranda</Link>
                  </li>
                  <li onClick={() => setIsMenuOpen(false)} style={{ padding: '15px 0' }}>
                    <Link href="/About" style={getLinkStyle("/About")}>Tentang</Link>
                  </li>
                  <li onClick={() => setIsMenuOpen(false)} style={{ padding: '15px 0' }}>
                    <Link href="/Product" style={getLinkStyle("/Product")}>Produk</Link>
                  </li>
                  <li onClick={() => setIsMenuOpen(false)} style={{ padding: '15px 0' }}>
                    <Link href="/Contact" style={getLinkStyle("/Contact")}>Kontak</Link>
                  </li>
               </ul>
            </div>
          )}
        </header>

        {children}

        {/* --- FOOTER --- */}
        <footer style={{ backgroundColor: '#D9D9D9', padding: '4rem 5%' }}>
          <div className="footer-links-row">
            <Link href="/" style={getLinkStyle("/")}>Beranda</Link>
            <Link href="/About" style={getLinkStyle("/About")}>Tentang</Link>
            <Link href="/Product" style={{ ...getLinkStyle("/Product"), display: 'flex', alignItems: 'center', gap: '4px' }}>Produk</Link>
            <Link href="/Contact" style={getLinkStyle("/Contact")}>Kontak</Link>
          </div>

          <div className="footer-main-content">
            <div className="footer-address">
              <h3 style={{ fontWeight: 'bold', margin: '0 0 10px 0' }}>PT LAUTAN REJEKI</h3>
              <p style={{ lineHeight: '1.6', margin: 0 }}>
                Jl. Meruya Ilir Raya No.1 4, RT.4/RW.1, Srengseng,<br />
                Kec. Kembangan, Jakarta Barat 11630
              </p>
            </div>
            
            <div className="footer-socials">
              <SocialIcon icon={<FaWhatsapp size={35} />} />
              <SocialIcon icon={<FaInstagram size={35} />} />
              <SocialIcon icon={<FaFacebook size={35} />} />
              <SocialIcon icon={<FaYoutube size={35} />} />
              <SocialIcon icon={<AiFillTikTok size={35} />} />
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

const SocialIcon = ({ icon }: { icon: React.ReactNode }) => (
  <Link href="#" style={{ color: 'black' }}>{icon}</Link>
);