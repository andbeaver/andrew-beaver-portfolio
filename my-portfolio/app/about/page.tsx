import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Andrew Beaver",
  description: "Background, skills, and education.",
};

const skills = [
  "Python",
  "TypeScript",
  "JavaScript",
  "SQL",
  "Next.js",
  "React",
  "Node.js",
  "Git",
  "Linux",
  "Networking",
  "Data Analysis",
  "OOP",
];

export default function AboutPage() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-16 flex flex-col gap-12">
      {/* Bio */}
      <div>
        <h1 className="text-3xl font-bold text-slate-900 tracking-tight mb-4">
          About
        </h1>
        <p className="text-slate-500 leading-relaxed max-w-2xl">
          I&apos;m Andrew Beaver, an IT Programming student with a strong
          interest in systems programming, data engineering, and building tools
          that solve real problems. I focus on writing clean, efficient code and
          understanding how software works at a deeper level. Outside of
          coursework, I work on personal projects that sharpen my skills in
          Python, databases, and backend development.
        </p>
      </div>

      {/* Skills */}
      <div>
        <h2 className="text-xl font-bold text-slate-900 mb-4">
          Technical Skills
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {skills.map((skill) => (
            <div
              key={skill}
              className="bg-white border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-700 text-center shadow-sm hover:border-indigo-300 hover:text-indigo-700 transition-colors"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>

      {/* Education */}
      <div>
        <h2 className="text-xl font-bold text-slate-900 mb-4">
          Education
        </h2>
        <div className="bg-white border border-slate-200 rounded-xl p-6 flex flex-col gap-2 shadow-sm">
          <p className="font-semibold text-slate-900">
            Associate of Applied Science &mdash; IT Programming
          </p>
          <span className="inline-flex self-start items-center bg-indigo-50 text-indigo-600 text-xs font-semibold px-2.5 py-0.5 rounded-full border border-indigo-100">
            In Progress &middot; Expected 2026
          </span>
          <p className="text-slate-500 text-sm leading-relaxed mt-1">
            Coursework includes data structures, database design, systems
            programming, web development, and networking fundamentals.
          </p>
        </div>
      </div>
    </section>
  );
}
