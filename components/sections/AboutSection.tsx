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
              Webentwicklung mit technischem Fundament.
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-zinc-300">
            <p>
              Ich baue moderne Weblösungen mit Fokus auf saubere Struktur,
              Performance und professionelles Deployment.
            </p>

            <p>
              In meiner Weiterbildung vertiefe ich Themen wie Docker, Cloud,
              CI/CD, Monitoring und DevOps. Diese Kenntnisse fließen gezielt in
              mein Portfolio ein — sinnvoll, praxisnah und ohne Overengineering.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}