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
        className="quick-link-card">
        {/* ICON */}
        <div>{icon}</div>

        {/* TITLE */}
        <h3>
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