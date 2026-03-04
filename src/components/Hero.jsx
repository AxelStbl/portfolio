import { getHero } from '../portfolioData';

export default function Hero({ language }) {
  const hero = getHero(language);

  return (
    <header className="min-h-screen flex items-center justify-center px-6 bg-gray-950 pt-16">
      <div className="max-w-4xl w-full text-center">
        {/* Brand */}
        <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-4">
          {hero.brand}
        </p>

        {/* Tagline */}
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
          {hero.tagline}
        </h1>

        {/* Service pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {hero.services.map((s, i) => (
            <span key={i} className="text-xs bg-gray-800 text-gray-300 px-4 py-2 rounded-full border border-gray-700">
              {s}
            </span>
          ))}
        </div>

        {/* Quote — no name attached */}
        <blockquote className="max-w-2xl mx-auto text-gray-400 italic mb-10 leading-relaxed">
          "{hero.quote}"
        </blockquote>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="https://calendly.com/adns-intelligence"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold transition-colors"
          >
            {hero.cta.primary}
          </a>
          <a
            href="#services"
            className="px-8 py-3 border border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white rounded-lg font-semibold transition-colors"
          >
            {hero.cta.secondary}
          </a>
        </div>
      </div>
    </header>
  );
}
