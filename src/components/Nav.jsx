import { useEffect, useState } from 'react';
import { COMPANY, formatPhone } from '../data/content';
import { Phone } from './Icons';

const LINKS = [
  ['Projects', '#work'],
  ['Gallery', '#gallery'],
  ['Process', '#video'],
  ['Our team', '#team'],
  ['Get a quote', '#enquire'],
];

export default function Nav() {
  const [stuck, setStuck] = useState(false);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={stuck ? 'stuck' : ''}>
      <a className="brand" href="/" aria-label={COMPANY.name}>
        <img src="/img/logo-mark.png" alt={COMPANY.name} />
        <span className="brand-name">R. R. Interior</span>
      </a>
      <div className="nlinks">
        {LINKS.map(([label, href]) => (
          <a key={href} href={href}>{label}</a>
        ))}
        <a href={`tel:+91${COMPANY.primaryPhone}`} className="callbtn">
          <Phone size={14} sw={2.2} />
          {formatPhone(COMPANY.primaryPhone).replace('+91 ', '')}
        </a>
      </div>
    </nav>
  );
}
