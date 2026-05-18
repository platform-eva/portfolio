import { projects } from "@/data/projects";
import { Container } from "@/components/ui/Container";
import { ProjectCard } from "@/components/ui/ProjectCard";

export function ProjectsSection() {
  return (
    <section id="projects" className="border-t border-zinc-800 py-32">
      <Container>
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-zinc-500">
          Projects
        </p>

        <h2 className="mb-16 text-4xl font-bold md:text-6xl">
          Ausgewählte Projekte
        </h2>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}