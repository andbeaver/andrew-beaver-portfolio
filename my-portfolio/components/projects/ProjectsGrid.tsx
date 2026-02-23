"use client";

import { useMemo, useState } from "react";
import ProjectCard from "@/components/projects/ProjectCard";
import type { Project, ProjectCategory } from "@/data/projects";

const CATEGORIES: ("All" | ProjectCategory)[] = ["All", "Web", "Mobile", "Systems", "Data"];

interface Props {
  projects: Project[];
}

export default function ProjectsGrid({ projects }: Props) {
  const [active, setActive] = useState<"All" | ProjectCategory>("All");

  const filtered = useMemo(() => {
    if (active === "All") return projects;
    return projects.filter((p) => p.category === active);
  }, [projects, active]);

  return (
    <div className="flex gap-8 items-start">
      {/* Left sidebar – category filter */}
      <aside className="w-40 shrink-0 sticky top-24">
        <p className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-3">
          Category
        </p>
        <nav className="flex flex-col gap-0.5">
          {CATEGORIES.map((cat) => {
            const count =
              cat === "All"
                ? projects.length
                : projects.filter((p) => p.category === cat).length;
            const isActive = active === cat;
            return (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`flex items-center justify-between w-full text-sm px-3 py-2 rounded-lg transition-colors text-left ${
                  isActive
                    ? "bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-400 font-semibold"
                    : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-200"
                }`}
              >
                <span>{cat}</span>
                <span
                  className={`text-xs tabular-nums ${
                    isActive ? "text-indigo-500" : "text-slate-400 dark:text-slate-500"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </nav>
      </aside>

      {/* Project grid */}
      <div className="flex-1 min-w-0">
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} {...project} index={i} />
            ))}
          </div>
        ) : (
          <div className="py-16 text-center text-slate-400 dark:text-slate-600 text-sm">
            No projects in this category yet.
          </div>
        )}
      </div>
    </div>
  );
}
