export default function LanguageToggle({ language, setLanguage }) {
  return (
    <div className="fixed top-4 right-4 z-50 flex gap-2">
      <button
        onClick={() => setLanguage('en')}
        className={`px-4 py-2 rounded font-semibold ${
          language === 'en'
            ? 'bg-blue-500 text-white'
            : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLanguage('fr')}
        className={`px-4 py-2 rounded font-semibold ${
          language === 'fr'
            ? 'bg-blue-500 text-white'
            : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
        }`}
      >
        FR
      </button>
    </div>
  );
}
