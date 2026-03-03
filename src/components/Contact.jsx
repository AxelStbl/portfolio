import { getContact } from '../portfolioData';

export default function Contact({ language }) {
  const contact = getContact(language);

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">{contact.title}</h2>
        <p className="text-gray-300 mb-8">{contact.subtitle}</p>

        <div className="flex flex-wrap justify-center gap-4">
          {contact.buttons.map((btn, i) => (
            <a
              key={i}
              href={btn.href}
              target={btn.external ? '_blank' : '_self'}
              rel="noopener noreferrer"
              className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded font-semibold"
            >
              {btn.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
