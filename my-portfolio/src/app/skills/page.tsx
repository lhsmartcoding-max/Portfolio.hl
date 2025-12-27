import { FaReact, FaNodeJs } from "react-icons/fa";
// Add more icons as needed, e.g., import { SiOpenai, SiSlack } from "react-icons/si";

export default function Skills() {
  const skills = [
    { name: "React / Next.js", icon: <FaReact className="text-4xl text-blue-500" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-4xl text-green-500" /> },
    { name: "GPT (AIチャットボット)", icon: <FaReact className="text-4xl text-purple-500" /> }, // Replace with appropriate icon
    { name: "n8n (業務自動化)", icon: <FaNodeJs className="text-4xl text-orange-500" /> }, // Replace
    { name: "API連携 (決済・配送等)", icon: <FaReact className="text-4xl text-red-500" /> }, // Replace
    { name: "Slack (チームコミュニケーション)", icon: <FaNodeJs className="text-4xl text-blue-700" /> }, // Replace
    // Add more from your resume
  ];

  return (
    <section className="max-w-4xl mx-auto py-12 px-4 gradient-bg grid grid-cols-2 md:grid-cols-4 gap-6">
      {skills.map((skill, index) => (
        <div key={index} className="text-center p-4 border rounded-md shadow-soft">
          {skill.icon}
          <p className="mt-2 text-gray-700">{skill.name}</p>
        </div>
      ))}
    </section>
  );
}