import React from 'react';
import { motion } from 'framer-motion';
import { Book, Heart, Leaf } from 'lucide-react';

const teachings = [
  {
    icon: Book,
    title: 'Four Noble Truths',
    desc: 'Understanding suffering, its origin, cessation, and the path that leads beyond it.',
  },
  {
    icon: Heart,
    title: 'Loving-Kindness',
    desc: 'Cultivate metta: a boundless friendliness toward oneself and all beings.',
  },
  {
    icon: Leaf,
    title: 'Impermanence',
    desc: 'Seeing the changing nature of all things brings clarity and ease.',
  },
];

export default function Teachings() {
  return (
    <section id="teachings" className="relative py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 h-64 w-[80%] rounded-3xl bg-sky-200/30 blur-3xl" />
      </div>
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-800 dark:text-white">Core Teachings</h2>
          <p className="mt-3 text-slate-600/90 dark:text-slate-300/90">Simple insights presented with calm clarity.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {teachings.map((t, i) => (
            <motion.div
              key={t.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group rounded-2xl border border-white/50 dark:border-white/10 bg-white/60 dark:bg-white/10 backdrop-blur p-6 shadow-xl shadow-sky-100/40 dark:shadow-black/30"
            >
              <div className="flex items-center gap-4">
                <div className="grid place-items-center h-12 w-12 rounded-xl bg-gradient-to-br from-sky-500 to-indigo-500 text-white shadow-lg">
                  <t.icon size={22} />
                </div>
                <h3 className="text-lg font-semibold text-slate-800 dark:text-white">{t.title}</h3>
              </div>
              <p className="mt-4 text-slate-600/90 dark:text-slate-300/90 leading-relaxed">{t.desc}</p>
              <div className="mt-6 h-px bg-gradient-to-r from-transparent via-sky-500/40 to-transparent" />
              <button className="mt-4 text-sm text-sky-700 dark:text-sky-300 hover:underline">Read more</button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
