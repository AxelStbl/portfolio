import { getContent } from '../portfolioData';

export default function About({ language }) {
  const about = getContent(language, 'about');

  return (
    <section className="py-24 px-6 bg-gray-800">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">{about.title}</h2>
        <p className="text-gray-300 leading-relaxed">{about.content}</p>
      </div>
    </section>
  );
}
