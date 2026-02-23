"use client";

import TechTooltip from "@/components/ui/TechTooltip";

interface SkillGroup {
  label: string;
  skills: string[];
}

export default function SkillsSection({ groups }: { groups: SkillGroup[] }) {
  return (
    <div className="flex flex-col gap-5">
      {groups.map((group) => (
        <div key={group.label}>
          <p className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-2.5">
            {group.label}
          </p>
          <div className="flex flex-wrap gap-2">
            {group.skills.map((skill) => (
              <TechTooltip key={skill} label={skill} variant="tag" />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
