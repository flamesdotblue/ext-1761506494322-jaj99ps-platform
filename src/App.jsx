import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Teachings from './components/Teachings';
import Practices from './components/Practices';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-slate-50 text-slate-800 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 font-sans scroll-smooth">
      <Navbar />
      <Hero />
      <main className="relative z-10">
        <Teachings />
        <Practices />
      </main>
      <Footer />
    </div>
  );
}
