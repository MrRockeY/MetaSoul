"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function CustomCursor() {
  const mouseX = useSpring(0, { stiffness: 600, damping: 35 });
  const mouseY = useSpring(0, { stiffness: 600, damping: 35 });
  const outlineX = useSpring(0, { stiffness: 400, damping: 30 });
  const outlineY = useSpring(0, { stiffness: 400, damping: 30 });
  
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      mouseX.set((e as MouseEvent).clientX);
      mouseY.set((e as MouseEvent).clientY);
      outlineX.set((e as MouseEvent).clientX);
      outlineY.set((e as MouseEvent).clientY);
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
