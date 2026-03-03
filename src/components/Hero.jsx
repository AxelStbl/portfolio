import { getHero } from '../portfolioData';

export default function Hero({ language }) {
  const hero = getHero(language);

  return (
    <header className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-4xl w-full text-center">
        <h1 className="text-6xl font-bold mb-4">
          {hero.title}
          <br />
          <span className="text-blue-400">{hero.titleHighlight}</span>
        </h1>
        <p className="text-xl text-gray-300 mb-8">{hero.subtitle}</p>
        <div className="flex gap-4 justify-center">
          <a
            href="#work"
            className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded font-semibold"
          >
            {hero.cta.primary}
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-gray-400 hover:border-gray-200 rounded font-semibold"
          >
            {hero.cta.secondary}
          </a>
        </div>
      </div>
    </header>
  );
}
