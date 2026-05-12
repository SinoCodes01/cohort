const orange = "var(--cohort-orange)";
const orangeLight = "var(--cohort-orange-light)";
const bgDark = "var(--cohort-bg-dark)";
const white = "var(--cohort-white)";
const gray400 = "var(--cohort-gray-400)";
const gray500 = "var(--cohort-gray-500)";
const gray200 = "var(--cohort-gray-200)";
const gray100 = "var(--cohort-gray-100)";

const communities = [
  { name: "Computer Science", members: "2.4k", color: orange },
  { name: "Photography Club", members: "1.1k", color: orangeLight },
  { name: "Basketball", members: "890", color: "#FFB099" },
];

export default function Hero() {
  return (
    <section style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", background: bgDark, paddingTop: "5rem" }}>
      {/* Background gradient orbs */}
      <div style={{ position: "absolute", top: "25%", left: "25%", width: "24rem", height: "24rem", borderRadius: "50%", opacity: 0.15, filter: "blur(80px)", background: orange }} />
      <div style={{ position: "absolute", bottom: "25%", right: "25%", width: "20rem", height: "20rem", borderRadius: "50%", opacity: 0.08, filter: "blur(80px)", background: orangeLight }} />

      <div style={{ position: "relative", zIndex: 10, maxWidth: "1280px", width: "100%", margin: "0 auto", padding: "2rem 1.5rem", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "3rem", alignItems: "center" }}>
        {/* Left: Text */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.5rem 1rem", borderRadius: "9999px", fontSize: "0.875rem", fontWeight: 500, color: white, background: "rgba(255,107,53,0.15)", border: "1px solid rgba(255,107,53,0.3)" }}>
            <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: orange, animation: "pulse 2s infinite" }} />
            Now live at 500+ campuses
          </div>

          <h1 style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 800, color: white, lineHeight: 1.1, letterSpacing: "-1px" }}>
            Your campus. <span style={{ color: orange }}>Connected.</span>
          </h1>

          <p style={{ fontSize: "1.25rem", color: gray400, lineHeight: 1.6, maxWidth: "28rem" }}>
            Join communities, discover events, and connect with students on campus — all in one place.
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginTop: "0.5rem" }}>
            <a href="#download" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.875rem 1.5rem", borderRadius: "9999px", fontWeight: 600, color: white, background: orange, textDecoration: "none", transition: "transform 0.2s" }}>
              <svg viewBox="0 0 24 24" style={{ width: "20px", height: "20px", fill: "currentColor" }}><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
              App Store
            </a>
            <a href="#download" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.875rem 1.5rem", borderRadius: "9999px", fontWeight: 600, color: white, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", textDecoration: "none", transition: "transform 0.2s" }}>
              <svg viewBox="0 0 24 24" style={{ width: "20px", height: "20px", fill: "currentColor" }}><path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a.996.996 0 0 1 .609-.92zm10.89 10.89l2.316 2.316 2.316-2.316-2.316-2.316-2.316 2.316zM5.864 2.65L6.651 3.5l-.787.787.787.787.787-.787.787.787-.787.786-.787-.786-.787.786-.787-.786.787-.787-.787-.787.787-.786-.787-.787-.787.787zM3.03 5.1l-.787.787.787.787.787-.787-.787-.787zm-.787 11.294l.787.787.787-.787-.787-.787-.787.787zm.787 1.574l-.787.787.787.787.787-.787-.787-.787zm15.027.393l.79.79.79-.79-.79-.79-.79.79z"/></svg>
              Google Play
            </a>
          </div>

          <div style={{ display: "flex", gap: "2rem", paddingTop: "1rem" }}>
            {[{ value: "500+", label: "Campuses" }, { value: "1M+", label: "Students" }, { value: "50K+", label: "Daily Active" }].map((stat) => (
              <div key={stat.label}>
                <div style={{ fontSize: "1.75rem", fontWeight: 800, color: white }}>{stat.value}</div>
                <div style={{ fontSize: "0.875rem", color: gray500 }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Phone mockup */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ position: "relative" }}>
            <div style={{ width: "18rem", borderRadius: "3rem", padding: "0.75rem", background: "#1a1a1a", border: "4px solid #333", boxShadow: "0 25px 50px rgba(0,0,0,0.5)" }}>
              <div style={{ borderRadius: "2.5rem", overflow: "hidden", background: bgDark }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0.75rem 1.5rem", color: white, fontSize: "0.75rem" }}>
                  <span>9:41</span>
                  <div style={{ display: "flex", gap: "3px" }}>
                    <div style={{ width: "16px", height: "8px", borderRadius: "2px", background: "#333" }} />
                    <div style={{ width: "16px", height: "8px", borderRadius: "2px", background: "#333" }} />
                    <div style={{ width: "16px", height: "8px", borderRadius: "2px", background: orange }} />
                  </div>
                </div>
                <div style={{ padding: "0 1rem 1.5rem" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
                    <span style={{ fontWeight: 800, fontSize: "1.125rem", color: white }}>cohort</span>
                    <div style={{ width: "2rem", height: "2rem", borderRadius: "50%", background: orange }} />
                  </div>
                  <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem", fontSize: "0.75rem", color: gray500 }}>
                    <span style={{ color: white, fontWeight: 500 }}>Feed</span>
                    <span>Communities</span>
                    <span>Events</span>
                    <span>Messages</span>
                  </div>
                  {communities.map((c) => (
                    <div key={c.name} style={{ display: "flex", alignItems: "center", gap: "0.75rem", padding: "0.75rem", borderRadius: "0.75rem", marginBottom: "0.5rem", background: "rgba(255,255,255,0.05)" }}>
                      <div style={{ width: "2.5rem", height: "2.5rem", borderRadius: "0.75rem", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, color: white, fontSize: "0.875rem", background: c.color }}>
                        {c.name[0]}
                      </div>
                      <div style={{ flex: 1 }}>
                        <div style={{ color: white, fontSize: "0.875rem", fontWeight: 500 }}>{c.name}</div>
                        <div style={{ color: gray500, fontSize: "0.75rem" }}>{c.members} members</div>
                      </div>
                      <div style={{ width: "1.5rem", height: "1.5rem", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.75rem", fontWeight: 700, background: c.color + "30", color: c.color }}>+</div>
                    </div>
                  ))}
                  <div style={{ padding: "0.75rem", borderRadius: "0.75rem", background: "rgba(255,107,53,0.1)", border: `1px solid rgba(255,107,53,0.2)` }}>
                    <div style={{ color: orange, fontSize: "0.75rem", fontWeight: 600, marginBottom: "0.25rem" }}>UPCOMING</div>
                    <div style={{ color: white, fontSize: "0.875rem", fontWeight: 500 }}>Campus Career Fair 2026</div>
                    <div style={{ color: gray500, fontSize: "0.75rem" }}>Tomorrow · Student Center</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`@keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }`}</style>
    </section>
  );
}