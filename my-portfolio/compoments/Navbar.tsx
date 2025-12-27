"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white shadow-soft z-10">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-gray-800">
          ハキミ・ルクマン (Hakimi Luqman)
        </Link>
        <ul className="flex space-x-6">
          <li>
            <Link href="/about" className="text-gray-600 hover:text-blue-600 transition">
              自己PR
            </Link>
          </li>
          <li>
            <Link href="/experience" className="text-gray-600 hover:text-blue-600 transition">
              職務経歴
            </Link>
          </li>
          <li>
            <Link href="/skills" className="text-gray-600 hover:text-blue-600 transition">
              スキル
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-gray-600 hover:text-blue-600 transition">
              お問い合わせ
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}