import { skills } from "@/data/skills";
import { Container } from "@/components/ui/Container";
import { SkillCard } from "@/components/ui/SkillCard";

export function SkillsSection() {
  return (
    <section id="skills" className="border-t border-zinc-800 py-32">
      <Container>
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-zinc-500">
          Skills
        </p>

        <h2 className="mb-10 text-4xl font-bold md:text-6xl">
          Technologien, die ich aktuell vertiefe.
        </h2>

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {skills.map((skill) => (
            <SkillCard key={skill} skill={skill} />
          ))}
        </div>
      </Container>
    </section>
  );
}