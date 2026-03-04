import { useState, useEffect } from 'react';

const navLinks = {
  en: [
    { label: 'Services', href: '#services' },
    { label: 'Method', href: '#method' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ],
  fr: [
    { label: 'Services', href: '#services' },
    { label: 'Méthode', href: '#method' },
    { label: 'À propos', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ],
};

const cta = {
  en: 'Book a Call',
  fr: 'Prendre RDV',
};

export default function Navbar({ language, setLanguage }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-gray-950/95 backdrop-blur border-b border-gray-800' : 'bg-transparent'
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Brand */}
        <a href="#" className="text-white font-bold text-lg tracking-tight">
          ADNS <span className="text-blue-400">Intelligence</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks[language].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right side: lang toggle + CTA */}
        <div className="hidden md:flex items-center gap-3">
          {/* Language toggle */}
          <div className="flex text-xs rounded-lg overflow-hidden border border-gray-700">
            <button
              onClick={() => setLanguage('fr')}
              className={`px-3 py-1.5 transition-colors ${
                language === 'fr' ? 'bg-blue-500 text-white' : 'text-gray-400 hover:text-white'
              }`}
            >
              FR
            </button>
            <button
              onClick={() => setLanguage('en')}
              className={`px-3 py-1.5 transition-colors ${
                language === 'en' ? 'bg-blue-500 text-white' : 'text-gray-400 hover:text-white'
              }`}
            >
              EN
            </button>
          </div>

          {/* CTA */}
          <a
            href="https://calendly.com/adns-intelligence"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold rounded-lg transition-colors"
          >
            {cta[language]}
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-gray-400 hover:text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-950 border-b border-gray-800 px-6 pb-4 flex flex-col gap-4">
          {navLinks[language].map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm text-gray-300 hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <div className="flex gap-2 pt-2">
            <button onClick={() => setLanguage('fr')} className={`text-xs px-3 py-1.5 rounded border border-gray-700 ${language === 'fr' ? 'text-white bg-blue-500 border-blue-500' : 'text-gray-400'}`}>FR</button>
            <button onClick={() => setLanguage('en')} className={`text-xs px-3 py-1.5 rounded border border-gray-700 ${language === 'en' ? 'text-white bg-blue-500 border-blue-500' : 'text-gray-400'}`}>EN</button>
          </div>
          <a
            href="https://calendly.com/adns-intelligence"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full text-center px-4 py-2 bg-blue-500 text-white text-sm font-semibold rounded-lg"
          >
            {cta[language]}
          </a>
        </div>
      )}
    </nav>
  );
}
