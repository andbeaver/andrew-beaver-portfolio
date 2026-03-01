"use client";

import { useMemo, useState } from "react";
import TechTooltip from "@/components/ui/TechTooltip";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/projects/ProjectCard";

interface SkillGroup {
  label: string;
  skills: string[];
}

export default function SkillsSection({ groups }: { groups: SkillGroup[] }) {
  const [selected, setSelected] = useState<string | null>(null);

  const matched = useMemo(() => {
    if (!selected) return [];
    return projects.filter((p) => p.techStack.includes(selected));
  }, [selected]);

  return (
    <div className="md:flex md:gap-6">
      <div className="flex-1">
        <div className="flex flex-col gap-5">
          {groups.map((group) => (
            <div key={group.label}>
              <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-2.5">
                {group.label}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <button
                    key={skill}
                    type="button"
                    onClick={() => setSelected((s) => (s === skill ? null : skill))}
                    className="p-0"
                    aria-pressed={selected === skill}
                  >
                    <TechTooltip
                      label={skill}
                      variant="pill"
                      className={`px-3 py-1 ${selected === skill ? "ring-2 ring-indigo-300 dark:ring-indigo-700" : ""}`}
                    />
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <aside className="mt-4 md:mt-0 md:w-96 md:shrink-0">
        {selected ? (
          <div className="pt-0 md:pt-0 md:pl-4 md:border-l md:border-slate-100 dark:md:border-slate-800">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-semibold text-slate-900 dark:text-white">Projects using “{selected}”</h3>
              <button onClick={() => setSelected(null)} className="text-sm text-indigo-600 hover:underline">Clear</button>
            </div>

            {matched.length > 0 ? (
              <div className="grid grid-cols-1 gap-5">
                {matched.map((p, i) => (
                  <ProjectCard key={p.id} {...p} index={i} />
                ))}
              </div>
            ) : (
              <div className="text-sm text-slate-500 dark:text-slate-400">No projects featured with this skill.</div>
            )}
          </div>
        ) : (
          <div className="hidden md:block text-sm text-slate-500 dark:text-slate-400">Click a skill to view related projects.</div>
        )}
      </aside>
    </div>
  );
}
