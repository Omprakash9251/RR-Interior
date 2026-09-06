import { useCallback, useEffect, useRef, useState } from 'react';
import { SLIDES } from '../data/content';

const DURATION = 6500;

export default function Hero() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const timer = useRef(null);

  const reduced =
    typeof window !== 'undefined' &&
    typeof window.matchMedia === 'function' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const restart = useCallback(() => {
    clearInterval(timer.current);
    if (reduced || paused) return;
    timer.current = setInterval(
      () => setActive((i) => (i + 1) % SLIDES.length),
      DURATION
    );
  }, [paused, reduced]);

  useEffect(() => {
    restart();
    return () => clearInterval(timer.current);
  }, [restart]);

  const select = (i) => {
    setActive(i);
    restart();
  };

  return (
    <div className="hero" id="top">
      <div
        className="slides"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {SLIDES.map((s, i) => {
          // Every slide sits in the DOM at once (they cross-fade rather than
          // unmount), so only the first may be an <h1> — otherwise the page
          // ships three competing top-level headings. `.sl h2` is styled to
          // match `.sl h1`, so this is invisible on screen.
          const Heading = i === 0 ? 'h1' : 'h2';

          return (
          <div className={`sl${i === active ? ' on' : ''}`} key={s.kicker}>
            <div className="slL">
              <div className="kick">{s.kicker}</div>
              <Heading>
                {s.title[0]}
                <em>{s.title[1]}</em>
                {s.title[2]}
              </Heading>
              <p>{s.body}</p>
              <div className="slm">
                {s.stats.map((st) => (
                  <div key={st.label}>
                    <b>{st.value}</b>
                    <span>{st.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="slR">
              <img
                src={s.img}
                alt={s.alt}
                fetchpriority={i === 0 ? 'high' : undefined}
                loading={i === 0 ? undefined : 'lazy'}
              />
              <span className="slcap">{s.caption}</span>
            </div>
          </div>
          );
        })}
      </div>

      <div className="slnav" role="tablist">
        {SLIDES.map((s, i) => (
          <button
            key={s.tab.title}
            className="snb"
            role="tab"
            aria-selected={i === active}
            onClick={() => select(i)}
          >
            <b>{s.tab.title}</b>
            <small>{s.tab.sub}</small>
            <i style={i === active && !paused ? undefined : { width: 0, transition: 'none' }} />
          </button>
        ))}
      </div>
    </div>
  );
}
