import { getContact } from '../portfolioData';

export default function Contact({ language }) {
  const contact = getContact(language);

  return (
    <section id="contact" className="py-24 px-6 bg-gray-950">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-4">{contact.title}</h2>
        <p className="text-gray-400 mb-10">{contact.subtitle}</p>

        <div className="flex flex-wrap justify-center gap-4">
          {contact.buttons.map((btn, i) => (
            <a
              key={i}
              href={btn.href}
              target={btn.external ? '_blank' : '_self'}
              rel="noopener noreferrer"
              className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                btn.primary
                  ? 'bg-blue-500 hover:bg-blue-600 text-white'
                  : 'border border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white'
              }`}
            >
              {btn.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
