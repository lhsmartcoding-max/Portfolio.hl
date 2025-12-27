"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <section className="min-h-screen flex items-center justify-center gradient-bg relative overflow-hidden section-padding">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-center max-w-4xl z-10"
      >
        <h1 className="hero-text text-[--color-primary] dark:text-blue-300">ハキミ・ルクマン (Hakimi Luqman)</h1>
        <p className="body-text mb-8 max-w-2xl mx-auto">
          Webアプリケーション開発を中心に、約8年間の実務経験を有するエンジニア。
          React / Next.js を用いたフロントエンド開発を主軸に、Node.js を用いたバックエンド開発や各種API連携にも携わってきました。
          大規模ECサイトからSaaS、スタートアップ案件まで幅広いプロジェクトに参画し、既存機能の改修、新機能追加、パフォーマンス改善、保守対応を担当。
          チームメンバーや関係者と連携しながら、安定した開発・運用に貢献してきました。
        </p>
        <Link href="/experience" className="btn-primary">
          職務経歴を見る
        </Link>
      </motion.div>
    </section>
  );
}