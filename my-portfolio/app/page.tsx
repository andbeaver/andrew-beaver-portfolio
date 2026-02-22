import Link from "next/link";

export default function Home() {
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
        I&apos;m a computer science student focused on building reliable,
        practical software. My work centers on backend systems, data handling,
        and clean, maintainable code. I enjoy solving real problems with
        straightforward technical solutions.
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
    </section>
  );
}
