export type FileMedia =
  | { type: "image"; src: string; alt?: string }
  | { type: "video"; src: string; poster?: string }
  | { type: "gradient"; gradient: string; label?: string }
  | { type: "text"; content: string };

export type FileItem = {
  id: string;
  title: string;
  date?: string;
  summary: string;
  description: string;
  media: FileMedia;
  tags?: string[];
  links?: { label: string; href: string }[];
};

export type WorkFolderId = "projects" | "ai" | "lens" | "sketch";

export type FolderData = {
  id: WorkFolderId;
  label: string;
  color: string;
  iconKey: "briefcase" | "book" | "star" | "camera" | "pencil" | "layers";
  files: FileItem[];
};

export const workFolders: FolderData[] = [
  {
    id: "projects",
    label: "Projects",
    color: "bg-folderBlue",
    iconKey: "briefcase",
    files: [
      {
        id: "portfolio-v2",
        title: "Portfolio v2",
        date: "2025",
        summary: "Single-page animated portfolio built with Next.js 14.",
        description:
          "A scrapbook-style personal site using Next.js App Router, TailwindCSS and framer-motion. Hand-crafted SVG props (terminal, polaroid stack, vinyl, ID badge) replace bitmap assets so the whole hero is pure code and tiny on the wire.",
        media: {
          type: "gradient",
          gradient: "from-folderBlue via-folderPurple to-folderRed",
          label: "Next.js · Tailwind · Framer Motion",
        },
        tags: ["Next.js", "Tailwind", "Framer Motion"],
        links: [
          { label: "View on GitHub", href: "https://github.com/Bikalpa-Paudel" },
        ],
      },
      {
        id: "blog-cms",
        title: "Blog CMS",
        date: "2024",
        summary: "Markdown-style blog with Prisma + MongoDB backend.",
        description:
          "A small CMS layer for personal posts. Routes are App Router server components, mutations go through a tiny REST handler, and the post store is MongoDB via Prisma.",
        media: {
          type: "gradient",
          gradient: "from-folderYellow via-amber-400 to-orange-500",
          label: "Prisma · MongoDB · API Routes",
        },
        tags: ["Prisma", "MongoDB", "API Routes"],
      },
      {
        id: "weather-app",
        title: "Weather App",
        date: "2023",
        summary: "Location-aware weather UI with geolocation + OpenWeather API.",
        description:
          "Single-screen weather client that uses the browser geolocation API to fetch hourly + weekly forecasts. Built early in my React journey — small, but everything is responsive and gracefully handles permission denials.",
        media: {
          type: "gradient",
          gradient: "from-sky-300 via-sky-500 to-indigo-600",
          label: "React · OpenWeather",
        },
        tags: ["React", "API"],
      },
    ],
  },
  {
    id: "ai",
    label: "Building with AI",
    color: "bg-folderRed",
    iconKey: "star",
    files: [
      {
        id: "claude-sandbox",
        title: "Claude Code Sandbox",
        date: "2025",
        summary: "Pair-programming with Claude on real codebases.",
        description:
          "Notes and tiny demos of pairing with Claude to refactor and ship features. Less about the model, more about the prompt + review loop that actually works in practice.",
        media: {
          type: "gradient",
          gradient: "from-rose-400 via-pink-500 to-fuchsia-600",
          label: "Claude · Prompt engineering",
        },
      },
      {
        id: "ai-design-tools",
        title: "AI in Design Tools",
        date: "2025",
        summary: "Where AI helps vs. where it gets in the way.",
        description:
          "A running log of design tools with AI features I've actually used — what shipped real value, what was just demo magic, and what I'd build differently.",
        media: {
          type: "gradient",
          gradient: "from-emerald-300 via-teal-400 to-cyan-500",
          label: "Research notes",
        },
      },
    ],
  },
  {
    id: "lens",
    label: "Through My Lens",
    color: "bg-folderPurple",
    iconKey: "camera",
    files: [
      {
        id: "nepal-streets",
        title: "Streets of Kathmandu",
        date: "2024",
        summary: "Photo essay — walking the old city.",
        description:
          "A short photo set from wandering the old city. Mostly shot on phone — the goal was light and texture, not gear.",
        media: {
          type: "gradient",
          gradient: "from-amber-300 via-orange-400 to-rose-500",
          label: "Photo set · 12 frames",
        },
      },
      {
        id: "mountain-light",
        title: "Mountain Light",
        date: "2024",
        summary: "Early-morning shots from the foothills.",
        description:
          "Pre-dawn series — getting up early, hiking up, waiting for the first light to hit the snow line.",
        media: {
          type: "gradient",
          gradient: "from-indigo-300 via-purple-400 to-pink-500",
          label: "Photo set · 8 frames",
        },
      },
    ],
  },
  {
    id: "sketch",
    label: "From Sketch to Code",
    color: "bg-folderYellow",
    iconKey: "pencil",
    files: [
      {
        id: "ui-doodles",
        title: "UI Doodles",
        date: "2025",
        summary: "Napkin sketches that became real components.",
        description:
          "Loose sketches I drew on paper, then turned into working UI. Each one keeps the original sketch next to the final component so you can see how rough thinking lands in real code.",
        media: {
          type: "gradient",
          gradient: "from-yellow-200 via-amber-300 to-orange-400",
          label: "Sketch → Code",
        },
      },
    ],
  },
];
