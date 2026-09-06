import { TEAM, formatPhone } from '../data/content';
import { useReveal } from '../hooks/useReveal';

const initials = (name) =>
  name
    .split(' ')
    .map((w) => w[0])
    .slice(0, 2)
    .join('');

export default function Team() {
  const [rh, ch, sh] = useReveal();
  const [rl, cl, sl] = useReveal(60);

  return (
    <section className="team" id="team">
      <div className="wrap">
        <div ref={rh} className={`head ${ch}`} style={sh}>
          <h2>Who you will actually deal with</h2>
          <div className="tag">DIRECT LINES</div>
        </div>
        <p ref={rl} className={`lead ${cl}`} style={sl}>
          No estimator you never meet again, no site manager on rotation. Call any of these
          numbers and you reach a partner in the firm.
        </p>
        <div className="tgrid">
          {TEAM.map((t, i) => (
            <Card key={t.phone} member={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Card({ member, index }) {
  const [ref, cls, style] = useReveal((index % 5) * 60);
  return (
    <div ref={ref} className={`tc ${cls}`} style={style}>
      <div className="tav">
        {member.img ? (
          <img src={member.img} alt={member.name} />
        ) : (
          <span>{initials(member.name)}</span>
        )}
      </div>
      <b>{member.name}</b>
      <div className="role">{member.role}</div>
      <a href={`tel:+91${member.phone}`}>{formatPhone(member.phone)}</a>
    </div>
  );
}
