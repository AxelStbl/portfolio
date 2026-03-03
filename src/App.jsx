import { useState } from 'react';
import LanguageToggle from './components/LanguageToggle';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Expertise from './components/Expertise';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [language, setLanguage] = useState('en');

  return (
    <div className="bg-gray-950 text-white min-h-screen">
      <LanguageToggle language={language} setLanguage={setLanguage} />
      <Hero language={language} />
      <Projects language={language} />
      <Expertise language={language} />
      <About language={language} />
      <Contact language={language} />
      <Footer language={language} />
    </div>
  );
}
