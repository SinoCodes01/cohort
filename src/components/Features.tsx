import { Users, Calendar, MessageCircle, Shield } from "lucide-react";

const features = [
  { icon: <Users className="w-7 h-7" />, title: "Campus Communities", desc: "Join communities for your major, hobbies, and interests. Find your tribe on day one.", color: "#FF6B35" },
  { icon: <Calendar className="w-7 h-7" />, title: "Discover Events", desc: "Never miss a campus event. From study groups to sports games — find what's happening nearby.", color: "#FF8C5A" },
  { icon: <MessageCircle className="w-7 h-7" />, title: "Public Threads", desc: "Ask questions, share tips, and help fellow students in community threads. Knowledge at scale.", color: "#FF6B35" },
  { icon: <Shield className="w-7 h-7" />, title: "Private Messaging", desc: "Connect privately with classmates, find study partners, or plan group projects securely.", color: "#FF8C5A" },
];

export default function Features() {
  return (
    <section id="features" style={{ padding: "6rem 1.5rem", background: "#F9FAFB" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <h2 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, color: "#111827", marginBottom: "1rem" }}>
            Everything you need to <span style={{ color: "#FF6B35" }}>belong</span>
          </h2>
          <p style={{ fontSize: "1.25rem", color: "#6B7280", maxWidth: "42rem", margin: "0 auto" }}>
            Cohort brings your entire campus digital life into one place — no more juggling between apps.
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