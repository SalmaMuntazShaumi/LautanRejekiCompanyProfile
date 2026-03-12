import { Award, Handshake, Scale, Lightbulb, ShieldCheck, LucideIcon } from "lucide-react";

export const CATEGORIES = [
  { name: 'Pipa Rucika', img: '/images/product_category/cat_rucika.png', slug: 'pipa-rucika' },
  { name: 'Pipa Shuanglin', img: '/images/product_category/cat_shuanglin.png', slug: 'pipa-shuanglin' },
  { name: 'Kabel Extrana', img: '/images/product_category/cat_extrana.png', slug: 'kabel-extrana' }
];

export const SEGMENTATIONS = [
  { name: 'Pertanian & Perkebunan', img: '/images/segment/tani.png' },
  { name: 'Pertambakan & Perikanan', img: '/images/segment/ikan.png' },
  { name: 'Pabrik & Industri', img: '/images/segment/pabrik.png' },
  { name: 'Pertambangan', img: '/images/segment/tambang.png' },
  { name: 'Minyak & Gas', img: '/images/segment/minyak.png' },
  { name: 'Pembangunan skala kecil', img: '/images/segment/skala_kecil.png' },
  { name: 'Perkembangan skala besar', img: '/images/segment/skala_besar.png' },
  { name: 'Pemerintahan', img: '/images/segment/govern.png' },
  { name: 'Infrastruktur', img: '/images/segment/infrastruktur.png' },
];

export const MITRA_LOGOS = [
  { id: 1, img: '/images/partnership/logo_spi.png', alt: 'SPI' },
  { id: 2, img: '/images/partnership/logo_rucika.png', alt: 'Rucika' },
  { id: 3, img: '/images/partnership/logo_rucika_green.png', alt: 'Kelen Green' },
  { id: 4, img: '/images/partnership/logo_ruika_black.png', alt: 'Rucika Black' },
  { id: 5, img: '/images/partnership/logo_rucika_standard.png', alt: 'Rucika Standard' },
  { id: 6, img: '/images/partnership/logo_extrana.png', alt: 'Extrana' },
  { id: 7, img: '/images/partnership/logo_trs.png', alt: 'Tiga Roda Semen' },
];

export const KLIEN_LOGOS = [
  { id: 1, img: '/images/client/adhi.png', alt: 'Adhi Commuter Property' },
  { id: 2, img: '/images/client/apl.png', alt: 'Agung Podomoro Land' },
  { id: 3, img: '/images/client/asg.png', alt: 'Agung Sedayu Group' },
  { id: 4, img: '/images/client/ciputra.png', alt: 'Ciputra Group' },
  { id: 5, img: '/images/client/intiland.png', alt: 'Intiland' },
  { id: 6, img: '/images/client/jaya.png', alt: 'Jaya Property' },
  { id: 7, img: '/images/client/lippo.png', alt: 'Lippo Group' },
  { id: 8, img: '/images/client/nrc.png', alt: 'Nusa Raya Cipta' },
  { id: 9, img: '/images/client/pakuwon.png', alt: 'Pakuwon group' },
  { id: 10, img: '/images/client/pulau_intan.png', alt: 'Pulau Intan' },
  { id: 11, img: '/images/client/sinarmas.png', alt: 'Sinarmas Land' },
  { id: 12, img: '/images/client/summa.png', alt: 'Summarecon' },
  { id: 13, img: '/images/client/tata.png', alt: 'TATA' },
  { id: 14, img: '/images/client/total.png', alt: 'Total Persada Indonesia' },
  { id: 15, img: '/images/client/wika.png', alt: 'Wika' },
];

export const VALUES_DATA = [
  { label: "Berkualitas", icon: Award },
  { label: "Layanan Terbaik", icon: Handshake },
  { label: "Jujur", icon: Scale },
  { label: "Inovatif", icon: Lightbulb },
  { label: "Aman", icon: ShieldCheck },
];
export interface Product {
  id: number;
  slug: string;
  name: string;
  img: string;
  brand: string;
  bannerImg: string;
  deskripsi: string;
  kelas: string[];
  // Record<string, string> artinya: key-nya string apa saja, isinya juga string
  descKelas: Record<string, string>; 
  tabelSpesifikasi: Record<string, string>;
  katalogUrl: string;
}

// Untuk data Values agar icon tidak error
export interface ValueData {
  label: string;
  icon: LucideIcon;
}

