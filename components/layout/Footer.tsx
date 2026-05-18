import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="border-t border-zinc-800 py-10">
      <Container className="flex flex-col gap-4 text-sm text-zinc-500 md:flex-row md:items-center md:justify-between">
        <p>© 2026 Eva-Maria Kuhn</p>

        <div className="flex gap-6">
          <a href="#" className="transition hover:text-white">
            GitHub
          </a>

          <a href="#" className="transition hover:text-white">
            LinkedIn
          </a>
        </div>
      </Container>
    </footer>
  );
}