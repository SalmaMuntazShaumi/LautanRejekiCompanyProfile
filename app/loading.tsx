export default function Loading() {
  return (
    <main className="page-loading" aria-label="Memuat halaman">
      <div className="loading-shell">
        <div className="loading-hero skeleton" />
        <div className="loading-content">
          <div className="loading-line skeleton" />
          <div className="loading-line short skeleton" />
          <div className="loading-grid">
            <div className="loading-card skeleton" />
            <div className="loading-card skeleton" />
            <div className="loading-card skeleton" />
          </div>
        </div>
      </div>
    </main>
  );
}
