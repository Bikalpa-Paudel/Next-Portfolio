"use client";

import { useEffect, useState } from "react";

type Category = { name: string; count: number };

function Page() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState<Category[]>([]);
  const [status, setStatus] = useState<"idle" | "saving" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/blogs/categories")
      .then((r) => r.json())
      .then((d) => setCategories(d.categories || []))
      .catch(() => {});
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!title.trim() || !description.trim()) {
      setStatus("error");
      setErrorMsg("Title and description are required.");
      return;
    }
    setStatus("saving");
    setErrorMsg(null);
    try {
      const res = await fetch("/api/blogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: title.trim(),
          description: description.trim(),
          category: category.trim() || "General",
        }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setStatus("success");
      setTitle("");
      setDescription("");
      // refresh categories so newly-named ones appear in suggestions
      fetch("/api/blogs/categories")
        .then((r) => r.json())
        .then((d) => setCategories(d.categories || []))
        .catch(() => {});
    } catch (err) {
      setStatus("error");
      setErrorMsg("Could not save post. Check the server and try again.");
    }
  }

  return (
    <main className="min-h-screen grid-bg pt-[88px] pb-16 px-6">
      <div className="max-w-[760px] mx-auto bg-paper rounded-xl shadow-2xl border border-ink/10 overflow-hidden">
        {/* title bar */}
        <div className="relative flex items-center px-4 py-3 bg-paperDark border-b border-ink/10">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-400" />
            <span className="w-3 h-3 rounded-full bg-yellow-400" />
            <span className="w-3 h-3 rounded-full bg-green-400" />
          </div>
          <div className="absolute left-1/2 -translate-x-1/2 font-mono text-[12px] text-inkSoft">
            ~/bikalpa/blog/new
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-8 flex flex-col gap-5">
          <Field label="Title">
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="What's the post about?"
              className="w-full bg-transparent border border-ink/15 rounded-md px-3 py-2 text-[15px] font-sans focus:outline-none focus:border-ink/40 transition-colors"
            />
          </Field>

          <Field
            label="Category"
            hint="Used to group posts on the Finder. Leave blank for General."
          >
            <input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="e.g. Tech, Notes, Design"
              list="bp-cat-suggestions"
              className="w-full bg-transparent border border-ink/15 rounded-md px-3 py-2 text-[15px] font-sans focus:outline-none focus:border-ink/40 transition-colors"
            />
            <datalist id="bp-cat-suggestions">
              {categories.map((c) => (
                <option key={c.name} value={c.name} />
              ))}
            </datalist>
            {categories.length > 0 && (
              <div className="mt-2 flex flex-wrap gap-1.5">
                {categories.map((c) => (
                  <button
                    key={c.name}
                    type="button"
                    onClick={() => setCategory(c.name)}
                    className={`px-2 py-0.5 rounded font-mono text-[11px] border transition-colors ${
                      category === c.name
                        ? "bg-ink text-paper border-ink"
                        : "border-ink/20 text-inkSoft hover:border-ink/50 hover:text-ink"
                    }`}
                  >
                    {c.name} <span className="opacity-60">· {c.count}</span>
                  </button>
                ))}
              </div>
            )}
          </Field>

          <Field label="Description">
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Write the body of the post..."
              rows={10}
              className="w-full bg-transparent border border-ink/15 rounded-md px-3 py-2 text-[15px] font-sans leading-relaxed focus:outline-none focus:border-ink/40 transition-colors resize-y"
            />
          </Field>

          <div className="flex items-center justify-between gap-4">
            <div className="font-mono text-[12px] min-h-[18px]">
              {status === "saving" && (
                <span className="text-inkSoft">Saving...</span>
              )}
              {status === "success" && (
                <span className="text-emerald-600">Post saved.</span>
              )}
              {status === "error" && errorMsg && (
                <span className="text-rose-600">{errorMsg}</span>
              )}
            </div>
            <button
              type="submit"
              disabled={status === "saving"}
              className="px-5 py-2 bg-ink text-paper font-mono text-[13px] rounded-md hover:bg-ink/85 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {status === "saving" ? "Posting..." : "Post"}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}

function Field({
  label,
  hint,
  children,
}: {
  label: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="font-mono text-[11px] tracking-[0.2em] text-inkSoft uppercase">
        {label}
      </span>
      {children}
      {hint && (
        <span className="font-mono text-[11px] text-inkSoft/70">{hint}</span>
      )}
    </label>
  );
}

export default Page;
