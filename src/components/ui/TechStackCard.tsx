interface TechStackCardProps {
  category: string;
  technologies: string[];
}

export default function TechStackCard({
  category,
  technologies,
}: TechStackCardProps) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
      <div className="mb-6 inline-flex rounded-2xl border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-400">
        {category}
      </div>

      <div className="flex flex-wrap gap-3">
        {technologies.map((tech) => (
          <div
            key={tech}
            className="rounded-xl border border-white/10 bg-black/30 px-4 py-2 text-sm text-zinc-300 transition duration-300 hover:-translate-y-1 hover:border-blue-500/30 hover:text-white"
          >
            {tech}
          </div>
        ))}
      </div>
    </div>
  );
}