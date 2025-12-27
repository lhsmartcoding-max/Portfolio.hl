"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("メッセージが送信されました！");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="max-w-lg mx-auto gradient-bg section-padding min-h-[calc(100vh-12rem)] flex flex-col justify-center">
      <h2 className="text-4xl font-bold mb-8 text-[--color-primary] dark:text-blue-300">お問い合わせ</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <input
          type="text"
          placeholder="お名前"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full p-4 border border-gray-300 rounded-md dark:border-gray-600 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-[--color-primary] transition duration-300"
          required
        />
        <input
          type="email"
          placeholder="メールアドレス"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full p-4 border border-gray-300 rounded-md dark:border-gray-600 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-[--color-primary] transition duration-300"
          required
        />
        <textarea
          placeholder="メッセージ"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full p-4 border border-gray-300 rounded-md dark:border-gray-600 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-[--color-primary] transition duration-300 h-40"
          required
        />
        <button type="submit" className="btn-primary w-full">
          送信
        </button>
      </form>
    </section>
  );
}