import type { Metadata } from "next";
import ProjectsGrid from "@/components/projects/ProjectsGrid";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects | Andrew Beaver",
  description: "A selection of personal and academic development projects.",
};

export default function ProjectsPage() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <div className="mb-8 animate-fade-in anim-delay-1">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
          Projects
        </h1>
        <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
          A mix of academic work, personal builds, and hackathon projects.
        </p>
      </div>

      <div className="animate-fade-in anim-delay-2">
        <ProjectsGrid projects={projects} />
      </div>
    </section>
  );
}
