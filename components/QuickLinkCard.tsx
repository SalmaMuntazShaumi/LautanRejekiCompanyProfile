"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface Props {
  href: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
}

export default function QuickLinkCard({ href, title, desc, icon }: Props) {
  return (
    <Link href={href} style={{ textDecoration: "none" }}>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        style={{
          background: "linear-gradient(135deg, #3D6098, #5A7DB3)",
          borderRadius: "16px",
          padding: "2rem",
          color: "white",
          cursor: "pointer",
          boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          height: "100%",
        }}
      >
        {/* ICON */}
        <div>{icon}</div>

        {/* TITLE */}
        <h3 style={{ fontSize: "20px", fontWeight: "600" }}>
          {title}
        </h3>

        {/* DESC */}
        <p style={{ fontSize: "14px", opacity: 0.9 }}>
          {desc}
        </p>
      </motion.div>
    </Link>
  );
}