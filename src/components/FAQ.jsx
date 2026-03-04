import { useState } from 'react';
import { getFaq } from '../portfolioData';

export default function FAQ({ language }) {
  const { title, items } = getFaq(language);
  const [open, setOpen] = useState(null);

  return (
    <section className="py-24 px-6 bg-gray-950">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12">{title}</h2>

        <div className="space-y-3">
          {items.map((item, i) => (
            <div key={i} className="border border-gray-700 rounded-xl overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex justify-between items-center px-6 py-4 text-left hover:bg-gray-900 transition-colors"
              >
                <span className="text-white font-medium">{item.q}</span>
                <span className={`text-blue-400 text-xl transition-transform duration-200 ${open === i ? 'rotate-45' : ''}`}>
                  +
                </span>
              </button>
              {open === i && (
                <div className="px-6 pb-5 text-gray-400 text-sm leading-relaxed border-t border-gray-800 pt-4">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
