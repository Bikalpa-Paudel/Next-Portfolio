"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const onHome = pathname === "/";

  const navLink = onHome
    ? [
        { link: "#about", title: "About" },
        { link: "#work", title: "Work" },
        { link: "/blog", title: "Blog" },
      ]
    : [
        { link: "/", title: "Home" },
        { link: "/#about", title: "About" },
        { link: "/#work", title: "Work" },
        { link: "/blog", title: "Blog" },
      ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-[64px] flex justify-between items-center px-6 md:px-12 backdrop-blur-sm bg-paper/60 border-b border-ink/5">
      <Link href="/" className="flex items-center gap-2 group">
        <span className="w-3 h-3 rounded-full bg-ink inline-block" />
        <span className="font-mono text-[15px] tracking-tight">Bikalpa Paudel</span>
      </Link>
      <ul className="flex items-center gap-6 md:gap-10">
        {navLink.map(({ link, title }, index) => (
          <li key={index} className="text-[14px] font-mono">
            <Link
              href={link}
              className="relative text-inkSoft hover:text-ink transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 hover:after:w-full after:bg-ink after:transition-all"
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
