import { useState } from 'react';
import { COMPANY, PROJECT_TYPES, TEAM, formatPhone } from '../data/content';
import { useReveal } from '../hooks/useReveal';
import { Doc, Mail, Phone, Pin, Send } from './Icons';
import MapPanel from './MapPanel';

export default function Contact() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', type: '', location: '', message: '',
  });
  const [sent, setSent] = useState(false);

  const [rh, ch, sh] = useReveal();
  const [ri, ci, si] = useReveal(60);
  const [rf, cf, sf] = useReveal(120);

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = () => {
    // Wire this to your backend or email service.
    console.log('Contact form submitted:', form);
    setSent(true);
  };

  return (
    <section className="contact" id="contact">
      <div className="wrap">
        <div ref={rh} className={`head ${ch}`} style={sh}>
          <h2>Get in touch</h2>
          <div className="tag">{COMPANY.hours.toUpperCase()}</div>
        </div>

        <div className="cwrap">
          <div ref={ri} className={ci} style={si}>
            <Info icon={<Phone />} label="PHONE"
                  value={formatPhone(COMPANY.primaryPhone)}
                  sub={`${COMPANY.primaryContact} — Primary contact`} />
            <Info icon={<Mail />} label="EMAIL" value={COMPANY.email} />
            <Info icon={<Pin />} label="OFFICE"
                  value={<>{COMPANY.address.line1}<br />{COMPANY.address.line2}</>} />
            <Info icon={<Doc />} label="GST" value={COMPANY.gst} last />
            <MapPanel />
          </div>

          <div ref={rf} className={`form ${cf}`} style={sf}>
            <label className="fl">
              <span>Full Name</span>
              <input type="text" placeholder="Your name" autoComplete="name"
                     value={form.name} onChange={set('name')} />
            </label>
            <div className="frow">
              <label className="fl">
                <span>Email Address</span>
                <input type="email" placeholder="you@example.com" autoComplete="email"
                       value={form.email} onChange={set('email')} />
              </label>
              <label className="fl">
                <span>Phone Number</span>
                <input type="tel" placeholder="+91 98765 43210" autoComplete="tel"
                       value={form.phone} onChange={set('phone')} />
              </label>
            </div>
            <div className="frow">
              <label className="fl">
                <span>Project Type</span>
                <select value={form.type} onChange={set('type')}>
                  <option value="">Select a project type</option>
                  {PROJECT_TYPES.map((t) => <option key={t}>{t}</option>)}
                </select>
              </label>
              <label className="fl">
                <span>Site Location</span>
                <input type="text" placeholder="Building name and area"
                       value={form.location} onChange={set('location')} />
              </label>
            </div>
            <label className="fl">
              <span>Message</span>
              <textarea placeholder="Approximate area, scope of work, and when you need it completed…"
                        value={form.message} onChange={set('message')} />
            </label>
            <button className="submit" type="button" onClick={submit} disabled={sent}
                    style={sent ? { opacity: 0.72 } : undefined}>
              {sent ? 'Message sent — we will reply today' : <>Send Message <Send /></>}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Info({ icon, label, value, sub, last }) {
  return (
    <div className="ci" style={last ? { borderBottom: 0 } : undefined}>
      <div className="ico">{icon}</div>
      <div>
        <div className="lb">{label}</div>
        <div className="vl">
          {value}
          {sub && <small>{sub}</small>}
        </div>
      </div>
    </div>
  );
}
