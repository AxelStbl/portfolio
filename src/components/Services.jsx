import { getServices } from '../portfolioData';

export default function Services({ language }) {
  const { title, subtitle, items } = getServices(language);

  return (
    <section id="services" className="py-24 px-6 bg-gray-950">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-2">{title}</h2>
        <p className="text-gray-400 mb-12">{subtitle}</p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((service) => (
            <div
              key={service.id}
              className="p-6 border border-gray-700 rounded-xl bg-gray-900 hover:border-blue-500/50 transition-colors"
            >
              <div className="text-3xl mb-4">{service.icon}</div>
              <h3 className="text-lg font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
