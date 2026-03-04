import type { Metadata } from "next";
import SkillsSection from "@/components/ui/SkillsSection";

export const metadata: Metadata = {
  title: "About | Andrew Beaver",
  description: "Background, skills, and education.",
};

const skillGroups = [
  {
    label: "Languages",
    skills: ["C#", "Kotlin", "Java", "Dart", "C", "C++", "Python", "TypeScript", "JavaScript", "SQL", "HTML/CSS"],
  },
  {
    label: "Web & Backend",
    skills: ["ASP.NET Core", "Node.js", "Express", "Entity Framework", ".NET Framework", "RESTful API"],
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
    skills: ["MVVM", "MVC", "OOP", "Async/Await", "Relational Database Design", "GTFS Realtime", "Windows Forms"],
  },
  {
    label: "Tools & Systems",
    skills: ["Git / GitHub", "Linux (Bash/CLI)", "Mapbox", "Google Maps API", "Google OAuth", "Google Play Services", "Agile Methodology"],
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
          I’m an IT Programming student at Nova Scotia Community College, graduating this spring and continuing into Applied Computer Science at Dalhousie University. I focus on building practical, production-style software systems across web and mobile platforms.
          <br /><br />
          My experience includes full-stack web applications, Android development, and cross-platform mobile apps, along with integrating cloud services, REST APIs, real-time data, and structured database design. I’m particularly interested in application architecture and data flow, building systems that are maintainable, scalable, and thoughtfully structured.
          <br /><br />
          Through academic and personal projects, I’ve developed cloud-deployed platforms, real-time transit and weather tracking applications, and specialized mobile tools involving scheduling logic and persistent data storage.
        </p>
      </div>

      {/* Skills */}
      <div className="animate-fade-in anim-delay-2">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-5">
          Technical Skills/Experience
        </h2>
        <div className="flex flex-col gap-5">
          <SkillsSection groups={skillGroups} />
        </div>
      </div>

      {/* Education */}
      <div className="animate-fade-in anim-delay-3">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Education</h2>
        <div className="flex flex-col gap-4">

          {/* IT Programming */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-6 flex flex-col gap-2 shadow-sm hover:shadow-md hover:border-indigo-200 dark:hover:border-indigo-700 hover:-translate-y-1 transition-all duration-200">
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div>
                  <p className="font-semibold text-slate-900 dark:text-white">
                    <a href="https://www.nscc.ca/programs-and-courses/programs/plandescr.aspx?prg=ITPR&pln=ITPROGRAM" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline dark:text-indigo-400">IT Programming Diploma</a>
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">
                  Nova Scotia Community College - Halifax, NS
                </p>
              </div>
              <span className="shrink-0 inline-flex items-center bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-sm font-semibold px-2.5 py-1 rounded-full border border-indigo-100 dark:border-indigo-800">
                In Progress &middot; Expected 2026
              </span>
            </div>
          </div>

          {/* Dalhousie University */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-6 flex flex-col gap-2 shadow-sm hover:shadow-md hover:border-indigo-200 dark:hover:border-indigo-700 hover:-translate-y-1 transition-all duration-200">
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div>
                  <p className="font-semibold text-slate-900 dark:text-white">
                    <a href="https://www.dal.ca/study/programs/undergraduate/applied-computer-science-bacs.html" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline dark:text-indigo-400">Bachelor of Applied Computer Science Degree</a>
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">
                  Dalhousie University - Halifax, NS
                </p>
              </div>
              <span className="shrink-0 inline-flex items-center bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-sm font-semibold px-2.5 py-1 rounded-full border border-indigo-100 dark:border-indigo-800">
                Admitted &middot; Starts Sep 2026 &middot; Expected 2028
              </span>
            </div>
          </div>

          {/* Business Administration */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-6 flex flex-col gap-2 shadow-sm hover:shadow-md hover:border-indigo-200 dark:hover:border-indigo-700 hover:-translate-y-1 transition-all duration-200">
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div>
                  <p className="font-semibold text-slate-900 dark:text-white">
                    <a href="https://www.nscc.ca/programs-and-courses/programs/plandescr.aspx?prg=BSAD&pln=BSAD-YR1" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline dark:text-indigo-400">Business Administration Diploma</a>
                    <span className="font-normal text-slate-500 dark:text-slate-400"> - Marketing</span>
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">
                  Nova Scotia Community College - Dartmouth, NS
                </p>
              </div>
              <span className="shrink-0 inline-flex items-center bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-sm font-semibold px-2.5 py-1 rounded-full border border-slate-200 dark:border-slate-700">
                2018
              </span>
            </div>
          </div>

          {/* DELF B1 */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-6 flex flex-col gap-2 shadow-sm hover:shadow-md hover:border-indigo-200 dark:hover:border-indigo-700 hover:-translate-y-1 transition-all duration-200">
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div>
                  <p className="font-semibold text-slate-900 dark:text-white">
                    <a href="http://www.delfdalf.fr/level-b1-cefr-common-european-framework-of-reference-for-languages.html" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline dark:text-indigo-400">DELF B1 Certification</a>
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">
                  French Language Proficiency - Issued by the French Ministry of Education
                </p>
              </div>
              <span className="shrink-0 inline-flex items-center bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-sm font-semibold px-2.5 py-1 rounded-full border border-slate-200 dark:border-slate-700">
                2016
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
