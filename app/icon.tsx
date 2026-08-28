import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#14171a",
          borderRadius: 8,
        }}
      >
        <div
          style={{
            fontSize: 34,
            fontWeight: 700,
            color: "#c9a227",
            fontFamily: "sans-serif",
          }}
        >
          SE
        </div>
      </div>
    ),
    { ...size }
  );
}
