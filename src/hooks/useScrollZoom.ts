import { useEffect, useRef } from "react";

export const useScrollZoom = (minScale = 1, maxScale = 1.4) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const elementTop = element.getBoundingClientRect().top + window.scrollY;
      const elementHeight = element.offsetHeight;

      // Calculate how far we've scrolled into the element (0 to 1)
      const scrollProgress = Math.max(
        0,
        Math.min(
          1,
          (scrollPosition - elementTop) / (elementHeight - window.innerHeight)
        )
      );

      // Calculate scale based on scroll progress
      const scale = minScale + (maxScale - minScale) * scrollProgress;

      // Apply the scale transform
      element.style.setProperty("--scroll-scale", scale.toString());
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [minScale, maxScale]);

  return ref;
};
