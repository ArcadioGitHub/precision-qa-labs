import { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary";
}

export default function Button({
  children,
  variant = "primary",
  className,
  ...props
}: ButtonProps) {
 return (
  <button
    className={cn(
      "rounded-2xl px-8 py-4 font-medium transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.02] active:scale-[0.98]",
      variant === "primary" &&
        "bg-blue-500 text-white shadow-lg shadow-blue-500/20 hover:bg-blue-400 hover:shadow-blue-500/40",
      variant === "secondary" &&
        "border border-white/10 bg-white/5 text-white backdrop-blur-sm hover:bg-white/10 hover:border-white/20",
      className
    )}
    {...props}
  >
    {children}
  </button>
);
}