"use client";

import { useGsapContext } from "../hooks/use-gsap-context";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useInView, useSpring } from "framer-motion";
import Lenis from "lenis";
import { gsap } from "gsap";

// --- Components ---

function TextReveal({ text, className, delay = 0 }: { text: string; className?: string; delay?: number }) {
  const words = text.split(" ");
  
  return (
    <span className={className}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.2em] last:mr-0">
          <motion.span
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 1,
              delay: delay + i * 0.05,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="inline-block"
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

function SpotlightCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const resetTween = useRef<any>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty("--mouse-x", `${x}px`);
    cardRef.current.style.setProperty("--mouse-y", `${y}px`);
    const px = (x / rect.width - 0.5) * 30; // -15..15
    const py = (y / rect.height - 0.5) * -30; // -15..15 (invert for natural tilt)
    cardRef.current.style.setProperty("--tilt-x", `${py}deg`);
    cardRef.current.style.setProperty("--tilt-y", `${px}deg`);
    // cancel any running reset tween while user is interacting
    if (resetTween.current) {
      resetTween.current.kill();
      resetTween.current = null;
    }
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const style = getComputedStyle(cardRef.current);
    const parsePx = (v: string, fallback = 0) => parseFloat(v.replace('px','')) || fallback;
    const parseDeg = (v: string, fallback = 0) => parseFloat(v.replace('deg','')) || fallback;
    const startX = parsePx(style.getPropertyValue('--mouse-x'), centerX);
    const startY = parsePx(style.getPropertyValue('--mouse-y'), centerY);
    const startTX = parseDeg(style.getPropertyValue('--tilt-x'), 0);
    const startTY = parseDeg(style.getPropertyValue('--tilt-y'), 0);

    const state = { x: startX, y: startY, tx: startTX, ty: startTY };
    if (resetTween.current) resetTween.current.kill();
    resetTween.current = gsap.to(state, {
      x: centerX,
      y: centerY,
      tx: 0,
      ty: 0,
      duration: 0.7,
      ease: 'power2.out',
      onUpdate: () => {
        if (!cardRef.current) return;
        cardRef.current.style.setProperty('--mouse-x', `${state.x}px`);
        cardRef.current.style.setProperty('--mouse-y', `${state.y}px`);
        cardRef.current.style.setProperty('--tilt-x', `${state.tx}deg`);
        cardRef.current.style.setProperty('--tilt-y', `${state.ty}deg`);
      },
      onComplete: () => { resetTween.current = null; }
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onTouchEnd={handleMouseLeave}
      className={`spotlight-card border border-white/10 ${className}`}
    >
      <div className="spotlight-card-content h-full">
        {children}
      </div>
    </div>
  );
}

function CustomCursor() {
  const mouseX = useSpring(0, { stiffness: 600, damping: 35 });
  const mouseY = useSpring(0, { stiffness: 600, damping: 35 });
  const outlineX = useSpring(0, { stiffness: 400, damping: 30 });
  const outlineY = useSpring(0, { stiffness: 400, damping: 30 });
  
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      outlineX.set(e.clientX);
      outlineY.set(e.clientY);
      setIsVisible(true);
    };

    window.addEventListener("mousemove", updateCursor);
    document.addEventListener("mouseenter", () => setIsVisible(true));
    document.addEventListener("mouseleave", () => setIsVisible(false));

    const handleHover = () => setIsHovering(true);
    const handleUnhover = () => setIsHovering(false);

    const refreshListeners = () => {
      const elements = document.querySelectorAll("a, button, .interactive");
      elements.forEach(el => {
        el.addEventListener("mouseenter", handleHover);
        el.addEventListener("mouseleave", handleUnhover);
      });
    };

    refreshListeners();
    const observer = new MutationObserver(refreshListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", updateCursor);
      observer.disconnect();
    };
  }, [mouseX, mouseY, outlineX, outlineY]);

  if (typeof window !== "undefined" && window.innerWidth < 768) return null;

  return (
    <>
      <motion.div
        className="cursor-dot"
        style={{ x: mouseX, y: mouseY, left: -3, top: -3 }}
        animate={{ scale: isHovering ? 2.5 : 1, opacity: isVisible ? 1 : 0 }}
      />
      <motion.div
        className="cursor-outline"
        style={{ x: outlineX, y: outlineY, left: -15, top: -15 }}
        animate={{ 
          scale: isHovering ? 1.8 : 1, 
          opacity: isVisible ? 1 : 0,
          borderColor: isHovering ? "rgba(201, 169, 98, 1)" : "rgba(201, 169, 98, 0.5)",
          backgroundColor: isHovering ? "rgba(201, 169, 98, 0.05)" : "transparent"
        }}
      />
    </>
  );
}

