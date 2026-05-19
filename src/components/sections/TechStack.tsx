import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import TechStackCard from "@/components/ui/TechStackCard";

import { techStack } from "@/data/techstack";

export default function TechStack() {
  return (
    <section
      id="techstack"
      className="relative border-t border-white/5 py-20 md:py-24"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#2563eb10,transparent_50%)]" />
      <Container className="relative">
        <SectionTitle
          eyebrow="Technology"
          title="Modern Engineering Stack"
          description="Leveraging modern frameworks, automation tools, and engineering practices to deliver scalable quality solutions."
        />

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
          {techStack.map((stack) => (
            <TechStackCard
              key={stack.category}
              category={stack.category}
              technologies={stack.technologies}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}