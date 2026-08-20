import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Capabilities from './components/Capabilities';
import ScienceSection from './components/ScienceSection';
import WhyNexacure from './components/WhyNexacure';
import Compliance from './components/Compliance';
import Location from './components/Location';
import Contact from './components/Contact';
import WhatsAppButton from './components/WhatsAppButton';
import Footer from './components/Footer';
import LegalPage, { isLegalPath } from './components/LegalPage';
import { config } from './config';
import { useEffect, useState } from 'react';

export default function App() {
  const [path, setPath] = useState(window.location.pathname);
  useEffect(() => {
    document.title = config.seo.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', config.seo.description);
  }, []);

  useEffect(() => {
    const scrollToRoute = () => {
      setPath(window.location.pathname);
      const id = window.location.pathname === '/' ? 'home' : window.location.pathname.slice(1);
      document.getElementById(id)?.scrollIntoView({ block: 'start' });
    };
    scrollToRoute();
    window.addEventListener('popstate', scrollToRoute);
    return () => window.removeEventListener('popstate', scrollToRoute);
  }, []);

  if (isLegalPath(path)) return <div className="overflow-x-clip bg-[#061411] text-slate-100"><Navbar /><LegalPage path={path} /><Footer /></div>;

  return (
    <div className="overflow-x-clip bg-[#061411] text-slate-100">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Capabilities />
        <ScienceSection />
        <WhyNexacure />
        <Compliance />
        <Location />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
