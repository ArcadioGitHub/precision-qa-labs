import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function ContactCTA() {
    return (
        <section className="relative border-t border-white/5 py-20 md:py-24">
            <Container>
                <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-b from-blue-500/10 to-white/[0.03] px-8 py-20 text-center backdrop-blur-sm md:px-16">
                    <div className="absolute left-1/2 top-0 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />

                    <div className="relative">
                        <div className="mb-6 inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-5 py-2 text-sm font-medium text-blue-400">
                            Let’s Work Together
                        </div>

                        <h2 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight text-white md:text-6xl">
                            Let’s improve your software quality.
                        </h2>

                        <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-zinc-400 md:text-xl">
                            Looking for modern QA automation and quality engineering support
                            for your platform, product, or engineering team?
                        </p>

                        <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">
                            <Button>
                                <a href="mailto:arcadiobuelvas@gmail.com">
                                    Get In Touch
                                </a>
                            </Button>

                            <Button variant="secondary">
                                <a
                                    href="https://www.linkedin.com/in/arcadiobuelvas"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    View LinkedIn
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}