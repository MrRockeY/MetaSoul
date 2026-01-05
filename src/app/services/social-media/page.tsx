"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Lenis from "lenis";
import { gsap } from "gsap";
import Link from "next/link";

export default function SocialMedia() {
  const root = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const lenis = new Lenis({ duration: 1.2, smoothWheel: true });
    (window as any).lenis = lenis;
    function raf(t: number) { lenis.raf(t); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);

    const ctx = gsap.context(() => {
      gsap.from(".sm-hero", { y: 20, opacity: 0, duration: 0.8 });
      gsap.from(".sm-card", { y: 12, opacity: 0, duration: 0.7, stagger: 0.08 });
    }, root);

    return () => { lenis.destroy(); try { delete (window as any).lenis; } catch {} ; ctx.revert(); };
  }, []);

  return (
    <main ref={root} className="min-h-screen bg-black text-white pt-36 pb-24 container-padding">
      <div className="max-w-6xl mx-auto">
        <Link href="/" className="text-accent text-[10px] uppercase tracking-[0.4em] font-black mb-8 block hover:translate-x-2 transition-transform">← Back</Link>

        <section className="sm-hero mb-12">
          <h1 className="font-display mb-4">Social Media <span className="text-accent italic">Growth</span></h1>
          <p className="text-muted-foreground">Strategy-driven content, creative production and paid funnels to scale brand reach.</p>
        </section>

        <section className="grid md:grid-cols-3 gap-8">
          {[
            { title: 'Content', desc: 'Short-form video and creative templates.' },
            { title: 'Paid Ads', desc: 'High-performance funnel creatives.' },
            { title: 'Community', desc: 'Organic growth and moderation.' },
          ].map((c, i) => (
            <motion.div key={i} className="sm-card p-6 bg-[#070707] border border-white/5 rounded-md interactive" whileHover={{ y: -6 }}>
              <div className="text-accent text-sm uppercase tracking-[0.3em] font-black mb-2">{c.title}</div>
              <div className="text-muted-foreground">{c.desc}</div>
            </motion.div>
          ))}
        </section>

        <section className="mt-16">
          <h3 className="font-display mb-8">Creative Examples</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[1,2,3].map(i => (
              <div key={i} className="p-4 bg-[#080808] border border-white/5 rounded-md">Carousel / Reel preview {i}</div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
