"use client";

import { motion } from "framer-motion";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

const whatsappLink =
  "https://wa.me/19145080709?text=Hi%20Arcadio!%20I%27m%20interested%20in%20Precision%20QA%20Labs%20services.";

export default function Hero() {
  return (
    <section className="relative flex overflow-hidden pt-24 pb-20 md:pt-36 md:pb-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#2563eb22,transparent_40%)]" />

      <div className="absolute left-1/2 top-0 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl md:h-[500px] md:w-[500px]" />

      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative w-full"
      >
        <Container className="flex flex-col items-center pt-6 text-center md:pt-28">
          <div className="mb-8 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-zinc-300 backdrop-blur-sm">
            Precision QA Labs
          </div>

          <h1 className="max-w-6xl text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-7xl md:leading-[1.1]">
            Modern QA Automation
            <br />
            & Quality Engineering
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-zinc-400 md:text-xl">
            Helping software teams build scalable, reliable, and high-quality
            applications through modern automation and quality engineering.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row md:mt-12">
            <Button>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a Consultation
              </a>
            </Button>

            <Button variant="secondary">
              <a href="#services">View Services</a>
            </Button>
          </div>

          <div className="mt-8 grid w-full max-w-5xl grid-cols-1 gap-6 md:mt-16 md:grid-cols-3">
            {[
              ["Enterprise QA Experience", "Web & Mobile"],
              ["Modern Automation", "AI-Assisted QA"],
              ["Cross-Industry Expertise", "Enterprise Platforms"],
            ].map(([label, title], index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.25 + index * 0.12,
                  ease: "easeOut",
                }}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
              >
                <p className="text-sm text-zinc-400">{label}</p>

                <h3 className="mt-2 text-2xl font-semibold text-white">
                  {title}
                </h3>
              </motion.div>
            ))}
          </div>
        </Container>
      </motion.div>
    </section>
  );
}