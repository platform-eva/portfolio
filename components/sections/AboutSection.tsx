import { Container } from "@/components/ui/Container";

export function AboutSection() {
  return (
    <section id="about" className="border-t border-zinc-800 py-32">
      <Container>
        <div className="grid gap-12 md:grid-cols-2 md:items-start">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-zinc-500">
              About
            </p>

            <h2 className="text-4xl font-bold md:text-6xl">
              Moderne Plattform- und Webentwicklung.
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-zinc-300">
            <p>
              Ich entwickle moderne Webanwendungen und
              Cloud-native Plattformlösungen mit Fokus auf
              Performance, Wartbarkeit und professionelle
              Infrastruktur.
            </p>

            <p>
              Mein Schwerpunkt liegt auf modernen Frontends,
              containerisierten Deployments, Kubernetes,
              CI/CD-Workflows und technischen Dashboards.
            </p>

            <p>
              Dabei kombiniere ich langjährige IT-Erfahrung
              mit modernen Technologien wie Next.js,
              TypeScript, Docker, FastAPI und Kubernetes.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}