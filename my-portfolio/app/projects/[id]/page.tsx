import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { projects, getProjectById } from "@/data/projects";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ id: String(p.id) }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const project = getProjectById(Number(id));
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.title} | Andrew Beaver`,
    description: project.description,
  };
}

const CATEGORY_COLORS: Record<string, string> = {
  Web: "bg-blue-50 text-blue-700 border-blue-100",
  Mobile: "bg-emerald-50 text-emerald-700 border-emerald-100",
  Systems: "bg-orange-50 text-orange-700 border-orange-100",
  Data: "bg-violet-50 text-violet-700 border-violet-100",
};

export default async function ProjectDetailPage({ params }: Props) {
  const { id } = await params;
  const project = getProjectById(Number(id));

  if (!project) notFound();

  const {
    title,
    tag,
    category,
    description,
    bullets,
    techStack,
    githubUrl,
    liveUrl,
  } = project;

  return (
    <section className="max-w-3xl mx-auto px-6 py-16">
      {/* Back link */}
      <Link
        href="/projects"
        className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-900 font-medium transition-colors mb-10"
      >
        <span aria-hidden="true">&larr;</span>
        All Projects
      </Link>

      {/* Header */}
      <div className="flex flex-col gap-4 mb-10">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-medium text-slate-400 bg-slate-50 border border-slate-200 px-2.5 py-1 rounded-full">
            {tag}
          </span>
          <span
            className={`text-xs font-medium px-2.5 py-1 rounded-full border ${CATEGORY_COLORS[category] ?? "bg-slate-50 text-slate-600 border-slate-200"}`}
          >
            {category}
          </span>
        </div>
        <h1 className="text-4xl font-bold text-slate-900 tracking-tight leading-tight">
          {title}
        </h1>
        <p className="text-slate-500 text-base leading-relaxed">{description}</p>
      </div>

      {/* Highlights */}
      <div className="mb-10">
        <h2 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">
          Highlights
        </h2>
        <ul className="flex flex-col gap-3">
          {bullets.map((b) => (
            <li key={b} className="flex items-start gap-3 text-slate-700 text-sm leading-relaxed">
              <span className="mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-400" />
              {b}
            </li>
          ))}
        </ul>
      </div>

      {/* Tech stack */}
      <div className="mb-10">
        <h2 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">
          Tech Stack
        </h2>
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="bg-indigo-50 text-indigo-700 text-xs px-3 py-1.5 rounded-full font-medium border border-indigo-100"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Links */}
      <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
        <Link
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 bg-slate-900 text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-slate-700 transition-colors"
        >
          View on GitHub
          <span aria-hidden="true">&rarr;</span>
        </Link>
        {liveUrl && (
          <Link
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 px-5 py-2.5 rounded-lg border border-slate-200 hover:border-slate-300 hover:bg-white transition-colors"
          >
            Live Demo
            <span aria-hidden="true">&rarr;</span>
          </Link>
        )}
      </div>
    </section>
  );
}
