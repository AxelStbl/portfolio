import { getMetrics } from '../portfolioData';

export default function Metrics({ language }) {
  const { title, stat, comparisons, note } = getMetrics(language);

  return (
    <section className="py-24 px-6 bg-gray-950">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12">{title}</h2>

        <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* Big stat */}
          <div className="text-center p-8 border border-blue-500/30 rounded-xl bg-blue-500/5">
            <p className="text-7xl font-bold text-blue-400">{stat.value}</p>
            <p className="text-gray-400 text-sm mt-4 leading-relaxed">{stat.label}</p>
          </div>

          {/* Comparison table */}
          <div className="md:col-span-2 space-y-4">
            {/* Header */}
            <div className="grid grid-cols-3 text-xs text-gray-500 uppercase tracking-wider pb-2 border-b border-gray-800">
              <span className="col-span-1">Task</span>
              <span className="text-center">Manual</span>
              <span className="text-center text-blue-400">With AI</span>
            </div>

            {comparisons.map((row, i) => (
              <div key={i} className="grid grid-cols-3 items-center py-3 border-b border-gray-800/50">
                <p className="text-sm text-gray-300 col-span-1 pr-4">{row.task}</p>
                <p className="text-center text-sm text-gray-500 line-through">{row.manual}</p>
                <p className="text-center text-sm font-semibold text-blue-400">{row.withAI}</p>
              </div>
            ))}

            <p className="text-xs text-gray-500 italic pt-2 leading-relaxed">{note}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
