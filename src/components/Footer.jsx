import {
  COMPANY, FOOTER_COMPANY, FOOTER_SERVICES, TEAM, formatPhone,
} from '../data/content';

export default function Footer() {
  return (
    <footer className="site">
      <div className="fgrid">
        <div>
          <div className="footer-brand">
            <img className="flogo" src="/img/logo-mark.png" alt={COMPANY.name} />
            <span className="footer-brand-name">R. R. Interior</span>
          </div>
          <p>
            Furniture contractors and interior decorators, working across Mumbai and Thane on
            turnkey residential and commercial interiors. Run by {TEAM[0].name} and his four sons.
          </p>
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
