"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function ContactUs() {
  return (
    <section className="contact-cta-section">
      <motion.h1
        className="section-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Buat kebutuhan pipamu menjadi lebih mudah bersama kami
      </motion.h1>

      <motion.p
        className="section-desc"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Sebagai distributor pipa profesional dan transparan, kami selalu
        memastikan kepuasan pelanggan serta memberikan produk-produk berkualitas
        tinggi.
      </motion.p>

      <a
        className="cta-button"
        href="https://wa.me/6287780450268?text=Halo%20Admin,%20saya%20ingin%20bertanya%20tentang%20katalog%20produk%20dan%20harga%20yang%20ditawarkan."
        target="_blank"
        rel="noopener noreferrer"
      >
        <motion.button
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <MessageCircle size={18} />
          Hubungi kami
        </motion.button>
      </a>
    </section>
  );
}
