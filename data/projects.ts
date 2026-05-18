import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    title: "Cost Detective",
    slug: "cost-detective",
    description:
      "Cloud-native Kubernetes Efficiency Dashboard zur Analyse von Resource Waste, Autoscaling-Verhalten und Infrastruktur-Effizienz.",

    technologies: [
      "Next.js",
      "FastAPI",
      "Docker",
      "Kubernetes",
      "Helm",
      "PostgreSQL",
      "GitHub Actions",
    ],

    details:
      "Cost Detective ist ein Kubernetes Efficiency Dashboard für Platform- und DevOps-Teams. Die Anwendung visualisiert Ressourcennutzung, Autoscaling-Verhalten und potenzielle Infrastrukturverschwendung innerhalb von Kubernetes-Clustern.",

    challenge:
      "Kubernetes-Metriken und Infrastrukturkosten sind oft schwer sichtbar und über verschiedene Systeme verteilt.",

    solution:
      "Die Plattform kombiniert ein modernes Dashboard mit FastAPI, PostgreSQL, Docker, Kubernetes und CI/CD-Workflows zur Analyse von Workload- und Ressourcenverhalten.",

    result:
      "Entstanden ist ein modernes Cloud-native Projekt mit Fokus auf Observability, Platform Engineering und Infrastruktur-Effizienz.",
  },

  {
    title: "Portfolio Platform",
    slug: "portfolio-platform",
    description:
      "Modernes Portfolio mit Next.js, Docker, CI/CD und professionellem Deployment.",

    technologies: [
      "Next.js",
      "TypeScript",
      "Docker",
      "GitHub Actions",
      "Vercel",
    ],

    details:
      "Persönliche Plattform zur Präsentation moderner Web-, Cloud- und Plattformprojekte.",

    challenge:
      "Das Ziel war eine moderne, performante und technisch saubere Plattform mit professioneller Infrastruktur.",

    solution:
      "Die Anwendung nutzt moderne Frontend-Technologien, Docker-basierte Entwicklung und automatisierte CI/CD-Workflows.",

    result:
      "Die Plattform dient als technische Referenz für moderne Cloud-native und Web-Projekte.",
  },
];