export default function FinalCTA() {
  return (
    <section id="download" style={{ padding: "6rem 1.5rem", background: "#0D0D0F" }}>
      <div style={{ maxWidth: "48rem", margin: "0 auto", textAlign: "center" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.5rem 1rem", borderRadius: "9999px", marginBottom: "1.5rem", fontSize: "0.875rem", fontWeight: 500, color: "white", background: "rgba(255,107,53,0.15)", border: "1px solid rgba(255,107,53,0.3)" }}>
          <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#FF6B35", animation: "pulse 2s infinite" }} />
          Empowering the next generation of students
        </div>
        <h2 style={{ fontSize: "clamp(2rem, 6vw, 4rem)", fontWeight: 800, color: "white", marginBottom: "1.5rem", lineHeight: 1.05 }}>
          Ready to transform your <span style={{ color: "#FF6B35" }}>student experience?</span>
        </h2>
        <p style={{ fontSize: "1.25rem", color: "#9CA3AF", marginBottom: "2.5rem", maxWidth: "36rem", margin: "0 auto 2.5rem" }}>
          Whether you're a student looking for community or a university aiming to boost retention, Cohort is your partner in campus success.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1rem", marginBottom: "3rem" }}>
          <a href="#download" style={{ display: "inline-flex", alignItems: "center", gap: "0.75rem", padding: "1rem 2rem", borderRadius: "9999px", fontWeight: 700, color: "white", background: "#FF6B35", textDecoration: "none" }}>
            Get Started as a Student
          </a>
          <a href="#demo" style={{ display: "inline-flex", alignItems: "center", gap: "0.75rem", padding: "1rem 2rem", borderRadius: "9999px", fontWeight: 700, color: "white", background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", textDecoration: "none" }}>
            Request Institutional Demo
          </a>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "2rem" }}>
          {[{ value: "500+", label: "Partnerships" }, { value: "92%", label: "Satisfaction" }, { value: "15%", label: "Higher Retention" }, { value: "4.8★", label: "App Store" }].map((s) => (
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
