import { COMPANY } from '../data/content';
import { External } from './Icons';

/**
 * A lightweight stylised map. A real Google Maps embed costs about 1 MB and
 * hurts page speed, so this stands in and the button opens Maps properly.
 * To swap in a live embed, replace the <svg> with an <iframe> loaded on click.
 */
export default function MapPanel() {
  return (
    <div className="mapbox">
      <svg viewBox="0 0 400 250" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <rect width="400" height="250" fill="#EDECE4" />
        <path d="M0 88h400M0 172h400M112 0v250M262 0v250" stroke="#DCDAD0" strokeWidth="9" />
        <path d="M0 36h400M0 220h400M52 0v250M336 0v250" stroke="#E3E1D8" strokeWidth="5" />
        <path d="M-10 240 L175 88 L410 138" stroke="#D6D3C7" strokeWidth="12" fill="none" />
        <g fill="#E5E3DA">
          <rect x="16" y="102" width="66" height="48" /><rect x="136" y="98" width="84" height="56" />
          <rect x="284" y="110" width="82" height="46" /><rect x="146" y="190" width="90" height="44" />
          <rect x="22" y="188" width="62" height="40" /><rect x="286" y="186" width="80" height="48" />
          <rect x="18" y="12" width="68" height="38" /><rect x="280" y="10" width="82" height="42" />
        </g>
        <g fill="#C9CFC0">
          <rect x="236" y="54" width="50" height="28" /><rect x="62" y="54" width="38" height="24" />
        </g>
        <g fill="#9A9C93" fontFamily="sans-serif" fontSize="8">
          <text x="120" y="80" transform="rotate(-90 120 80)">Shanti Nagar Rd</text>
          <text x="12" y="168">Mira Bhayandar Rd</text>
          <text x="270" y="80" transform="rotate(-90 270 80)">Sector 10</text>
        </g>
      </svg>
      <div className="pin">
        <b />
        <span>{COMPANY.name} — Mira Road (E)</span>
      </div>
      <a className="openmap" href={COMPANY.mapsUrl} target="_blank" rel="noopener noreferrer">
        Open in Maps <External />
      </a>
    </div>
  );
}
