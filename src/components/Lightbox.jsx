import { useEffect } from 'react';

export default function Lightbox({ item, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = item ? 'hidden' : '';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [item, onClose]);

  if (!item) return null;

  return (
    <div
      id="lb"
      className="on"
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
      onClick={(e) => e.target.id === 'lb' && onClose()}
    >
      <button id="lbx" aria-label="Close" onClick={onClose}>
        ✕
      </button>
      <div className={`box${item.type === 'video' ? ' box-video' : ''}`}>
        {item.type === 'video' ? (
          // Opened deliberately, so this one gets sound and full controls.
          <video src={item.src} controls autoPlay loop playsInline aria-label={item.title} />
        ) : (
          <img src={`/img/${item.file}.jpg`} alt={item.title} />
        )}
        <div className="cp">
          <b>{item.title}</b>
          <span>{item.sub}</span>
        </div>
      </div>
    </div>
  );
}
