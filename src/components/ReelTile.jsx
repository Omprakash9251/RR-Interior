import { useEffect, useRef, useState } from 'react';

/**
 * A silent, looping 9:16 walkthrough that behaves like an animated photo tile.
 *
 * Playback is gated on visibility for a reason: the reels are ~29 MB in total,
 * and `preload="none"` means a clip downloads nothing at all until we call
 * play() on it. Only what the visitor actually scrolls past is ever fetched.
 */
export default function ReelTile({ item, onOpen }) {
  const ref = useRef(null);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    const prefersReduced =
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReduced) {
      // Show a still first frame instead of motion; the lightbox still plays.
      setReduced(true);
      return;
    }

    if (typeof IntersectionObserver === 'undefined') return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            // Autoplay can still be refused (data saver, battery saver, iOS
            // low-power mode). There is no fallback to run, so swallow it.
            const started = video.play();
            if (started && typeof started.catch === 'function') started.catch(() => {});
          } else if (!video.paused) {
            video.pause();
          }
        });
      },
      { threshold: 0, rootMargin: '200px 0px' }
    );

    io.observe(video);
    return () => {
      io.disconnect();
      video.pause();
    };
  }, []);

  return (
    <button className={`gt reel ${item.size || ''}`} onClick={() => onOpen(item)}>
      <video
        ref={ref}
        src={item.src}
        // muted + playsInline are what make autoplay legal on mobile at all.
        muted
        loop
        playsInline
        preload={reduced ? 'metadata' : 'none'}
        tabIndex={-1}
        aria-label={`${item.title} — silent walkthrough`}
      />
      <span className="reel-badge" aria-hidden="true">REEL</span>
      <span className="gcap">
        <b>{item.title}</b>
        <small>{item.sub}</small>
      </span>
    </button>
  );
}
