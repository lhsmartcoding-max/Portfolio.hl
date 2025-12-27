"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="max-w-4xl mx-auto bg-white/30 dark:bg-gray-900/30 backdrop-blur-md rounded-2xl shadow-lg p-8 mt-12 mb-12"
      style={{ minHeight: 'calc(100vh - 19rem)' }} // subtract footer height
    >
      <h2 className="text-4xl font-bold mb-6 text-[--color-primary] dark:text-blue-300">
        自己PR
      </h2>
      <p className="body-text text-gray-800 dark:text-gray-200 leading-relaxed">
        フロントエンド開発を中心に、バックエンドや外部API連携、AIを活用した機能を含むWebアプリケーションの開発に携わってきました。
        React / Next.js を用いた開発経験が長く、既存コードを理解した上での機能追加や改修を行ってきました。
        近年は、AIを活用した業務支援や自動化機能の開発にも携わり、GPTを用いたチャットボット実装や、外部サービスと連携した自動処理の開発を担当しました。
        実運用を前提とし、誤動作や情報の取り扱いに配慮した設計・実装を心がけています。
        また、チーム開発においては、Slack等のチャットツールを用いたコミュニケーションを重視し、仕様確認や進捗共有をこまめに行うことで、認識齟齬や手戻りの防止に努めてきました。
        不明点がある場合は早めに相談し、影響範囲を整理した上で対応することを意識しています。
        これまでの経験を通じて、開発スピードだけでなく、品質や運用面の安全性を意識した開発の重要性を学びました。
        今後もチームの一員として、安定した開発とプロダクト品質の向上に貢献していきたいと考えています。
      </p>
    </motion.section>
  );
}
