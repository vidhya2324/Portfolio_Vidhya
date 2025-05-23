import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  Code2,
  Database,
  Bot,
  Cloud,
  Smartphone,
  GitBranch,
  Brain,
  BarChart4,
  LayoutDashboard,
  FlaskConical,
  Terminal,
  Figma,
  BookOpen,
} from "lucide-react";

const skills = [
  // Frontend
  {
    name: "HTML/CSS",
    level: 90,
    category: "Frontend",
    icon: <Code2 size={18} />,
  },
  {
    name: "JavaScript",
    level: 70,
    category: "Frontend",
    icon: <Code2 size={18} />,
  },
  {
    name: "React.js",
    level: 70,
    category: "Frontend",
    icon: <LayoutDashboard size={18} />,
  },
  {
    name: "Tailwind CSS",
    level: 75,
    category: "Frontend",
    icon: <LayoutDashboard size={18} />,
  },
  {
    name: "Next.js",
    level: 70,
    category: "Frontend",
    icon: <LayoutDashboard size={18} />,
  },

  // Backend
  {
    name: "Node.js",
    level: 70,
    category: "Backend",
    icon: <Terminal size={18} />,
  },

  {
    name: "MongoDB",
    level: 60,
    category: "Backend",
    icon: <Database size={18} />,
  },
  {
    name: "MySQL",
    level: 75,
    category: "Backend",
    icon: <Database size={18} />,
  },
  {
    name: "PostgreSQL",
    level: 65,
    category: "Backend",
    icon: <Database size={18} />,
  },

  // AI / Machine Learning
  {
    name: "Python",
    level: 80,
    category: "AI/ML",
    icon: <FlaskConical size={18} />,
  },
  {
    name: "Machine Learning",
    level: 80,
    category: "AI/ML",
    icon: <Brain size={18} />,
  },
  {
    name: "Deep Learning",
    level: 80,
    category: "AI/ML",
    icon: <Brain size={18} />,
  },
  {
    name: "Scikit-learn",
    level: 85,
    category: "AI/ML",
    icon: <Brain size={18} />,
  },
  {
    name: "TensorFlow",
    level: 60,
    category: "AI/ML",
    icon: <Brain size={18} />,
  },

  // Chatbot Dev
  {
    name: "Gemini API",
    level: 85,
    category: "Chatbot Dev",
    icon: <Bot size={18} />,
  },
  {
    name: "OpenAI API",
    level: 85,
    category: "Chatbot Dev",
    icon: <Bot size={18} />,
  },
  {
    name: "Hugging Face Transformers",
    level: 80,
    category: "Chatbot Dev",
    icon: <Bot size={18} />,
  },

  // Mobile App
  {
    name: "Flutter",
    level: 75,
    category: "Mobile App",
    icon: <Smartphone size={18} />,
  },
  {
    name: "Dart",
    level: 70,
    category: "Mobile App",
    icon: <Smartphone size={18} />,
  },

  // Cloud / Deployment
  {
    name: "Google Colab",
    level: 90,
    category: "Cloud",
    icon: <Cloud size={18} />,
  },
  {
    name: "Streamlit",
    level: 85,
    category: "Cloud",
    icon: <Cloud size={18} />,
  },
 
  // Tools
  {
    name: "GitHub",
    level: 95,
    category: "Tools",
    icon: <GitBranch size={18} />,
  },
  {
    name: "Visual Studio",
    level: 90,
    category: "Tools",
    icon: <Terminal size={18} />,
  },
  {
    name: "Jupyter Notebook",
    level: 95,
    category: "Tools",
    icon: <BookOpen size={18} />,
  },
  {
    name: "Google Colab",
    level: 90,
    category: "Tools",
    icon: <Cloud size={18} />,
  },
  {
    name: "PyCharm",
    level: 85,
    category: "Tools",
    icon: <Terminal size={18} />,
  },
];

const categories = [
  "All",
  "Frontend",
  "Backend",
  "AI/ML",
  "Chatbot Dev",
  "Mobile App",
  "Cloud",
  "Tools",
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "All" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full text-sm font-medium transition-all",
                activeCategory === category
                  ? "bg-primary text-white"
                  : "bg-secondary text-foreground hover:bg-secondary/60"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-lg shadow-xs card-hover hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-full text-primary">
                  {skill.icon}
                </div>
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full transition-all duration-700"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
