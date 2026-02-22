export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-slate-200">
      <div className="max-w-5xl mx-auto px-6 py-6 text-center text-sm text-slate-400">
        &copy; {year} Andrew Beaver
      </div>
    </footer>
  );
}
