import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative flex overflow-hidden pt-36 pb-20 md:pb-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#2563eb22,transparent_40%)]" />

      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />

      <Container className="relative flex flex-col items-center pt-32 text-center">
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

        <div className="mt-12 flex flex-col gap-4 sm:flex-row">
          <Button>
            <a
              href="https://wa.me/19145080709?text=Hi%20Arcadio!%20I%27m%20interested%20in%20Precision%20QA%20Labs%20services."
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

        <div className="mt-24 grid w-full max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
            <p className="text-sm text-zinc-400">
              Enterprise QA Experience
            </p>

            <h3 className="mt-2 text-2xl font-semibold text-white">
              Web & Mobile
            </h3>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
            <p className="text-sm text-zinc-400">
              Modern Automation
            </p>

            <h3 className="mt-2 text-2xl font-semibold text-white">
              AI-Assisted QA
            </h3>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
            <p className="text-sm text-zinc-400">
              Cross-Industry Expertise
            </p>

            <h3 className="mt-2 text-2xl font-semibold text-white">
              Enterprise Platforms
            </h3>
          </div>
        </div>
      </Container>
    </section>
  );
}