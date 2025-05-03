"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Github, ExternalLink, Code } from "lucide-react"

// Updated projects based on CV
const projects = [
  {
    title: "Study-Buddy",
    description:
      "Study Buddy is an AI-powered platform designed to enhance learning and career development for computer science students.",
    image: "/projects/study.png?height=400&width=600",
    tags: ["react", "Streamlit", "flask","python","langchain","openai"],
    github: "https://github.com/SreeCharan1234/ISTD-Hackathon",
    demo: "https://college--buddy34.streamlit.app/",
    featured: true,
  },
  {
    title: "Tech-Expert",
    description: "An ed-tech learning platform for engineering students",
    image: "/projects/techexpet.jpg?height=400&width=600",
    tags: ["html", "css", "javascript","python","flask"],
    github: "https://github.com/abhishek12219517/TechXpert",
    demo: "https://techxpert.onrender.com/",
    featured: true,
  },
  {
    title: "My own Programming Language- HindiLang",
    description: "Developed a custom programming language supporting native Hindi syntax.",
    image: "/projects/hindilang.jpg?height=400&width=600",
    tags: ["javascript","lexer","parser","compilerDesign"],
    github: "https://github.com/pandey-kumar/task-manager",
    demo: "#",
    featured: true,
  },
  {
    title: "Text-Utils-App",
    description: "A utility app for conversion of text into diffrent formats",
    image: "/projects/textutil.png?height=400&width=600",
    tags: ["reactjs","nodejs"],
    github: "https://github.com/pandey-kumar/text_utils_app",
    demo: "https://vercel.com/shubhams-projects-7bf47dbe/text-utils-app",
    featured: false,
  },
  {
    title: "Weather Dashboard",
    description: "A weather application with forecast data, location search, and interactive maps.",
    image: "/projects/weather.png?height=400&width=600",
    tags: ["React", "OpenWeather API", "Leaflet", "CSS Modules"],
    github: "https://github.com/pandey-kumar/weather-app",
    demo: "https://v0-animated-website-creation.vercel.app/",
    featured: false,
  },
  {
    title: "Todo-app",
    description: "A content management system with markdown support, comments, and user profiles.",
    image: "/projects/todo.jpg?height=400&width=600",
    tags: ["html", "css", "javascript"],
    github: "https://github.com/pandey-kumar/Dom-Project---Todo-Application",
    demo: "https://pandey-kumar.github.io/Dom-Project---Todo-Application/",
    featured: false,
  },
]

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, amount: 0.1 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  }

  // Filter featured projects first
  const featuredProjects = projects.filter((project) => project.featured)
  const otherProjects = projects.filter((project) => !project.featured)
  const displayProjects = [...featuredProjects, ...otherProjects]

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-glow bg-clip-text text-transparent bg-gradient-to-r from-neon-purple to-neon-blue">
              My Projects
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-neon-purple to-neon-blue rounded-full mx-auto mb-6" />
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Explore some of my recent work and personal projects
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayProjects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.3 },
                  boxShadow: "0 15px 30px -10px rgba(123, 31, 162, 0.5)",
                  borderColor: "rgba(123, 31, 162, 0.6)",
                }}
                className={`glass-effect rounded-xl overflow-hidden transition-all duration-300 ${
                  project.featured ? "border-2 border-neon-purple/30" : ""
                }`}
              >
                {project.featured && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-neon-purple to-neon-blue text-white text-xs px-3 py-1 rounded-bl-lg z-10">
                    Featured
                  </div>
                )}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-space-dark to-transparent opacity-70" />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <motion.span
                        key={tag}
                        className="px-2 py-1 text-xs rounded-full bg-space-accent text-white border border-neon-purple/30"
                        whileHover={{
                          scale: 1.05,
                          backgroundColor: "rgba(123, 31, 162, 0.3)",
                          boxShadow: "0 0 10px rgba(123, 31, 162, 0.5)",
                        }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>

                  <div className="flex justify-between">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-sm text-neon-blue hover:text-neon-purple transition-colors"
                      whileHover={{ scale: 1.05 }}
                    >
                      <Github size={16} className="mr-1" />
                      Code
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-sm text-neon-blue hover:text-neon-purple transition-colors"
                      whileHover={{ scale: 1.05 }}
                    >
                      <ExternalLink size={16} className="mr-1" />
                      Live Demo
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants} className="mt-12 text-center">
            <a
              href="https://github.com/pandey-kumar"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 rounded-full bg-space-accent text-white border border-neon-purple/30 hover:bg-space-accent/80 transition-colors"
            >
              <Code size={18} className="mr-2 text-neon-purple" />
              View More on GitHub
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
