import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative h-[90vh] min-h-[640px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/vK0TK9mHEhvY3bf1/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white/80 dark:from-slate-950/50 dark:via-slate-950/30 dark:to-slate-950/70" />
        <div className="absolute -left-16 top-24 h-72 w-72 rounded-full bg-sky-300/30 blur-3xl" />
        <div className="absolute right-0 bottom-10 h-72 w-72 rounded-full bg-indigo-300/20 blur-3xl" />
      </div>

      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/50 dark:border-white/10 bg-white/60 dark:bg-white/10 backdrop-blur px-3 py-1 text-xs text-slate-700 dark:text-slate-200 shadow-sm">
              Gentle presence • Modern design
            </span>
            <h1 className="mt-5 text-4xl md:text-6xl font-semibold tracking-tight text-slate-800 dark:text-white">
              A serene place to explore Buddhism
            </h1>
            <p className="mt-4 text-base md:text-lg leading-relaxed text-slate-600/90 dark:text-slate-300/90">
              Calm interfaces, clear teachings, and mindful practices. Breathe, soften, and begin your journey inward.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#teachings" className="inline-flex items-center justify-center rounded-xl px-5 py-3 bg-sky-600 text-white shadow-lg shadow-sky-200/60 hover:bg-sky-700 transition-colors">
                Explore Teachings
              </a>
              <a href="#practices" className="inline-flex items-center justify-center rounded-xl px-5 py-3 border border-white/60 dark:border-white/10 bg-white/50 dark:bg-white/10 backdrop-blur text-slate-800 dark:text-slate-100 hover:bg-white/70 dark:hover:bg-white/15 transition-colors">
                Begin Practice
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
