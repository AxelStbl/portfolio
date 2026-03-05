import { useState, useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Methodology from './components/Methodology';
import Metrics from './components/Metrics';
import About from './components/About';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [language, setLanguage] = useState('fr');

  useEffect(() => {
    const titles = {
      fr: 'ADNS Intelligence — Ingénieur IA Freelance',
      en: 'ADNS Intelligence — Freelance AI Engineer',
    };
    const descriptions = {
      fr: 'ADNS Intelligence — Ingénieur IA freelance. Chatbots IA, agents sur-mesure, automatisations et audit IA pour accélérer votre croissance. Audit flash gratuit de 30 min.',
      en: 'ADNS Intelligence — Freelance AI Engineer. AI chatbots, custom agents, automations and AI audits to accelerate your growth. Free 30-min flash audit.',
    };
    document.title = titles[language];
    document.documentElement.lang = language;
    document.querySelector('meta[name="description"]')?.setAttribute('content', descriptions[language]);
  }, [language]);

  return (
    <div className="bg-gray-950 text-white min-h-screen">
      <Navbar language={language} setLanguage={setLanguage} />
      <Hero language={language} />
      <Services language={language} />
      <Methodology language={language} />
      <Metrics language={language} />
      <About language={language} />
      <FAQ language={language} />
      <Contact language={language} />
      <Footer language={language} />
      <Analytics />
    </div>
  );
}
