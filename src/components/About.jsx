import { getContent } from '../portfolioData';

export default function About({ language }) {
  const about = getContent(language, 'about');

  return (
    <section id="about" className="py-24 px-6 bg-gray-900">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-1">{about.title}</h2>
        <p className="text-blue-400 text-sm mb-6">{about.subtitle}</p>
        <p className="text-gray-300 leading-relaxed">{about.content}</p>
      </div>
    </section>
  );
}
