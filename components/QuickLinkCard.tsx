import { JSX } from "@emotion/react/jsx-runtime";
import Link from "next/link";

export default function QuickLinkCard({ href, title, icon, desc }: { href: string; title: string; icon: JSX.Element; desc: string }) {
    return (
        <Link href={href} style={{ textDecoration: 'none' }}>
            <div className="quick-link-card">
                <div className="quick-link-icon">{icon}</div>
                <h3>{title}</h3>
                <p>{desc}</p>
            </div>
        </Link>
    );
}