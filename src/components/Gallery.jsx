import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GALLERY, GALLERY_FILTERS, REELS } from '../data/content';
import { useReveal } from '../hooks/useReveal';
import Lightbox from './Lightbox';
import ReelTile from './ReelTile';

const INITIAL_VISIBLE = 8;

export default function Gallery({ expanded = false }) {
  const navigate = useNavigate();
  const [filter, setFilter] = useState('all');
  const [open, setOpen] = useState(null);
  const [visibleCount, setVisibleCount] = useState(expanded ? 999 : INITIAL_VISIBLE);

  const [rh, ch, sh] = useReveal();
  const [rb, cb, sb] = useReveal(60);
  const [rg, cg, sg] = useReveal(120);

  const filteredItems = useMemo(
    () => [...GALLERY, ...REELS].filter((g) => filter === 'all' || g.cat === filter),
    [filter]
  );

  const items = useMemo(
    () => filteredItems.slice(0, expanded ? filteredItems.length : visibleCount),
    [expanded, filteredItems, visibleCount]
  );

  useEffect(() => {
    setVisibleCount(expanded ? filteredItems.length : INITIAL_VISIBLE);
    setOpen(null);
  }, [expanded, filter, filteredItems.length]);

  const hasMore = !expanded && visibleCount < filteredItems.length;

  return (
    <section className="gal" id="gallery">
      <div className="wrap">
        <div ref={rh} className={`head ${ch}`} style={sh}>
          <h2>Completed interiors</h2>
          <div className="tag">CLICK ANY IMAGE</div>
        </div>

        <div ref={rb} className={`galbar ${cb}`} style={sb}>
          {GALLERY_FILTERS.map(([key, label]) => (
            <button
              key={key}
              className="gf"
              aria-pressed={filter === key}
              onClick={() => setFilter(key)}
            >
              {label}
            </button>
          ))}
        </div>

        <div ref={rg} className={`ggrid ${cg}`} style={sg}>
          {items.map((g) =>
            g.type === 'video' ? (
              <ReelTile key={g.file + g.title} item={g} onOpen={setOpen} />
            ) : (
              <button
                key={g.file + g.title}
                className={`gt ${g.size || ''}`}
                onClick={() => setOpen(g)}
              >
                <img src={`/img/${g.file}.jpg`} alt={g.title} loading="lazy" />
                <span className="gcap">
                  <b>{g.title}</b>
                  <small>{g.sub}</small>
                </span>
              </button>
            )
          )}
        </div>

        {!expanded && filteredItems.length > INITIAL_VISIBLE && (
          <div className="gallery-actions">
            <button type="button" className="show-more" onClick={() => navigate('/completed-interiors')}>
              Show more
            </button>
          </div>
        )}

        {expanded && (
          <div className="gallery-actions">
            <button type="button" className="show-more" onClick={() => navigate('/')}>
              Back to home
            </button>
          </div>
        )}
      </div>

      <Lightbox item={open} onClose={() => setOpen(null)} />
    </section>
  );
}
