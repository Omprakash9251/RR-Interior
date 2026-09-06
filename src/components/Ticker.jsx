import { TICKER } from '../data/content';

export default function Ticker() {
  // Rendered twice so the CSS marquee loops without a visible seam.
  const row = TICKER.map((t, i) => (
    <div className="job" key={t + i}>
      <i />
      <b>{t}</b>
      <span>completed</span>
    </div>
  ));

  return (
    <div className="live">
      <div className="tk">
        {row}
        {row}
      </div>
    </div>
  );
}
