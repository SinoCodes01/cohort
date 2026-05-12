const events = [
  { title: "Campus Career Fair 2026", date: "Tomorrow", time: "10:00 AM", location: "Student Center", attendees: 342, color: "#FF6B35", category: "Career" },
  { title: "Hackathon Kickoff", date: "This Friday", time: "6:00 PM", location: "Engineering Hall", attendees: 128, color: "#FF8C5A", category: "Tech" },
  { title: "Basketball vs State Univ", date: "Saturday", time: "7:00 PM", location: "Campus Gym", attendees: 891, color: "#FF6B35", category: "Sports" },
];

export default function EventsSection() {
  return (
    <section id="events" style={{ padding: "6rem 1.5rem", background: "#0D0D0F" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <h2 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, color: "white", marginBottom: "1rem" }}>
            Never miss a <span style={{ color: "#FF6B35" }}>beat</span>
          </h2>
          <p style={{ fontSize: "1.25rem", color: "#9CA3AF", maxWidth: "42rem", margin: "0 auto" }}>
            Campus events, parties, study sessions, games — all in one feed. Say goodbye to FOMO.
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
          {events.map((e) => (
            <div key={e.title} style={{ borderRadius: "1rem", padding: "1.5rem", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", transition: "transform 0.2s", cursor: "pointer" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
                <span style={{ padding: "0.25rem 0.75rem", borderRadius: "9999px", fontSize: "0.75rem", fontWeight: 600, background: e.color + "20", color: e.color }}>{e.category}</span>
                <span style={{ color: "#6B7280", fontSize: "0.75rem" }}>{e.date}</span>
              </div>
              <h3 style={{ color: "white", fontWeight: 700, fontSize: "1.125rem", marginBottom: "0.75rem", lineHeight: 1.3 }}>{e.title}</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.35rem", color: "#9CA3AF", fontSize: "0.875rem" }}>
                {[
                  { icon: "⏰", text: e.time },
                  { icon: "📍", text: e.location },
                  { icon: "👥", text: `${e.attendees} going` },
                ].map((item) => (
                  <div key={item.text} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <span>{item.icon}</span> {item.text}
                  </div>
                ))}
              </div>
              <button style={{ width: "100%", marginTop: "1rem", padding: "0.625rem", borderRadius: "0.75rem", fontWeight: 600, color: "white", background: e.color, border: "none", cursor: "pointer" }}>
                RSVP
              </button>
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
          <a href="#download" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.875rem 1.5rem", borderRadius: "9999px", fontWeight: 600, color: "white", background: "#FF6B35", textDecoration: "none" }}>
            Explore all events
          </a>
        </div>
      </div>
    </section>
  );
}