import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import AvailabilityBadge from "@/components/AvailabilityBadge";

export default function Home() {
  const featured = projects.filter((p) => p.featured);

  return (
    <section className="max-w-5xl mx-auto px-6">
      {/* Hero Section — fills viewport height below nav */}
      <div className="hero-gradient min-h-[calc(100svh-4rem)] flex flex-col justify-center gap-6 pb-14 rounded-b-3xl">

        {/* Availability badge */}
        <div className="animate-fade-in anim-delay-1">
          <AvailabilityBadge variant="inline" />
        </div>

        {/* Headline block */}
        <div className="flex flex-col gap-3 animate-fade-in anim-delay-2">
          <h1 className="text-6xl sm:text-7xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.05]">
            Andrew Beaver
          </h1>
          <p className="text-xl sm:text-2xl text-indigo-600 font-semibold">
            Full-Stack Developer &nbsp;&middot;&nbsp; Web &amp; Mobile Applications
          </p>
        </div>

        {/* Supporting paragraph — 1–2 sentences */}
          <p className="text-base sm:text-lg text-slate-500 dark:text-slate-400 leading-relaxed max-w-2xl animate-fade-in anim-delay-3">
          I design and build scalable applications for web and mobile — spanning full-stack cloud systems, real-time data, and cross-platform development.
          My focus is clean architecture and software that delivers lasting, practical value.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center gap-4 pt-1 animate-fade-in anim-delay-4">
          <Link
            href="/projects"
            className="inline-block bg-indigo-600 text-white text-sm font-semibold px-7 py-3.5 rounded-xl hover:bg-indigo-500 active:bg-indigo-700 transition-colors shadow-md shadow-indigo-200"
          >
            View Projects
          </Link>
          <Link
            href="/contact"
            className="inline-block text-slate-700 text-sm font-semibold px-7 py-3.5 rounded-xl border border-slate-200 hover:border-indigo-300 hover:text-indigo-600 hover:bg-white active:bg-slate-50 transition-colors"
          >
            Contact Me
          </Link>
        </div>

      </div>

      {/* Featured Projects */}
      {featured.length > 0 && (
        <div className="py-10 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-5">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">Featured Projects</h2>
              <p className="text-sm text-slate-400 dark:text-slate-500 mt-0.5">A few highlights from my work.</p>
            </div>
            <Link
              href="/projects"
              className="text-sm text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 font-medium transition-colors inline-flex items-center gap-1"
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

      {/* Core Technologies */}
        <div className="py-10 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-5">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">Core Technologies</h2>
              <p className="text-sm text-slate-400 dark:text-slate-500 mt-0.5">Tools and languages I have experience with.</p>
          </div>
          <Link
            href="/about"
            className="text-sm text-indigo-600 hover:text-indigo-800 font-medium transition-colors inline-flex items-center gap-1"
          >
            See full stack <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
        <div className="flex flex-wrap gap-2.5">
          {[
            "TypeScript", "React", "Next.js", "Node.js",
            "Python", "React Native", "PostgreSQL", "Firebase",
            "Tailwind CSS", "REST APIs", "Git",
          ].map((tech) => (
            <span
              key={tech}
              className="px-3.5 py-1.5 text-sm font-medium text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full shadow-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Final CTA */}
      <div className="py-10 border-t border-slate-100 flex flex-col items-center gap-4 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
          Interested in working together?
        </h2>
        <p className="text-slate-500 text-base max-w-md">
          I&apos;m open to internships, co-ops, and freelance opportunities — let&apos;s connect.
        </p>
        <Link
          href="/contact"
          className="mt-2 inline-block bg-indigo-600 text-white text-sm font-semibold px-7 py-3.5 rounded-xl hover:bg-indigo-500 active:bg-indigo-700 transition-colors shadow-md shadow-indigo-200"
        >
          Get in Touch
        </Link>
      </div>
    </section>
  );
}
