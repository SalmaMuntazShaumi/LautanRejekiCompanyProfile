"use client";

import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true }, // Animasi hanya jalan sekali saat di-scroll
  transition: { duration: 0.8 }
};

export default function ContactUs() {
    return (
        <section style={{ padding: '3rem 5%', textAlign: 'center', backgroundColor: 'white' }}>
            <motion.h1 className="section-title"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}>
                Buat kebutuhan pipamu menjadi lebih mudah bersama kami
            </motion.h1>
            
            <motion.p className="section-desc"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}>
                Sebagai distributor pipa profesional dan transparan, kami selalu memastikan kepuasan pelanggan serta memberikan produk-produk berkualitas tinggi.
            </motion.p>
            
           <a 
            href="https://wa.me/6287780450268?text=Halo%20Admin,%20saya%20ingin%20bertanya%20tentang%20katalog%20produk%20dan%20harga%20yang%20ditawarkan." 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ textDecoration: 'none' }}
            >
            <motion.button
                whileHover={{ 
                scale: 1.05,
                backgroundColor: "#3D6098",
                color: "#fff",
                borderColor: "#3D6098"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
                style={{ 
                color: '#333', 
                padding: '12px 24px', 
                border: '3px solid #E1E1E1', 
                borderRadius: '8px', 
                fontFamily: 'Montserrat',
                fontWeight: '600',
                cursor: 'pointer',
                backgroundColor: 'transparent'
                }}
            >
                Hubungi kami
            </motion.button>
            </a>
        </section>
    );
}