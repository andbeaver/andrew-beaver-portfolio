"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

interface ProjectCardProps {
  id: number;
  title: string;
  tag: string;
  description: string;
  techStack: string[];
  bullets: string[];
  githubUrl: string;
  liveUrl?: string;
  index?: number;
}

const MAX_TILT = 4;
const STAGGER_MS = 120;

export default function ProjectCard({
  id,
  title,
  tag,
  description,
  techStack,
  bullets,
  githubUrl,
  liveUrl,
  index = 0,
}: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tiltStyle, setTiltStyle] = useState<React.CSSProperties>({});
  const [visible, setVisible] = useState(false);

  // Scroll-triggered staggered entrance
  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), index * STAGGER_MS);
          observer.disconnect();
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -30px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [index]);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el || window.innerWidth < 768) return;

    const rect = el.getBoundingClientRect();
    const xNorm = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const yNorm = ((e.clientY - rect.top) / rect.height) * 2 - 1;

    setTiltStyle({
      transform: `perspective(600px) rotateX(${-yNorm * MAX_TILT}deg) rotateY(${xNorm * MAX_TILT}deg) scale3d(1.02, 1.02, 1.02)`,
      transition: "transform 0.1s ease-out",
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setTiltStyle({
      transform: "perspective(600px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
      transition: "transform 0.4s ease-out",
    });
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={tiltStyle}
      className={`bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-6 flex flex-col gap-5 shadow-sm hover:shadow-md hover:border-indigo-200 dark:hover:border-indigo-700 transition-all duration-500 will-change-transform ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-6"
      }`}
    >
      {/* Header */}
      <div className="flex flex-col gap-1.5">
        <div className="flex items-start justify-between flex-wrap gap-x-3 gap-y-1.5">
          <h3 className="font-bold text-slate-900 dark:text-white text-xl leading-snug min-w-0">
            <Link
              href={`/projects/${id}`}
              className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              {title}
            </Link>
          </h3>
          <span className="shrink-0 text-xs font-medium text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-2.5 py-1 rounded-full">
            {tag}
          </span>
        </div>
        <p className="text-slate-500 text-sm leading-relaxed">{description}</p>
      </div>

      {/* Bullets */}
      <ul className="flex flex-col gap-1.5">
        {bullets.map((b) => (
          <li key={b} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300">
            <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-400" />
            {b}
          </li>
        ))}
      </ul>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-2">
        {techStack.map((tech) => (
          <span
            key={tech}
            className="bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-400 text-xs px-2.5 py-1 rounded-full font-medium border border-indigo-100 dark:border-indigo-800"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="mt-auto flex items-center gap-4">
        <Link
          href={`/projects/${id}`}
          className="text-sm text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 font-medium transition-colors inline-flex items-center gap-1"
        >
          View Details
          <span aria-hidden="true">&rarr;</span>
        </Link>
        <Link
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 font-medium transition-colors inline-flex items-center gap-1"
        >
          GitHub
          <span aria-hidden="true">&rarr;</span>
        </Link>
        {liveUrl && (
          <Link
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-slate-500 hover:text-slate-900 font-medium transition-colors inline-flex items-center gap-1"
          >
            Live Demo
            <span aria-hidden="true">&rarr;</span>
          </Link>
        )}
      </div>
    </div>
  );
}
