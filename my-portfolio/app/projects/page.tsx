import type { Metadata } from "next";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects | Andrew Beaver",
  description: "A selection of personal and academic development projects.",
};

export default function ProjectsPage() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 tracking-tight">
          Projects
        </h1>
        <p className="text-slate-400 mt-2 text-sm">
          A mix of academic work, personal builds, and hackathon projects.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
}
