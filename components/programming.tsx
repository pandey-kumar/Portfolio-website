"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Code, GitBranch, GitPullRequest, Star } from "lucide-react"

const programmingStats = [
  { label: "Repositories", value: "25+", icon: Code },
  { label: "Contributions", value: "500+", icon: GitPullRequest },
  { label: "Stars", value: "100+", icon: Star },
  { label: "Forks", value: "50+", icon: GitBranch },
]

const languages = [
  { name: "c++", percentage: 90 },
  { name: "JavaScript", percentage: 40 },
  { name: "TypeScript", percentage: 25 },
  { name: "HTML/CSS", percentage: 15 },
  { name: "Python", percentage: 10 },
  { name: "Java", percentage: 5 },
  { name: "Other", percentage: 5 },
]

export default function Programming() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="programming" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-glow bg-clip-text text-transparent bg-gradient-to-r from-neon-purple to-neon-blue">
              Programming
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-neon-purple to-neon-blue rounded-full mx-auto mb-6" />
            <p className="text-gray-300 text-lg">My coding journey and GitHub statistics</p>
          </motion.div>

          <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {programmingStats.map((stat) => (
              <motion.div
                key={stat.label}
                className="glass-effect rounded-xl p-6 text-center card-hover-effect"
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 0 25px rgba(123, 31, 162, 0.5)",
                  borderColor: "rgba(123, 31, 162, 0.8)",
                }}
              >
                <motion.div
                  className="flex justify-center mb-3"
                  animate={{
                    y: [0, -5, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                >
                  <stat.icon className="text-neon-blue" size={28} />
                </motion.div>
                <h3 className="text-2xl font-bold text-white mb-1">{stat.value}</h3>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="glass-effect rounded-xl p-6 md:p-8 mb-12 card-hover-effect"
            whileHover={{
              boxShadow: "0 0 25px rgba(123, 31, 162, 0.5)",
              borderColor: "rgba(123, 31, 162, 0.8)",
            }}
          >
            <h3 className="text-xl font-semibold mb-6 text-center">Languages Used</h3>
            <div className="space-y-6">
              {languages.map((lang, index) => (
                <div key={lang.name} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-300">{lang.name}</span>
                    <motion.span
                      className="text-neon-blue"
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    >
                      {lang.percentage}%
                    </motion.span>
                  </div>
                  <div className="h-2 w-full bg-space-accent rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-neon-purple to-neon-blue rounded-full"
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${lang.percentage}%` } : { width: 0 }}
                      transition={{
                        duration: 1.5,
                        delay: 0.5 + index * 0.1,
                        ease: [0.25, 0.1, 0.25, 1], // Custom easing for a more dynamic feel
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="text-center">
            <motion.a
              href="https://github.com/pandey-kumar?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-neon-purple to-neon-blue text-white font-medium transition-transform hover:scale-105 hover:shadow-lg hover:shadow-neon-purple/20"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 30px rgba(123, 31, 162, 0.6)",
              }}
            >
              <Code size={18} className="mr-2" />
              View GitHub Profile
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
