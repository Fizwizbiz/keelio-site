import OpenGraphImage from "./opengraph-image";

export const alt =
  "Keelio — L’assistant vocal IA qui prend soin de vos appels.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const runtime = "edge";

export default function TwitterImage() {
  return OpenGraphImage();
}
