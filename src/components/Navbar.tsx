import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const orange = "var(--cohort-orange)";
const gray700 = "var(--cohort-gray-700)";
const gray200 = "var(--cohort-gray-200)";
const white = "var(--cohort-white)";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: scrolled ? "rgba(255,255,255,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        boxShadow: scrolled ? "0 1px 3px rgba(0,0,0,0.08)" : "none",
        transition: "all 0.3s ease",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "1rem 1.5rem", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        {/* Logo */}
        <a href="/" style={{ textDecoration: "none" }}>
          <span style={{ fontSize: "1.5rem", fontWeight: 800, letterSpacing: "-0.5px", color: orange }}>cohort</span>
        </a>

        {/* Desktop Nav */}
        <nav style={{ display: "flex", gap: "2rem", alignItems: "center" }} className="hide-mobile">
          {["Features", "Communities", "Events", "Messaging"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              style={{ color: gray700, fontWeight: 500, textDecoration: "none", transition: "color 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = orange)}
              onMouseLeave={(e) => (e.currentTarget.style.color = gray700)}
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div style={{ display: "flex", gap: "0.75rem" }} className="hide-mobile">
          <a
            href="#download"
            style={{
              padding: "0.625rem 1.25rem",
              borderRadius: "9999px",
              fontWeight: 600,
              border: `2px solid ${orange}`,
              color: orange,
              textDecoration: "none",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = orange;
              e.currentTarget.style.color = white;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = orange;
            }}
          >
            Get the App
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{ background: "none", border: "none", cursor: "pointer", padding: "0.5rem", color: gray700 }}
          aria-label="Toggle menu"
          className="show-mobile"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div style={{ background: white, borderTop: `1px solid ${gray200}`, padding: "1rem 1.5rem", display: "flex", flexDirection: "column", gap: "1rem" }} className="show-mobile">
          {["Features", "Communities", "Events", "Messaging"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} style={{ color: gray700, fontWeight: 500, textDecoration: "none" }} onClick={() => setMobileOpen(false)}>
              {item}
            </a>
          ))}
          <a href="#download" style={{ padding: "0.625rem", borderRadius: "9999px", fontWeight: 600, color: white, textDecoration: "none", textAlign: "center", background: orange }} onClick={() => setMobileOpen(false)}>
            Get the App
          </a>
        </div>
      )}

      <style>{`
        .show-mobile { display: none; }
        .hide-mobile { display: flex; }
        @media (max-width: 768px) {
          .show-mobile { display: flex; }
          .hide-mobile { display: none !important; }
        }
      `}</style>
    </header>
  );
}