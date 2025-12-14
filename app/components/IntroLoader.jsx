"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function IntroLoader() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 2000); // ⏱ duration on screen (2s)

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {showLoader && (
        <motion.div
          className="fixed inset-0 z-9999 bg-secondary flex items-center justify-center"
          initial={{ y: 0 }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}   // 👈 slides UP
          transition={{
            duration: 1,
            ease: [0.77, 0, 0.175, 1], // cinematic easing
          }}
        >
          <motion.h1
            className="text-white text-5xl md:text-9xl font-black tracking-widest uppercase"
            initial={{ opacity: 0, }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            BOOSTBROS
          </motion.h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
