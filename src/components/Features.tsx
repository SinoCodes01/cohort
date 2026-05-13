import { Users, Calendar, MessageCircle, BarChart3 } from "lucide-react";

const features = [
  { icon: <Users className="w-7 h-7" />, title: "Branded Communities", desc: "Students find their tribe on day one, while universities build official, moderated social networks that drive engagement.", color: "#FF6B35" },
  { icon: <Calendar className="w-7 h-7" />, title: "Campus-Wide Events", desc: "Centralize your entire student life calendar. Students never miss out, and departments see higher turnout for key orientations.", color: "#FF8C5A" },
  { icon: <MessageCircle className="w-7 h-7" />, title: "Peer-to-Peer Support", desc: "Scalable support that reduces administrative burden. Students help each other, moderated by student ambassadors.", color: "#FF6B35" },
  { icon: <BarChart3 className="w-7 h-7" />, title: "Actionable Insights", desc: "Identify engagement trends and student sentiment in real-time. Data-driven tools to proactively support student success.", color: "#FF8C5A" },
];

export default function Features() {
  return (
    <section id="features" style={{ padding: "6rem 1.5rem", background: "#F9FAFB" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <h2 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, color: "#111827", marginBottom: "1rem" }}>
            Built for students, <span style={{ color: "#FF6B35" }}>optimized for success</span>
          </h2>
          <p style={{ fontSize: "1.25rem", color: "#6B7280", maxWidth: "42rem", margin: "0 auto" }}>
            Cohort bridges the gap between digital social life and institutional goals, creating a thriving campus ecosystem.
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1.5rem" }}>
          {features.map((f) => (
            <div key={f.title} style={{ background: "white", borderRadius: "1rem", padding: "1.5rem", boxShadow: "0 1px 3px rgba(0,0,0,0.06)", transition: "box-shadow 0.2s" }}>
              <div style={{ width: "3.5rem", height: "3.5rem", borderRadius: "1rem", display: "flex", alignItems: "center", justifyContent: "center", color: "white", marginBottom: "1.25rem", background: f.color }}>
                {f.icon}
              </div>
              <h3 style={{ fontSize: "1.125rem", fontWeight: 700, color: "#111827", marginBottom: "0.5rem" }}>{f.title}</h3>
              <p style={{ color: "#6B7280", fontSize: "0.875rem", lineHeight: 1.6 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}