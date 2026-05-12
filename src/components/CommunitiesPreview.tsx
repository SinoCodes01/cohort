const communities = [
  { name: "Computer Science", members: "2,431", tags: ["Tech", "Academic"], color: "#FF6B35", emoji: "💻" },
  { name: "Photography Club", members: "1,108", tags: ["Creative", "Hobby"], color: "#FF8C5A", emoji: "📷" },
  { name: "Soccer League", members: "892", tags: ["Sports", "Rec"], color: "#FFB099", emoji: "⚽" },
  { name: "Debate Society", members: "654", tags: ["Academic", "Social"], color: "#FF6B35", emoji: "🎤" },
  { name: "Music Producers", members: "1,023", tags: ["Creative", "Hobby"], color: "#FF8C5A", emoji: "🎵" },
  { name: "Entrepreneurship", members: "789", tags: ["Career", "Business"], color: "#FFB099", emoji: "🚀" },
];

export default function CommunitiesPreview() {
  return (
    <section id="communities" style={{ padding: "6rem 1.5rem", background: "white" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "3rem", alignItems: "center" }}>
          <div>
            <h2 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, color: "#111827", marginBottom: "1rem", lineHeight: 1.1 }}>
              Find your <span style={{ color: "#FF6B35" }}>people</span>
            </h2>
            <p style={{ fontSize: "1.25rem", color: "#6B7280", marginBottom: "1.5rem" }}>
              From major-specific communities to niche hobby groups — every campus has a home for you.
            </p>
            <p style={{ color: "#4B5563", marginBottom: "2rem", lineHeight: 1.7 }}>
              Whether you're into competitive coding, intramural sports, or making music with friends, there's already a community waiting. Join in seconds, participate at your own pace, and never feel lost on campus again.
            </p>
            <a href="#download" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", fontWeight: 600, color: "#FF6B35", textDecoration: "none" }}>
              Explore communities
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