export const ALL_PRODUCTS: Product[] = [
  { 
    id: 1, 
    slug: "pipa-pvc-standard",
    name: "Pipa PVC - Standard", 
    img: "/images/product_rucika/standard.png", 
    brand: "Rucika",
    bannerImg: "/images/detail_products/rucika/pvc-std-banner.png",
    deskripsi: "RUCIKA STANDARD adalah pipa PVC untuk jaringan sistem perpipaan air bersih bertekanan dan buangan. Terbuat dari bahan uPVC(unplastized Polyvinyl Chloride) yang banyak sekali kelebihannya dibanding material polimer lainnya, seperti : adanya Calcium Zinc (Tanpa Timbal), tahan terhadap korosi, kuat, ringan, mudah dalam penyambungan dan pemeliharaan. RUCIKA STANDARD diproduksi mengacu standar JIS dan ISO dengan sertifikasi system manajemen mutu ISO 9001:2000.",
    kelas: ["AW", "D"],
    descKelas:{
      "AW" : "Kelas AW Merupakan Pipa untuk air bertekanan tinggi sampai tekanan kerja 10 Bar dengan 14 macam ukuran diameter dari 1/2 inch sampai 12 inch",
      "D" : "Kelas D Merupakan Pipa untuk saluran pembuangan dan limbah dengan 11 macam ukuran diameter dari 1 1/4 inch hingga 12 inch"
    },
    tabelSpesifikasi: {
      "AW": "/images/detail_products/rucika/table/rucika-std/aw.png",
      "D": "/images/detail_products/rucika/table/rucika-std/d.png"
    },
    katalogUrl: "/files/katalog-pvc-standard.pdf" 
  },
  { 
    id: 2, 
    slug: "pipa-pvc-jis",
    name: "Pipa PVC - JIS", 
    img: "/images/product_rucika/jis.png", 
    brand: "Rucika" ,
    bannerImg: "/images/detail_products/rucika/pvc-jis-banner.png",
    deskripsi: "Dengan penetrasi sistem pipa uPVC kedalam pasaran perpipaan air, RUCIKA JIS telah dikembangkan untuk memenuhi kebutuhan instalasi pipa air minum di rumah-rumah maupun gedung bertingkat sejak lebih dari 30 tahun yang lalu. Sehingga sangat cocok apabila digunakan pada instalasi air bersih, air hujan, air kotor dan pipa ventilasi udara.",
    kelas: ["VP/AW", "VU/D"],
    descKelas:{
      "VP/AW" : "Kelas VP/AW Merupakan Pipa uPVC berstandard Japanese Industrial Standards (JIS) untuk aplikasi air bersih bertekanan. Memiliki safety faktor tinggi dalam hal ketebalan pipa.",
      "VU/D" : "Kelas VU/D Merupakan Pipa uPVC berstandard Japanese Industrial Standards (JIS) untuk aplikasi air limbah, memiliki safety faktor tinggi dalam hal ketebalan pipa."
    },
    tabelSpesifikasi: {},
    katalogUrl: "/files/katalog-pvc-standard.pdf" 
  },
  { 
    id: 3, 
    slug: "pipa-pvc-sni",
    name: "Pipa PVC - Safe (SNI)", 
    img: "/images/product_rucika/sni.png", 
    brand: "Rucika",
    bannerImg: "/images/detail_products/rucika/pvc-sni-banner.png",
    deskripsi: "RUCIKA SAFE adalah sistem jaringan perpipaan uPVC sesuai Standar Nasional Indonesia (SNI) yang dirancang untuk mendistribusikan air minum dan air bersih ke masyarakat luas serta berbagai jenis proyek.\nRUCIKA SAFE menggunakan sistem penyambungan dengan lem atau umum disebut Solvent Cement (SC)",
    kelas: [],
    descKelas:{},
    tabelSpesifikasi: {},
    katalogUrl: "/files/katalog-pvc-standard.pdf"  
  },
  { 
    id: 4, 
    slug: "pipa-ppr",
    name: "Pipa PP-R", 
    img: "/images/product_rucika/kelen.png", 
    brand: "Rucika",
    bannerImg: "/images/detail_products/rucika/ppr-banner.png",
    deskripsi: "RUCIKA KELEN GREEN adalah produk pipa air panas dan dingin yang digunakan dalam sistem perpipaan lengkap untuk kebutuhan air panas & dingin bertekanan dengan jenjang produk yang luas. Materialnya dari bahan Polypropylene Random (PP-R) type 3 atau PP-R 80. Menggunakan sistem penyambungan heat fusion dengan alat pemanas polyfusion atau electrofusion, sehingga hasil penyambungan menjadi homogen atau senyawa sehingga menjamin kekuatannya, anti kebocoran, bebas perawatan & didesain agar mampu digunakan hingga 50 tahun.",
    kelas: ["PN 10 (Garis Biru)", "PN 16 (Garis Kuning)", "PN 20 (Garis Merah)"],
    descKelas:{
      "PN 10 (Garis Biru)" : "Tipe PN 10 Merupakan Pipa PP-R yang dipergunakan untuk mengalirkan air dingin.",
      "PN 16 (Garis Kuning)" : "Tipe PN 16 Merupakan Pipa PP-R yang dipergunakan untuk mengalirkan air dingin bertekanan tinggi dan air panas..",
      "PN 20 (Garis Merah)" : "Tipe PN 20 Merupakan Pipa PP-R yang dipergunakan untuk mengalirkan air panas bertekanan tinggi."
    },
    tabelSpesifikasi: {
      "PN 10 (Garis Biru)": "/images/detail_products/rucika/table/rucika-ppr/pn10.png",
      "PN 16 (Garis Kuning)": "/images/detail_products/rucika/table/rucika-ppr/pn16.png",
      "PN 20 (Garis Merah)": "/images/detail_products/rucika/table/rucika-ppr/pn20.png"
    },
    katalogUrl: "/files/katalog-pvc-standard.pdf"   
  },
  { 
    id: 5, 
    slug: "pipa-hdpe",
    name: "Pipa HDPE", 
    img: "/images/product_rucika/hdpe.png", 
    brand: "Rucika",
    bannerImg: "/images/detail_products/rucika/hdpe-banner.png",
    deskripsi: "RUCIKA BLACK merupakan sistem perpipaan yang terpercaya dengan menggunakan pipa HDPE yang memiliki karakteristik istimewa dan sesuai untuk aplikasi air minum karena terbuat dari Polyethylene (PE). Materialnya memiliki tingkat elastisitas yang tinggi dan tingkat keretakan yang rendah, sehingga memiliki life time lebih dari 50 tahun.",
    kelas: [],
    descKelas:{},
    tabelSpesifikasi: {},
    katalogUrl: "/files/katalog-pvc-standard.pdf"    
  },
  { 
    id: 6, 
    slug: "pipa-exoplas",
    name: "Pipa Exoplas", 
    img: "/images/product_rucika/exoplas.png", 
    brand: "Rucika",
    bannerImg: "/images/detail_products/rucika/exoplas-banner.png",
    deskripsi: "RUCIKA EXOPLAS merupakan sistem perpipaan dengan menggunakan pipa SNI (Standar Nasional Indonesia) yang terpercaya untuk aplikasi air bersih bertekanan dengan karakteristik yang teristimewa karena terbuat dari uPVC (unplastized Polyvinyl Chloride) dengan metode pembuatan yang berorientasi Bi-axial (stretching) untuk peningkatan peforma pipa termoplastik. Pipa RUCIKA EXOPLAS dengan design stress sampai dengan 28 MPa atau 2x lipat lebih besar dari pipa uPVC membuat ketahanan pressure meningkat dengan perbandingan ketebalan pipa yang sama dengan pipa uPVC.",
    kelas: [],
    descKelas:{},
    tabelSpesifikasi: {},
    katalogUrl: "/files/katalog-pvc-standard.pdf"
  },
  { 
    id: 7, 
    slug: "fitting-pvc-jis",
    name: "Fitting PVC - JIS", 
    img: "/images/product_rucika/fitting_jis.png", 
    brand: "Rucika",
    bannerImg: "/images/detail_products/rucika/fitting-pvc-banner.png", 
    deskripsi: "RUCIKA FITTING PVC JIS adalah sistem fitting untuk pipa PVC JIS yang terbuat dari bahan uPVC (unplastized Polyvinyl Chloride) dengan standar Japanese Industrial Standards (JIS) untuk aplikasi air bersih bertekanan dan air limbah. Fitting ini dirancang untuk memberikan solusi penyambungan yang kuat, tahan lama, dan mudah digunakan dalam berbagai instalasi perpipaan.",
    kelas: ["AW - JIS", "D - JIS", "Safe"],
    descKelas:{},
    tabelSpesifikasi: {
      "AW - JIS": "/images/detail_products/rucika/table/fitting-pvc/aw.png",
      "D - JIS": "/images/detail_products/rucika/table/fitting-pvc/d.png",
      "Safe": "/images/detail_products/rucika/table/fitting-pvc/safe.png"
    },
    katalogUrl: "/files/katalog-pvc-standard.pdf"
  },
  { 
    id: 8, 
    slug: "fitting-ppr",
    name: "Fitting PP-R", 
    img: "/images/product_rucika/fitting_kelen.png", 
    brand: "Rucika",
    bannerImg: "/images/detail_products/rucika/fitting-ppr-banner.png",
    deskripsi: "RUCIKA FITTING PP-R adalah sistem fitting untuk pipa PP-R yang terbuat dari bahan Polypropylene Random (PP-R) type 3 atau PP-R 80. Fitting ini dirancang untuk memberikan solusi penyambungan yang kuat, tahan lama, dan mudah digunakan dalam berbagai instalasi perpipaan air panas dan dingin bertekanan.",
    kelas: [],
    descKelas:{},
    tabelSpesifikasi: {
      "Fitting PP-R": "/images/detail_products/rucika/table/fitting-ppr/ppr.png"
    },
    katalogUrl: "/files/katalog-pvc-standard.pdf"
  },
  { 
    id: 9, 
    slug: "fitting-hdpe",
    name: "Fitting HDPE", 
    img: "/images/product_rucika/fitting_hdpe.png", 
    brand: "Rucika",
    bannerImg: "/images/detail_products/rucika/fitting-hdpe-banner.png",
    deskripsi: "RUCIKA FITTING HDPE adalah sistem fitting untuk pipa HDPE yang terbuat dari bahan Polyethylene (PE). Fitting ini dirancang untuk memberikan solusi penyambungan yang kuat, tahan lama, dan mudah digunakan dalam berbagai instalasi perpipaan air minum karena memiliki karakteristik istimewa dan sesuai untuk aplikasi air minum.",
    kelas: [],
    descKelas:{},
    tabelSpesifikasi: {
      "Fitting HDPE": "/images/detail_products/rucika/table/fitting-hdpe/hdpe.png"
    },
    katalogUrl: "/files/katalog-pvc-standard.pdf"
  },

  { 
    id: 10, 
    slug: "pipa-hdpe-double-wall-corrugaated",
    name: "Pipa HDPE Double Wall Corrugaated", 
    img: "/images/product_shuanglin/double_wall.png", 
    brand: "Shuanglin",
    bannerImg: "/images/detail_products/shuanglin/double-wall-banner.png",
    deskripsi: "Pipa HDPE Double Wall Corrugated adalah jenis pipa yang memiliki dinding ganda dengan permukaan luar bergelombang (corrugated) dan permukaan dalam yang halus. Pipa ini dirancang untuk memberikan kekuatan struktural yang tinggi, tahan terhadap tekanan eksternal, dan memiliki kemampuan drainase yang baik. Pipa ini sering digunakan dalam aplikasi drainase, saluran pembuangan, dan sistem perpipaan bawah tanah.",
    kelas: [],
    descKelas:{},
    tabelSpesifikasi: {},
    katalogUrl: "/files/katalog-pvc-standard.pdf"
  },
  { 
    id: 11, 
    slug: "pipa-spiral-hdpe",
    name: "Pipa Spiral HDPE", 
    img: "/images/product_shuanglin/spiral_hdpe.png", 
    brand: "Shuanglin",
    bannerImg: "/images/detail_products/shuanglin/spiral-banner.png",
    deskripsi: "Pipa Spiral HDPE adalah jenis pipa yang memiliki desain spiral pada permukaan luarnya. Pipa ini terbuat dari bahan High-Density Polyethylene (HDPE) yang memberikan kekuatan dan ketahanan terhadap tekanan eksternal. Pipa Spiral HDPE sering digunakan dalam aplikasi drainase, saluran pembuangan, dan sistem perpipaan bawah tanah karena kemampuannya untuk menahan beban berat dan tahan terhadap korosi.",
    kelas: ["PR", "SQ", "VW"],
    descKelas:{
      "PR" : "Tipe PR Merupakan Pipa tipe lilitan luar , yaitu permukaan pada bagian dalam produk halus sementara pada bagian luar dibentuk dengan kerangka yang diperkuat. Terutama digunakan sebagai pipa drainese di bawah tanah.",
      "SQ": "Tipe SQ Merupakan Pipa tipe berliku, yaitu pada permukaan luar halus sementara di tengahnya terdapat kerangka berbentuk khusus yang diperkuat. Terutama digunakan sebagai penampung atau bejana serta penyedot sumur.",
      "VW": "Tipe VW Merupakan Pipa tipe berdingding padat, terutama digunakan untuk sambungan pipa seperti tee dan elbow, serta proses lanjutan dari kelengkapan aksesoris pipa."
    },
    tabelSpesifikasi: {},
    katalogUrl: "/files/katalog-pvc-standard.pdf" 
  },
  { 
    id: 12, 
    slug: "pipa-hdpe-pp-single-wall",
    name: "Pipa HDPE/PP Single Wall", 
    img: "/images/product_shuanglin/single_wall.png", 
    brand: "Shuanglin",
    bannerImg: "/images/detail_products/shuanglin/single-wall-banner.png",
    deskripsi: "Pipa HDPE/PP Single Wall adalah jenis pipa yang memiliki dinding tunggal dengan permukaan halus. Pipa ini terbuat dari bahan High-Density Polyethylene (HDPE) atau Polypropylene (PP) yang memberikan kekuatan dan ketahanan terhadap tekanan eksternal. Pipa HDPE/PP Single Wall sering digunakan dalam aplikasi perpipaan air bersih, saluran pembuangan, dan sistem perpipaan bawah tanah karena kemampuannya untuk menahan beban berat dan tahan terhadap korosi.",
    kelas: ["AASHTO", "JIS"],
    descKelas:{
      "AASHTO" : "Spesifikasi Pipa HDPE Single Wall Corrugated AASHTO Standard",
      "JIS" : "Spesifikasi Pipa HDPE Single Wall Corrugated JIS Standard"
    },
    tabelSpesifikasi: {
      "AASHTO": "/images/detail_products/shuanglin/table/single-wall/aashto.png",
      "JIS": "/images/detail_products/shuanglin/table/single-wall/jis.png"
    },
    katalogUrl: "/files/katalog-pvc-standard.pdf" 
  },

  { 
    id: 13, 
    name: "Low Voltage Cables (Copper)", 
    img: "/images/product_extrana/copper.png", 
    brand: "Extrana",
    slug: "low-voltage-copper",
    bannerImg: "/images/detail_products/extrana/low-voltage-copper-banner.png",
    deskripsi: "Low Voltage Cables (Copper) adalah jenis kabel listrik yang dirancang untuk digunakan dalam aplikasi tegangan rendah. Kabel ini terbuat dari konduktor tembaga yang memiliki konduktivitas tinggi, sehingga mampu menghantarkan listrik dengan efisiensi yang baik. Low Voltage Cables (Copper) sering digunakan dalam instalasi listrik rumah tangga, gedung komersial, dan aplikasi industri ringan karena keandalannya dalam menghantarkan listrik dengan aman dan efisien.",
    kelas: [],
    descKelas:{},
    tabelSpesifikasi: {},
    katalogUrl: "/files/katalog-pvc-standard.pdf" 
  },
  { 
    id: 14, 
    name: "Low Voltage Cables (Aluminuim)", 
    img: "/images/product_extrana/alumunium.png", 
    brand: "Extrana",
    slug: "low-voltage-aluminium",
    bannerImg: "/images/detail_products/extrana/low-voltage-aluminium-banner.png",
    deskripsi: "Low Voltage Cables (Aluminium) adalah jenis kabel listrik yang dirancang untuk digunakan dalam aplikasi tegangan rendah. Kabel ini terbuat dari konduktor aluminium yang memiliki konduktivitas yang baik, meskipun tidak sebaik tembaga. Low Voltage Cables (Aluminium) sering digunakan dalam instalasi listrik rumah tangga, gedung komersial, dan aplikasi industri ringan karena keandalannya dalam menghantarkan listrik dengan aman dan efisien, serta biaya yang lebih rendah dibandingkan dengan kabel tembaga.",
    kelas: [],
    descKelas:{},
    tabelSpesifikasi: {},
    katalogUrl: "/files/katalog-pvc-standard.pdf" 
  },
  { 
    id: 15, 
    name: "Instrument & Control Cables", 
    img: "/images/product_extrana/control.png", 
    brand: "Extrana",
    slug: "instrument-control",
    bannerImg: "/images/detail_products/extrana/instrument-control-banner.png",
    deskripsi: "Instrument & Control Cables adalah jenis kabel listrik yang dirancang khusus untuk digunakan dalam aplikasi instrumen dan kontrol. Kabel ini memiliki konduktor yang terbuat dari tembaga atau aluminium, serta isolasi dan pelindung yang dirancang untuk melindungi kabel dari gangguan elektromagnetik dan lingkungan eksternal. Instrument & Control Cables sering digunakan dalam industri manufaktur, otomasi, dan proses kontrol untuk menghubungkan perangkat instrumen, sensor, dan sistem kontrol dengan aman dan efisien.",
    kelas: [],
    descKelas:{},
    tabelSpesifikasi: {},
    katalogUrl: "/files/katalog-pvc-standard.pdf" 
  },
  {
    id: 16, 
    name: "Overhead Conductors", 
    img: "/images/product_extrana/conductors.png", 
    brand: "Extrana",
    slug: "overhead-conductors",
    bannerImg: "/images/detail_products/extrana/overhead-conductors-banner.png",
    deskripsi: "Overhead Conductors adalah jenis kabel listrik yang dirancang untuk digunakan dalam sistem distribusi listrik overhead. Kabel ini memiliki konduktor yang terbuat dari aluminium atau tembaga, serta isolasi dan pelindung yang dirancang untuk melindungi kabel dari gangguan elektromagnetik dan lingkungan eksternal. Overhead Conductors sering digunakan dalam jaringan distribusi listrik untuk menghubungkan gardu induk, tiang listrik, dan konsumen dengan aman dan efisien, serta mampu menahan beban listrik yang tinggi dan kondisi lingkungan yang ekstrem.", 
    kelas: [],
    descKelas:{},
    tabelSpesifikasi: {},
    katalogUrl: "/files/katalog-pvc-standard.pdf"
  },
  { 
    id: 17, 
    name: "Fire Resistant Cables", 
    img: "/images/product_extrana/fire_resistant.png", 
    brand: "Extrana",
    slug: "fire-resistant",
    bannerImg: "/images/detail_products/extrana/fire-resistant-banner.png",
    deskripsi: "Fire Resistant Cables adalah jenis kabel listrik yang dirancang khusus untuk tahan terhadap api dan panas tinggi. Kabel ini memiliki konduktor yang terbuat dari tembaga atau aluminium, serta isolasi dan pelindung yang dirancang untuk melindungi kabel dari kerusakan akibat api. Fire Resistant Cables sering digunakan dalam instalasi listrik di gedung-gedung komersial, industri, dan fasilitas publik untuk memastikan bahwa sistem listrik tetap berfungsi dengan aman selama kebakaran, sehingga membantu mencegah penyebaran api dan memberikan waktu evakuasi yang lebih lama bagi penghuni.",
    kelas: [],
    descKelas:{},
    tabelSpesifikasi: {},
    katalogUrl: "/files/katalog-pvc-standard.pdf"  
  },
  { 
    id: 18, 
    name: "Medium Voltage Cables", 
    img: "/images/product_extrana/medium-voltage.png", 
    brand: "Extrana",
    slug: "medium-voltage",
    bannerImg: "/images/detail_products/extrana/medium-voltage-banner.png",
    deskripsi: "Medium Voltage Cables adalah jenis kabel listrik yang dirancang untuk digunakan dalam aplikasi tegangan menengah. Kabel ini memiliki konduktor yang terbuat dari tembaga atau aluminium, serta isolasi dan pelindung yang dirancang untuk melindungi kabel dari gangguan elektromagnetik dan lingkungan eksternal. Medium Voltage Cables sering digunakan dalam instalasi listrik industri, pembangkit listrik, dan jaringan distribusi untuk menghubungkan peralatan listrik dengan aman dan efisien, serta mampu menahan beban listrik yang tinggi dan kondisi lingkungan yang ekstrem.",
    kelas: [],
    descKelas:{},
    tabelSpesifikasi: {},
    katalogUrl: "/files/katalog-pvc-standard.pdf" 
  },
];