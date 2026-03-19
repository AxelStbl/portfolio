import { getHero } from '../portfolioData';

export default function Hero({ language }) {
  const hero = getHero(language);

  return (
    <header className="relative min-h-screen flex items-center px-6 pt-20 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-indigo-950/40" />

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

      <div className="relative z-10 max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Left — text */}
        <div>
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-4">
            {hero.brand}
          </p>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {hero.tagline}
          </h1>

          <blockquote className="text-gray-400 italic mb-10 leading-relaxed max-w-lg">
            &ldquo;{hero.quote}&rdquo;
          </blockquote>

          <div className="flex flex-wrap gap-4">
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

        {/* Right — 3D geometric shape */}
        <div className="hidden md:flex justify-center items-center">
          <div className="relative w-80 h-80 lg:w-96 lg:h-96">
            {/* Glow */}
            <div className="absolute inset-0 bg-blue-500/10 rounded-full blur-3xl" />

            {/* Geometric SVG */}
            <svg viewBox="0 0 400 400" className="relative w-full h-full drop-shadow-2xl" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="face1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#6366f1" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.3" />
                </linearGradient>
                <linearGradient id="face2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#818cf8" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#6366f1" stopOpacity="0.2" />
                </linearGradient>
                <linearGradient id="face3" x1="100%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#a5b4fc" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#6366f1" stopOpacity="0.15" />
                </linearGradient>
              </defs>

              {/* Polyhedron faces */}
              <polygon points="200,40 340,140 300,300 100,300 60,140" fill="url(#face1)" stroke="#818cf8" strokeWidth="1" strokeOpacity="0.4" />
              <polygon points="200,40 340,140 270,200 200,120" fill="url(#face2)" stroke="#818cf8" strokeWidth="0.5" strokeOpacity="0.3" />
              <polygon points="200,40 60,140 130,200 200,120" fill="url(#face3)" stroke="#818cf8" strokeWidth="0.5" strokeOpacity="0.3" />
              <polygon points="200,120 270,200 300,300 100,300 130,200" fill="url(#face1)" stroke="#818cf8" strokeWidth="0.5" strokeOpacity="0.2" />
              <polygon points="340,140 270,200 300,300" fill="url(#face2)" stroke="#818cf8" strokeWidth="0.5" strokeOpacity="0.3" />
              <polygon points="60,140 130,200 100,300" fill="url(#face3)" stroke="#818cf8" strokeWidth="0.5" strokeOpacity="0.3" />

              {/* Edge highlights */}
              <line x1="200" y1="40" x2="340" y2="140" stroke="#a5b4fc" strokeWidth="1" strokeOpacity="0.5" />
              <line x1="200" y1="40" x2="60" y2="140" stroke="#a5b4fc" strokeWidth="1" strokeOpacity="0.3" />
              <line x1="200" y1="120" x2="200" y2="40" stroke="#c7d2fe" strokeWidth="0.8" strokeOpacity="0.4" />

              {/* Vertex dots */}
              <circle cx="200" cy="40" r="3" fill="#a5b4fc" opacity="0.8" />
              <circle cx="340" cy="140" r="2.5" fill="#818cf8" opacity="0.6" />
              <circle cx="60" cy="140" r="2.5" fill="#818cf8" opacity="0.6" />
              <circle cx="300" cy="300" r="2.5" fill="#6366f1" opacity="0.5" />
              <circle cx="100" cy="300" r="2.5" fill="#6366f1" opacity="0.5" />
              <circle cx="200" cy="120" r="2" fill="#c7d2fe" opacity="0.7" />

              {/* Floating particles */}
              <circle cx="350" cy="80" r="1.5" fill="#818cf8" opacity="0.4">
                <animate attributeName="opacity" values="0.4;0.8;0.4" dur="3s" repeatCount="indefinite" />
              </circle>
              <circle cx="50" cy="250" r="1" fill="#a5b4fc" opacity="0.3">
                <animate attributeName="opacity" values="0.3;0.7;0.3" dur="4s" repeatCount="indefinite" />
              </circle>
              <circle cx="320" cy="250" r="1.5" fill="#6366f1" opacity="0.3">
                <animate attributeName="opacity" values="0.3;0.6;0.3" dur="3.5s" repeatCount="indefinite" />
              </circle>
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
}
