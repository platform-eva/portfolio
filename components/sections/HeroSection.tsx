"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_40%)]" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center"
      >
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-zinc-500">
          Fullstack • Cloud • DevOps
        </p>

        <h1 className="mb-6 bg-gradient-to-r from-white to-zinc-500 bg-clip-text text-5xl font-bold text-transparent md:text-7xl">
          Eva-Maria Kuhn
        </h1>

        <p className="mx-auto mb-10 max-w-2xl text-lg leading-8 text-zinc-300">
          Moderne Weblösungen mit Fokus auf Performance, sauberer Architektur
          und professionellem Deployment.
        </p>

        <div className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-24">
          <Button href="#projects">Projekte ansehen</Button>
          <Button href="#contact" variant="secondary">
            Kontakt
          </Button>
        </div>
      </motion.div>
    </section>
  );
}