import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import ServiceCard from "@/components/ui/ServiceCard";
import Reveal from "@/components/ui/Reveal";

import { services } from "@/data/services";

export default function Services() {
  return (
    <section
      id="services"
      className="relative border-t border-white/5 py-20 md:py-24"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#2563eb10,transparent_50%)]" />

      <Container className="relative">
        <Reveal>
          <SectionTitle
            eyebrow="Services"
            title="Modern Quality Solutions"
            description="Scalable QA automation and quality engineering solutions designed for modern software teams and enterprise platforms."
          />
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}