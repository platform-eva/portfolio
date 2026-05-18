"use client";

import { useState } from "react";
import { navigationItems } from "@/data/navigation";
import { Container } from "@/components/ui/Container";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-zinc-800 bg-black/60 backdrop-blur">
      <Container className="flex items-center justify-between py-4">
        <a href="#" className="text-sm font-semibold tracking-widest text-white">
          EVA.KUHN
        </a>

        <nav className="hidden gap-8 text-sm text-zinc-300 md:flex">
          {navigationItems.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-white">
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="text-sm text-zinc-300 md:hidden"
          onClick={() => setIsOpen((current) => !current)}
          aria-label="Navigation öffnen"
        >
          {isOpen ? "Close" : "Menu"}
        </button>
      </Container>

      {isOpen && (
        <div className="border-t border-zinc-800 bg-black md:hidden">
          <Container className="flex flex-col gap-4 py-6">
            {navigationItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-zinc-300 transition hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </Container>
        </div>
      )}
    </header>
  );
}