"use client";

import { useMemo, useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import type { Project } from "@/data/projects";

interface Props {
  projects: Project[];
}

export default function ProjectsGrid({ projects }: Props) {
  const [selected, setSelected] = useState<Set<string>>(new Set());

  // Derive sorted unique techs from all projects
  const allTechs = useMemo(() => {
    const set = new Set<string>();
    projects.forEach((p) => p.techStack.forEach((t) => set.add(t)));
    return Array.from(set).sort((a, b) => a.localeCompare(b));
  }, [projects]);

  const toggle = (tech: string) => {
    setSelected((prev) => {
      const next = new Set(prev);
      next.has(tech) ? next.delete(tech) : next.add(tech);
      return next;
    });
  };

  const filtered = useMemo(() => {
    if (selected.size === 0) return projects;
    return projects.filter((p) =>
      p.techStack.some((t) => selected.has(t))
    );
  }, [projects, selected]);

  return (
    <div className="flex flex-col gap-8">
      {/* Filter chips */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest">
            Filter by technology
          </p>
          {selected.size > 0 && (
            <button
              onClick={() => setSelected(new Set())}
              className="text-xs text-indigo-600 hover:text-indigo-800 font-medium transition-colors"
            >
              Clear all
            </button>
          )}
        </div>

        <div className="flex flex-wrap gap-2">
          {allTechs.map((tech) => {
            const active = selected.has(tech);
            return (
              <button
                key={tech}
                onClick={() => toggle(tech)}
                className={`text-xs font-medium px-3 py-1.5 rounded-full border transition-colors ${
                  active
                    ? "bg-indigo-600 text-white border-indigo-600"
                    : "bg-white text-slate-600 border-slate-200 hover:border-indigo-300 hover:text-indigo-600"
                }`}
              >
                {tech}
              </button>
            );
          })}
        </div>
      </div>

      {/* Results count */}
      {selected.size > 0 && (
        <p className="text-sm text-slate-400 -mt-3">
          Showing{" "}
          <span className="font-semibold text-slate-700">{filtered.length}</span>{" "}
          of {projects.length} projects
        </p>
      )}

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {filtered.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      ) : (
        <div className="py-16 text-center text-slate-400 text-sm">
          No projects match the selected filters.
        </div>
      )}
    </div>
  );
}
