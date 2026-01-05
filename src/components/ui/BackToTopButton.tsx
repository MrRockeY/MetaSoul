"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { LuArrowUp } from "react-icons/lu";

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (typeof window !== "undefined" && window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <motion.button
      className="fixed bottom-8 right-8 bg-accent text-accent-foreground p-4 rounded-full shadow-lg z-50 interactive"
      onClick={scrollToTop}
      initial={{ opacity: 0, y: 100 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={{ duration: 0.3 }}
    >
      <LuArrowUp className="text-xl" />
    </motion.button>
  );
};

export default BackToTopButton;