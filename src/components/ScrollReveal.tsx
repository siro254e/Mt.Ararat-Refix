import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
  threshold?: number;
  rootMargin?: string;
}

/**
 * ScrollReveal component: Wraps any content with a cinematic IntersectionObserver fade-in & upward float.
 */
export function ScrollReveal({
  children,
  className = '',
  delayMs = 0,
  threshold = 0.1,
  rootMargin = '0px 0px -50px 0px'
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // If IntersectionObserver is not supported or user prefers reduced motion, reveal immediately
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (delayMs > 0) {
              const timer = setTimeout(() => {
                setIsVisible(true);
              }, delayMs);
              return () => clearTimeout(timer);
            } else {
              setIsVisible(true);
            }
            if (domRef.current) {
              observer.unobserve(domRef.current);
            }
          }
        });
      },
      {
        threshold,
        rootMargin
      }
    );

    const currentEl = domRef.current;
    if (currentEl) {
      observer.observe(currentEl);
    }

    return () => {
      if (currentEl) {
        observer.unobserve(currentEl);
      }
      observer.disconnect();
    };
  }, [delayMs, threshold, rootMargin]);

  return (
    <div
      ref={domRef}
      className={`reveal-init ${isVisible ? 'reveal-visible' : ''} ${className}`}
    >
      {children}
    </div>
  );
}

/**
 * Hook to automatically observe all page sections and fade them in cinematically as they scroll into view.
 */
export function useSectionRevealObserver() {
  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const targetElements = document.querySelectorAll<HTMLElement>('main > section, footer');
    if (!targetElements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    targetElements.forEach((el, index) => {
      // The hero section (first element) is immediately visible above the fold
      if (index === 0) {
        el.classList.add('reveal-visible');
        return;
      }
      el.classList.add('reveal-init');
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);
}
