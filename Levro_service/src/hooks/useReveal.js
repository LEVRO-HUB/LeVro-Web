import { useEffect } from "react";
import { gsap } from "gsap";

/**
 * Hook to apply a high-end blur-to-clear reveal animation on scroll.
 * Targets elements with the class '.reveal-section' within a given container.
 */
export const useReveal = (containerRef) => {
  useEffect(() => {
    // Only target elements WITHIN the provided container to avoid global selector conflicts
    const scope = containerRef?.current || document;
    const elements = scope.querySelectorAll(".reveal-section");
    
    if (elements.length === 0) return;

    // Set initial state via GSAP
    gsap.set(elements, { opacity: 0, filter: "blur(15px)", y: 40 });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.to(entry.target, {
              opacity: 1,
              filter: "blur(0px)",
              y: 0,
              duration: 0.8,
              ease: "power2.out",
              onComplete: () => {
                // Remove inline styles to allow CSS-based interactions if any
                gsap.set(entry.target, { clearProps: "filter,opacity,transform" });
              }
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    elements.forEach((el) => observer.observe(el));
    
    return () => observer.disconnect();
  }, [containerRef]);
};
