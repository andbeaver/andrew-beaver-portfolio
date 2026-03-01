import Link from "next/link";
import Image from "next/image";
import ProjectCard from "@/components/projects/ProjectCard";
import FadeInSection from "@/components/ui/FadeInSection";
import { projects } from "@/data/projects";
import AvailabilityBadge from "@/components/ui/AvailabilityBadge";
import TypeWriter from "@/components/ui/TypeWriter";
import TechTooltip from "@/components/ui/TechTooltip";
// Photo by <a href="https://unsplash.com/@nathfx?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">natasha</a> on <a href="https://unsplash.com/photos/body-of-water-across-city-buildings-093I0j4A73Y?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
      // <a href="https://www.flaticon.com/free-icons/wildlife" title="wildlife icons">Wildlife icons created by Freepik - Flaticon</a>
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
            <span className="inline-flex items-center gap-3">
              <span>Andrew Beaver</span>
              <span
                role="group"
                aria-label="waving hand"
                tabIndex={0}
                className="wave-hand-wrapper select-none"
              >
                <span className="wave-hand-emoji" aria-hidden>
                  👋
                </span>
              </span>
            </span>
          </h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">📍Halifax, Nova Scotia, Canada</p>
          <p className="text-xl sm:text-2xl text-indigo-600 font-semibold h-8 sm:h-9">
            <TypeWriter
              phrases={[
                "Full-Stack Developer",
                "Web & Mobile Applications",
                "API & Cloud Solutions",
              ]}
            />
          </p>
        </div>

        {/* Supporting paragraph — 1–2 sentences */}
        <p className="text-base sm:text-lg text-slate-500 dark:text-slate-400 leading-relaxed max-w-2xl animate-fade-in anim-delay-3">
          I design and build scalable applications for web and mobile - spanning full-stack cloud systems, real-time data, and cross-platform development.
          My focus is clean architecture and software that delivers lasting, practical value.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center gap-4 pt-1 animate-fade-in anim-delay-4">
          <Link
            href="/projects"
            className="inline-block bg-indigo-600 text-white text-sm font-semibold px-7 py-3.5 rounded-xl hover:bg-indigo-500 active:bg-indigo-700 transition-colors transition-transform duration-200 ease-out transform hover:-translate-y-1 hover:scale-105 hover:shadow-lg shadow-md shadow-indigo-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
          >
            View Projects
          </Link>
          <Link
            href="/contact"
            className="inline-block text-slate-700 text-sm dark:text-slate-400 font-semibold px-7 py-3.5 rounded-xl border border-slate-200 hover:border-indigo-300 hover:text-indigo-600 hover:bg-white active:bg-slate-50 transition-colors transition-transform duration-200 ease-out transform hover:-translate-y-1 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
          >
            Contact Me
          </Link>
        </div>

      </div>

      {/* Scroll cue */}
      <div className="flex justify-center -mt-8 mb-2 animate-bounce">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-slate-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
      <div className="relative w-full h-48 sm:h-64 overflow-hidden rounded-2xl my-6">
        <Image
          src="/halifax-skyline.jpg"
          alt="Halifax skyline"
          fill
          className="object-cover object-[center_82%] brightness-90 saturate-[0.9]"
          priority
          sizes="(max-width: 1024px) 100vw, 1024px"
        />
        {/* subtle edge fades: top, bottom, and now sides */}
        <div className="absolute left-0 top-0 bottom-0 w-8 pointer-events-none bg-gradient-to-r from-slate-50/90 dark:from-slate-950/90 to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-8 pointer-events-none bg-gradient-to-l from-slate-50/90 dark:from-slate-950/90 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-slate-50 dark:from-slate-950 to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-slate-50 dark:from-slate-950 to-transparent" />
        {/* caption */}
        <p className="absolute bottom-3 right-4 text-xs text-white/50 select-none">Halifax, NS</p>
      </div>
      {featured.length > 0 && (
        <FadeInSection>
        <div className="py-10 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-5">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">Featured Projects</h2>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">A few highlights from my work.</p>
            </div>
            <Link
              href="/projects"
              className="text-sm text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 font-medium transition-colors inline-flex items-center gap-1"
            >
              All projects <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {featured.map((project, i) => (
              <ProjectCard key={project.id} {...project} index={i} />
            ))}
          </div>
        </div>
        </FadeInSection>
      )}

      {/* Core Technologies */}
      <FadeInSection delay="100ms">
        <div className="py-10 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-5">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">Core Technologies</h2>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">Tools and languages I have experience with.</p>
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
            "Python", "React Native", "PostgreSQL",
            "Tailwind CSS", "REST APIs", "Git",
          ].map((tech) => (
            <TechTooltip key={tech} label={tech} variant="pill" />
          ))}
        </div>
      </div>
      </FadeInSection>

      {/* Final CTA */}
      <FadeInSection delay="100ms">
      <div className="py-10 border-t border-slate-100 flex flex-col items-center gap-4 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
          Interested in working together?
        </h2>
        <p className="text-slate-500 text-base max-w-md">
          I&apos;m open to internships, co-ops, and freelance opportunities. Let&apos;s connect!
        </p>
        <Link
          href="/contact"
          className="mt-2 inline-block bg-indigo-600 text-white text-sm font-semibold px-7 py-3.5 rounded-xl hover:bg-indigo-500 active:bg-indigo-700 transition-colors transition-transform duration-200 ease-out transform hover:-translate-y-1 hover:scale-105 hover:shadow-lg shadow-md shadow-indigo-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
        >
          Get in Touch
        </Link>
      </div>
      </FadeInSection>
    </section>
  );
}
