import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    title: "Portfolio Website",
    slug: "portfolio-website",
    description:
      "Modernes Portfolio mit Next.js, Tailwind CSS, Framer Motion und Docker.",
    technologies: ["Next.js", "TypeScript", "Tailwind", "Docker", "Vercel"],
    details:
      "Dieses Projekt zeigt eine moderne Portfolio-Website mit komponentenbasierter Architektur, responsivem Design, Docker-Setup, GitHub Actions und Deployment über Vercel.",
  },
  {
    title: "PAH GmbH Website",
    slug: "pah-gmbh-website",
    description:
      "Professionelle Firmenwebsite mit modernem Design und Fokus auf Performance.",
    technologies: ["React", "SEO", "Responsive Design"],
    details:
      "Geplantes Kundenprojekt für eine schnelle, wartungsarme Firmenwebsite mit klarer Struktur und professioneller Außendarstellung.",
  },
  {
    title: "Filmprojekt Website",
    slug: "filmprojekt-website",
    description:
      "Landingpage für Dokumentations- und Filmprojekte mit visueller Präsentation.",
    technologies: ["Next.js", "UI/UX", "Deployment"],
    details:
      "Geplantes Projekt für eine visuelle Landingpage mit Fokus auf Storytelling, Medienpräsentation und einfache Pflege.",
  },
];