import {
  COMPANY, FOOTER_COMPANY, FOOTER_SERVICES, SOCIAL, TEAM, formatPhone,
} from '../data/content';
import { Instagram, WhatsApp } from './Icons';

export default function Footer() {
  return (
    <footer className="site">
      <div className="fgrid">
        <div>
          <div className="footer-brand">
            <img className="flogo" src="/img/logo-mark.png" alt="" />
            <img className="fword" src="/img/logo-wordmark.png" alt={COMPANY.name} />
          </div>
          <p>
            Furniture contractors and interior decorators, working across Mumbai and Thane on
            turnkey residential and commercial interiors. Run by {TEAM[0].name} and his four sons.
          </p>
          <div className="fsocial">
            <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer"
               aria-label="R. R. Interior on Instagram">
              <Instagram size={17} /> Instagram
            </a>
            <a href={SOCIAL.whatsapp} target="_blank" rel="noopener noreferrer"
               aria-label="Message R. R. Interior on WhatsApp">
              <WhatsApp size={17} fill="currentColor" /> WhatsApp
            </a>
          </div>
        </div>

        <div>
          <div className="fh">Services</div>
          <div className="fl2">
            {FOOTER_SERVICES.map((s) => (
              <a key={s} href="#enquire">{s}</a>
            ))}
          </div>
        </div>

        <div>
          <div className="fh">Company</div>
          <div className="fl2">
            {FOOTER_COMPANY.map(([label, href]) => (
              <a key={href} href={href}>{label}</a>
            ))}
          </div>
        </div>

        <div>
          <div className="fh">Direct lines</div>
          {TEAM.map((t) => (
            <div className="fnum" key={t.phone}>
              <b>{t.name.split(' ')[0]}</b>
              <a href={`tel:+91${t.phone}`}>{formatPhone(t.phone)}</a>
            </div>
          ))}
          <div style={{ marginTop: 18, fontSize: '.9rem', lineHeight: 1.7 }}>
            {COMPANY.address.line1}<br />{COMPANY.address.line2}<br />
            <a href={`mailto:${COMPANY.email}`}
               style={{ borderBottom: '1px solid rgba(244,242,237,.25)' }}>
              {COMPANY.email}
            </a>
          </div>
        </div>
      </div>

      <div className="fbot">
        <div>© {new Date().getFullYear()} {COMPANY.name}. All rights reserved.</div>
        <div>GST {COMPANY.gst}</div>
        <div>{COMPANY.serviceAreas}</div>
      </div>
    </footer>
  );
}