function Navigation() {
  const scope = useRef<HTMLElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = e.currentTarget;
    const href = el.getAttribute("href") || "";
    if (href.startsWith("#")) {
      e.preventDefault();
      const id = href.slice(1);
      const target = id ? document.getElementById(id) : document.documentElement;
      const lenis = (window as any).lenis;
      if (lenis && typeof lenis.scrollTo === "function") {
        lenis.scrollTo(target || 0, { offset: -80 });
      } else {
        target?.scrollIntoView({ behavior: "smooth" });
        history.replaceState(null, "", href);
      }
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // GSAP animations: scroll reveals and hover micro-interactions
  useEffect(() => {
    const ctx = gsap.context(() => {
      const cardEls = gsap.utils.toArray<HTMLElement>(".spotlight-card");

      // Card scroll reveal (handles array)
      gsap.from(cardEls, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardEls,
          start: "top 85%",
        },
      });

      // Text reveal for headings and body text
      const textEls = gsap.utils.toArray<HTMLElement>(".font-display, .font-hero, .font-body-large, h3, h4");
      textEls.forEach((el) => {
        gsap.from(el, {
          y: 22,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        });
      });

      // Hover micro-interactions for cards (title lift + subtle scale)
      const hoverHandlers: Array<{el: Element; enter: any; leave: any}> = [];
      cardEls.forEach((card) => {
        const title = card.querySelector('h3, h4, .text-3xl, .text-2xl') as HTMLElement | null;
        const tl = gsap.timeline({ paused: true });
        tl.to(card, { scale: 1.02, duration: 0.35, ease: 'power2.out' }, 0);
        if (title) tl.to(title, { y: -8, color: 'var(--accent)', duration: 0.35, ease: 'power2.out' }, 0);

        const enter = () => tl.play();
        const leave = () => tl.reverse();
        card.addEventListener('mouseenter', enter);
        card.addEventListener('mouseleave', leave);
        hoverHandlers.push({ el: card, enter, leave });
      });

      // attach cleanup to context for external removal
      (ctx as any)._hoverCleanup = () => {
        hoverHandlers.forEach(h => {
          h.el.removeEventListener('mouseenter', h.enter);
          h.el.removeEventListener('mouseleave', h.leave);
        });
      };
    }, scope);

    return () => {
      try { (gsap as any).context(() => {}, scope)._hoverCleanup?.(); } catch (e) {}
      ctx.revert();
    };
  }, [scope]);

  return (
    <motion.nav
      ref={scope}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ${
        isScrolled || isMenuOpen ? "glass border-b border-border/50 py-4" : "py-8"
      }`}
    >
      <div className="container-padding flex items-center justify-between">
        <a href="#" onClick={handleNavClick} className="text-2xl font-semibold tracking-tighter interactive z-[110]">
          APEX<span className="text-accent">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-12">
          {["Services", "Process", "About", "Results"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={handleNavClick}
              className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground hover:text-accent transition-colors duration-300 font-black interactive"
            >
              {item}
            </a>
          ))}
          <a
            href="#contact"
            onClick={handleNavClick}
            className="px-8 py-3 bg-accent text-accent-foreground text-[10px] uppercase tracking-[0.2em] font-black interactive hover:scale-105 transition-transform"
          >
            Book a Call
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden flex flex-col gap-1.5 interactive z-[110]"
        >
          <motion.span 
            animate={isMenuOpen ? { rotate: 45, y: 7.5 } : { rotate: 0, y: 0 }}
            className="w-8 h-[2px] bg-white block" 
          />
          <motion.span 
            animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
            className="w-8 h-[2px] bg-white block" 
          />
          <motion.span 
            animate={isMenuOpen ? { rotate: -45, y: -7.5 } : { rotate: 0, y: 0 }}
            className="w-8 h-[2px] bg-white block" 
          />
        </button>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, y: "-100%" }}
          animate={isMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: "-100%" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 bg-black flex flex-col items-center justify-center gap-8 md:hidden z-[105]"
        >
          {["Services", "Process", "About", "Results"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={handleNavClick}
              className="text-2xl uppercase tracking-[0.4em] text-white font-black hover:text-accent transition-colors"
            >
              {item}
            </a>
          ))}
          <a
            href="#contact"
            onClick={handleNavClick}
            className="mt-4 px-12 py-5 bg-accent text-accent-foreground text-[12px] uppercase tracking-[0.3em] font-black"
          >
            Book a Call
          </a>
        </motion.div>
      </div>
    </motion.nav>
  );
}

function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 400]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0.2]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  return (
    <section ref={containerRef} className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden py-20">
      <div className="mesh-gradient" />
      
      <motion.div 
        style={{ y, opacity: contentOpacity, scale }} 
        className="container-padding relative z-10 w-full"
      >
        <div className="max-w-7xl mx-auto flex flex-col justify-center min-h-[70vh]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8 md:mb-12 flex items-center gap-4"
          >
            <span className="h-[1px] w-12 bg-accent" />
            <span className="text-[9px] md:text-[10px] uppercase tracking-[0.4em] text-accent font-black">
              EST. 2024 • AUSTRALIAN REGISTERED
            </span>
          </motion.div>

          <div className="mb-8 md:mb-16">
            <h5 className="font-hero leading-[0.85] mb-4">
              <TextReveal text="ELITE DIGITAL" className="block text-white" />
              <TextReveal text="EXECUTION" className="block text-accent italic" delay={0.4} />
              <TextReveal text="FOR SCALE." className="block text-white" delay={0.6} />
            </h5>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-end">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="text-base md:font-body-large text-muted-foreground max-w-xl leading-relaxed"
            >
              Dedicated, in-house expert teams with 5+ years experience. 
              No freelancers. No middlemen. Just enterprise performance at 30% lower cost.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex flex-wrap gap-4 md:gap-6"
            >
              <a
                href="#contact"
                className="group relative px-8 md:px-12 py-4 md:py-6 bg-white text-black font-black uppercase tracking-[0.2em] text-[9px] md:text-[10px] overflow-hidden interactive"
              >
                <span className="relative z-10">Get Your Proposal</span>
                <motion.div 
                  className="absolute inset-0 bg-accent transform translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[0.22, 1, 0.36, 1]"
                />
              </a>
              <a
                href="#services"
                className="group px-8 md:px-12 py-4 md:py-6 border border-white/10 hover:border-accent text-white font-black uppercase tracking-[0.2em] text-[9px] md:text-[10px] transition-all interactive"
              >
                Our Expertise
              </a>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 hidden sm:flex">
        <span className="text-[9px] uppercase tracking-[0.6em] text-muted-foreground vertical-text font-black">EXPLORE</span>
        <div className="w-[1px] h-20 md:h-32 bg-gradient-to-b from-accent/50 to-transparent" />
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="section-padding bg-black relative">
      <div className="container-padding">
        <div className="grid lg:grid-cols-12 gap-24">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-accent text-[10px] uppercase tracking-[0.4em] font-black mb-8 block">THE AGENCY</span>
              <h2 className="font-display mb-12">
                Expert Teams. <br />
                <span className="text-accent italic">Australian Registered.</span>
              </h2>
              
              <div className="space-y-10 max-w-2xl">
                <p className="font-body-large text-muted-foreground leading-relaxed">
                  Apex is built for companies that demand reliability. We operate from our own office with 
                  full-time professionals. No gamble on freelancers.
                </p>
                <div className="grid sm:grid-cols-2 gap-12">
                  <div>
                    <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-4">Long-Term Partnerships</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      We grow with you. Our model supports scaling up or down as your needs evolve.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-4">Single Point of Contact</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Every project is led by a group manager ensuring clear accountability.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-4">
            {[
              { label: "Expert Experience", val: "5+ YRS" },
              { label: "Market Cost Advantage", val: "30%" },
              { label: "In-House Professional Staff", val: "100%" },
              { label: "Client Project Success Rate", val: "98%" },
            ].map((item, i) => (
              <SpotlightCard key={i} className="p-12">
                <div className="text-5xl font-black text-accent mb-4 tracking-tighter">{item.val}</div>
                <div className="text-[9px] uppercase tracking-[0.3em] text-muted-foreground font-black">{item.label}</div>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  const services = [
    {
      title: "Web Development",
      desc: "Architecting high-performance digital ecosystems for global scale.",
      items: ["Next.js Enterprise", "E-commerce Systems", "Custom SaaS", "API Architecture"]
    },
    {
      title: "Graphic Design",
      desc: "Strategic visual identities that command authority and trust.",
      items: ["Brand Architecture", "UI/UX Engineering", "Motion Systems", "Brand Manuals"]
    },
    {
      title: "Social Media",
      desc: "Growth-focused community management and paid performance.",
      items: ["Market Strategy", "Content Production", "Performance Ads", "Data Analytics"]
    }
  ];

  return (
    <section id="services" className="section-padding bg-[#030303]">
      <div className="container-padding">
        <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-12">
          <div className="max-w-3xl">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: 120 }}
              transition={{ duration: 1 }}
              className="h-[2px] bg-accent mb-12"
            />
            <h2 className="font-display">
              <TextReveal text="STRATEGIC" className="block" />
              <TextReveal text="CORE SERVICES" className="block text-accent" delay={0.2} />
            </h2>
          </div>
          <div className="max-w-sm">
            <p className="text-muted-foreground font-medium mb-8 leading-relaxed">
              We execute on an hourly basis or long-term contracts. 
              Australian compliance and enterprise reliability guaranteed.
            </p>
            <a href="#contact" className="text-[10px] uppercase tracking-[0.4em] font-black text-accent hover:translate-x-4 transition-transform inline-block interactive">
              View Engagement Models →
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <a key={i} href={`/services/${service.title.toLowerCase().replace(/\s+/g, "-")}`} className="group block h-full">
              <SpotlightCard className="group h-full">
                <div className="p-12 flex flex-col h-full">
                  <div className="mb-16">
                    <span className="text-accent text-[10px] font-black tracking-[0.4em] uppercase">EXPERTISE 0{i + 1}</span>
                    <h3 className="text-3xl font-black mt-6 mb-8 group-hover:text-accent transition-colors tracking-tighter">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed font-medium">
                      {service.desc}
                    </p>
                  </div>
                  <div className="mt-auto pt-12 border-t border-white/5">
                    <ul className="space-y-4">
                      {service.items.map((item, idx) => (
                        <li key={idx} className="text-[10px] uppercase tracking-[0.2em] font-bold flex items-center gap-4 text-white/60">
                          <span className="w-1.5 h-1.5 bg-accent/50 group-hover:bg-accent transition-colors" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </SpotlightCard>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  const steps = [
    { title: "Project Scoping", desc: "Direct consultation with decision makers to align on objectives." },
    { title: "In-House Assembly", desc: "Deployment of a dedicated expert team from our Sydney-aligned office." },
    { title: "Professional Execution", desc: "Managed development and design cycles with weekly deliverables." },
    { title: "Managed Growth", desc: "Scale resources up or down dynamically based on project velocity." }
  ];

  return (
    <section id="process" className="section-padding bg-black">
      <div className="container-padding">
        <div className="grid lg:grid-cols-2 gap-32">
          <div className="lg:sticky lg:top-40 h-fit">
            <span className="text-accent text-[10px] uppercase tracking-[0.4em] font-black mb-8 block">THE METHOD</span>
            <h2 className="font-display mb-12">
              Built For <br />
              <span className="text-accent italic">Elite Results.</span>
            </h2>
            <p className="font-body-large text-muted-foreground leading-relaxed mb-12">
              No hiring headaches. No management friction. 
              We operate as a high-performance extension of 
              your existing organization.
            </p>
            <div className="p-8 border border-accent/20 bg-accent/5">
              <p className="text-accent text-xs font-bold uppercase tracking-widest">
                "30% more efficient than traditional agency models."
              </p>
            </div>
          </div>

          <div className="space-y-6">
            {steps.map((step, i) => (
              <SpotlightCard key={i}>
                <div className="p-12 flex gap-12 items-start">
                  <span className="text-7xl font-black text-white/[0.03] tracking-tighter leading-none">0{i + 1}</span>
                  <div>
                    <h4 className="text-2xl font-black mb-4 tracking-tight uppercase">{step.title}</h4>
                    <p className="text-muted-foreground leading-relaxed font-medium">{step.desc}</p>
                  </div>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section id="contact" className="section-padding bg-accent text-black relative overflow-hidden">
      <div className="mesh-gradient opacity-30 invert" />
      <div className="container-padding relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="font-hero mb-12 leading-[0.9]">
            COMMENCE <br />
            <span className="italic">EXECUTION.</span>
          </h2>
          <p className="text-xl font-black uppercase tracking-[0.3em] mb-20 max-w-3xl mx-auto opacity-70">
            Secure your dedicated expert team and achieve market-leading results at 30% lower cost.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-8">
            <button className="px-20 py-10 bg-black text-white text-[11px] font-black uppercase tracking-[0.4em] hover:scale-105 transition-transform interactive">
              Book Strategy Call
            </button>
            <button className="px-20 py-10 border-2 border-black text-black text-[11px] font-black uppercase tracking-[0.4em] hover:bg-black hover:text-white transition-all interactive">
              Get A Proposal
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-20 md:py-32 bg-black border-t border-white/5">
      <div className="container-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 md:gap-24 mb-24 md:mb-32">
          <div className="md:col-span-2">
            <h3 className="text-4xl font-black tracking-tighter mb-8 md:mb-10">APEX<span className="text-accent">.</span></h3>
            <p className="text-muted-foreground max-w-sm mb-10 md:mb-12 font-medium leading-relaxed">
              Australian-registered agency for high-end digital execution. 
              Elite professionals. In-house only.
            </p>
            <div className="flex flex-wrap gap-4">
              {["LINKEDIN", "TWITTER", "INSTAGRAM"].map(s => (
                <a key={s} href="#" className="px-5 md:px-6 py-3 border border-white/10 text-[9px] font-black tracking-[0.2em] hover:border-accent hover:text-accent transition-all interactive">
                  {s}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.5em] font-black text-accent mb-8 md:mb-10">Capabilities</h4>
            <ul className="space-y-4 md:space-y-6 text-[11px] font-black uppercase tracking-[0.2em] text-muted-foreground">
              <li className="hover:text-white transition-colors interactive"><a href="#services">Web Development</a></li>
              <li className="hover:text-white transition-colors interactive"><a href="#services">Graphic Design</a></li>
              <li className="hover:text-white transition-colors interactive"><a href="#services">Social Media</a></li>
              <li className="hover:text-white transition-colors interactive"><a href="#services">Strategy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.5em] font-black text-accent mb-8 md:mb-10">Legal & HQ</h4>
            <div className="space-y-6">
              <ul className="space-y-4 text-[11px] font-black uppercase tracking-[0.2em] text-muted-foreground">
                <li className="hover:text-white transition-colors interactive">
                  <a href="/privacy">Privacy Policy</a>
                </li>
                <li className="hover:text-white transition-colors interactive">
                  <a href="/terms">Terms of Service</a>
                </li>
              </ul>
              <div>
                <p className="text-sm font-black mb-2">Sydney, Australia</p>
                <p className="text-[11px] font-bold text-muted-foreground mb-4">hello@apex.com.au</p>
                <p className="text-[9px] text-muted-foreground/50 font-black uppercase tracking-widest">ABN: 12 345 678 901</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 gap-8">
          <span className="text-[9px] font-black text-muted-foreground uppercase tracking-[0.5em]">© 2024 APEX DIGITAL AGENCY</span>
          <span className="text-[9px] font-black text-accent uppercase tracking-[0.5em]">AUSTRALIA REGISTERED BUSINESS</span>
        </div>
      </div>
    </footer>
  );
}

// --- Main Page ---

export default function Home() {
  const scope = useGsapContext();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.2,
      touchMultiplier: 2.5,
      infinite: false,
    });

    (window as any).lenis = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    const handleDocClick = (ev: MouseEvent) => {
      const tgt = (ev.target as Element).closest && (ev.target as Element).closest('a');
      if (!tgt) return;
      const href = (tgt as HTMLAnchorElement).getAttribute('href') || '';
      if (href.startsWith('#')) {
        ev.preventDefault();
        const id = href.slice(1);
        const target = id ? document.getElementById(id) : document.documentElement;
        const wlenis = (window as any).lenis;
        if (wlenis && typeof wlenis.scrollTo === 'function') {
          wlenis.scrollTo(target || 0, { offset: -80 });
        } else {
          target?.scrollIntoView({ behavior: 'smooth' });
          history.replaceState(null, '', href);
        }
      }
    };

    document.addEventListener('click', handleDocClick);

    return () => {
      lenis.destroy();
      document.removeEventListener('click', handleDocClick);
      try { delete (window as any).lenis; } catch (e) { (window as any).lenis = undefined; }
    };
  }, []);

  return (
    <div ref={scope}>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <ProcessSection />
      <CTASection />
    </div>
  );
}
