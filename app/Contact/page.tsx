import ContactInfo from "@/components/ContactInfo";
import ContactUs from "@/components/ContactUs";
import CompanyMaps from "@/components/Maps";
import { Building2, MapPin, Phone, Warehouse } from "lucide-react";

export default function ContactPage() {
    return(
        <main style={{ fontFamily: 'Montserrat, sans-serif' }}>
            <ContactUs></ContactUs>
             {/* --- KONTAK & LOKASI (GRID BAWAH) --- */}
            <section style={{ padding: '5rem 10%', backgroundColor: '#fff', borderTop: '1px solid #eee' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem' }}>
                <ContactInfo icon={<Building2 />} title="Business Unit" list={["PT Lautan Rejeki Luas (2014)", "PT Aneka Rejeki Utama (2017)", "PT Kreasi Panen Jaya (2019)", "PT Jaya Panen Utama (2024)"]} />
                <ContactInfo icon={<MapPin />} title="Head Office" list={["Jl. Meruya Ilir Raya No.1 4, RT4/RW1, Serengseng, Kec. Kembangan, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11630"]} />
                <ContactInfo icon={<Warehouse />} title="Warehouse" list={["Jakarta . Serang . Tegal . Cirebon . Karawang . Bogor . Bandung . Sukabumi . Cianjur"]} />
                <ContactInfo icon={<Phone />} title="Our Contact" list={["Email : info@lautanrejeki.co.id", "Instagram : Lautanrejekiofficial", "Phone : 021-5863617", "Site : www.lautanrejeki.co.id"]} />
                </div>
            </section>

        <CompanyMaps></CompanyMaps>
        </main>
    );
}