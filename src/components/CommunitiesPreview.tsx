const communities = [
  { name: "Class of 2028 (Official)", members: "3,241", tags: ["Official", "Orientation"], color: "#FF6B35", emoji: "🎓" },
  { name: "Photography Club", members: "1,108", tags: ["Creative", "Hobby"], color: "#FF8C5A", emoji: "📷" },
  { name: "Int'l Students Hub", members: "892", tags: ["Support", "Global"], color: "#FFB099", emoji: "🌍" },
  { name: "CS & Engineering", members: "2,431", tags: ["Academic", "Tech"], color: "#FF6B35", emoji: "💻" },
  { name: "Campus Housing", members: "1,023", tags: ["Living", "Official"], color: "#FF8C5A", emoji: "🏠" },
  { name: "Soccer League", members: "789", tags: ["Sports", "Rec"], color: "#FFB099", emoji: "⚽" },
];

export default function CommunitiesPreview() {
  return (
    <section id="communities" style={{ padding: "6rem 1.5rem", background: "white" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "3rem", alignItems: "center" }}>
          <div>
            <h2 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, color: "#111827", marginBottom: "1rem", lineHeight: 1.1 }}>
              Official channels. <span style={{ color: "#FF6B35" }}>Organic growth.</span>
            </h2>
            <p style={{ fontSize: "1.25rem", color: "#6B7280", marginBottom: "1.5rem" }}>
              From official department hubs to niche hobby groups — Cohort brings your entire campus ecosystem into one place.
            </p>
            <p style={{ color: "#4B5563", marginBottom: "2rem", lineHeight: 1.7 }}>
              Universities can launch official, moderated communities to guide students from day one. Meanwhile, students have the freedom to spark their own organic clubs, interest groups, and study circles, fostering a true sense of belonging.
            </p>
            <a href="#download" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", fontWeight: 600, color: "#FF6B35", textDecoration: "none" }}>
              Explore the ecosystem
              <svg style={{ width: "16px", height: "16px" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1rem" }}>
            {communities.map((c) => (
              <div key={c.name} style={{ padding: "1rem", borderRadius: "0.75rem", border: "1px solid #E5E7EB", cursor: "pointer", transition: "border-color 0.2s" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
                  <div style={{ width: "3rem", height: "3rem", borderRadius: "0.75rem", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5rem", background: c.color + "20" }}>
                    {c.emoji}
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, color: "#111827", fontSize: "0.875rem" }}>{c.name}</div>
                    <div style={{ color: "#6B7280", fontSize: "0.75rem" }}>{c.members} members</div>
                  </div>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.25rem" }}>
                  {c.tags.map((tag) => (
                    <span key={tag} style={{ padding: "0.25rem 0.5rem", borderRadius: "9999px", fontSize: "0.75rem", fontWeight: 500, background: c.color + "15", color: c.color }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}