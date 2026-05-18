import { Container } from "@/components/ui/Container";

export function ContactSection() {
  return (
    <section id="contact" className="border-t border-zinc-800 py-24">
      <Container>
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-zinc-500">
          Contact
        </p>

        <h2 className="mb-6 text-3xl font-bold md:text-5xl">
          Lass uns ein modernes Webprojekt starten.
        </h2>

        <a
          href="mailto:eva.kuhn@online.de"
          className="inline-flex rounded-full border border-zinc-700 px-6 py-3 text-sm text-zinc-200 transition hover:border-white hover:text-white"
        >
          Kontakt aufnehmen
        </a>
      </Container>
    </section>
  );
}