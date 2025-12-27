"use client";

import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      title: "Webアプリケーション開発",
      description:
        "React / Next.js を中心としたフロントエンド開発経験。既存機能の改修、新機能追加、UI改善。",
    },
    {
      title: "バックエンド・API連携",
      description:
        "Node.js を用いたバックエンド処理の実装。決済・配送・外部サービス等のAPI連携。データ処理改善、パフォーマンス調整。",
    },
    {
      title: "AI・自動化",
      description:
        "GPTを用いたAIチャットボット機能の実装。n8n等を用いた業務自動化・サービス連携。実運用を意識した安全性・安定性への配慮。",
    },
    {
      title: "チーム開発・コミュニケーション",
      description:
        "Slackを用いた仕様確認・進捗共有。レビュー対応、不明点の早期相談。チームと連携した安定したリリース対応。",
    },
    // Add more detailed job history entries here if available from your resume
  ];

  return (
    <section className="max-w-4xl mx-auto py-12 px-4 gradient-bg">
      <h2 className="text-3xl font-bold mb-6">職務経歴</h2>
      {experiences.map((exp, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.2, duration: 0.5 }}
          className="mb-8 p-4 border rounded-md shadow-soft"
        >
          <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
          <p className="text-gray-700">{exp.description}</p>
        </motion.div>
      ))}
    </section>
  );
}