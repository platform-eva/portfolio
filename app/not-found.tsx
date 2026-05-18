import Link from "next/link";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-black py-24 text-white">
      <Container>
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-zinc-500">
          404
        </p>

        <h1 className="mb-6 text-5xl font-bold md:text-7xl">
          Seite nicht gefunden.
        </h1>

        <p className="mb-10 max-w-2xl text-lg leading-8 text-zinc-300">
          Die gesuchte Seite existiert nicht oder wurde verschoben.
        </p>

        <Link
          href="/"
          className="inline-flex rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-zinc-200"
        >
          Zur Startseite
        </Link>
      </Container>
    </main>
  );
}