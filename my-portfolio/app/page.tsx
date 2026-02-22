import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function Home() {
  const featured = projects.filter((p) => p.featured);

  return (
    <section className="max-w-5xl mx-auto px-6 py-24 sm:py-36 flex flex-col gap-8">
      {/* Hero badge */}
      <span className="inline-flex items-center gap-2 self-start bg-indigo-50 text-indigo-600 text-xs font-semibold px-3 py-1 rounded-full border border-indigo-100">
        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
        Available for opportunities
      </span>

      <div className="flex flex-col gap-3">
        <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 tracking-tight leading-tight">
          Andrew Beaver
        </h1>
        <p className="text-lg sm:text-xl text-indigo-600 font-medium">
          IT Programming Student &middot; Systems &amp; Data-Focused Developer
        </p>
      </div>

      <p className="text-slate-500 leading-relaxed max-w-xl text-base">
        I build structured, scalable applications across web and mobile platforms. My experience spans full-stack cloud systems, real-time data applications, and cross-platform mobile development. I focus on clean architecture, thoughtful design, and building software that solves real problems.
      </p>

      <div className="flex items-center gap-3 pt-1">
        <Link
          href="/projects"
          className="inline-block bg-indigo-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-indigo-500 transition-colors shadow-sm"
        >
          View Projects
        </Link>
        <Link
          href="/contact"
          className="inline-block text-slate-700 text-sm font-medium px-5 py-2.5 rounded-lg border border-slate-200 hover:border-slate-300 hover:bg-white transition-colors"
        >
          Get in Touch
        </Link>
      </div>

      {/* Featured Projects */}
      {featured.length > 0 && (
        <div className="pt-8 border-t border-slate-100 flex flex-col gap-5">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-slate-900 tracking-tight">Featured Projects</h2>
              <p className="text-sm text-slate-400 mt-0.5">A few highlights from my work.</p>
            </div>
            <Link
              href="/projects"
              className="text-sm text-indigo-600 hover:text-indigo-800 font-medium transition-colors inline-flex items-center gap-1"
            >
              All projects <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {featured.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
