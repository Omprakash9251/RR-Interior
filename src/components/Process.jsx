import { PROCESS } from '../data/content';
import { useReveal } from '../hooks/useReveal';

export default function Process() {
  const [rh, ch, sh] = useReveal();

  return (
    <section className="wrap">
      <div ref={rh} className={`head ${ch}`} style={sh}>
        <h2>How we run a job</h2>
        <div className="tag">RESIDENTIAL &amp; COMMERCIAL</div>
      </div>
      <div className="steps">
        {PROCESS.map((s, i) => (
          <Step key={s.title} step={s} index={i} last={i === PROCESS.length - 1} />
        ))}
      </div>
    </section>
  );
}

function Step({ step, index, last }) {
  const [ref, cls, style] = useReveal((index % 5) * 60);

  return (
    <div
      ref={ref}
      className={`step ${cls}`}
      style={last ? { ...style, borderBottom: 0 } : style}
    >
      <div className="step-rail" aria-hidden="true">
        <span className="step-bullet">{String(index + 1).padStart(2, '0')}</span>
      </div>
      <div className="step-card">
        <span className="step-progress" />
        <h3>{step.title}</h3>
        <p>{step.body}</p>
      </div>
    </div>
  );
}
