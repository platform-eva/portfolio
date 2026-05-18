import Link from "next/link";
import { Project } from "@/types/project";
import { Badge } from "@/components/ui/Badge";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.slug}`} className="group block">
      <article className="h-full rounded-3xl border border-zinc-800 bg-zinc-950 p-8 transition duration-300 group-hover:-translate-y-2 group-hover:border-zinc-600">
        <div className="mb-6 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>

        <h3 className="mb-4 text-2xl font-semibold text-white">
          {project.title}
        </h3>

        <p className="leading-7 text-zinc-400">{project.description}</p>

        <p className="mt-6 text-sm text-zinc-500 group-hover:text-white">
          Details ansehen →
        </p>
      </article>
    </Link>
  );
}