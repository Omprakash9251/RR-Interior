import { useEffect, useState } from 'react';
import { PROJECTS } from '../data/content';
import { useReveal } from '../hooks/useReveal';

export default function ProjectIndex() {
  const [rh, ch, sh] = useReveal();
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((prev) => (prev + 1) % PROJECTS.length);
    }, 4200);

    return () => window.clearInterval(timer);
  }, []);

  const goTo = (nextIndex) => {
    setActive((nextIndex + PROJECTS.length) % PROJECTS.length);
  };

  return (
    <section className="wrap" id="work">
      <div ref={rh} className={`head ${ch}`} style={sh}>
        <h2>Selected projects</h2>
        <div className="project-controls">
          <button
            type="button"
            className="project-arrow"
            onClick={() => goTo(active - 1)}
            aria-label="Previous project"
          >
            ←
          </button>
          <button
            type="button"
            className="project-arrow"
            onClick={() => goTo(active + 1)}
            aria-label="Next project"
          >
            →
          </button>
        </div>
      </div>

      <div className="project-carousel">
        {PROJECTS.map((p, index) => (
          <article
            key={p.name}
            className={`project-slide ${index === active ? 'active' : ''}`}
            aria-hidden={index !== active}
          >
            <div className="project-visual">
              <img src={p.img} alt={p.name} loading="lazy" />
            </div>

            <div className="project-copy">
              <span className="project-kicker">
                {String(index + 1).padStart(2, '0')} / {String(PROJECTS.length).padStart(2, '0')}
              </span>
              <h3>{p.name}</h3>
              <p>{p.type}</p>
              <div className="project-meta">
                <span>{p.location}</span>
                <span>Turnkey interior</span>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="project-dots" aria-label="Project selection">
        {PROJECTS.map((p, index) => (
          <button
            key={p.name}
            type="button"
            className={index === active ? 'dot active' : 'dot'}
            aria-label={`Show project ${p.name}`}
            onClick={() => goTo(index)}
          />
        ))}
      </div>
    </section>
  );
}
