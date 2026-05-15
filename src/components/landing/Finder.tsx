"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  workFolders,
  FileItem,
  FolderData as WorkFolder,
} from "@/data/work";
import { experienceCategories, ExperienceCategory } from "@/data/experience";

/* ===================== persistence ===================== */
const VIEW_KEY = "bp:fileViews:v1";
const LIKED_KEY = "bp:liked:v1";

function readJson<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    const v = localStorage.getItem(key);
    return v ? (JSON.parse(v) as T) : fallback;
  } catch {
    return fallback;
  }
}
function writeJson(key: string, value: unknown) {
  if (typeof window === "undefined") return;
  localStorage.setItem(key, JSON.stringify(value));
}

/* ===================== shapes ===================== */
function FolderShape({ color }: { color: string }) {
  return (
    <div className="relative w-[88px] h-[68px]">
      <div className={`absolute top-0 left-2 w-12 h-3 rounded-t-md ${color}`} />
      <div className={`absolute top-2 left-0 right-0 bottom-0 rounded-md ${color} shadow-[0_2px_8px_rgba(0,0,0,0.12)]`} />
      <div className="absolute top-2 left-0 right-0 h-1 rounded-t-md bg-paper/30" />
    </div>
  );
}
function FileShape({ tint }: { tint: string }) {
  return (
    <div className="relative w-[64px] h-[80px]">
      <div
        className="absolute inset-0 rounded-md bg-paper border border-ink/10 shadow-[0_2px_8px_rgba(0,0,0,0.08)]"
        style={{ clipPath: "polygon(0 0, 75% 0, 100% 22%, 100% 100%, 0 100%)" }}
      />
      <div
        className="absolute top-0 right-0 w-4 h-4 bg-ink/10"
        style={{ clipPath: "polygon(0 0, 100% 100%, 0 100%)" }}
      />
      <div className={`absolute top-4 left-2 right-2 h-2 rounded-sm ${tint}`} />
      <div className="absolute top-9 left-2 right-2 space-y-1">
        <div className="h-[3px] bg-ink/15 rounded" />
        <div className="h-[3px] bg-ink/15 rounded" />
        <div className="h-[3px] bg-ink/15 rounded w-2/3" />
        <div className="h-[3px] bg-ink/15 rounded w-3/4" />
      </div>
    </div>
  );
}

