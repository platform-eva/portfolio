import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Eva-Maria Kuhn | Webentwicklung, Cloud & DevOps",
  description:
    "Portfolio von Eva-Maria Kuhn mit Fokus auf moderne Webentwicklung, Cloud-Grundlagen, DevOps, Performance und professionelle Deployments.",
  openGraph: {
    title: "Eva-Maria Kuhn | Webentwicklung, Cloud & DevOps",
    description:
      "Modernes Portfolio mit Next.js, TypeScript, Tailwind CSS, Docker und Vercel.",
    url: "https://portfolio-kohl-sigma-ur02alugul.vercel.app/",
    siteName: "Eva-Maria Kuhn Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eva-Maria Kuhn | Webentwicklung, Cloud & DevOps",
    description:
      "Modernes Portfolio mit Fokus auf Webentwicklung, Cloud-Grundlagen und DevOps.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}