import { services } from "@/data/services";
import { Container } from "@/components/ui/Container";
import { ServiceCard } from "@/components/ui/ServiceCard";

export function ServicesSection() {
  return (
    <section id="services" className="border-t border-zinc-800 py-32">
      <Container>
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-zinc-500">
          Services
        </p>

        <h2 className="mb-16 text-4xl font-bold md:text-6xl">
          Lösungen für moderne Webprojekte.
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}