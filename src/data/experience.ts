import { FileItem } from "./work";

export type ExperienceCategory = {
  id: "work" | "education";
  label: string;
  color: string;
  iconKey: "briefcase" | "book";
  files: FileItem[];
};

export const experienceCategories: ExperienceCategory[] = [
  {
    id: "work",
    label: "Work",
    color: "bg-folderBlue",
    iconKey: "briefcase",
    files: [
      {
        id: "exp-void-nepal",
        title: "Void Nepal Pvt. Ltd.",
        date: "Sep 2023 – Feb 2024",
        summary: "Frontend developer — internal tools + client sites.",
        description:
          "Built and shipped frontend features in a small team, owning component design, prop APIs, and the testing approach for new pages. Learned to ship under real deadlines and review code from senior engineers.",
        media: {
          type: "text",
          content:
            "Role · Frontend Developer\nStack · React, Next.js, TailwindCSS\nHighlights · Component library, marketing pages, internal admin tooling",
        },
        tags: ["React", "Next.js", "Tailwind"],
      },
      {
        id: "exp-college-platform",
        title: "College Development Platform",
        date: "Sep 2023 – Feb 2024",
        summary: "Student-facing collaboration platform.",
        description:
          "Worked on the frontend of a platform for students to share notes and collaborate. Heavy state-management work plus a fair amount of accessibility cleanup.",
        media: {
          type: "text",
          content:
            "Role · Frontend Engineer\nFocus · Auth flows, file sharing, search\nLearned · Real-world team workflows and code review",
        },
        tags: ["React", "Redux"],
      },
      {
        id: "exp-freelance",
        title: "Freelance",
        date: "Ongoing",
        summary: "Custom landing pages and small web apps.",
        description:
          "Independent client work — fast turnaround marketing sites, blog templates, and one-page web apps. Each gig is a chance to try a new stack or design language.",
        media: {
          type: "text",
          content:
            "Stack · Next.js, TypeScript, Tailwind\nClients · Local startups & creators",
        },
      },
    ],
  },
  {
    id: "education",
    label: "Education",
    color: "bg-folderGreen",
    iconKey: "book",
    files: [
      {
        id: "edu-herald",
        title: "Herald College Kathmandu",
        date: "Undergraduate",
        summary: "Computer science studies + project work.",
        description:
          "Undergraduate at Herald College, Kathmandu — coursework in algorithms, web development, databases, plus project work outside the syllabus.",
        media: {
          type: "text",
          content:
            "Program · BSc (Hons) Computing\nFocus · Web development, algorithms, databases\nProjects · Personal sites, club builds, hackathons",
        },
        tags: ["Algorithms", "Web Dev", "Databases"],
      },
      {
        id: "edu-kalika",
        title: "Kalika Manavgyan School",
        date: "High School",
        summary: "Science stream, foundation years.",
        description:
          "High school at Kalika Manavgyan, science stream. Where I first wrote code in C and got curious enough to keep building.",
        media: {
          type: "text",
          content:
            "Stream · Science\nFirst languages · C, Python\nFirst project · A clunky calculator that worked",
        },
        tags: ["C", "Python"],
      },
      {
        id: "edu-self-taught",
        title: "Self Taught",
        date: "Forever",
        summary: "The ongoing curriculum: docs, projects, breakages.",
        description:
          "The bulk of what I know came from reading docs, breaking things, and rebuilding them. The library here keeps growing — React, Next.js, TailwindCSS, Prisma, design systems, and lately AI tooling.",
        media: {
          type: "text",
          content:
            "Method · Build → Break → Read → Rebuild\nResources · Docs, GitHub, blog posts, YouTube\nCurrently learning · AI tooling, system design",
        },
        tags: ["Self-directed"],
      },
    ],
  },
];
