import React from 'react';
import { Menu, Sun, Moon } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [dark, setDark] = React.useState(() => {
    if (typeof window === 'undefined') return false;
    return document.documentElement.classList.contains('dark');
  });

  React.useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [dark]);

  return (
    <header className="fixed top-0 left-0 right-0 z-30">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mt-4 rounded-2xl backdrop-blur bg-white/40 dark:bg-white/10 border border-white/40 dark:border-white/10 shadow-lg shadow-sky-100/40 dark:shadow-black/20">
          <nav className="flex items-center justify-between px-4 py-3 md:px-6">
            <a href="#" className="flex items-center gap-2 select-none">
              <span className="inline-block h-2 w-2 rounded-full bg-sky-400 shadow-[0_0_20px_4px] shadow-sky-300/60"></span>
              <span className="text-slate-700 dark:text-slate-100 tracking-tight font-semibold">Serene Dharma</span>
            </a>
            <div className="hidden md:flex items-center gap-8 text-sm text-slate-700/90 dark:text-slate-200/90">
              <a href="#teachings" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">Teachings</a>
              <a href="#practices" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">Practices</a>
              <a href="#contact" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">Contact</a>
              <button aria-label="Toggle theme" onClick={() => setDark(v => !v)} className="p-2 rounded-xl border border-white/50 dark:border-white/10 hover:bg-white/50 dark:hover:bg-white/5 transition-colors">
                {dark ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            </div>
            <div className="md:hidden flex items-center gap-2">
              <button aria-label="Toggle theme" onClick={() => setDark(v => !v)} className="p-2 rounded-xl border border-white/50 dark:border-white/10 hover:bg-white/50 dark:hover:bg-white/5 transition-colors">
                {dark ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <button aria-label="Open menu" onClick={() => setOpen(o => !o)} className="p-2 rounded-xl border border-white/50 dark:border-white/10 hover:bg-white/50 dark:hover:bg-white/5 transition-colors">
                <Menu size={20} />
              </button>
            </div>
          </nav>
          {open && (
            <div className="md:hidden px-6 pb-4 text-slate-700/90 dark:text-slate-200/90">
              <div className="flex flex-col gap-3">
                <a href="#teachings" onClick={() => setOpen(false)} className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">Teachings</a>
                <a href="#practices" onClick={() => setOpen(false)} className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">Practices</a>
                <a href="#contact" onClick={() => setOpen(false)} className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">Contact</a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
