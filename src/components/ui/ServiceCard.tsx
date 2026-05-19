import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export default function ServiceCard({
  title,
  description,
  icon: Icon,
}: ServiceCardProps) {
  return (
    <div className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:bg-white/[0.07]">
      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400 transition group-hover:bg-blue-500/20">
        <Icon size={26} />
      </div>

      <h3 className="text-2xl font-semibold text-white">{title}</h3>

      <p className="mt-4 leading-relaxed text-zinc-400">{description}</p>
    </div>
  );
}