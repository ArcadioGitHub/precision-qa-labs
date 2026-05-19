import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/30 backdrop-blur-xl">
      <Container className="flex items-center justify-between py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-500 font-bold text-white shadow-lg shadow-blue-500/20">
            PQ
          </div>

          <div>
            <p className="text-sm font-semibold tracking-wide text-white">
              Precision QA Labs
            </p>

            <p className="text-xs text-zinc-400">
              Modern QA Automation
            </p>
          </div>
        </div>

        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#services"
            className="text-sm text-zinc-300 transition hover:text-white"
          >
            Services
          </a>

          <a
            href="#industries"
            className="text-sm text-zinc-300 transition hover:text-white"
          >
            Industries
          </a>

          <a
            href="#techstack"
            className="text-sm text-zinc-300 transition hover:text-white"
          >
            Tech Stack
          </a>

          <Button className="px-5 py-2.5 text-sm">
            <a href="#contact">Book a Consultation</a>
          </Button>
        </div>
      </Container>
    </nav>
  );
}