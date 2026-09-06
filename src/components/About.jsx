import { ABOUT } from '../data/content';
import { useReveal } from '../hooks/useReveal';

export default function About() {
  const [r1, c1, s1] = useReveal();
  const [r2, c2, s2] = useReveal(80);

  return (
    <section className="wrap">
      <div className="about">
        <div ref={r1} className={c1} style={s1}>
          <div className="tag">
            <span className="rr">■</span> ABOUT R. R. INTERIOR
          </div>
          <h2 style={{ marginTop: 16 }}>{ABOUT.heading}</h2>
          {ABOUT.paras.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <div ref={r2} className={`abnum ${c2}`} style={s2}>
          {ABOUT.stats.map((s) => (
            <div key={s.label}>
              <b>{s.value}</b>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
