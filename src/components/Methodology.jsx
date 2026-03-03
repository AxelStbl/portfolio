import { getMethodology } from '../portfolioData';

export default function Methodology({ language }) {
  const { title, subtitle, steps } = getMethodology(language);

  return (
    <section className="py-24 px-6 bg-gray-900">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-2">{title}</h2>
        <p className="text-gray-400 mb-12">{subtitle}</p>

        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div key={i} className="relative">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-6 left-full w-full h-px bg-gray-700 z-0" />
              )}
              <div className="relative z-10">
                <span className="text-4xl font-bold text-blue-500 opacity-60">{step.number}</span>
                <h3 className="text-lg font-semibold text-white mt-2 mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
