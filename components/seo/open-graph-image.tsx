import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "edge";

// Image metadata
export const alt =
  "MarcoSoluciones - Servicios de Mantenimiento y Construcción";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

// Image generation
export default async function Image() {
  // Font
  const interSemiBold = fetch(
    new URL("./Inter-SemiBold.ttf", import.meta.url)
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 128,
          background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom right, rgba(255, 122, 34, 0.1), rgba(255, 255, 255, 1))",
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 40,
          }}
        >
          <svg
            width="80"
            height="80"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#FF7A22"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
          </svg>
          <div
            style={{
              fontSize: 60,
              fontWeight: 700,
              marginLeft: 20,
              color: "#333",
            }}
          >
            MarcoSoluciones
          </div>
        </div>
        <div
          style={{
            fontSize: 36,
            fontWeight: 600,
            color: "#666",
            maxWidth: "80%",
            textAlign: "center",
          }}
        >
          Servicios Profesionales de Mantenimiento y Construcción
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 40,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <div
            style={{
              fontSize: 24,
              color: "#FF7A22",
              fontWeight: 600,
              padding: "8px 24px",
              border: "2px solid #FF7A22",
              borderRadius: 8,
            }}
          >
            www.marcosoluciones.es
          </div>
        </div>
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported opengraph-image
      // size config to also set the ImageResponse's width and height.
      ...size,
      fonts: [
        {
          name: "Inter",
          data: await interSemiBold,
          style: "normal",
          weight: 600,
        },
      ],
    }
  );
}
