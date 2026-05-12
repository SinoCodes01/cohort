const testimonials = [
  { name: "Maya Johnson", school: "UC Berkeley", year: "Junior", quote: "I found my entire social circle on Cohort. I went from knowing no one to having a crew for every study session and weekend hangout.", avatar: "MJ", color: "#FF6B35" },
  { name: "David Park", school: "NYU", year: "Sophomore", quote: "The career fair events feature helped me land an internship. I had no idea half the companies were coming to campus until I saw it on Cohort.", avatar: "DP", color: "#FF8C5A" },
  { name: "Sarah Williams", school: "University of Michigan", year: "Senior", quote: "The photography club community is how I met my best friends. We go on shoots every weekend. Cohort literally changed my college experience.", avatar: "SW", color: "#FFB099" },
];

export default function Testimonials() {
  return (
    <section style={{ padding: "6rem 1.5rem", background: "#F9FAFB" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <h2 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, color: "#111827", marginBottom: "1rem" }}>
            Students are <span style={{ color: "#FF6B35" }}>thriving</span>
          </h2>
          <p style={{ fontSize: "1.25rem", color: "#6B7280", maxWidth: "42rem", margin: "0 auto" }}>
            Real stories from real students who found their community on Cohort.
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
          {testimonials.map((t) => (
            <div key={t.name} style={{ background: "white", borderRadius: "1rem", padding: "1.5rem", boxShadow: "0 1px 3px rgba(0,0,0,0.06)" }}>
              <div style={{ display: "flex", gap: "2px", marginBottom: "1rem" }}>
                {[1,2,3,4,5].map((i) => (
                  <svg key={i} style={{ width: "16px", height: "16px" }} fill="#FBBF24" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                ))}
              </div>
              <p style={{ color: "#4B5563", fontSize: "0.875rem", lineHeight: 1.7, marginBottom: "1.5rem", fontStyle: "italic" }}>
                "{t.quote}"
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <div style={{ width: "2.5rem", height: "2.5rem", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: 700, fontSize: "0.875rem", background: t.color }}>
                  {t.avatar}
                </div>
                <div>
                  <div style={{ fontWeight: 600, color: "#111827", fontSize: "0.875rem" }}>{t.name}</div>
                  <div style={{ color: "#6B7280", fontSize: "0.75rem" }}>{t.school} · {t.year}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}