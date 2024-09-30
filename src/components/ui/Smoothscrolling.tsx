"use client";

import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

const SmoothScroll: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  
  // Get height information of window and content
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (contentRef.current != null) {
        setContentHeight(contentRef.current.scrollHeight);
      }
      setWindowHeight(window.innerHeight);
    };

    // Manually call the first time
    handleResize();

    // Setup listeners for window resizing
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [contentRef]);

  // Intercept normal scroll behavior
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    mass: 0.1,
    stiffness: 100,
    damping: 20,
    restDelta: 0.001,
  });
  
  const y = useTransform(smoothProgress, (value) => {
    return value * -(contentHeight - windowHeight);
  });

  // Turn on transform only once the page has loaded, to prevent spring jumping on initial load
  useMotionValueEvent(smoothProgress, "change", (latest) => {
    if (latest === 0) {
    }
  });

  
  return (
    <>
      {/* Adjust height for small screens */}
      <div style={{ height: contentHeight }} />
      <motion.div
        className="w-screen fixed overflow-hidden top-0 left-0 flex flex-col"
        ref={contentRef}
        style={{ y:y }}
      >
        {children}
      </motion.div>
    </>
  );
};

export default SmoothScroll;
