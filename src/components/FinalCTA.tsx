export default function FinalCTA() {
  return (
    <section id="download" style={{ padding: "6rem 1.5rem", background: "#0D0D0F" }}>
      <div style={{ maxWidth: "48rem", margin: "0 auto", textAlign: "center" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.5rem 1rem", borderRadius: "9999px", marginBottom: "1.5rem", fontSize: "0.875rem", fontWeight: 500, color: "white", background: "rgba(255,107,53,0.15)", border: "1px solid rgba(255,107,53,0.3)" }}>
          <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#FF6B35", animation: "pulse 2s infinite" }} />
          Free to download — forever
        </div>
        <h2 style={{ fontSize: "clamp(2rem, 6vw, 4rem)", fontWeight: 800, color: "white", marginBottom: "1.5rem", lineHeight: 1.05 }}>
          Your campus community is <span style={{ color: "#FF6B35" }}>waiting</span>
        </h2>
        <p style={{ fontSize: "1.25rem", color: "#9CA3AF", marginBottom: "2.5rem", maxWidth: "36rem", margin: "0 auto 2.5rem" }}>
          Join over a million students already using Cohort to connect, discover, and belong.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1rem", marginBottom: "3rem" }}>
          <a href="#" style={{ display: "inline-flex", alignItems: "center", gap: "0.75rem", padding: "1rem 2rem", borderRadius: "9999px", fontWeight: 700, color: "white", background: "#FF6B35", textDecoration: "none" }}>
            <svg viewBox="0 0 24 24" style={{ width: "24px", height: "24px", fill: "currentColor" }}><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
            Download on App Store
          </a>
          <a href="#" style={{ display: "inline-flex", alignItems: "center", gap: "0.75rem", padding: "1rem 2rem", borderRadius: "9999px", fontWeight: 700, color: "white", background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", textDecoration: "none" }}>
            <svg viewBox="0 0 24 24" style={{ width: "24px", height: "24px", fill: "currentColor" }}><path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a.996.996 0 0 1 .609-.92zm10.89 10.89l2.316 2.316 2.316-2.316-2.316-2.316-2.316 2.316zM5.864 2.65L6.651 3.5l-.787.787.787.787.787-.787.787.787-.787.786-.787-.786-.787.786-.787-.786.787-.787-.787-.787.787-.786-.787-.787-.787.787zM3.03 5.1l-.787.787.787.787.787-.787-.787-.787zm-.787 11.294l.787.787.787-.787-.787-.787-.787.787zm.787 1.574l-.787.787.787.787.787-.787-.787-.787zm15.027.393l.79.79.79-.79-.79-.79-.79.79z"/></svg>
            Get on Google Play
          </a>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "2rem" }}>
          {[{ value: "500+", label: "Campuses" }, { value: "1M+", label: "Students" }, { value: "50K+", label: "Daily Active" }, { value: "4.8★", label: "App Rating" }].map((s) => (
            <div key={s.label} style={{ textAlign: "center" }}>
              <div style={{ fontSize: "1.5rem", fontWeight: 800, color: "white" }}>{s.value}</div>
              <div style={{ fontSize: "0.875rem", color: "#6B7280" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
      <style>{`@keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }`}</style>
    </section>
  );
}