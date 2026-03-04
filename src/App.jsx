import { useState } from 'react';
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
