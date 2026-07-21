"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const getLinkStyle = (path: string) => {
    const isActive =
      pathname === path ||
      (path === "/Product" && pathname.startsWith("/Product"));

    return isActive ? "active" : "";
  };

  return (
    <header className="main-header">
      <Link href="/" className="brand-link" aria-label="PT Lautan Rejeki">
        <Image
          src="/images/logo_perusahaan.png"
          alt="Logo PT Lautan Rejeki"
          width={210}
          height={70}
          priority
          className="company-logo"
        />
      </Link>

      <nav className="desktop-nav">
        <ul className="nav-list">
          <li><Link href="/" className={getLinkStyle("/")}>Beranda</Link></li>
          <li><Link href="/About" className={getLinkStyle("/About")}>Tentang</Link></li>
          <li><Link href="/Product" className={getLinkStyle("/Product")}>Produk</Link></li>
          <li><Link href="/Contact" className={getLinkStyle("/Contact")}>Kontak</Link></li>
        </ul>
      </nav>

      <button
        className="mobile-menu-btn"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {isMenuOpen && (
        <div className="mobile-menu-overlay">
          <ul className="mobile-nav-list">
            <li onClick={() => setIsMenuOpen(false)}>
              <Link href="/" className={getLinkStyle("/")}>Beranda</Link>
            </li>

            <li onClick={() => setIsMenuOpen(false)}>
              <Link href="/About" className={getLinkStyle("/About")}>Tentang</Link>
            </li>

            <li onClick={() => setIsMenuOpen(false)}>
              <Link href="/Product" className={getLinkStyle("/Product")}>Produk</Link>
            </li>

            <li onClick={() => setIsMenuOpen(false)}>
              <Link href="/Contact" className={getLinkStyle("/Contact")}>Kontak</Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}