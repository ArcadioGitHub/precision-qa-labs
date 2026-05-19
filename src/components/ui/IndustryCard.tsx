import { cn } from "@/lib/utils";

interface IndustryCardProps {
  title: string;
  description: string;
  className?: string;
}

export default function IndustryCard({
  title,
  description,
  className,
}: IndustryCardProps) {
  return (
    <div
      className={cn(
        "group rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.03] p-8 transition duration-300 hover:-translate-y-1 hover:border-blue-500/30 hover:from-blue-500/[0.08] hover:to-white/[0.05] hover:-translate-y-1",
        className
      )}
    >
      <div className="mb-6 inline-flex rounded-2xl border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-400">
        Industry
      </div>

      <h3 className="text-2xl font-semibold text-white">{title}</h3>

      <p className="mt-5 leading-relaxed text-zinc-400">{description}</p>
    </div>
  );
}