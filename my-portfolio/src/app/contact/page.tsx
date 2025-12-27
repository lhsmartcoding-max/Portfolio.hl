"use client";

import { useState } from "react";
// For real email sending: import emailjs from "emailjs-com"; // Configure with your EmailJS account

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Optional: Integrate EmailJS here
    // emailjs.send("your_service_id", "your_template_id", formData, "your_user_id").then(...);
    console.log("Form submitted:", formData);
    alert("メッセージが送信されました！"); // Placeholder
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="max-w-md mx-auto py-12 px-4 gradient-bg">
      <h2 className="text-3xl font-bold mb-6">お問い合わせ</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="お名前"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full p-2 border rounded-md"
          required
        />
        <input
          type="email"
          placeholder="メールアドレス"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full p-2 border rounded-md"
          required
        />
        <textarea
          placeholder="メッセージ"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full p-2 border rounded-md h-32"
          required
        />
        <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition">
          送信
        </button>
      </form>
    </section>
  );
}