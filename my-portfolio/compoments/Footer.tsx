export default function Footer() {
  return (
    <footer className="bg-gray-100 py-8 text-center text-[--color-secondary] dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <p>&copy; 2026 Hakimi Luqman. All rights reserved.</p>
        <ul className="flex justify-center space-x-6 mt-4">
          <li><a href="https://linkedin.com" className="hover:text-[--color-primary] transition">LinkedIn</a></li>
          <li><a href="https://github.com" className="hover:text-[--color-primary] transition">GitHub</a></li>
          <li><a href="https://twitter.com" className="hover:text-[--color-primary] transition">X</a></li>
        </ul>
      </div>
    </footer>
  );
}