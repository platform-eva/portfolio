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
    challenge:
      "Die Herausforderung war, moderne Web- und DevOps-Techniken sinnvoll einzubauen, ohne das Projekt unnötig komplex zu machen.",
    solution:
      "Die Website nutzt Next.js, TypeScript, Tailwind CSS, Docker für lokale Entwicklung, GitHub Actions für CI und Vercel für automatisches Deployment.",
    result:
      "Entstanden ist ein performantes Portfolio, das als technische Referenz und Grundlage für spätere Kundenprojekte dient.",
  },
  {
    title: "PAH GmbH Website",
    slug: "pah-gmbh-website",
    description:
      "Professionelle Firmenwebsite mit modernem Design und Fokus auf Performance.",
    technologies: ["React", "SEO", "Responsive Design"],
    details:
      "Geplantes Kundenprojekt für eine schnelle, wartungsarme Firmenwebsite mit klarer Struktur und professioneller Außendarstellung.",
    challenge:
      "Eine kleine Firmenwebsite soll professionell wirken, schnell laden und einfach wartbar bleiben.",
    solution:
      "Geplant ist eine moderne statische Website mit klarer Informationsarchitektur, responsivem Design und sauberem Deployment.",
    result:
      "Ziel ist eine hochwertige Online-Präsenz mit geringen laufenden Kosten und einfacher technischer Pflege.",
  },
  {
    title: "Filmprojekt Website",
    slug: "filmprojekt-website",
    description:
      "Landingpage für Dokumentations- und Filmprojekte mit visueller Präsentation.",
    technologies: ["Next.js", "UI/UX", "Deployment"],
    details:
      "Geplantes Projekt für eine visuelle Landingpage mit Fokus auf Storytelling, Medienpräsentation und einfache Pflege.",
    challenge:
      "Filmische Inhalte brauchen eine emotionale Präsentation, ohne dass die Seite langsam oder überladen wirkt.",
    solution:
      "Geplant ist eine reduzierte Landingpage mit starkem visuellen Fokus, guter Performance und einfacher Erweiterbarkeit.",
    result:
      "Die Website soll Projekte professionell präsentieren und als digitale Visitenkarte für Film- und Dokumentationsarbeiten dienen.",
  },
];