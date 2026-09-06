import '@testing-library/jest-dom';

if (!window.matchMedia) {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: (query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: () => {},
      removeListener: () => {},
      addEventListener: () => {},
      removeEventListener: () => {},
      dispatchEvent: () => false,
    }),
  });
}

if (!window.IntersectionObserver) {
  // Records every observer so a test can drive intersection by hand.
  globalThis.__observers = [];

  class MockIntersectionObserver {
    constructor(cb, options) {
      this.cb = cb;
      this.options = options;
      this.targets = [];
      globalThis.__observers.push(this);
    }
    observe(el) { this.targets.push(el); }
    unobserve(el) { this.targets = this.targets.filter((t) => t !== el); }
    disconnect() { this.targets = []; }
    takeRecords() { return []; }
    // Test helper: pretend everything this observer watches entered/left view.
    trigger(isIntersecting = true) {
      this.cb(this.targets.map((target) => ({ target, isIntersecting })), this);
    }
    root = null;
    rootMargin = '';
    thresholds = [];
  }

  Object.defineProperty(window, 'IntersectionObserver', {
    writable: true,
    configurable: true,
    value: MockIntersectionObserver,
  });
}

// jsdom does not implement scrolling; ScrollToTop calls this on every navigation.
if (!window.scrollTo || !window.scrollTo.mock) {
  window.scrollTo = () => {};
}

// jsdom has no media stack; ReelTile drives play()/pause() from an observer.
if (typeof window.HTMLMediaElement !== 'undefined') {
  window.HTMLMediaElement.prototype.play = function play() {
    return Promise.resolve();
  };
  window.HTMLMediaElement.prototype.pause = function pause() {};
}
