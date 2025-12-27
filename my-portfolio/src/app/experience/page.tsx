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
    ];

    return (
        <section
            className="max-w-7xl mx-auto gradient-bg section-padding"
            style={{ minHeight: 'calc(100vh - 12rem)' }} // 4rem = 16 * 0.25rem
        >
            <h2 className="text-4xl font-bold mb-8 text-[--color-primary] dark:text-blue-300">職務経歴</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {experiences.map((exp, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2, duration: 0.5 }}
                        className="p-6 bg-white dark:bg-gray-800 shadow-soft hover-scale"
                    >
                        <h3 className="text-2xl font-semibold mb-4 text-[--color-primary] dark:text-blue-300">{exp.title}</h3>
                        <p className="body-text">{exp.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}