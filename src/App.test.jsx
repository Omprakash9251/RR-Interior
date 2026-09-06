import { fireEvent, render, screen } from '@testing-library/react';
import { REELS } from './data/content';
import { MemoryRouter } from 'react-router-dom';
import { AppRoutes } from './App';
import '@testing-library/jest-dom';

function renderWithRoute(path) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <AppRoutes />
    </MemoryRouter>
  );
}

describe('gallery routing', () => {
  it('renders the gallery on the home route', () => {
    renderWithRoute('/');
    expect(screen.getByText('Completed interiors')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /show more/i })).toBeInTheDocument();
  });

  it('renders the full gallery on the completed interiors route', () => {
    renderWithRoute('/completed-interiors');
    expect(screen.getByText('Completed interiors')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /back to home/i })).toBeInTheDocument();
  });
});

describe('scroll restoration', () => {
  beforeEach(() => {
    window.scrollTo = vi.fn();
  });

  it('scrolls to the top when navigating to another route', () => {
    renderWithRoute('/');
    window.scrollTo.mockClear();

    fireEvent.click(screen.getByRole('button', { name: /show more/i }));

    expect(screen.getByRole('button', { name: /back to home/i })).toBeInTheDocument();
    expect(window.scrollTo).toHaveBeenCalledWith(
      expect.objectContaining({ top: 0, behavior: 'instant' })
    );
  });

  it('leaves in-page anchor navigation alone', () => {
    renderWithRoute('/#gallery');
    expect(window.scrollTo).not.toHaveBeenCalled();
  });
});

describe('seo', () => {
  beforeEach(() => {
    document.head.innerHTML =
      '<meta name="description" content="" />' +
      '<meta property="og:title" content="" />' +
      '<meta property="og:description" content="" />' +
      '<meta property="og:url" content="" />' +
      '<meta name="twitter:title" content="" />' +
      '<meta name="twitter:description" content="" />' +
      '<link rel="canonical" href="" />';
  });

  const head = (sel, attr) => document.head.querySelector(sel).getAttribute(attr);

  it('ships exactly one h1, even though every hero slide is in the DOM', () => {
    renderWithRoute('/');
    expect(document.querySelectorAll('h1')).toHaveLength(1);
    expect(document.querySelectorAll('.sl h2').length).toBeGreaterThan(0);
  });

  it('marks the first hero image as the high-priority LCP candidate', () => {
    renderWithRoute('/');
    const heroImgs = document.querySelectorAll('.slR img');
    expect(heroImgs[0].getAttribute('fetchpriority')).toBe('high');
    expect(heroImgs[1].getAttribute('loading')).toBe('lazy');
  });

  it('sets the home title, description and canonical', () => {
    renderWithRoute('/');
    expect(document.title).toMatch(/Interior Contractors in Mumbai/);
    expect(head('link[rel="canonical"]', 'href')).toBe('https://rrinterior.com/');
    expect(head('meta[name="description"]', 'content').length).toBeLessThanOrEqual(160);
  });

  it('gives the gallery route its own title and canonical', () => {
    renderWithRoute('/completed-interiors');
    expect(document.title).toMatch(/Completed Interiors/);
    expect(head('link[rel="canonical"]', 'href')).toBe(
      'https://rrinterior.com/completed-interiors'
    );
    expect(head('meta[property="og:url"]', 'content')).toBe(
      'https://rrinterior.com/completed-interiors'
    );
  });
});

describe('reels', () => {
  it('adds a Reels filter', () => {
    renderWithRoute('/completed-interiors');
    expect(screen.getByRole('button', { name: 'Reels' })).toBeInTheDocument();
  });

  it('keeps videos off the home page until the filter is chosen', () => {
    renderWithRoute('/');
    expect(document.querySelectorAll('.gt.reel')).toHaveLength(0);
  });

  it('shows every reel as a looping, muted, non-preloading video', () => {
    renderWithRoute('/completed-interiors');
    fireEvent.click(screen.getByRole('button', { name: 'Reels' }));

    const videos = document.querySelectorAll('.gt.reel video');
    expect(videos).toHaveLength(REELS.length);

    videos.forEach((v) => {
      expect(v).toHaveAttribute('loop');
      expect(v.muted).toBe(true);
      // the whole point: no bytes fetched until it scrolls into view
      expect(v).toHaveAttribute('preload', 'none');
      expect(v.getAttribute('src')).toMatch(/^\/vid\/[a-z0-9-]+\.mp4$/);
    });
  });

  it('only plays a reel once it scrolls into view, and pauses it on the way out', () => {
    globalThis.__observers = [];
    renderWithRoute('/completed-interiors');
    fireEvent.click(screen.getByRole('button', { name: 'Reels' }));

    const video = document.querySelector('.gt.reel video');
    const play = vi.spyOn(video, 'play').mockResolvedValue();
    const pause = vi.spyOn(video, 'pause').mockImplementation(() => {});

    // The observer watching this <video> element, not the reveal observers.
    const io = globalThis.__observers.find((o) => o.targets.includes(video));
    expect(io).toBeTruthy();

    expect(play).not.toHaveBeenCalled();

    io.trigger(true);
    expect(play).toHaveBeenCalled();

    Object.defineProperty(video, 'paused', { value: false, configurable: true });
    io.trigger(false);
    expect(pause).toHaveBeenCalled();
  });

  it('includes reels under Everything, after the photos', () => {
    renderWithRoute('/completed-interiors');
    const tiles = document.querySelectorAll('.ggrid > *');
    const firstReel = [...tiles].findIndex((t) => t.classList.contains('reel'));
    expect(firstReel).toBeGreaterThan(0);
    expect([...tiles].slice(firstReel).every((t) => t.classList.contains('reel'))).toBe(true);
  });
});
