import { ImageResponse } from "next/og";

export const alt =
  "Keelio — L’assistant vocal IA qui prend soin de vos appels.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const runtime = "edge";

const bars = [24, 48, 78, 112, 70, 42, 96, 134, 86, 52, 28];

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#091d24",
          color: "#f5f3eb",
          padding: "54px 66px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: -100,
            top: -170,
            width: 560,
            height: 560,
            borderRadius: "50%",
            border: "1px solid #284439",
            display: "flex",
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div
              style={{
                display: "flex",
                width: 44,
                height: 44,
                borderRadius: 14,
                background: "#9dedb1",
                alignItems: "center",
                justifyContent: "center",
                gap: 4,
              }}
            >
              <svg width="29" height="30" viewBox="0 0 32 34" fill="none">
                <path d="M5 5v24M15 5v9l12-9M15 14v6l12 9" stroke="#091d24" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div style={{ display: "flex", fontSize: 40, letterSpacing: -2 }}>
              keelio
            </div>
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 17,
              letterSpacing: 3,
              color: "#a9b8b3",
            }}
          >
            L’ACCUEIL, RÉINVENTÉ.
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 30 }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: 770,
              fontSize: 69,
              fontWeight: 600,
              lineHeight: 1.12,
              letterSpacing: -3,
            }}
          >
            <span>L’assistant vocal IA</span>
            <span>qui prend soin</span>
            <span style={{ color: "#9dedb1" }}>de vos appels.</span>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              height: 220,
              width: 240,
              borderRadius: "50%",
              border: "1px solid #355546",
            }}
          >
            {bars.map((height, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  width: 8,
                  height,
                  borderRadius: 6,
                  background: "#9dedb1",
                  opacity: 0.45 + (index % 4) * 0.16,
                }}
              />
            ))}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            borderTop: "1px solid #2c4145",
            paddingTop: 24,
            color: "#b9c5bf",
            fontSize: 21,
            justifyContent: "space-between",
          }}
        >
          <span>Accueil téléphonique · Rendez-vous · Suivi client</span>
          <span style={{ color: "#9dedb1" }}>À votre écoute.</span>
        </div>
      </div>
    ),
    size,
  );
}
