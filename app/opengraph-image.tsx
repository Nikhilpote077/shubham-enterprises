import { ImageResponse } from "next/og";
import { company } from "@/data/company";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "#14171a",
          color: "#f2f2ef",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", gap: 10, marginBottom: 28 }}>
          {["#c9a227", "#8fa6b8", "#2b2e31", "#5c5a3d", "#b9bec2"].map((hex) => (
            <div key={hex} style={{ width: 28, height: 28, background: hex, borderRadius: 4 }} />
          ))}
        </div>
        <div style={{ fontSize: 26, textTransform: "uppercase", letterSpacing: 4, color: "#c9a227" }}>
          Metal Finishing &middot; Belagavi, Karnataka
        </div>
        <div style={{ fontSize: 72, fontWeight: 700, marginTop: 20, lineHeight: 1.05 }}>
          {company.name}
        </div>
        <div style={{ fontSize: 30, marginTop: 24, color: "#8b98a3", maxWidth: 900 }}>
          {company.tagline}
        </div>
      </div>
    ),
    { ...size }
  );
}
