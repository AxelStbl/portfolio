import { getMethodology } from '../portfolioData';

export default function Methodology({ language }) {
  const { title, subtitle, steps } = getMethodology(language);

  return (
    <section id="method" className="py-24 px-6 bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-2">{title}</h2>
        <p className="text-gray-400 mb-16">{subtitle}</p>

        <div className="grid md:grid-cols-4 gap-0">
          {steps.map((step, i) => (
            <div key={i} className="relative flex flex-col items-start px-6">
              {/* Horizontal connector line */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-5 left-[calc(50%+1rem)] w-[calc(100%-2rem)] h-px">
                  <div className="w-full h-px bg-gradient-to-r from-blue-500/40 to-blue-500/10" />
                </div>
              )}

              {/* Number */}
              <div className="flex items-baseline gap-3 mb-4">
                <span className="text-4xl font-bold text-blue-400">{step.number}</span>
                {i < steps.length - 1 && (
                  <div className="hidden md:block w-8 h-px bg-gray-700 mt-1" />
                )}
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>

              {/* Mobile separator */}
              {i < steps.length - 1 && (
                <div className="md:hidden w-8 h-px bg-gray-700 my-6" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
