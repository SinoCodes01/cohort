export default function MessagingSection() {
  return (
    <section id="messaging" style={{ padding: "6rem 1.5rem", background: "white" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "3rem", alignItems: "center" }}>
          {/* Left: Text */}
          <div>
            <h2 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, color: "#111827", marginBottom: "1rem", lineHeight: 1.1 }}>
              Connect <span style={{ color: "#FF6B35" }}>your way</span>
            </h2>
            <p style={{ fontSize: "1.25rem", color: "#6B7280", marginBottom: "1.5rem" }}>
              Public threads for community discussions. Private messages for personal conversations. Both, seamlessly.
            </p>
            {[
              { title: "Community Threads", desc: "Ask questions, share resources, and build knowledge together in public community forums.", color: "#FF6B35" },
              { title: "Private Messaging", desc: "Connect with classmates, find study partners, and plan projects in secure 1-on-1 chats.", color: "#FF8C5A" },
              { title: "Group Chats", desc: "Organize study groups, event planning, or club committees with group messaging.", color: "#FF6B35" },
            ].map((item) => (
              <div key={item.title} style={{ display: "flex", alignItems: "flex-start", gap: "1rem", marginBottom: "1rem" }}>
                <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: item.color, marginTop: "6px", flexShrink: 0 }} />
                <div>
                  <div style={{ fontWeight: 600, color: "#111827" }}>{item.title}</div>
                  <div style={{ fontSize: "0.875rem", color: "#6B7280" }}>{item.desc}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Chat mockup */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ width: "22rem", borderRadius: "1.5rem", padding: "1rem", boxShadow: "0 10px 40px rgba(0,0,0,0.08)", border: "1px solid #E5E7EB", background: "#F9FAFB" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", paddingBottom: "0.75rem", borderBottom: "1px solid #E5E7EB", marginBottom: "0.75rem" }}>
                <div style={{ width: "2.5rem", height: "2.5rem", borderRadius: "50%", background: "#FF6B35" }} />
                <div>
                  <div style={{ fontWeight: 700, color: "#111827", fontSize: "0.875rem" }}>Alex Chen</div>
                  <div style={{ color: "#6B7280", fontSize: "0.75rem" }}>Online</div>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <div style={{ maxWidth: "16rem", padding: "0.5rem 1rem", borderRadius: "1rem 1rem 4px 1rem", fontSize: "0.875rem", color: "white", background: "#FF6B35" }}>
                    Hey! Are you going to the CS meetup tomorrow?
                  </div>
                </div>
                <div style={{ display: "flex", justifyContent: "flex-start" }}>
                  <div style={{ maxWidth: "16rem", padding: "0.5rem 1rem", borderRadius: "1rem 1rem 1rem 4px", fontSize: "0.875rem", background: "white", border: "1px solid #E5E7EB", color: "#374151" }}>
                    Yes! Should I bring anything?
                  </div>
                </div>
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <div style={{ maxWidth: "16rem", padding: "0.5rem 1rem", borderRadius: "1rem 1rem 4px 1rem", fontSize: "0.875rem", color: "white", background: "#FF6B35" }}>
                    Just your laptop. We're doing a mini hackathon 🏆
                  </div>
                </div>
              </div>
              <div style={{ marginTop: "0.75rem", paddingTop: "0.75rem", borderTop: "1px solid #E5E7EB" }}>
                <div style={{ fontSize: "0.75rem", color: "#6B7280", fontWeight: 500, marginBottom: "0.5rem" }}>Public Thread — CS Majors</div>
                <div style={{ padding: "0.75rem", borderRadius: "0.75rem", background: "#F3F4F6" }}>
                  <div style={{ fontSize: "0.75rem", color: "#6B7280", marginBottom: "0.25rem" }}>@prof_kim · 2h ago</div>
                  <div style={{ fontSize: "0.875rem", color: "#111827", marginBottom: "0.5rem" }}>Does anyone have notes for the algorithms midterm? 🙏</div>
                  <div style={{ display: "flex", gap: "0.75rem", fontSize: "0.75rem", color: "#6B7280" }}>
                    <span>💬 12 replies</span>
                    <span>❤️ 34</span>
                  </div>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginTop: "0.75rem" }}>
                <div style={{ flex: 1, padding: "0.5rem 1rem", borderRadius: "9999px", fontSize: "0.875rem", color: "#9CA3AF", background: "white", border: "1px solid #E5E7EB" }}>
                  Type a message...
                </div>
                <div style={{ width: "2rem", height: "2rem", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "white", background: "#FF6B35" }}>
                  <svg style={{ width: "14px", height: "14px" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}