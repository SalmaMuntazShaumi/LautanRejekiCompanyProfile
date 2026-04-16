"use client";

import { ReactNode, useEffect } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  maxWidth?: string; // optional custom width
}

export default function Modal({
  isOpen,
  onClose,
  children,
  maxWidth = "800px",
}: ModalProps) {
  // Prevent scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return createPortal(
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(0,0,0,0.7)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 10000,
        padding: "1rem",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
            background: "#fff",
            borderRadius: "12px",
            width: "100%",
            maxWidth,
            maxHeight: "90vh",
            overflowY: "auto",
            position: "relative",
            padding: "1.5rem",
            zIndex: 1,              // 🔥 penting
            isolation: "isolate",   // 🔥 SUPER PENTING (biar gak ketimpa image)
        }}
        >
        {/* Close Button */}
        <button
            onClick={onClose}
            style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                width: "35px",
                height: "35px",
                borderRadius: "50%",
                border: "none",
                background: "#eee",
                cursor: "pointer",
                fontSize: "18px",
                fontWeight: "bold",
                zIndex: 9999, // 🔥 gedein sekalian
            }}
            >
            ✕
            </button>

        {children}
      </div>
    </div>,
    document.body
  );
}