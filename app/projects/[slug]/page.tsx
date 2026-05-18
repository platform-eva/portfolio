import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((project) => project.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black py-24 text-white">
      <Container>
        <Link
          href="/#projects"
          className="mb-10 inline-block text-sm text-zinc-400 hover:text-white"
        >
          ← Zurück zu Projekten
        </Link>

        <div className="mb-8 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>

        <h1 className="mb-6 text-5xl font-bold md:text-7xl">
          {project.title}
        </h1>

        <p className="mb-12 max-w-3xl text-xl leading-9 text-zinc-300">
          {project.description}
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          <article className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8 md:col-span-2">
            <p className="leading-8 text-zinc-300">{project.details}</p>
          </article>

          <article className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8">
            <h2 className="mb-4 text-2xl font-semibold">Herausforderung</h2>
            <p className="leading-8 text-zinc-400">{project.challenge}</p>
          </article>

          <article className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8">
            <h2 className="mb-4 text-2xl font-semibold">Lösung</h2>
            <p className="leading-8 text-zinc-400">{project.solution}</p>
          </article>

          <article className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8 md:col-span-2">
            <h2 className="mb-4 text-2xl font-semibold">Ergebnis</h2>
            <p className="leading-8 text-zinc-400">{project.result}</p>
          </article>
        </div>
      </Container>
    </main>
  );
}