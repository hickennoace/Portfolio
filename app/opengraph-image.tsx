import { ImageResponse } from "next/og";

// Edge runtime: @vercel/og inlines its default font here instead of reading it
// from disk (the Node build trips over fileURLToPath on Windows during prerender).
export const runtime = "edge";

export const alt = "Daniel Shaulov — Data & Junior Analyst";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Social share card (LinkedIn / Slack / X / WhatsApp). Generated at build time
 * with next/og using the default bundled font — no network fetch required.
 */
export default function OpengraphImage() {
  const stats: [string, string][] = [
    ["GPA 90", "Economics & Management"],
    ["0.907", "ROC-AUC churn model"],
    ["~23M", "transactions modeled"],
  ];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0a0a0a",
          backgroundImage:
            "radial-gradient(900px circle at 82% -12%, rgba(37,99,235,0.38), transparent 60%), radial-gradient(700px circle at -5% 112%, rgba(79,70,229,0.26), transparent 55%)",
          padding: "72px 80px",
          color: "#f8fafc",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 84,
              height: 84,
              borderRadius: 20,
              backgroundImage: "linear-gradient(135deg, #3b82f6, #1d4ed8)",
              fontSize: 40,
              fontWeight: 700,
              color: "#ffffff",
            }}
          >
            DS
          </div>
          <div style={{ display: "flex", fontSize: 22, color: "#93c5fd" }}>
            danielshaulov.vercel.app
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 98,
              fontWeight: 800,
              letterSpacing: "-3px",
              lineHeight: 1,
            }}
          >
            Daniel Shaulov
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 20,
              fontSize: 42,
              color: "#cbd5e1",
              fontWeight: 600,
            }}
          >
            Data &amp; Junior Analyst
          </div>
        </div>

        <div style={{ display: "flex", gap: 60 }}>
          {stats.map(([value, label]) => (
            <div key={value} style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", fontSize: 44, fontWeight: 700, color: "#60a5fa" }}>
                {value}
              </div>
              <div style={{ display: "flex", marginTop: 6, fontSize: 21, color: "#94a3b8" }}>
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
