import { getServices } from '../portfolioData';

export default function Services({ language }) {
  const { title, subtitle, items } = getServices(language);

  return (
    <section id="services" className="py-24 px-6 bg-gray-950">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-2">{title}</h2>
        <p className="text-gray-400 mb-12">{subtitle}</p>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((service) => (
            <div
              key={service.id}
              className="p-6 border border-gray-700 rounded-xl bg-gray-900 flex flex-col gap-4"
            >
              <div>
                <h3 className="text-xl font-bold text-white">{service.title}</h3>
                <p className="text-blue-400 text-sm mt-1">{service.subtitle}</p>
              </div>

              <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>

              <ul className="space-y-2 mt-auto">
                {service.bullets.map((bullet, i) => (
                  <li key={i} className="flex gap-2 text-sm text-gray-300">
                    <span className="text-blue-400 mt-0.5 shrink-0">→</span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
