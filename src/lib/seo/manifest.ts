import site from "@/config/site";
import branding from "@/config/branding";

export interface ManifestIcon {
  src: string;
  sizes: string;
  type: string;
}

export interface Manifest {
  name: string;
  short_name: string;
  description: string;
  start_url: string;
  display: "standalone";
  background_color: string;
  theme_color: string;
  lang: string;
  icons: ManifestIcon[];
} 

export function generateManifest(): string {
  const manifest: Manifest = {
    name: site.name,
    short_name: site.name,
    description: site.description,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: branding.themeColor,
    lang: site.language,
    icons: [
      {
        src: branding.favicon,
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };

  return JSON.stringify(manifest, null, 2);
}

export default generateManifest;