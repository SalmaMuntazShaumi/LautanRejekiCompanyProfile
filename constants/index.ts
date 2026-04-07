import { Award, Handshake, Scale, Lightbulb, ShieldCheck } from "lucide-react";

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

interface ProductSpecification {
  kelasName?: string;         // The text for the chip (e.g., "AW")
  kelasDescription?: string;  // The specific paragraph
  specImage?: string;        // Path to the specific table image
}

interface Product{
id: number;
  name: string;
  img: string;
  brand: string;
  desc?: string;
  specs?: string; // This is the general description/specification, and is optional ('?')
  advantages?: string[];
  detailedSpecs?: ProductSpecification[]; // Optional
}

export const ALL_PRODUCTS: Product[] = [
  { id: 1, 
    name: "Pipa PVC - Standard", 
    img: "/images/product_rucika/standard.png", 
    brand: "Rucika",
    desc: "RUCIKA STANDARD adalah pipa PVC untuk jaringan sistem perpipaan air bersih bertekanan dan buangan. Terbuat dari bahan uPVC(unplastized Polyvinyl Chloride) yang banyak sekali kelebihannya dibanding material polimer lainnya, seperti : adanya Calcium Zinc (Tanpa Timbal), tahan terhadap korosi, kuat, ringan, mudah dalam penyambungan dan pemeliharaan. RUCIKA STANDARD diproduksi mengacu standar JIS dan ISO dengan sertifikasi system manajemen mutu ISO 9001:2000.",
    detailedSpecs: [
      {
        kelasName: "AW",
        kelasDescription: "Kelas AW Merupakan Pipa untuk air bertekanan tinggi sampai tekanan kerja 10 Bar dengan 14 macam ukuran diameter dari 1/2 inch sampai 12 inch",
        specImage: "/images/product_rucika/detail/standard/aw.png"
      },
      {
        kelasName: "D",
        kelasDescription: "Kelas D Merupakan Pipa untuk saluran pembuangan dan limbah dengan 11 macam ukuran diameter dari 1 1/4 inch hingga 12 inch.",
        specImage: "/images/product_rucika/detail/standard/d.png"
      }
    ]

   },
  { id: 2, 
    name: "Pipa PVC - JIS", 
    img: "/images/product_rucika/jis.png", 
    brand: "Rucika",
    desc: "Dengan penetrasi sistem pipa uPVC kedalam pasaran perpipaan air, RUCIKA JIS telah dikembangkan untuk memenuhi kebutuhan instalasi pipa air minum di rumah-rumah maupun gedung bertingkat sejak lebih dari 30 tahun yang lalu. Sehingga sangat cocok apabila digunakan pada instalasi air bersih, air hujan, air kotor dan pipa ventilasi udara.",
    detailedSpecs: [
      {
        kelasName: "VP/AW",
        kelasDescription: "Kelas VP/AW Merupakan Pipa uPVC berstandard Japanese Industrial Standards (JIS) untuk aplikasi air bersih bertekanan. Memiliki safety faktor tinggi dalam hal ketebalan pipa."
      },
      {
        kelasName: "VU/D",
        kelasDescription: "Kelas VU/D Merupakan Pipa uPVC berstandard Japanese Industrial Standards (JIS) untuk aplikasi air limbah, memiliki safety faktor tinggi dalam hal ketebalan pipa."
      }
    ]
  },
  { id: 3, 
    name: "Pipa PVC - Safe (SNI)", 
    img: "/images/product_rucika/sni.png", 
    brand: "Rucika",
    desc: "RUCIKA SAFE adalah sistem jaringan perpipaan uPVC sesuai Standar Nasional Indonesia (SNI) yang dirancang untuk mendistribusikan air minum dan air bersih ke masyarakat luas serta berbagai jenis proyek.\nRUCIKA SAFE menggunakan sistem penyambungan dengan lem atau umum disebut Solvent Cement (SC)" 
  },
  { id: 4, 
    name: "Pipa PP-R", 
    img: "/images/product_rucika/kelen.png", 
    brand: "Rucika",
    desc: "RUCIKA KELEN GREEN adalah produk pipa air panas dan dingin yang digunakan dalam sistem perpipaan lengkap untuk kebutuhan air panas & dingin bertekanan dengan jenjang produk yang luas. Materialnya dari bahan Polypropylene Random (PP-R) type 3 atau PP-R 80. Menggunakan sistem penyambungan heat fusion dengan alat pemanas polyfusion atau electrofusion, sehingga hasil penyambungan menjadi homogen atau senyawa sehingga menjamin kekuatannya, anti kebocoran, bebas perawatan & didesain agar mampu digunakan hingga 50 tahun.",
    detailedSpecs:[
      {
        kelasName: "PN 10 (Garis Biru)",
        kelasDescription: "Tipe PN 10 Merupakan Pipa PP-R yang dipergunakan untuk mengalirkan air dingin.",
        specImage: "/images/product_rucika/detail/ppr/pn10.png"
      },
      {
        kelasName: "PN 16 (Garis Kuning)",
        kelasDescription: "Tipe PN 16 Merupakan Pipa PP-R yang dipergunakan untuk mengalirkan air dingin bertekanan tinggi dan air panas..",
        specImage: "/images/product_rucika/detail/ppr/pn16.png"
      },
      {
        kelasName: "PN 20 (Garis Merah)",
        kelasDescription: "Tipe PN 20 Merupakan Pipa PP-R yang dipergunakan untuk mengalirkan air panas bertekanan tinggi.",
        specImage: "/images/product_rucika/detail/ppr/pn20.png"
      }
    ]
   },
  { id: 5, 
    name: "Pipa HDPE", 
    img: "/images/product_rucika/hdpe.png", 
    brand: "Rucika",
    desc: "RUCIKA BLACK merupakan sistem perpipaan yang terpercaya dengan menggunakan pipa HDPE yang memiliki karakteristik istimewa dan sesuai untuk aplikasi air minum karena terbuat dari Polyethylene (PE). Materialnya memiliki tingkat elastisitas yang tinggi dan tingkat keretakan yang rendah, sehingga memiliki life time lebih dari 50 tahun."
  },
  { id: 6, 
    name: "Pipa Exoplas", 
    img: "/images/product_rucika/exoplas.png", 
    brand: "Rucika",
    desc: "RUCIKA EXOPLAS merupakan sistem perpipaan dengan menggunakan pipa SNI (Standar Nasional Indonesia) yang terpercaya untuk aplikasi air bersih bertekanan dengan karakteristik yang teristimewa karena terbuat dari uPVC (unplastized Polyvinyl Chloride) dengan metode pembuatan yang berorientasi Bi-axial (stretching) untuk peningkatan peforma pipa termoplastik. Pipa RUCIKA EXOPLAS dengan design stress sampai dengan 28 MPa atau 2x lipat lebih besar dari pipa uPVC membuat ketahanan pressure meningkat dengan perbandingan ketebalan pipa yang sama dengan pipa uPVC."
   },
  { id: 7, 
    name: "Fitting PVC - JIS", 
    img: "/images/product_rucika/fitting_jis.png", 
    brand: "Rucika", 
    desc: "RUCIKA Fitting uPVC berstandar JIS, memiliki berbagai macam jenis sambungan / fitting yang sangat lengkap lebih dari 300 jenis dan ukuran. Fitting ini sangat cocok digunakan untuk penyambungan system perpipaan air bersih dan air buangan.",
    detailedSpecs: [
      {
        kelasName: "AW - JIS",
        specImage: "/images/product_rucika/detail/fitting_pvc/aw_jis.png",
      },
      {
        kelasName: "D - JIS",
        specImage: "/images/product_rucika/detail/fitting_pvc/d_jis.png",
      },
      {
        kelasName: "AW - SNI",
        specImage: "/images/product_rucika/detail/fitting_pvc/safe.png",
      }
    ]
  },
  { id: 8, 
    name: "Fitting PP-R", 
    img: "/images/product_rucika/fitting_kelen.png", 
    brand: "Rucika",
    desc: "Dengan sistem sambungan heat fusion yang menggunakan alat pemanas, maka hasil sambungan yang terbentuk adalah sambungan yang homogen atau senyawa sehingga terjamin kekuatannya, anti kebocoran dan bebas perawatan. Seluruh sambungan ulir dari Rucika KELEN Green dibuat dari nickel-plated brass OT 58, sehingga menjamin life time ulir dari kerusakan akibat panas, karat, dan bahan kimia serta dapat diaplikasikan ke seluruh sistem sanitari, termasuk koneksi ke Rucika KELOX.",
    detailedSpecs: [
      {
        specImage: "/images/product_rucika/detail/fitting_ppr/ppr.png",
      }
    ]
   },
  { id: 9, 
    name: "Fitting HDPE", 
    img: "/images/product_rucika/fitting_hdpe.png", 
    brand: "Rucika",
    desc: "Rucika Black memiliki fitting segmented lengkap dari diameter 63 mm – 630 mm. Menggunakan metode penyambungan butt fusion yang menghasilkan sambungan homogen / senyawa yang terjamin kekuatannya, anti bocor dan bebas perawatan",
    detailedSpecs: [
      {
        specImage: "/images/product_rucika/detail/fitting_hdpe/hdpe.png",
      }
    ]
   },

  { id: 10, 
    name: "Pipa HDPE Double Wall Corrugaated", 
    img: "/images/product_shuanglin/double_wall.png", 
    brand: "Shuanglin",
    desc: "Pipa HDPE Double Wall menggunakan dua lapisan berbeda yang terbuat dari bahan polietilen (PE) dengan kepadatan tinggi. Bagian dalamnya halus dan rata.",
    specs: "/images/product_shuanglin/detail/dwc/spec.png",
    advantages: [
      "Tahan terhadap korosi", "Resistensi terhadap benturan keras", "Pemakaian Jangka Panjang",
      "Tahan terhadap cuaca panas dan dingin", "Ringan", "Biaya teknik yang relatif rendah", "Instalasi yang mudah dan cepat", "Tahan lama",
      "Bagian dalam haalus sehingga pergesekan aliran rendah", "Non polusi pada lingkungan", "Kekuatan dan fleksibilitas pipa yang tinggi",
    ]
   },
  { id: 11, 
    name: "Pipa Spiral HDPE", 
    img: "/images/product_shuanglin/spiral_hdpe.png", 
    brand: "Shuanglin",
    desc: "Pipa Spiral HDPE merupakan pipa yang dibuat dengan teknologi spiral winding (melingkar). Dinding bagian dalamnya halus dan rata. Dinding luar diperkuat oleh profile.",
    specs: "/images/product_shuanglin/detail/spiral/spec.png",
    advantages: [
      "Tahan terhadap korosi", "Resistensi terhadap benturan keras", "Pemakaian Jangka Panjang",
      "Tahan terhadap cuaca panas dan dingin", "Ringan", "Biaya teknik yang relatif rendah", "Instalasi yang mudah dan cepat", "Tahan lama",
      "Bagian dalam halus sehingga pergesekan aliran rendah", "Non polusi pada lingkungan"
    ],
    detailedSpecs: [
      {
        kelasName: "PR",
        kelasDescription: "Tipe PR Merupakan Pipa tipe lilitan luar , yaitu permukaan pada bagian dalam produk halus sementara pada bagian luar dibentuk dengan kerangka yang diperkuat. Terutama digunakan sebagai pipa drainese di bawah tanah.",
        specImage: "/images/product_shuanglin/detail/spiral/pr.png"
      },
      {
        kelasName: "SQ",
        kelasDescription: "Tipe SQ Merupakan Pipa tipe berliku, yaitu pada permukaan luar halus sementara di tengahnya terdapat kerangka berbentuk khusus yang diperkuat. Terutama digunakan sebagai penampung atau bejana serta penyedot sumur.",
        specImage: "/images/product_shuanglin/detail/spiral/sq.png"
      },
      {
        kelasName: "VW",
        kelasDescription: "Tipe VW Merupakan Pipa tipe berdingding padat, terutama digunakan untuk sambungan pipa seperti tee dan elbow, serta proses lanjutan dari kelengkapan aksesoris pipa.",
        specImage: "/images/product_shuanglin/detail/spiral/vw.png"
      }
    ]  
   },
  { id: 12, 
    name: "Pipa HDPE/PP Single Wall", 
    img: "/images/product_shuanglin/single_wall.png", 
    brand: "Shuanglin",
    desc: "Pipa HDPE/PP Single Wall merupakan pipa yang bagian dinding pipanya hanya terdapat satu lapisan saja dengan dinding dalam dan dinding luar bergelombang.",
    specs: "/images/product_shuanglin/detail/sw/spec.png",
    detailedSpecs: [
      {
        kelasName: "AASHTO",
        kelasDescription: "Spesifikasi Pipa HDPE Single Wall Corrugated AASHTO Standard",
        specImage: "/images/product_shuanglin/detail/sw/aashto.png"
      },
      {
        kelasName: "JIS",
        kelasDescription: "Spesifikasi Pipa HDPE Single Wall Corrugated JIS Standard",
        specImage: "/images/product_shuanglin/detail/sw/jis.png"
      }
    ]
   },

  { id: 13, 
    name: "Low Voltage Cables (Copper)", 
    img: "/images/product_extrana/copper.png", 
    brand: "Extrana",
    detailedSpecs: [
      {
        specImage: "/images/product_extrana/detail/copper/type.png",
      }
    ]
   },
  { id: 14, 
    name: "Low Voltage Cables (Aluminuim)", 
    img: "/images/product_extrana/alumunium.png", 
    brand: "Extrana",
    detailedSpecs: [
      {
        specImage: "/images/product_extrana/detail/alumunium/type.png"
      }
    ]
   },
  { id: 15, 
    name: "Instrument & Control Cables", 
    img: "/images/product_extrana/control.png", 
    brand: "Extrana",
    detailedSpecs: [
      {
        specImage: "/images/product_extrana/detail/icc/type.png"
      }
    ]
   },
  { id: 16, 
    name: "Overhead Conductors", 
    img: "/images/product_extrana/conductors.png", 
    brand: "Extrana",
    detailedSpecs: [
      {
        specImage: "/images/product_extrana/detail/oc/type.png"
      }
    ]
   },
  { id: 17, 
    name: "Fire Resistant Cables", 
    img: "/images/product_extrana/fire_resistant.png", 
    brand: "Extrana",
    detailedSpecs: [
      {
        specImage: "/images/product_extrana/detail/frc/type.png"
      }
    ]
   },
  { id: 18, 
    name: "Medium Voltage Cables", 
    img: "/images/product_extrana/medium-voltage.png", 
    brand: "Extrana",
    detailedSpecs: [
      {
        specImage: "/images/product_extrana/detail/mvc/type.png"
      }
    ]
   },
];