import { useEffect, useRef, useState } from 'react';

/**
 * Fades an element up as it scrolls into view.
 * Usage:  const [ref, cls, style] = useReveal(80);
 *         <div ref={ref} className={cls} style={style}>
 */
export function useReveal(delay = 0) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      setShown(true);
      return;
    }

    if (typeof IntersectionObserver === 'undefined') {
      setShown(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true);
            io.unobserve(e.target);
          }
        });
      },
      // threshold must stay 0: a ratio-based threshold is unreachable for
      // elements taller than roughly (viewport / threshold), e.g. the expanded
      // gallery grid. The negative bottom margin keeps the "reveal a little
      // before it is fully in view" feel without depending on element height.
      { threshold: 0, rootMargin: '0px 0px -10% 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return [ref, `rv${shown ? ' on' : ''}`, { transitionDelay: `${delay}ms` }];
}
