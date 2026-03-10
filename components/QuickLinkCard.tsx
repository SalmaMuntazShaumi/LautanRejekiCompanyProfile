import { JSX } from "@emotion/react/jsx-runtime";
import Link from "next/link";

export default function QuickLinkCard({ href, title, icon, desc }: { href: string; title: string; icon: JSX.Element; desc: string }) {
    return (
        <Link href={href} style={{ textDecoration: 'none' }}>
            <div className="quick-link-card" style={{position: 'relative', overflow: "hidden", transition: 'transform 0.5s ease', backgroundColor: '#3D6098', padding: '2.5rem', borderRadius: '12px', height: '100%' }}>
            {icon}
            <h3 style={{ color: '#fff', margin: '1rem 0' }}>{title}</h3>
            <p style={{ color: '#fff', fontSize: '0.9rem', opacity: 0.9 }}>{desc}</p>
            </div>
        </Link>
    );
}