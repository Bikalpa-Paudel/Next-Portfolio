import Link from "next/link";

const socials = [
  { label: "X", href: "https://twitter.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Github", href: "https://github.com/Bikalpa-Paudel" },
  { label: "Figma", href: "https://figma.com" },
  { label: "Unsplash", href: "https://unsplash.com" },
];

export default function Footer() {
  return (
    <footer className="grid-bg px-6 py-12 flex flex-col items-center gap-3 font-mono text-[13px] text-inkSoft">
      <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
        {socials.map(({ label, href }) => (
          <li key={label}>
            <Link
              href={href}
              target="_blank"
              rel="noreferrer"
              className="hover:text-ink transition-colors"
            >
              <span className="text-ink/40">{"{"}</span>
              {label}
              <span className="text-ink/40">{"}"}</span>
            </Link>
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-2 text-[12px] text-inkSoft/80">
        <Sparkle /> Built with Next.js · Shipped on Vercel <Sparkle />
      </div>
      <div className="text-[11px] text-inkSoft/60">
        © {new Date().getFullYear()} Bikalpa Paudel
      </div>
    </footer>
  );
}

function Sparkle() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="inline-block w-3 h-3 text-inkSoft/60"
      fill="currentColor"
    >
      <path d="M12 0 L 14 9 L 24 12 L 14 15 L 12 24 L 10 15 L 0 12 L 10 9 Z" />
    </svg>
  );
}
