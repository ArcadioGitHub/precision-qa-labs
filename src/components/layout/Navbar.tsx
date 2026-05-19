"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Industries", href: "#industries" },
  { label: "Tech Stack", href: "#techstack" },
];

const whatsappLink =
  "https://wa.me/19145080709?text=Hi%20Arcadio!%20I%27m%20interested%20in%20Precision%20QA%20Labs%20services.";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/30 backdrop-blur-xl">
      <Container className="flex items-center justify-between py-4">
        <a href="#" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#0B1220] p-2 shadow-lg shadow-blue-500/10">
            <img
              src="/logo.png"
              alt="Precision QA Labs Logo"
              className="h-7 w-7 object-contain"
            />
          </div>

          <div>
            <p className="text-sm font-semibold tracking-wide text-white">
              Precision QA Labs
            </p>

            <p className="text-xs text-zinc-400">Modern QA Automation</p>
          </div>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-zinc-300 transition hover:text-white"
            >
              {link.label}
            </a>
          ))}

          <Button className="px-5 py-2.5 text-sm">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              Book a Consultation
            </a>
          </Button>
        </div>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
          className="rounded-xl border border-white/10 bg-white/5 p-2 text-white transition hover:bg-white/10 md:hidden"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </Container>

      {isOpen && (
        <div className="border-t border-white/10 bg-black/90 md:hidden">
          <Container className="flex flex-col gap-3 py-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-xl px-4 py-3 text-sm text-zinc-300 transition hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </a>
            ))}

            <Button className="mt-2 w-full py-3 text-sm">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                Book a Consultation
              </a>
            </Button>
          </Container>
        </div>
      )}
    </nav>
  );
}