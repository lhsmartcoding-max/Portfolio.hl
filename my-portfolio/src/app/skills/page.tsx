import { FaReact, FaNodeJs } from "react-icons/fa";

export default function Skills() {
  const skills = [
    { name: "React / Next.js", icon: <FaReact className="text-4xl text-blue-500" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-4xl text-green-500" /> },
    { name: "GPT (AIチャットボット)", icon: <FaReact className="text-4xl text-purple-500" /> },
    { name: "n8n (業務自動化)", icon: <FaNodeJs className="text-4xl text-orange-500" /> },
    { name: "API連携 (決済・配送等)", icon: <FaReact className="text-4xl text-red-500" /> },
    { name: "Slack (チームコミュニケーション)", icon: <FaNodeJs className="text-4xl text-blue-700" /> },
  ];

  return (
    <section className="max-w-7xl mx-auto gradient-bg section-padding grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 min-h-[calc(100vh-12rem)]">
      {skills.map((skill, index) => (
        <div key={index} className="text-center p-6 bg-white dark:bg-gray-800 shadow-soft hover-scale flex flex-col items-center">
          {skill.icon}
          <p className="mt-4 text-lg font-medium text-gray-800 dark:text-gray-200">{skill.name}</p>
        </div>
      ))}
    </section>
  );
}