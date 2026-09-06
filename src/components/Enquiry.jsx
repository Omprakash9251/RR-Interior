import { useState } from 'react';
import { ENQUIRY_LABELS, ENQUIRY_OPTIONS } from '../data/content';
import { useReveal } from '../hooks/useReveal';

const GROUPS = [
  ['scope', 'What kind of work is it?'],
  ['finish', 'What finish level are you looking at?'],
  ['when', 'When do you need it handed over?'],
];

export default function Enquiry() {
  const [choice, setChoice] = useState({ scope: 0, finish: 1, when: 1 });
  const [area, setArea] = useState(2000);
  const [fields, setFields] = useState({ name: '', phone: '', location: '' });
  const [sent, setSent] = useState(false);

  const [rh, ch, sh] = useReveal();
  const [rl, cl, sl] = useReveal(60);
  const [rq, cq, sq] = useReveal(120);
  const [rp, cp, sp] = useReveal(180);

  const set = (k) => (e) => setFields({ ...fields, [k]: e.target.value });

  const submit = () => {
    // Wire this to your backend, an email service, or a WhatsApp deep link.
    // The full payload is assembled below and ready to send.
    const payload = {
      scope: ENQUIRY_OPTIONS.scope[choice.scope],
      finish: ENQUIRY_OPTIONS.finish[choice.finish],
      when: ENQUIRY_OPTIONS.when[choice.when],
      area,
      ...fields,
    };
    console.log('Enquiry submitted:', payload);
    setSent(true);
  };

  return (
    <section className="cfg wrap" id="enquire">
      <div ref={rh} className={`head ${ch}`} style={sh}>
        <h2>Tell us about your project</h2>
        <div className="tag">WE REPLY THE SAME DAY</div>
      </div>
      <p ref={rl} className={`lead ${cl}`} style={sl}>
        Set the three things that decide the quotation and we will come back with a written,
        line-item estimate after a site visit.
      </p>

      <div className="cg2">
        <div ref={rq} className={cq} style={sq}>
          {GROUPS.map(([key, question]) => (
            <div className="q" key={key}>
              <p>{question}</p>
              <div className="opts">
                {ENQUIRY_LABELS[key].map((label, i) => (
                  <button
                    key={label}
                    className="opt"
                    aria-pressed={choice[key] === i}
                    onClick={() => setChoice({ ...choice, [key]: i })}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
          ))}

          <div className="q">
            <p>Approximate carpet area</p>
            <div className="areaval">
              <span>{area.toLocaleString('en-IN')}</span>
              <small>sq ft</small>
            </div>
            <input
              className="slider"
              type="range"
              min="300"
              max="20000"
              step="100"
              value={area}
              onChange={(e) => setArea(Number(e.target.value))}
              aria-label="Carpet area in square feet"
            />
          </div>
        </div>

        <div ref={rp} className={`panel ${cp}`} style={sp}>
          <div className="tag" style={{ marginBottom: 16 }}>YOUR ENQUIRY</div>
          <Row label="Type of work" value={ENQUIRY_OPTIONS.scope[choice.scope]} />
          <Row label="Finish level" value={ENQUIRY_OPTIONS.finish[choice.finish]} />
          <Row label="Handover" value={ENQUIRY_OPTIONS.when[choice.when]} />
          <Row label="Area" value={`${area.toLocaleString('en-IN')} sq ft`} />

          <label className="mini">
            <span>NAME</span>
            <input type="text" placeholder="Your name" autoComplete="name"
                   value={fields.name} onChange={set('name')} />
          </label>
          <label className="mini">
            <span>MOBILE / WHATSAPP</span>
            <input type="tel" placeholder="+91" autoComplete="tel"
                   value={fields.phone} onChange={set('phone')} />
          </label>
          <label className="mini">
            <span>SITE LOCATION</span>
            <input type="text" placeholder="Building and area"
                   value={fields.location} onChange={set('location')} />
          </label>

          <button className="go" type="button" onClick={submit} disabled={sent}
                  style={sent ? { opacity: 0.72 } : undefined}>
            {sent ? 'Sent — we will call you today' : 'Request a site visit'}
          </button>
          <p className="disc">
            A partner calls you back the same working day and visits the site at a time that
            suits you. No charge for the visit or the estimate.
          </p>
        </div>
      </div>
    </section>
  );
}

const Row = ({ label, value }) => (
  <div className="rrow">
    <span>{label}</span>
    <span>{value}</span>
  </div>
);
