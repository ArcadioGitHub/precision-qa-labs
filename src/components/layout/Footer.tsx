import Container from "@/components/ui/Container";

const footerLinks = [
  { label: "Services", href: "#services" },
  { label: "Industries", href: "#industries" },
  { label: "Tech Stack", href: "#techstack" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/arcadiobuelvas",
    external: true,
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-12 md:py-16">
      <Container>
        <div className="flex flex-col items-center justify-between gap-10 md:flex-row">
          <a href="#" className="flex items-center gap-4">
            <img
              src="/logo.png"
              alt="Precision QA Labs Logo"
              className="h-12 w-12 rounded-2xl shadow-lg shadow-blue-500/20"
            />

            <div>
              <p className="font-semibold text-white">Precision QA Labs</p>

              <p className="mt-1 text-sm text-zinc-400">
                Founder & Quality Engineer: Arcadio Buelvas
              </p>
            </div>
          </a>

          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm text-zinc-400">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="transition hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-8 text-center text-sm text-zinc-500">
          © {new Date().getFullYear()} Precision QA Labs. Engineered by Arcadio
          Buelvas, QA approved by Teo & Riley 🐾
        </div>
      </Container>
    </footer>
  );
}