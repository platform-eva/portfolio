"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_40%)]" />

      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 mx-auto max-w-5xl text-center"
      >
        <p className="mb-4 text-xs uppercase tracking-[0.3em] text-zinc-500 md:text-sm">
          Fullstack • Cloud-native • Platform Engineering
        </p>

        <h1 className="mb-6 bg-gradient-to-r from-white to-zinc-500 bg-clip-text text-5xl font-bold leading-tight text-transparent sm:text-6xl md:text-7xl lg:text-8xl">
          Eva-Maria Kuhn
        </h1>

        <p className="mx-auto mb-10 max-w-3xl text-base leading-8 text-zinc-300 md:text-xl">
          Moderne Web- und Plattformlösungen mit Fokus auf
          Cloud-native Technologien, Kubernetes, DevOps und
          professionelle Deployments.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href="#projects">Projekte ansehen</Button>

          <Button href="#contact" variant="secondary">
            Kontakt
          </Button>
        </div>
      </motion.div>
    </section>
  );
}