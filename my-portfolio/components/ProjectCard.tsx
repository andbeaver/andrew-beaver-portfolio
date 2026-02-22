import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
}

export default function ProjectCard({
  title,
  description,
  techStack,
  githubUrl,
}: ProjectCardProps) {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6 flex flex-col gap-4 shadow-sm hover:shadow-md hover:border-indigo-200 transition-all">
      <div>
        <h3 className="font-semibold text-slate-900 text-lg leading-snug">
          {title}
        </h3>
        <p className="text-slate-500 text-sm mt-2 leading-relaxed">
          {description}
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        {techStack.map((tech) => (
          <span
            key={tech}
            className="bg-indigo-50 text-indigo-700 text-xs px-2.5 py-1 rounded-full font-medium border border-indigo-100"
          >
            {tech}
          </span>
        ))}
      </div>

      <Link
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto text-sm text-indigo-600 hover:text-indigo-800 font-medium transition-colors inline-flex items-center gap-1"
      >
        View on GitHub
        <span aria-hidden="true">&rarr;</span>
      </Link>
    </div>
  );
}
