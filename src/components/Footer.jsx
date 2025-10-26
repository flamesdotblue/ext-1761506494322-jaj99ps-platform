import React from 'react';

export default function Footer() {
  return (
    <footer className="relative py-12">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/3 bottom-0 h-56 w-56 rounded-full bg-sky-200/30 blur-3xl" />
      </div>
      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-2xl border border-white/50 dark:border-white/10 bg-white/60 dark:bg-white/10 backdrop-blur p-6 md:p-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-600/90 dark:text-slate-300/90 text-sm">© {new Date().getFullYear()} Serene Dharma. May all beings be at ease.</p>
            <div className="flex gap-6 text-sm text-slate-600/90 dark:text-slate-300/90">
              <a href="#" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">Privacy</a>
              <a href="#" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">Terms</a>
              <a href="#" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
