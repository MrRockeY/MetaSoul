"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
  }, [isMenuOpen]);

  return (
    <>
      {/* NAV BAR */}
      <motion.nav
        initial={{ y: "-100%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-[100]
          transition-all duration-500
          ${isScrolled || isMenuOpen
            ? "backdrop-blur-xl bg-black/60 border-b border-white/10 py-4"
            : "py-6"}
        `}
      >
        <div className="mx-auto w-full max-w-[1400px] container-padding flex items-center justify-between">
          
          {/* LOGO */}
            <a
              href="/"
              className="text-2xl font-semibold tracking-tighter z-[110] interactive"
            >
              APEX<span className="text-[#C9A962]">.</span>
            </a>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-12">
              {["Services", "Process", "About", "Results"].map((item) => (
                <a
                  key={item}
                  href={`/#${item.toLowerCase()}`}
                  className="text-[10px] uppercase tracking-[0.35em] font-black
                    text-white/70 hover:text-white transition-colors interactive"
                >
                  {item}
                </a>
              ))}

            <a
              href="#contact"
              className="px-8 py-3 bg-[#C9A962] text-black text-[10px]
                uppercase tracking-[0.25em] font-black
                hover:scale-105 transition-transform interactive"
            >
              Book a Call
            </a>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex flex-col gap-1.5 z-[110] interactive"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={isMenuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              className="w-8 h-[2px] bg-white block"
            />
            <motion.span
              animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-8 h-[2px] bg-white block"
            />
            <motion.span
              animate={isMenuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              className="w-8 h-[2px] bg-white block"
            />
          </button>
        </div>
      </motion.nav>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[90] bg-black flex flex-col justify-center gap-10 px-6"
          >
            {["Services", "Process", "About", "Results"].map((item) => (
                <a
                  key={item}
                  href={`/#${item.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-2xl uppercase tracking-[0.4em] font-black
                    text-white hover:text-[#C9A962] transition-colors"
                >
                  {item}
                </a>
            ))}
            <a
              href="/#contact"
              onClick={() => setIsMenuOpen(false)}
              className="mt-6 inline-block w-fit px-10 py-4
                bg-[#C9A962] text-black text-[12px]
                uppercase tracking-[0.35em] font-black"
            >
              Book a Call
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
