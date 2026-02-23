"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { createPortal } from "react-dom";

/** Tooltip data — add/edit entries as you like */
const tooltips: Record<string, string> = {
  // Languages
  "C#":                       "Primary language for .NET full-stack apps",
  "Kotlin":                   "Android development with Jetpack Compose",
  "Java":                     "OOP fundamentals & Android apps",
  "Dart":                     "Cross-platform mobile with Flutter",
  "C/C++":                    "Systems programming & low-level concepts",
  "Python":                   "Scripting, data processing & ML.NET pipelines",
  "TypeScript":               "Type-safe web apps — React, Next.js, Node",
  "JavaScript":               "Frontend & backend web development",
  "SQL":                      "Relational database design & queries",
  "HTML/CSS":                 "Semantic markup & responsive styling",

  // Web & Backend
  "ASP.NET Core MVC":         "Full-stack web apps with C# & Razor",
  "Node.js":                  "Server-side JS for APIs & tooling",
  "Express":                  "REST API framework for Node.js",
  "Entity Framework Core":    "ORM for SQL Server & database migrations",
  ".NET Framework":           "Desktop & web apps on Windows",
  "RESTful API":              "Designing & consuming REST endpoints",

  // Frontend & Mobile
  "React":                    "Component-based UIs & state management",
  "Next.js":                  "SSR/SSG React framework — this portfolio!",
  "React Native":             "Cross-platform mobile apps with JS/TS",
  "Flutter":                  "Cross-platform mobile with Dart widgets",
  "Jetpack Compose":          "Modern declarative Android UI toolkit",
  "Vite":                     "Fast dev server & build tool for frontend",
  "Material 3":               "Google's Material Design system for mobile",

  // Databases & Cloud
  "SQL Server":               "Relational DB for .NET projects",
  "RoomDB":                   "Local persistence on Android",
  "Azure Blob Storage":       "Cloud file/image storage",
  "Azure App Service":        "Cloud deployment for web apps",
  "ML.NET":                   "Machine learning in .NET ecosystem",
  "PostgreSQL":               "Open-source relational database",
  "Firebase":                 "Auth, Firestore & real-time backend",

  // Architecture & Patterns
  "MVVM":                     "Model-View-ViewModel for mobile & WPF",
  "MVC":                      "Model-View-Controller for web apps",
  "OOP":                      "Object-oriented design principles",
  "Async/Await & Coroutines": "Non-blocking I/O & concurrency patterns",
  "Relational Database Design":"Schema design, normalization & ERDs",
  "GTFS Realtime":            "Real-time transit data feeds & parsing",
  "Windows Forms":            "Desktop GUI apps on .NET",

  // Tools & Systems
  "Git / GitHub":             "Version control & collaboration",
  "Linux (Bash/CLI)":         "Shell scripting & server admin",
  "Mapbox SDK":               "Custom map rendering & geolocation",
  "Google Maps API":          "Maps, geocoding & directions",
  "Google OAuth":             "Secure authentication with Google",
  "Google Play Services":     "Android platform integrations",
  "Agile":                    "Sprint planning, standups & iterative dev",

  // Home page extras
  "Tailwind CSS":             "Utility-first CSS framework",
  "REST APIs":                "Designing & consuming RESTful services",
  "Git":                      "Version control & branching workflows",
};

interface TechTooltipProps {
  label: string;
  className?: string;
  variant?: "pill" | "tag";
}

const variantStyles = {
  pill: "px-3.5 py-1.5 text-sm font-medium text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full shadow-sm hover:border-indigo-300 dark:hover:border-indigo-700 hover:text-indigo-700 dark:hover:text-indigo-400 transition-colors",
  tag:  "bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-3.5 py-1.5 text-sm text-slate-700 dark:text-slate-300 shadow-sm hover:border-indigo-300 dark:hover:border-indigo-700 hover:text-indigo-700 dark:hover:text-indigo-400 transition-colors",
};

export default function TechTooltip({ label, className = "", variant }: TechTooltipProps) {
  const [show, setShow] = useState(false);
  const [coords, setCoords] = useState<{ top: number; left: number; above: boolean }>({ top: 0, left: 0, above: true });
  const [mounted, setMounted] = useState(false);
  const wrapperRef = useRef<HTMLSpanElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  const tip = tooltips[label];

  // Ensure portal only renders on client
  useEffect(() => {
    setMounted(true);
  }, []);

  const updateCoords = useCallback(() => {
    const el = wrapperRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const above = rect.top > 80;
    setCoords({
      left: rect.left + rect.width / 2,
      top: above ? rect.top - 8 : rect.bottom + 8,
      above,
    });
  }, []);

  const handleEnter = useCallback(() => {
    clearTimeout(timeoutRef.current);
    updateCoords();
    setShow(true);
  }, [updateCoords]);

  const handleLeave = useCallback(() => {
    timeoutRef.current = setTimeout(() => setShow(false), 100);
  }, []);

  useEffect(() => {
    return () => clearTimeout(timeoutRef.current);
  }, []);

  const tooltip =
    tip && show && mounted
      ? createPortal(
          <span
            role="tooltip"
            style={{
              position: "fixed",
              top: coords.top,
              left: coords.left,
              transform: coords.above ? "translate(-50%, -100%)" : "translate(-50%, 0%)",
              zIndex: 9999,
            }}
            className="px-3 py-1.5 text-xs font-medium text-white bg-slate-800 dark:bg-slate-700 rounded-lg shadow-lg whitespace-nowrap pointer-events-none"
          >
            {tip}
            {/* Arrow */}
            <span
              style={{
                position: "absolute",
                left: "50%",
                transform: "translateX(-50%) rotate(45deg)",
                width: 8,
                height: 8,
                ...(coords.above
                  ? { bottom: -4 }
                  : { top: -4 }),
              }}
              className="bg-slate-800 dark:bg-slate-700"
            />
          </span>,
          document.body
        )
      : null;

  return (
    <span
      ref={wrapperRef}
      className={`inline-flex cursor-default ${variant ? variantStyles[variant] : ""} ${className}`}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      onFocus={handleEnter}
      onBlur={handleLeave}
      tabIndex={0}
    >
      {label}
      {tooltip}
    </span>
  );
}
