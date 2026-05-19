import Container from "@/components/ui/Container";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-12">
      <Container>
       <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-zinc-400">
          <div className="flex items-center gap-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-500 font-bold text-white shadow-lg shadow-blue-500/20">
              PQ
            </div>

            <div>
              <p className="font-semibold text-white">
                Precision QA Labs
              </p>

              <p className="text-sm text-zinc-400">
                Modern QA Automation & Quality Engineering
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6 text-sm text-zinc-400">
            <a
              href="#services"
              className="transition hover:text-white"
            >
              Services
            </a>

            <a
              href="#industries"
              className="transition hover:text-white"
            >
              Industries
            </a>

            <a
              href="#techstack"
              className="transition hover:text-white"
            >
              Tech Stack
            </a>

            <a
              href="https://www.linkedin.com/in/arcadiobuelvas"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-white"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-8 text-center text-sm text-zinc-500">
          © {new Date().getFullYear()} Precision QA Labs. Engineered by humans, QA approved by Teo & Riley 🐾
        </div>
      </Container>
    </footer>
  );
}