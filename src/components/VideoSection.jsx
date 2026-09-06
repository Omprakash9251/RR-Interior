import { VIDEO } from '../data/content';
import { useReveal } from '../hooks/useReveal';

export default function VideoSection() {
  const [rh, ch, sh] = useReveal();
  const [rl, cl, sl] = useReveal(60);
  const [rs, cs, ss] = useReveal(120);
  const [rv, cv, sv] = useReveal(180);

  return (
    <section className="video" id="video">
      <div className="wrap">
        <div ref={rh} className={`head ${ch}`} style={sh}>
          <h2>{VIDEO.heading}</h2>
          <div className="tag">FILMED ON SITE</div>
        </div>
        <p ref={rl} className={`lead ${cl}`} style={sl}>
          {VIDEO.lead}
        </p>
        <div className="vgrid">
          <div ref={rs} className={`vsteps ${cs}`} style={ss}>
            {VIDEO.steps.map((s, i) => (
              <div
                className="vstep"
                key={s.title}
                style={i === VIDEO.steps.length - 1 ? { borderBottom: 0 } : undefined}
              >
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </div>
              </div>
            ))}
          </div>
          <div ref={rv} className={`vframe ${cv}`} style={sv}>
            <span className="vlab">
              <i />
              ON SITE
            </span>
            <video src={VIDEO.src} poster={VIDEO.poster} autoPlay muted loop playsInline />
          </div>
        </div>
      </div>
    </section>
  );
}
