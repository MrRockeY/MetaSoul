"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Lenis from "lenis";
import { gsap } from "gsap";
import Link from "next/link";

export default function GraphicDesign() {
  const root = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const lenis = new Lenis({ duration: 1.2, smoothWheel: true });
    (window as any).lenis = lenis;
    function raf(t: number) { lenis.raf(t); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);

    const ctx = gsap.context(() => {
      gsap.from(".gd-hero", { y: 20, opacity: 0, duration: 0.8, ease: "power3.out" });
      gsap.from(".gd-tile", { scale: 0.98, opacity: 0, duration: 0.7, stagger: 0.08, delay: 0.12 });
    }, root);

    return () => { lenis.destroy(); try { delete (window as any).lenis; } catch {} ; ctx.revert(); };
  }, []);

  return (
    <main ref={root} className="min-h-screen bg-black text-white pt-36 pb-24 container-padding">
      <div className="max-w-6xl mx-auto">
        <Link href="/" className="text-accent text-[10px] uppercase tracking-[0.4em] font-black mb-8 block hover:translate-x-2 transition-transform">← Back</Link>

        <header className="gd-hero mb-12">
          <h1 className="font-display mb-4">Graphic Design <span className="text-accent italic">Studio</span></h1>
          <p className="text-muted-foreground">Premium visual systems, motion identity and brand assets crafted for enterprise clarity.</p>
        </header>

        <section className="grid md:grid-cols-3 gap-6">
          {[1,2,3,4,5,6].map(i => (
            <motion.div key={i} className="gd-tile bg-[#070707] border border-white/5 rounded-md p-6 interactive" whileHover={{ scale: 1.02 }}>
              <div className="h-36 bg-gradient-to-br from-accent/8 to-transparent rounded-md mb-4" />
              <div className="text-sm text-muted-foreground">Project {i}</div>
              <div className="text-white font-black mt-2">Asset Preview</div>
            </motion.div>
          ))}
        </section>

        <section className="mt-16">
          <h3 className="font-display mb-8">Motion Studies</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 bg-[#080808] border border-white/5 rounded-md">Micro-interactions and animated logo work.</div>
            <div className="p-6 bg-[#080808] border border-white/5 rounded-md">Complex transitions and reusable motion tokens.</div>
          </div>
        </section>
      </div>
    </main>
  );
}
