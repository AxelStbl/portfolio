import { getMetrics } from '../portfolioData';

// Map hour strings to numeric values for bar widths
function parseHours(str) {
  return parseFloat(str.replace(/[^\d.]/g, ''));
}

export default function Metrics({ language }) {
  const { title, stat, comparisons, note } = getMetrics(language);

  const labels = {
    en: { task: 'Task', manual: 'Manual', withAI: 'With AI' },
    fr: { task: 'Tâche', manual: 'Manuel', withAI: 'Avec IA' },
  };
  const l = labels[language] || labels.en;

  // Find max hours for scaling bars
  const maxHours = Math.max(...comparisons.map((r) => parseHours(r.manual)));

  return (
    <section id="metrics" className="py-24 px-6 bg-gray-950">
      <div className="max-w-5xl mx-auto">
        <div className="border border-gray-800 rounded-2xl bg-gray-900/50 p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">{title}</h2>

          <div className="grid md:grid-cols-3 gap-10 items-start">
            {/* Big stat */}
            <div className="flex flex-col items-center justify-center p-8 border border-blue-500/20 rounded-xl bg-blue-500/5">
              <p className="text-7xl font-bold text-blue-400">{stat.value}</p>
              <p className="text-gray-400 text-sm mt-4 leading-relaxed text-center">{stat.label}</p>
            </div>

            {/* Bar chart comparisons */}
            <div className="md:col-span-2 space-y-8">
              {/* Header */}
              <div className="grid grid-cols-[1fr_auto_auto] gap-4 text-xs text-gray-500 uppercase tracking-wider pb-2 border-b border-gray-700">
                <span>{l.task}</span>
                <span className="w-16 text-center">{l.manual}</span>
                <span className="w-16 text-center text-blue-400">{l.withAI}</span>
              </div>

              {comparisons.map((row, i) => {
                const manualWidth = (parseHours(row.manual) / maxHours) * 100;
                const aiWidth = (parseHours(row.withAI) / maxHours) * 100;

                return (
                  <div key={i} className="space-y-3">
                    <p className="text-sm text-gray-300">{row.task}</p>

                    {/* Manual bar */}
                    <div className="flex items-center gap-3">
                      <div className="flex-1 h-6 bg-gray-800 rounded-md overflow-hidden">
                        <div
                          className="h-full bg-gray-600 rounded-md transition-all duration-700"
                          style={{ width: `${manualWidth}%` }}
                        />
                      </div>
                      <span className="text-sm text-gray-500 w-10 text-right">{row.manual}</span>
                    </div>

                    {/* AI bar */}
                    <div className="flex items-center gap-3">
                      <div className="flex-1 h-6 bg-gray-800 rounded-md overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-md transition-all duration-700"
                          style={{ width: `${aiWidth}%` }}
                        />
                      </div>
                      <span className="text-sm font-semibold text-blue-400 w-10 text-right">{row.withAI}</span>
                    </div>
                  </div>
                );
              })}

              <p className="text-xs text-gray-500 italic pt-2 leading-relaxed">{note}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
