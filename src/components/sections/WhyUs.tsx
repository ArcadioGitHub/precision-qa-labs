import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

import { whyUs } from "@/data/whyus";

export default function WhyUs() {
    return (
        <section className="relative border-t border-white/5 py-20 md:py-24">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#2563eb10,transparent_45%)] md:bg-[radial-gradient(circle_at_right,#2563eb10,transparent_50%)]" />
            <Container className="relative">
                <div className="grid items-center gap-20 lg:grid-cols-2">
                    <div>
                        <SectionTitle
                            eyebrow="Why Precision QA Labs"
                            title="Engineering-Focused Quality Solutions"
                            description="Modern quality engineering practices designed to help software teams build reliable, scalable, and maintainable platforms."
                        />
                    </div>

                    <div className="grid gap-6">
                        {whyUs.map((item) => (
                            <div
                                key={item}
                                className="flex items-start gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
                            >
                                <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-blue-500/10 text-sm text-blue-400">
                                    ✓
                                </div>

                                <p className="text-lg text-zinc-300">
                                    {item}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}