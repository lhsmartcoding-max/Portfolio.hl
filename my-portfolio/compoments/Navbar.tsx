"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md shadow-soft z-10 dark:bg-gray-900/90">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-[--color-primary] dark:text-blue-300">
          ハキミ・ルクマン (Hakimi Luqman)
        </Link>
        <ul className="flex space-x-8">
          <li>
            <Link href="/about" className="text-[--color-secondary] hover:text-[--color-primary] transition duration-300 dark:hover:text-blue-300">
              自己PR
            </Link>
          </li>
          <li>
            <Link href="/experience" className="text-[--color-secondary] hover:text-[--color-primary] transition duration-300 dark:hover:text-blue-300">
              職務経歴
            </Link>
          </li>
          <li>
            <Link href="/skills" className="text-[--color-secondary] hover:text-[--color-primary] transition duration-300 dark:hover:text-blue-300">
              スキル
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-[--color-secondary] hover:text-[--color-primary] transition duration-300 dark:hover:text-blue-300">
              お問い合わせ
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}