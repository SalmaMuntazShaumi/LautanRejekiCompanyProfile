"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiFillTikTok } from "react-icons/ai";
import { FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";

export default function Footer() {
  const pathname = usePathname();

  const getLinkStyle = (path: string) => {
    const isActive =
      pathname === path ||
      (path === "/Product" && pathname.startsWith("/Product"));

    return isActive ? "active" : "";
  };

  return (
    <footer className="main-footer">
      <div className="footer-links-row">
        <Link href="/" className={getLinkStyle("/")}>
          Beranda
        </Link>

        <Link href="/About" className={getLinkStyle("/About")}>
          Tentang
        </Link>

        <Link href="/Product" className={getLinkStyle("/Product")}>
          Produk
        </Link>

        <Link href="/Contact" className={getLinkStyle("/Contact")}>
          Kontak
        </Link>
      </div>

      <div className="footer-main-content">
        <div className="footer-address">
          <h3>PT LAUTAN REJEKI</h3>

          <p>
            Jl. Meruya Ilir Raya No.1, RT.4/RW.1,
            <br />
            Srengseng, Kec. Kembangan,
            <br />
            Jakarta Barat 11630
          </p>
        </div>

        <div className="footer-socials">
          <Link
            href="https://wa.me/6287780450268?text=Halo%20Admin,%20saya%20ingin%20bertanya%20tentang%20katalog%20produk%20dan%20harga%20yang%20ditawarkan."
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp PT Lautan Rejeki"
          >
            <FaWhatsapp size={35} />
          </Link>

          <Link
            href="https://www.instagram.com/lautanrejekigroupofficial"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram PT Lautan Rejeki"
          >
            <FaInstagram size={35} />
          </Link>

          <Link
            href="https://www.youtube.com/@LautanRejekiOfficial"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube PT Lautan Rejeki"
          >
            <FaYoutube size={35} />
          </Link>

          <Link
            href="https://www.tiktok.com/@lautanrejekigroup"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok PT Lautan Rejeki"
          >
            <AiFillTikTok size={35} />
          </Link>
        </div>
      </div>
    </footer>
  );
}