import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import IndustryCard from "@/components/ui/IndustryCard";
import Reveal from "@/components/ui/Reveal";

import { industries } from "@/data/industries";

export default function Industries() {
  return (
    <section
      id="industries"
      className="relative border-t border-white/5 py-20 md:py-24"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#2563eb10,transparent_45%)]" />
      <Container className="relative">
        <Reveal>
          <SectionTitle
            eyebrow="Industries"
            title="Cross-Industry Platform Experience"
            description="Experience supporting modern platforms across healthcare, media, enterprise SaaS, and other technology-driven industries."
          />
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
            {industries.map((industry, index) => (
              <IndustryCard
                key={industry.title}
                title={industry.title}
                description={industry.description}
                className={
                  index === industries.length - 1
                    ? "lg:col-span-2 lg:mx-auto lg:w-1/2"
                    : ""
                }
              />
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}