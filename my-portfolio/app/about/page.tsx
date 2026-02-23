import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Andrew Beaver",
  description: "Background, skills, and education.",
};

const skillGroups = [
  {
    label: "Languages",
    skills: ["C#", "Kotlin", "Java", "Dart", "C/C++", "Python", "TypeScript", "JavaScript", "SQL", "HTML/CSS"],
  },
  {
    label: "Web & Backend",
    skills: ["ASP.NET Core MVC", "Node.js", "Express", "Entity Framework Core", ".NET Framework", "RESTful API"],
  },
  {
    label: "Frontend & Mobile",
    skills: ["React", "Next.js", "React Native", "Flutter", "Jetpack Compose", "Vite", "Material 3"],
  },
  {
    label: "Databases & Cloud",
    skills: ["SQL Server", "RoomDB", "Azure Blob Storage", "Azure App Service", "ML.NET"],
  },
  {
    label: "Architecture & Patterns",
    skills: ["MVVM", "MVC", "OOP", "Async/Await & Coroutines", "Relational Database Design", "GTFS Realtime", "Windows Forms"],
  },
  {
    label: "Tools & Systems",
    skills: ["Git / GitHub", "Linux (Bash/CLI)", "Mapbox SDK", "Google Maps API", "Google OAuth", "Google Play Services", "Agile"],
  },
];

export default function AboutPage() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-16 flex flex-col gap-12">
      {/* Bio */}
      <div className="animate-fade-in anim-delay-1">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight mb-4">
          About
        </h1>
        <p className="text-slate-500 dark:text-slate-400 leading-relaxed max-w-2xl">
          I’m an IT Programming student focused on building practical, production-style software systems. My work spans full-stack web applications, Android development, and cross-platform mobile apps, with experience integrating cloud services, REST APIs, real-time data feeds, and structured database design.
          <br /><br />
          I’m particularly interested in application architecture, data flow, and building systems that are maintainable and scalable. Whether working independently or in a team setting, I prioritize clear structure, modular components, and thoughtful implementation over quick shortcuts.
          <br /><br />
          Through academic projects, hackathons, and personal development, I’ve built cloud-deployed platforms, real-time transit tracking apps, and domain-specific mobile tools involving scheduling logic and data persistence.
        </p>
      </div>

      {/* Skills */}
      <div className="animate-fade-in anim-delay-2">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-5">
          Technical Skills/Experience
        </h2>
        <div className="flex flex-col gap-5">
          {skillGroups.map((group) => (
            <div key={group.label}>
              <p className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-2.5">
                {group.label}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-3.5 py-1.5 text-sm text-slate-700 dark:text-slate-300 shadow-sm hover:border-indigo-300 dark:hover:border-indigo-700 hover:text-indigo-700 dark:hover:text-indigo-400 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Education */}
      <div className="animate-fade-in anim-delay-3">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Education</h2>
        <div className="flex flex-col gap-4">

          {/* IT Programming */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-6 flex flex-col gap-2 shadow-sm">
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div>
                  <p className="font-semibold text-slate-900 dark:text-white">IT Programming</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">
                  Nova Scotia Community College - Halifax, NS
                </p>
              </div>
              <span className="shrink-0 inline-flex items-center bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-xs font-semibold px-2.5 py-1 rounded-full border border-indigo-100 dark:border-indigo-800">
                In Progress &middot; Expected 2026
              </span>
            </div>
          </div>

          {/* Business Administration */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-6 flex flex-col gap-2 shadow-sm">
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div>
                  <p className="font-semibold text-slate-900 dark:text-white">
                    Business Administration Diploma
                    <span className="font-normal text-slate-500 dark:text-slate-400"> - Marketing</span>
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">
                  Nova Scotia Community College - Dartmouth, NS
                </p>
              </div>
              <span className="shrink-0 inline-flex items-center bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs font-semibold px-2.5 py-1 rounded-full border border-slate-200 dark:border-slate-700">
                2018
              </span>
            </div>
          </div>

          {/* DELF B1 */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-6 flex flex-col gap-2 shadow-sm">
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div>
                  <p className="font-semibold text-slate-900 dark:text-white">DELF B1 Certification</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">
                  French Language Proficiency - Issued by the French Ministry of Education
                </p>
              </div>
              <span className="shrink-0 inline-flex items-center bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs font-semibold px-2.5 py-1 rounded-full border border-slate-200 dark:border-slate-700">
                2016
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
