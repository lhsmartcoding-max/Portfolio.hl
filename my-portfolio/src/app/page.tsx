"use client";

import { motion } from "framer-motion";
import Link from "next/link";
// import Image from "next/image"; // Uncomment if adding photo: <Image src="/photo.jpg" alt="Hakimi Luqman" width={200} height={200} className="rounded-full mb-4" />

export default function Home() {
  return (
    <section className="min-h-screen flex items-center justify-center gradient-bg">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-2xl px-4"
      >
        <h1 className="text-4xl font-bold mb-4">ハキミ・ルクマン (Hakimi Luqman)</h1>
        <p className="text-lg text-gray-700 mb-8">
          Webアプリケーション開発を中心に、約8年間の実務経験を有するエンジニア。
          React / Next.js を用いたフロントエンド開発を主軸に、Node.js を用いたバックエンド開発や各種API連携にも携わってきました。
          大規模ECサイトからSaaS、スタートアップ案件まで幅広いプロジェクトに参画し、既存機能の改修、新機能追加、パフォーマンス改善、保守対応を担当。
          チームメンバーや関係者と連携しながら、安定した開発・運用に貢献してきました。
        </p>
        <Link
          href="/experience"
          className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
        >
          職務経歴を見る
        </Link>
      </motion.div>
    </section>
  );
}