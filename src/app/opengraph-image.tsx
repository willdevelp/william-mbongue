import { ImageResponse } from "next/og";

export const alt = "William Mbongue — Développeur fullstack orienté data";
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
          justifyContent: "space-between",
          background: "#1C1917",
          color: "#F5F5F4",
          padding: "64px 72px",
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
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <div
              style={{
                width: 56,
                height: 56,
                borderRadius: 16,
                background: "#F59E0B",
                color: "#1C1917",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 20,
                fontWeight: 700,
              }}
            >
              WM
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: 22, fontWeight: 600 }}>
                william.mbongue
              </span>
              <span
                style={{
                  fontSize: 12,
                  letterSpacing: 4,
                  color: "#A8A29E",
                  marginTop: 4,
                }}
              >
                FULLSTACK · DATA
              </span>
            </div>
          </div>
          <span
            style={{
              border: "1px solid #4B443A",
              borderRadius: 999,
              padding: "10px 18px",
              fontSize: 14,
              color: "#FBBF24",
            }}
          >
            Portfolio · 2026
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ fontSize: 20, color: "#FBBF24", letterSpacing: 2 }}>
            DÉVELOPPEUR FULLSTACK ORIENTÉ DATA
          </span>
          <span
            style={{
              fontSize: 76,
              fontWeight: 700,
              letterSpacing: -3,
              lineHeight: 1.02,
              marginTop: 20,
              maxWidth: 900,
            }}
          >
            Je construis des produits web. Je fais parler les données.
          </span>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid #37322C",
            paddingTop: 24,
            fontSize: 16,
            color: "#A8A29E",
          }}
        >
          <span>Next.js · React · Laravel · PostgreSQL · Python</span>
          <span style={{ color: "#F5F5F4" }}>Cameroun · à distance</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
