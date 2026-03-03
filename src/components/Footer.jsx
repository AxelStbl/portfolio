import { getContent } from '../portfolioData';

export default function Footer({ language }) {
  const footer = getContent(language, 'footer');

  return (
    <footer className="border-t border-gray-800 py-8 text-center text-gray-500 text-sm bg-gray-950">
      <p>{footer.text}</p>
    </footer>
  );
}
