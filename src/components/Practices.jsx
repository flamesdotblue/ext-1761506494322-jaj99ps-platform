import React from 'react';
import { motion } from 'framer-motion';
import { Bell, Sun, Moon } from 'lucide-react';

const steps = [
  {
    title: 'Settle the posture',
    detail: 'Sit comfortably. Spine upright, shoulders soft. Rest the hands gently.',
    icon: Sun,
  },
  {
    title: 'Rest with the breath',
    detail: 'Let attention rest on natural breathing. Notice the cool inhale, warm exhale.',
    icon: Bell,
  },
  {
    title: 'Meet thoughts kindly',
    detail: 'When the mind wanders, smile inwardly and return with patience and care.',
    icon: Moon,
  },
];

export default function Practices() {
  return (
    <section id="practices" className="relative py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-10 h-64 w-64 rounded-full bg-indigo-300/20 blur-3xl" />
      </div>
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-800 dark:text-white">Gentle Practice</h2>
          <p className="mt-3 text-slate-600/90 dark:text-slate-300/90">Soft animations guide a calming rhythm.</p>
        </div>

        <div className="mt-12 relative">
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-sky-400/40 via-sky-500/40 to-transparent" />

          <div className="space-y-10">
            {steps.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative grid md:grid-cols-2 gap-6"
              >
                <div className={`order-2 md:order-${i % 2 === 0 ? '1' : '2'} md:col-span-1`}> 
                  <div className="rounded-2xl border border-white/50 dark:border-white/10 bg-white/60 dark:bg-white/10 backdrop-blur p-6 shadow-xl shadow-sky-100/40 dark:shadow-black/30">
                    <div className="flex items-center gap-3">
                      <span className="grid place-items-center h-10 w-10 rounded-xl bg-gradient-to-br from-sky-500 to-indigo-500 text-white shadow-md">
                        <s.icon size={18} />
                      </span>
                      <h3 className="text-lg font-semibold text-slate-800 dark:text-white">{s.title}</h3>
                    </div>
                    <p className="mt-3 text-slate-600/90 dark:text-slate-300/90 leading-relaxed">{s.detail}</p>
                  </div>
                </div>
                <div className={`order-1 md:order-${i % 2 === 0 ? '2' : '1'} md:col-span-1 flex md:justify-center`}>
                  <motion.div
                    initial={{ scale: 0.96, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="h-40 w-full md:w-80 rounded-2xl bg-gradient-to-br from-white/60 to-white/20 dark:from-white/10 dark:to-white/5 backdrop-blur border border-white/50 dark:border-white/10 shadow-inner"
                  >
                    <div className="h-full w-full rounded-2xl bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.18),transparent_55%)]" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div id="contact" className="mt-16">
          <div className="rounded-2xl border border-white/50 dark:border-white/10 bg-white/60 dark:bg-white/10 backdrop-blur p-6 md:p-8 shadow-xl shadow-sky-100/40 dark:shadow-black/30">
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div>
                <h3 className="text-xl font-semibold text-slate-800 dark:text-white">Join a moment of stillness</h3>
                <p className="mt-2 text-slate-600/90 dark:text-slate-300/90">Subscribe for gentle reminders and short reflections on mindfulness.</p>
              </div>
              <form onSubmit={(e) => e.preventDefault()} className="flex gap-3">
                <input type="email" required placeholder="you@example.com" className="flex-1 rounded-xl bg-white/70 dark:bg-white/10 border border-white/60 dark:border-white/10 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-sky-400/60 placeholder:text-slate-400" />
                <button className="rounded-xl px-5 py-3 bg-sky-600 text-white shadow-lg shadow-sky-200/60 hover:bg-sky-700 transition-colors">Notify me</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