/* ===================== sidebar icons ===================== */
function HomeIcon() { return <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 11l9-8 9 8v10a2 2 0 0 1-2 2h-4v-7h-6v7H5a2 2 0 0 1-2-2z" /></svg>; }
function BookIcon() { return <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h12a4 4 0 0 1 4 4v12H8a4 4 0 0 1-4-4z" /><path d="M4 16a4 4 0 0 1 4-4h12" /></svg>; }
function BriefcaseIcon() { return <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" /></svg>; }
function LeafIcon() { return <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 4C9 4 4 13 4 20c7 0 16-5 16-16z" /><path d="M4 20l9-9" /></svg>; }
function ChevronLeftIcon() { return <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>; }
function CloseIcon() { return <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg>; }
function EyeIcon() { return <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z" /><circle cx="12" cy="12" r="3" /></svg>; }
function HeartIcon({ filled = false, className = "w-5 h-5" }: { filled?: boolean; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}
function SproutIcon() {
  return (
    <svg viewBox="0 0 48 48" className="w-9 h-9 text-emerald-600" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M24 42 V 24" />
      <path d="M24 26 C 12 26, 8 18, 8 12 C 16 12, 22 18, 24 26 Z" fill="currentColor" fillOpacity="0.15" />
      <path d="M24 22 C 36 22, 40 14, 40 8 C 32 8, 26 14, 24 22 Z" fill="currentColor" fillOpacity="0.2" />
    </svg>
  );
}

/* ===================== types ===================== */
type Section = "work" | "blog" | "experience" | "garden";

type BlogCategory = { name: string; count: number };
type BlogPost = { id: string; title: string; description: string; category?: string; date?: string };

/* ===================== main component ===================== */
export function Finder() {
  const [section, setSection] = useState<Section>("work");
  const [folderId, setFolderId] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<FileItem | null>(null);
  const [views, setViews] = useState<Record<string, number>>({});

  /* blog state */
  const [blogCategories, setBlogCategories] = useState<BlogCategory[] | null>(null);
  const [blogCatState, setBlogCatState] = useState<"idle" | "loading" | "error" | "ready">("idle");
  const [blogPostsByCat, setBlogPostsByCat] = useState<Record<string, FileItem[]>>({});
  const [blogPostState, setBlogPostState] = useState<Record<string, "loading" | "error" | "ready">>({});

  useEffect(() => {
    setViews(readJson<Record<string, number>>(VIEW_KEY, {}));
  }, []);

  /* Load blog categories when blog section is opened */
  useEffect(() => {
    if (section === "blog" && blogCatState === "idle") {
      setBlogCatState("loading");
      fetch("/api/blogs/categories")
        .then((r) => r.json())
        .then((d) => {
          setBlogCategories(d.categories || []);
          setBlogCatState("ready");
        })
        .catch(() => setBlogCatState("error"));
    }
  }, [section, blogCatState]);

  /* Load blogs for a category when category is opened */
  useEffect(() => {
    if (section === "blog" && folderId && !blogPostsByCat[folderId] && blogPostState[folderId] !== "loading") {
      setBlogPostState((s) => ({ ...s, [folderId]: "loading" }));
      fetch(`/api/blogs?category=${encodeURIComponent(folderId)}`)
        .then((r) => r.json())
        .then((d) => {
          const posts: BlogPost[] = d.posts || [];
          const files: FileItem[] = posts.map((p) => ({
            id: `blog-${p.id}`,
            title: p.title,
            date: p.date
              ? new Date(p.date).toLocaleDateString(undefined, {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })
              : undefined,
            summary: (p.description || "").slice(0, 110),
            description: p.description || "",
            media: { type: "text", content: p.description || "(no content)" },
            tags: p.category ? [p.category] : undefined,
          }));
          setBlogPostsByCat((m) => ({ ...m, [folderId]: files }));
          setBlogPostState((s) => ({ ...s, [folderId]: "ready" }));
        })
        .catch(() => setBlogPostState((s) => ({ ...s, [folderId]: "error" })));
    }
  }, [section, folderId, blogPostsByCat, blogPostState]);

  function changeSection(next: Section) {
    setSection(next);
    setFolderId(null);
    setSelectedFile(null);
  }

  function goSectionRoot() {
    setFolderId(null);
    setSelectedFile(null);
  }

  function openFile(f: FileItem) {
    setSelectedFile(f);
    const next = { ...views, [f.id]: (views[f.id] || 0) + 1 };
    setViews(next);
    writeJson(VIEW_KEY, next);
  }

  const headerPath = useMemo(() => {
    const base = `~/bikalpa/${section}`;
    if (!folderId) return base;
    return `${base}/${folderId}`;
  }, [section, folderId]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7 }}
      className="w-full max-w-[1100px] mx-auto bg-paper rounded-xl shadow-2xl border border-ink/10 overflow-hidden"
    >
      {/* title bar */}
      <div className="relative flex items-center px-4 py-3 bg-paperDark border-b border-ink/10">
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-full bg-red-400" />
          <span className="w-3 h-3 rounded-full bg-yellow-400" />
          <span className="w-3 h-3 rounded-full bg-green-400" />
        </div>
        {folderId && (
          <button
            onClick={goSectionRoot}
            className="ml-3 flex items-center gap-1 text-[12px] font-mono text-inkSoft hover:text-ink transition-colors"
          >
            <ChevronLeftIcon /> Back
          </button>
        )}
        <div className="absolute left-1/2 -translate-x-1/2 font-mono text-[12px] text-inkSoft">
          {headerPath}
        </div>
      </div>

      {/* body */}
      <div className="flex min-h-[520px] relative">
        {/* sidebar */}
        <aside className="w-[200px] shrink-0 border-r border-ink/10 p-4 bg-paperDark/40">
          <div className="text-[10px] tracking-[0.2em] font-mono text-inkSoft mb-3">
            FAVORITES
          </div>
          <ul className="space-y-1 font-mono text-[13px]">
            <SidebarItem icon={<HomeIcon />} label="Work" active={section === "work"} onClick={() => changeSection("work")} />
            <SidebarItem icon={<BookIcon />} label="Blog" active={section === "blog"} onClick={() => changeSection("blog")} />
            <SidebarItem icon={<BriefcaseIcon />} label="Experience" active={section === "experience"} onClick={() => changeSection("experience")} />
            <SidebarItem icon={<LeafIcon />} label="Garden" active={section === "garden"} onClick={() => changeSection("garden")} />
          </ul>
        </aside>

        {/* main area */}
        <div className="flex-1 p-8 relative min-w-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${section}::${folderId ?? "root"}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
            >
              {section === "work" && (
                <WorkSection
                  folderId={folderId}
                  onOpenFolder={setFolderId}
                  onOpenFile={openFile}
                  selectedId={selectedFile?.id}
                  views={views}
                />
              )}
              {section === "blog" && (
                <BlogSection
                  folderId={folderId}
                  categories={blogCategories}
                  catState={blogCatState}
                  postsByCat={blogPostsByCat}
                  postState={blogPostState}
                  onOpenFolder={setFolderId}
                  onOpenFile={openFile}
                  selectedId={selectedFile?.id}
                  views={views}
                />
              )}
              {section === "experience" && (
                <ExperienceSection
                  folderId={folderId}
                  onOpenFolder={setFolderId}
                  onOpenFile={openFile}
                  selectedId={selectedFile?.id}
                  views={views}
                />
              )}
              {section === "garden" && <GardenSection />}
            </motion.div>
          </AnimatePresence>

          {/* detail panel */}
          <AnimatePresence>
            {selectedFile && (
              <motion.div
                key="detail"
                initial={{ x: "100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: "100%", opacity: 0 }}
                transition={{ type: "spring", stiffness: 220, damping: 28 }}
                className="absolute inset-y-0 right-0 w-full md:w-[58%] bg-paper border-l border-ink/10 shadow-[-12px_0_40px_rgba(0,0,0,0.08)] overflow-y-auto"
              >
                <DetailPanel
                  file={selectedFile}
                  views={views[selectedFile.id] || 1}
                  onClose={() => setSelectedFile(null)}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}

/* ===================== sidebar item ===================== */
function SidebarItem({ icon, label, active, onClick }: { icon: React.ReactNode; label: string; active: boolean; onClick: () => void }) {
  return (
    <li>
      <button
        onClick={onClick}
        className={`w-full flex items-center gap-2 px-2 py-1.5 rounded text-left transition-colors ${
          active ? "bg-folderBlue/30 text-ink" : "text-inkSoft hover:bg-ink/5"
        }`}
      >
        {icon} {label}
      </button>
    </li>
  );
}

/* ===================== WORK SECTION ===================== */
function WorkSection({
  folderId,
  onOpenFolder,
  onOpenFile,
  selectedId,
  views,
}: {
  folderId: string | null;
  onOpenFolder: (id: string) => void;
  onOpenFile: (f: FileItem) => void;
  selectedId?: string;
  views: Record<string, number>;
}) {
  if (!folderId) {
    return (
      <FolderGrid
        title="WORK"
        items={workFolders.map((f) => ({
          id: f.id,
          label: f.label,
          color: f.color,
          count: f.files.length,
        }))}
        onOpen={onOpenFolder}
      />
    );
  }
  const folder = workFolders.find((f) => f.id === folderId);
  if (!folder) return null;
  return (
    <FileGrid
      folderLabel={folder.label}
      color={folder.color}
      files={folder.files}
      onOpenFile={onOpenFile}
      selectedId={selectedId}
      views={views}
    />
  );
}

/* ===================== BLOG SECTION ===================== */
function BlogSection({
  folderId,
  categories,
  catState,
  postsByCat,
  postState,
  onOpenFolder,
  onOpenFile,
  selectedId,
  views,
}: {
  folderId: string | null;
  categories: BlogCategory[] | null;
  catState: "idle" | "loading" | "error" | "ready";
  postsByCat: Record<string, FileItem[]>;
  postState: Record<string, "loading" | "error" | "ready">;
  onOpenFolder: (id: string) => void;
  onOpenFile: (f: FileItem) => void;
  selectedId?: string;
  views: Record<string, number>;
}) {
  const palette = ["bg-folderYellow", "bg-folderBlue", "bg-folderGreen", "bg-folderRed", "bg-folderPurple"];
  if (!folderId) {
    if (catState === "loading") return <Empty message="Loading categories..." />;
    if (catState === "error") return <Empty message="Could not load categories." />;
    if (!categories || categories.length === 0) return <Empty message="No blog posts yet. Add some via /blog/write." />;
    return (
      <FolderGrid
        title="BLOG · CATEGORIES"
        items={categories.map((c, i) => ({
          id: c.name,
          label: c.name,
          color: palette[i % palette.length],
          count: c.count,
        }))}
        onOpen={onOpenFolder}
      />
    );
  }

  const files = postsByCat[folderId];
  const state = postState[folderId];
  if (state === "loading" || !files) return <Empty message="Loading posts..." />;
  if (state === "error") return <Empty message="Could not load posts." />;
  if (files.length === 0) return <Empty message="No posts in this category." />;
  const colorIdx = categories ? categories.findIndex((c) => c.name === folderId) : 0;
  const color = palette[(colorIdx >= 0 ? colorIdx : 0) % palette.length];
  return (
    <FileGrid
      folderLabel={folderId}
      color={color}
      files={files}
      onOpenFile={onOpenFile}
      selectedId={selectedId}
      views={views}
    />
  );
}

/* ===================== EXPERIENCE SECTION ===================== */
function ExperienceSection({
  folderId,
  onOpenFolder,
  onOpenFile,
  selectedId,
  views,
}: {
  folderId: string | null;
  onOpenFolder: (id: string) => void;
  onOpenFile: (f: FileItem) => void;
  selectedId?: string;
  views: Record<string, number>;
}) {
  if (!folderId) {
    return (
      <FolderGrid
        title="EXPERIENCE"
        items={experienceCategories.map((c) => ({
          id: c.id,
          label: c.label,
          color: c.color,
          count: c.files.length,
        }))}
        onOpen={onOpenFolder}
      />
    );
  }
  const cat = experienceCategories.find((c) => c.id === folderId);
  if (!cat) return null;
  return (
    <FileGrid
      folderLabel={cat.label}
      color={cat.color}
      files={cat.files}
      onOpenFile={onOpenFile}
      selectedId={selectedId}
      views={views}
    />
  );
}

/* ===================== GARDEN SECTION ===================== */
function GardenSection() {
  const [count, setCount] = useState<number | null>(null);
  const [liked, setLiked] = useState(false);
  const [posting, setPosting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLiked(readJson<boolean>(LIKED_KEY, false));
    fetch("/api/likes")
      .then((r) => r.json())
      .then((d) => setCount(typeof d.count === "number" ? d.count : 0))
      .catch(() => setError("Could not load like count."));
  }, []);

  async function handleLike() {
    if (liked || posting) return;
    setPosting(true);
    setError(null);
    try {
      const r = await fetch("/api/likes", { method: "POST" });
      const d = await r.json();
      if (typeof d.count === "number") setCount(d.count);
      setLiked(true);
      writeJson(LIKED_KEY, true);
    } catch {
      setError("Failed to register like. Try again later.");
    } finally {
      setPosting(false);
    }
  }

  return (
    <div className="min-h-[420px] flex flex-col items-center justify-center text-center py-8">
      <div className="text-[10px] tracking-[0.3em] font-mono text-inkSoft mb-3">
        GARDEN
      </div>
      <div className="flex items-center gap-3 mb-2">
        <SproutIcon />
        <span className="font-hand text-[42px] leading-none">Leave a sprout</span>
      </div>
      <p className="text-[14px] text-inkSoft max-w-[420px] mb-8 font-mono leading-relaxed">
        If something here resonated, drop a like. It&apos;s how I know the
        site&apos;s reaching people I&apos;ll never meet.
      </p>

      <motion.button
        onClick={handleLike}
        disabled={liked || posting}
        whileTap={liked ? {} : { scale: 0.92 }}
        whileHover={liked ? {} : { y: -2 }}
        className={`relative flex items-center gap-3 px-6 py-3 rounded-full font-mono text-[14px] transition-colors ${
          liked
            ? "bg-rose-100 text-rose-600 cursor-default"
            : posting
            ? "bg-ink/10 text-inkSoft cursor-wait"
            : "bg-ink text-paper hover:bg-ink/85"
        }`}
      >
        <HeartIcon filled={liked} className="w-5 h-5" />
        {liked ? "Thanks for the like!" : posting ? "Sending..." : "Give me a like"}
      </motion.button>

      <div className="mt-8 flex items-baseline gap-2 font-mono">
        <span className="text-[40px] font-semibold text-ink tabular-nums">
          {count === null ? "—" : count.toLocaleString()}
        </span>
        <span className="text-[12px] text-inkSoft tracking-[0.2em] uppercase">
          likes so far
        </span>
      </div>

      {error && (
        <div className="mt-4 text-[12px] text-rose-600 font-mono">{error}</div>
      )}
    </div>
  );
}

/* ===================== shared grids ===================== */
function FolderGrid({
  title,
  items,
  onOpen,
}: {
  title: string;
  items: { id: string; label: string; color: string; count: number | string }[];
  onOpen: (id: string) => void;
}) {
  return (
    <>
      <div className="text-[10px] tracking-[0.2em] font-mono text-inkSoft mb-6">
        {title}
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-x-4 gap-y-8">
        {items.map((it) => (
          <button
            key={it.id}
            onClick={() => onOpen(it.id)}
            onDoubleClick={() => onOpen(it.id)}
            className="group flex flex-col items-center gap-2 outline-none"
          >
            <motion.div
              whileHover={{ y: -4, scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 300, damping: 18 }}
            >
              <FolderShape color={it.color} />
            </motion.div>
            <span className="text-[12px] font-mono text-inkSoft text-center group-hover:text-ink line-clamp-2 px-1">
              {it.label}
            </span>
            <span className="text-[10px] font-mono text-inkSoft/60">
              {it.count} {typeof it.count === "number" && it.count === 1 ? "item" : "items"}
            </span>
          </button>
        ))}
      </div>
    </>
  );
}

function FileGrid({
  folderLabel,
  color,
  files,
  onOpenFile,
  selectedId,
  views,
}: {
  folderLabel: string;
  color: string;
  files: FileItem[];
  onOpenFile: (f: FileItem) => void;
  selectedId?: string;
  views: Record<string, number>;
}) {
  return (
    <>
      <div className="text-[10px] tracking-[0.2em] font-mono text-inkSoft mb-4">
        {folderLabel.toUpperCase()} · {files.length} ITEM{files.length === 1 ? "" : "S"}
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-x-4 gap-y-8">
        {files.map((file) => (
          <button
            key={file.id}
            onClick={() => onOpenFile(file)}
            onDoubleClick={() => onOpenFile(file)}
            className={`group flex flex-col items-center gap-1.5 outline-none rounded-lg px-2 py-2 transition-colors ${
              selectedId === file.id ? "bg-ink/5" : "hover:bg-ink/[0.03]"
            }`}
          >
            <motion.div
              whileHover={{ y: -3, scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 320, damping: 20 }}
            >
              <FileShape tint={color} />
            </motion.div>
            <span className="text-[12px] font-mono text-ink text-center leading-tight line-clamp-2 px-1">
              {file.title}
            </span>
            <span className="flex items-center gap-1 text-[10px] font-mono text-inkSoft/70">
              <EyeIcon /> {views[file.id] || 0}
            </span>
          </button>
        ))}
      </div>
    </>
  );
}

function Empty({ message }: { message: string }) {
  return (
    <div className="font-mono text-[13px] text-inkSoft py-12 text-center">
      {message}
    </div>
  );
}

/* ===================== detail panel ===================== */
function DetailPanel({
  file,
  views,
  onClose,
}: {
  file: FileItem;
  views: number;
  onClose: () => void;
}) {
  return (
    <div className="relative pb-10">
      <button
        onClick={onClose}
        aria-label="Close"
        className="absolute top-4 right-4 z-10 w-7 h-7 rounded-full bg-ink/5 hover:bg-ink/10 flex items-center justify-center text-ink/70 hover:text-ink transition-colors"
      >
        <CloseIcon />
      </button>
      <MediaBlock media={file.media} />
      <div className="px-7 pt-6">
        <div className="flex items-baseline justify-between gap-3 mb-2">
          <h3 className="text-[22px] font-semibold text-ink leading-tight">
            {file.title}
          </h3>
          {file.date && (
            <span className="font-mono text-[11px] text-inkSoft shrink-0">
              {file.date}
            </span>
          )}
        </div>
        <div className="flex items-center gap-3 mb-4 font-mono text-[11px] text-inkSoft">
          <span className="flex items-center gap-1.5">
            <EyeIcon /> Viewed {views} {views === 1 ? "time" : "times"}
          </span>
          {file.tags && file.tags.length > 0 && (
            <span className="flex flex-wrap items-center gap-1.5">
              {file.tags.map((t) => (
                <span key={t} className="px-1.5 py-0.5 border border-ink/20 rounded text-[10px]">{t}</span>
              ))}
            </span>
          )}
        </div>
        <p className="text-[14px] leading-relaxed text-inkSoft mb-5 whitespace-pre-wrap">
          {file.description || file.summary}
        </p>
        {file.links && file.links.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {file.links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1.5 bg-ink text-paper rounded font-mono text-[12px] hover:bg-ink/85 transition-colors"
              >
                {l.label} ↗
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function MediaBlock({ media }: { media: FileItem["media"] }) {
  if (media.type === "image") {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={media.src} alt={media.alt || ""} className="w-full h-[280px] object-cover" />;
  }
  if (media.type === "video") {
    return <video controls poster={media.poster} src={media.src} className="w-full h-[280px] object-cover bg-ink" />;
  }
  if (media.type === "text") {
    return (
      <div className="w-full bg-ink text-paper font-mono text-[13px] leading-relaxed p-7 whitespace-pre-wrap h-[280px] overflow-y-auto">
        {media.content}
      </div>
    );
  }
  return (
    <div className={`relative w-full h-[280px] bg-gradient-to-br ${media.gradient} flex items-end justify-start p-6`}>
      <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(rgba(255,255,255,0.4)_1px,transparent_1px)] [background-size:6px_6px]" />
      {media.label && (
        <span className="relative font-mono text-[11px] text-white/90 tracking-[0.2em] bg-black/30 px-2 py-1 rounded backdrop-blur-sm">
          {media.label}
        </span>
      )}
    </div>
  );
}
