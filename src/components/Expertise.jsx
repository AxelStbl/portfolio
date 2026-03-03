import { getContent, getExpertise } from '../portfolioData';

export default function Expertise({ language }) {
  const expertise = getExpertise(language);
  const content = getContent(language, 'expertise');

  return (
    <section className="py-24 px-6 bg-gray-900">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-2">{content.title}</h2>
        <p className="text-gray-400 mb-12">{content.subtitle}</p>

        <div className="grid md:grid-cols-3 gap-8">
          {expertise.map((exp, idx) => (
            <div key={idx}>
              <h3 className="text-lg font-semibold mb-4">{exp.category}</h3>
              <ul className="space-y-2">
                {exp.items.map((item, i) => (
                  <li key={i} className="text-gray-300 flex gap-2">
                    <span className="text-blue-400">→</span>
                    {item}
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
