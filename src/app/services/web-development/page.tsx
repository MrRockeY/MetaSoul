"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Lenis from "lenis";
import { gsap } from "gsap";
import Link from "next/link";

export default function WebDevelopment() {
  const container = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1.2,
    });
    (window as any).lenis = lenis;
    function raf(t: number) { lenis.raf(t); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);

    const ctx = gsap.context(() => {
      gsap.from(".svc-hero-card", { y: 24, opacity: 0, duration: 0.8, stagger: 0.08, ease: "power3.out" });
      gsap.from(".svc-feature", { y: 18, opacity: 0, duration: 0.7, stagger: 0.06, delay: 0.2, ease: "power3.out" });
    }, container);

    return () => {
      lenis.destroy();
      try { delete (window as any).lenis; } catch {}
      ctx.revert();
    };
  }, []);

  return (
    <main ref={container} className="min-h-screen bg-black text-white pt-36 pb-24 container-padding">
      <div className="max-w-6xl mx-auto">
        <Link href="/" className="text-accent text-[10px] uppercase tracking-[0.4em] font-black mb-8 block hover:translate-x-2 transition-transform">← Back</Link>

        <section className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h1 className="font-display mb-6">Web Development <span className="text-accent italic">Services</span></h1>
            <p className="text-muted-foreground font-medium mb-8">Enterprise-grade websites built for performance, accessibility and scale. Examples below showcase micro-interactivity, progressive loading and rich UI elements.</p>
            <div className="flex gap-4">
              <a href="#work" className="px-8 py-4 bg-accent text-accent-foreground font-black uppercase tracking-[0.2em] text-[10px] interactive">See Examples</a>
              <a href="/#contact" className="px-8 py-4 border border-white/10 font-black uppercase tracking-[0.2em] text-[10px] interactive">Book a Call</a>
            </div>
          </div>

          <div className="svc-hero-card p-8 bg-[#070707] border border-white/5 rounded-md">
            <div className="h-44 bg-gradient-to-br from-accent/8 to-transparent rounded-md p-6 flex flex-col justify-between">
              <div>
                <div className="text-sm text-muted-foreground uppercase tracking-[0.3em]">Featured Build</div>
                <div className="text-2xl font-black mt-4">Modern SaaS Dashboard</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-8 bg-white/5 rounded" />
                <div className="w-28 h-8 bg-white/5 rounded" />
              </div>
            </div>
          </div>
        </section>

        <section id="work" className="grid md:grid-cols-3 gap-8">
          {[
            { title: 'Performance', desc: 'Optimised bundles, SSR, CDN strategies.' },
            { title: 'Scalability', desc: 'Microservices-ready, API-first designs.' },
            { title: 'Accessibility', desc: 'WCAG-aware components and tests.' },
          ].map((f, i) => (
            <motion.div key={i} className="svc-feature p-8 bg-[#0b0b0b] border border-white/5 rounded-md interactive" whileHover={{ y: -6 }}>
              <h4 className="text-accent text-sm tracking-[0.3em] uppercase font-black mb-3">{f.title}</h4>
              <p className="text-muted-foreground">{f.desc}</p>
            </motion.div>
          ))}
        </section>

        <section className="mt-20">
          <h3 className="font-display mb-8">Sample Components</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 bg-[#080808] border border-white/5 rounded-md">
              <div className="mb-4 text-muted-foreground">Interactive Card</div>
              <div className="h-40 rounded-md bg-gradient-to-tr from-accent/6 to-transparent p-6">Preview area with subtle parallax and hover states.</div>
            </div>
            <div className="p-6 bg-[#080808] border border-white/5 rounded-md">
              <div className="mb-4 text-muted-foreground">Animated Stats</div>
              <div className="h-40 rounded-md p-6">Count-ups and sparkline placeholders.</div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
