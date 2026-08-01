"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Mirrors the source site's Elementor "fadeIn on scroll" entrance animation:
 * fires once when the element enters the viewport, never re-triggers on scroll back up.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(delayMs = 0) {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const timer = setTimeout(() => setVisible(true), delayMs);
          observer.disconnect();
          return () => clearTimeout(timer);
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delayMs]);

  return { ref, visible };
}
