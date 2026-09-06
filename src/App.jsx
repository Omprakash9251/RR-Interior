import { useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Ticker from './components/Ticker';
import About from './components/About';
import VideoSection from './components/VideoSection';
import ProjectIndex from './components/ProjectIndex';
import Gallery from './components/Gallery';
import Process from './components/Process';
import Team from './components/Team';
import Enquiry from './components/Enquiry';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFab from './components/WhatsAppFab';
import { useSeo } from './hooks/useSeo';

function HomePage() {
  useSeo({
    title: 'R. R. Interior — Turnkey Interior Contractors in Mumbai',
    description:
      'Turnkey interior contractors and furniture manufacturers in Mumbai, Thane and Navi Mumbai. Civil work, joinery, ceilings and finishes under one contract.',
    path: '/',
  });

  return (
    <>
      <Nav />
      <Hero />
      <Ticker />
      <About />
      <VideoSection />
      <ProjectIndex />
      <Gallery />
      <Process />
      <Team />
      <Enquiry />
      <Contact />
      <Footer />
      <WhatsAppFab />
    </>
  );
}

function CompletedInteriorsPage() {
  useSeo({
    title: 'Completed Interiors — Project Gallery | R. R. Interior',
    description:
      'Photographs of completed interior projects by R. R. Interior across Mumbai and Thane — living rooms, bedrooms, kitchens, bathrooms, wardrobes and bars.',
    path: '/completed-interiors',
  });

  return (
    <>
      <Nav />
      <Gallery expanded />
      <Footer />
      <WhatsAppFab />
    </>
  );
}

/**
 * The router keeps the previous scroll offset across navigations, so moving
 * between routes lands you mid-page. Reset to the top on every pathname
 * change, but leave in-page #anchor links alone.
 */
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) return;
    // html{scroll-behavior:smooth} would otherwise animate the whole way back.
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname, hash]);

  return null;
}

export function AppRoutes() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/completed-interiors" element={<CompletedInteriorsPage />} />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
