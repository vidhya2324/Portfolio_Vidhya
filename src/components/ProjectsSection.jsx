import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Finance Management System",
    description:
      "A full-stack web app to manage personal finances by tracking income, expenses, and visualizing budgets.",
    image: "public/projects/Project_1.png",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    demoUrl: "https://finance-ten-ashen.vercel.app/",
    githubUrl: "https://github.com/vidhya2324/Finance.git",
  },
  {
    id: 2,
    title: "Nexrise-AI Career Coach",
    description:
      "A platform connecting teachers and students with features for doubt resolution and community building.",
    image: "public/projects/Project_2.png",
    tags: ["React", "Firebase", "Node.js", "Neon", "Clerk"],
    demoUrl: "https://nex-rise-21u3.vercel.app/",
    githubUrl: "https://github.com/vidhya2324/NexRise.git",
  },
  {
    id: 3,
    title: "Neural Network Project",
    description:
      "Implemented a simple neural network to understand deep learning fundamentals and model training.",
    image: "public/projects/Project_3.png",
    tags: ["RNN", "CNN", "Tensorflow", "Keras"],
    demoUrl: "#",
    githubUrl: "https://github.com/vidhya2324/Neutral_network.git",
  },
  {
    id: 4,
    title: "Streamlit Diabetes Prediction",
    description:
      "Interactive data visualization dashboard built using Streamlit for quick data exploration, Focusing on the diabetes.",
    image: "public/projects/Project_4.png",
    tags: ["Python", "Streamlit", "Pandas", "Model training"],
    demoUrl: "#",
    githubUrl: "https://github.com/vidhya2324/Deploy_Diabetes_Streamlit.git",
  },
  {
    id: 5,
    title: "Chatbot Development",
    description:
      "Developed a conversational chatbot integrating NLP techniques for customer support automation.",
    image: "public/projects/Project_5.png",
    tags: ["Python", "NLTK", "TensorFlow"],
    demoUrl: "#",
    githubUrl: "https://github.com/vidhya2324/Chatbot.git",
  },

  {
    id: 6,
    title: "Machine Learning Project",
    description:
      "Built with LSTM to predict stock prices based on historical financial data and market trends etc..",
    image: "public/projects/Project_6.png",
    tags: ["Python", "LSTM", "SVM", "Machine Learning", "Finance"],
    demoUrl: "#",
    githubUrl:
      "https://github.com/vidhya2324/Machine_learning_starting_project.git",
  },
  {
    id: 7,
    title: "Chatbot using Gemini API",
    description:
      "Conversational chatbot powered by Gemini API for natural language understanding and interactive dialogue.",
    image: "public/projects/Project_7.png",
    tags: ["JavaScript", "Gemini API", "Chatbot", "NLP"],
    demoUrl: "#",
    githubUrl: "https://github.com/vidhya2324/ChatBot_gemini_API.git",
  },
  {
    id: 8,
    title: "Chatbot with Hugging Face",
    description:
      "Developed a chatbot using Hugging Face transformers to enable contextual conversations with users.",
    image: "public/projects/Project_8.png",
    tags: ["Python", "Hugging Face", "Transformers", "NLP"],
    demoUrl: "#",
    githubUrl: "https://github.com/vidhya2324/ChatBot_Hugging_Face.git",
  },
  {
    id: 9,
    title: "AI-Powered Blood Test Analyzer",
    description:
      "A Flutter-based mobile application that interprets blood test results using OpenAI's API, offering users insights into their health metrics and potential anomalies.",
    image: "public/projects/Project_9.png",
    tags: ["Flutter", "Dart", "OpenAI API", "Healthcare"],
    demoUrl: "#",
    githubUrl: "https://github.com/vidhya2324/Flutter-OpenAI-main",
  },

  {
    id: 10,
    title: "Shoe Shopping App",
    description:
      "A Flutter-based mobile application designed for a smooth shoe shopping experience. It features product browsing, cart management, and a modern UI to help users explore and purchase shoes effortlessly.",
    image: "public/projects/Project_10.png",
    tags: ["Flutter", "Dart", "UI/UX"],
    demoUrl: "https://shoe-app-flutter.vercel.app/",
    githubUrl: "https://github.com/vidhya2324/Shoe_app_Flutter",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/vidhya2324"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
