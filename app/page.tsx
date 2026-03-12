import Dashboard from './Dashboard/page';

async function getHomePageData() {
  try {
    // Mengganti domain sesuai permintaanmu
    const res = await fetch('https://lautanrejeki.co.id/wp-json/wp/v2/posts', {
      next: { revalidate: 60 }
    });
    
    if (!res.ok) return null;
    const data = await res.json();
    
    // Mengambil post pertama (indeks 0) dari daftar posts
    return data[0] || null;
  } catch (error) {
    console.error("Fetch error dari domain baru:", error);
    return null;
  }
}

export default async function Home() {
  const pageData = await getHomePageData();

  return (
    <main className="main-layout" style={{ fontFamily: 'Montserrat, sans-serif' }}>
      <Dashboard data={pageData} />
    </main>
  );
} 